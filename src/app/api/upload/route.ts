import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";
import { AUTH_COOKIE, AUTH_TOKEN } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE)?.value;
  if (token !== AUTH_TOKEN) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const formData = await request.formData();
  const file = formData.get("file") as File | null;
  const teacherId = formData.get("teacherId") as string | null;

  if (!file || !teacherId) {
    return NextResponse.json({ error: "Thiếu file hoặc teacherId" }, { status: 400 });
  }

  const ext = file.name.split(".").pop()?.toLowerCase() ?? "jpg";
  const allowedExt = ["jpg", "jpeg", "png", "webp", "gif"];
  if (!allowedExt.includes(ext)) {
    return NextResponse.json({ error: "Chỉ cho phép ảnh jpg, png, webp" }, { status: 400 });
  }

  const filename = `teacher-${teacherId}-${Date.now()}.${ext}`;
  const savePath = path.join(process.cwd(), "public", "images", filename);

  const bytes = await file.arrayBuffer();
  await writeFile(savePath, Buffer.from(bytes));

  return NextResponse.json({ imageURL: `/images/${filename}` });
}
