import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { readData, writeData, SiteData } from "@/lib/data";
import { AUTH_COOKIE, AUTH_TOKEN } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await readData();
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE)?.value;
  if (token !== AUTH_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body: SiteData = await request.json();
  await writeData(body);
  return NextResponse.json({ success: true });
}
