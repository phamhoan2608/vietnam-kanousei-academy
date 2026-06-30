export const AUTH_COOKIE = "admin-session";

export interface SessionUser {
  id: string;
  username: string;
  role: "admin" | "editor";
  displayName: string;
}

export function encodeSession(user: SessionUser): string {
  return Buffer.from(JSON.stringify(user)).toString("base64");
}

export function decodeSession(token: string): SessionUser | null {
  try {
    return JSON.parse(Buffer.from(token, "base64").toString("utf-8")) as SessionUser;
  } catch {
    return null;
  }
}
