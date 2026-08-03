"use client";

import Image from "next/image";
import { useCallback, useEffect, useMemo, useState } from "react";
import { CalendarDays, CheckCircle2, ExternalLink, Mail, Phone, RefreshCw, Search, Users } from "lucide-react";

type Lead = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  concern: string;
  message: string | null;
  pageUrl: string | null;
  excelStatus: string | null;
  createdAt: string;
};

type DateFilter = "all" | "today" | "7days" | "30days";

function isToday(value: string) {
  return new Date(value).toDateString() === new Date().toDateString();
}

function formatDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date(value));
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [search, setSearch] = useState("");
  const [concern, setConcern] = useState("all");
  const [dateFilter, setDateFilter] = useState<DateFilter>("all");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchLeads = useCallback(async (manual = false) => {
    if (manual) setRefreshing(true);
    try {
      const response = await fetch("/api/admin/leads", { cache: "no-store" });
      const result = await response.json();
      if (!response.ok || !result?.success) throw new Error(result?.error || "Unable to load leads");
      setLeads(result.leads);
      setLastUpdated(new Date());
      setError("");
    } catch (fetchError) {
      setError(fetchError instanceof Error ? fetchError.message : "Unable to load leads");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    void fetchLeads();
    const interval = window.setInterval(() => void fetchLeads(), 30000);
    return () => window.clearInterval(interval);
  }, [fetchLeads]);

  const concerns = useMemo(() => Array.from(new Set(leads.map((lead) => lead.concern))).sort(), [leads]);
  const filteredLeads = useMemo(() => {
    const query = search.trim().toLowerCase();
    const now = Date.now();
    return leads.filter((lead) => {
      const matchesSearch = !query || [lead.name, lead.phone, lead.email, lead.concern, lead.message]
        .filter(Boolean).some((value) => String(value).toLowerCase().includes(query));
      const matchesConcern = concern === "all" || lead.concern === concern;
      const createdAt = new Date(lead.createdAt).getTime();
      const matchesDate = dateFilter === "all"
        || (dateFilter === "today" && isToday(lead.createdAt))
        || (dateFilter === "7days" && now - createdAt <= 7 * 86400000)
        || (dateFilter === "30days" && now - createdAt <= 30 * 86400000);
      return matchesSearch && matchesConcern && matchesDate;
    });
  }, [concern, dateFilter, leads, search]);

  const todayCount = leads.filter((lead) => isToday(lead.createdAt)).length;
  const syncedCount = leads.filter((lead) => lead.excelStatus === "synced").length;

  return (
    <main className="min-h-screen bg-[#F4F6FB] text-[#111836]">
      <header className="border-b border-[#DFE4EF] bg-white px-4 py-3 shadow-[0_4px_24px_rgba(13,27,82,0.05)] sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image src="/image.png" alt="Hair O Graft" width={132} height={48} className="h-14 w-auto object-contain" priority />
            <div className="hidden border-l border-[#DFE4EF] pl-4 sm:block">
              <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#354C9C]">Admin portal</p>
              <p className="text-xs text-[#7A8194]">Lead management</p>
            </div>
          </div>
          <button type="button" onClick={() => void fetchLeads(true)} disabled={refreshing} className="inline-flex items-center gap-2 rounded-xl bg-[#354C9C] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#293D82] disabled:cursor-wait disabled:opacity-70">
            <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
            {refreshing ? "Refreshing" : "Refresh"}
          </button>
        </div>
      </header>

      <div className="mx-auto max-w-[1500px] px-4 py-7 sm:px-6 lg:px-10 lg:py-9">
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#ED3136]">Website enquiries</p>
            <h1 className="mt-1 text-3xl font-black tracking-tight sm:text-4xl">Lead dashboard</h1>
            <p className="mt-2 text-sm text-[#70778B]">Manage and respond to customer enquiries from your website quickly and efficiently.</p>
          </div>
          <p className="text-xs font-medium text-[#7A8194]">{lastUpdated ? `Last updated ${lastUpdated.toLocaleTimeString("en-IN")}` : "Connecting to live data..."}</p>
        </div>

        <section className="mb-6 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Total website leads", value: leads.length, Icon: Users, color: "bg-[#354C9C]" },
            { label: "Received today", value: todayCount, Icon: CalendarDays, color: "bg-[#ED3136]" },
            { label: "Excel synced", value: syncedCount, Icon: CheckCircle2, color: "bg-[#159A67]" },
          ].map(({ label, value, Icon, color }) => (
            <article key={label} className="flex items-center gap-4 rounded-2xl border border-[#E0E5EF] bg-white p-5 shadow-[0_12px_35px_rgba(13,27,82,0.05)]">
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${color}`}><Icon className="h-5 w-5" /></span>
              <div><p className="text-2xl font-black">{value}</p><p className="text-sm text-[#70778B]">{label}</p></div>
            </article>
          ))}
        </section>

        <section className="overflow-hidden rounded-2xl border border-[#DFE4EF] bg-white shadow-[0_18px_55px_rgba(13,27,82,0.07)]">
          <div className="grid gap-3 border-b border-[#E6EAF2] p-4 md:grid-cols-[1fr_230px_180px]">
            <label className="relative">
              <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#8A91A4]" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search name, phone, email or concern..." className="w-full rounded-xl border border-[#DDE2EC] bg-[#F8F9FC] py-3 pl-10 pr-4 text-sm outline-none focus:border-[#354C9C] focus:ring-4 focus:ring-[#354C9C]/10" />
            </label>
            <select value={concern} onChange={(event) => setConcern(event.target.value)} className="rounded-xl border border-[#DDE2EC] bg-[#F8F9FC] px-4 py-3 text-sm outline-none focus:border-[#354C9C]">
              <option value="all">All concerns</option>{concerns.map((item) => <option key={item} value={item}>{item}</option>)}
            </select>
            <select value={dateFilter} onChange={(event) => setDateFilter(event.target.value as DateFilter)} className="rounded-xl border border-[#DDE2EC] bg-[#F8F9FC] px-4 py-3 text-sm outline-none focus:border-[#354C9C]">
              <option value="all">All dates</option><option value="today">Today</option><option value="7days">Last 7 days</option><option value="30days">Last 30 days</option>
            </select>
          </div>

          {error ? (
            <div className="p-12 text-center"><p className="font-bold text-red-600">{error}</p><button onClick={() => void fetchLeads(true)} className="mt-4 text-sm font-bold text-[#354C9C] underline">Try again</button></div>
          ) : loading ? (
            <div className="flex items-center justify-center gap-3 p-16 text-[#70778B]"><RefreshCw className="h-5 w-5 animate-spin" /> Loading live leads...</div>
          ) : filteredLeads.length === 0 ? (
            <div className="p-16 text-center text-[#70778B]">No leads match the selected filters.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="bg-[#111836] text-white"><tr>{["Received", "Lead", "Contact", "Concern", "Message", "Source URL", "Excel"].map((heading) => <th key={heading} className="whitespace-nowrap px-5 py-4 text-[11px] font-extrabold uppercase tracking-wider">{heading}</th>)}</tr></thead>
                <tbody className="divide-y divide-[#E8EBF2]">
                  {filteredLeads.map((lead) => (
                    <tr key={lead.id} className="align-top transition-colors hover:bg-[#F8F9FC]">
                      <td className="whitespace-nowrap px-5 py-4 text-xs text-[#70778B]">{formatDate(lead.createdAt)}</td>
                      <td className="whitespace-nowrap px-5 py-4 font-extrabold">{lead.name}</td>
                      <td className="whitespace-nowrap px-5 py-4">
                        <a href={`tel:${lead.phone}`} className="flex items-center gap-2 font-semibold text-[#354C9C] hover:underline"><Phone className="h-3.5 w-3.5" />{lead.phone}</a>
                        {lead.email && <a href={`mailto:${lead.email}`} className="mt-2 flex items-center gap-2 text-xs text-[#70778B] hover:text-[#354C9C]"><Mail className="h-3.5 w-3.5" />{lead.email}</a>}
                      </td>
                      <td className="min-w-48 px-5 py-4"><span className="rounded-full bg-[#354C9C]/10 px-3 py-1.5 text-xs font-bold text-[#354C9C]">{lead.concern}</span></td>
                      <td className="min-w-64 max-w-sm whitespace-pre-wrap px-5 py-4 text-[#60677A]">{lead.message || "—"}</td>
                      <td className="min-w-56 px-5 py-4">{lead.pageUrl ? <a href={lead.pageUrl} target="_blank" rel="noreferrer" className="inline-flex max-w-56 items-center gap-1.5 text-xs font-semibold text-[#354C9C] hover:underline"><ExternalLink className="h-3.5 w-3.5 shrink-0" /><span className="truncate">{lead.pageUrl}</span></a> : "—"}</td>
                      <td className="whitespace-nowrap px-5 py-4"><span className={`rounded-full px-3 py-1.5 text-xs font-bold ${lead.excelStatus === "synced" ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"}`}>{lead.excelStatus || "pending"}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <div className="border-t border-[#E6EAF2] bg-[#FAFBFD] px-5 py-3 text-xs font-medium text-[#70778B]">Showing {filteredLeads.length} of {leads.length} website leads · Auto-refreshes every 30 seconds</div>
        </section>
      </div>
    </main>
  );
}
