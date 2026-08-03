import type { Metadata } from "next";
import AdminDashboard from "@/components/admin/AdminDashboard";

export const metadata: Metadata = {
  title: "Website Leads | Hair O Graft Admin",
};

export default function AdminPage() {
  return <AdminDashboard />;
}
