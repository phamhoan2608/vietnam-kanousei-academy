import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { ADMIN_USERNAME, ADMIN_PASSWORD, AUTH_COOKIE, AUTH_TOKEN } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    const res = NextResponse.json({ success: true });
    res.cookies.set(AUTH_COOKIE, AUTH_TOKEN, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 60 * 60,
      path: "/",
    });
    return res;
  }

  return NextResponse.json({ error: "Sai tài khoản hoặc mật khẩu" }, { status: 401 });
}

export async function DELETE() {
  const res = NextResponse.json({ success: true });
  res.cookies.delete(AUTH_COOKIE);
  return res;
}
