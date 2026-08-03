import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const leads = await prisma.websiteLead.findMany({ orderBy: { createdAt: "desc" } });
    return NextResponse.json(
      { success: true, leads },
      { headers: { "Cache-Control": "no-store, max-age=0" } },
    );
  } catch (error) {
    console.error("Admin leads fetch failed:", error);
    return NextResponse.json({ success: false, error: "Unable to load website leads" }, { status: 500 });
  }
}
