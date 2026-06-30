import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import bcrypt from "bcryptjs";
import { AUTH_COOKIE, encodeSession } from "@/lib/auth";
import { getSupabase } from "@/lib/supabase";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  const { data: user, error } = await getSupabase()
    .from("users")
    .select("id, username, password_hash, role, display_name")
    .eq("username", username)
    .single();

  if (error || !user) {
    return NextResponse.json({ error: "Sai tài khoản hoặc mật khẩu" }, { status: 401 });
  }

  const valid = await bcrypt.compare(password, user.password_hash);
  if (!valid) {
    return NextResponse.json({ error: "Sai tài khoản hoặc mật khẩu" }, { status: 401 });
  }

  const session = encodeSession({
    id: user.id,
    username: user.username,
    role: user.role,
    displayName: user.display_name || user.username,
  });

  const res = NextResponse.json({ success: true });
  res.cookies.set(AUTH_COOKIE, session, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  return res;
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete(AUTH_COOKIE);
  return res;
}
