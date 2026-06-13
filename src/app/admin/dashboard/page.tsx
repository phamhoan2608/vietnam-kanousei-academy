"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Plus, Trash2, Save, LogOut, ExternalLink, Upload, Loader2, Brain } from "lucide-react";

interface Teacher {
  id: string;
  imageURL: string;
  nameTeacher: string;
  introduction: string;
}

interface SiteData {
  registerUrl: string;
  teachers: Teacher[];
}

function TeacherImageUpload({
  teacher,
  onUploaded,
}: {
  teacher: Teacher;
  onUploaded: (newUrl: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(teacher.imageURL);

  useEffect(() => {
    setPreview(teacher.imageURL);
  }, [teacher.imageURL]);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Local preview ngay lập tức
    setPreview(URL.createObjectURL(file));
    setUploading(true);

    const fd = new FormData();
    fd.append("file", file);
    fd.append("teacherId", teacher.id);

    const res = await fetch("/api/upload", { method: "POST", body: fd });
    const data = await res.json();

    setUploading(false);
    if (res.ok && data.imageURL) {
      onUploaded(data.imageURL);
    } else {
      alert(data.error ?? "Upload thất bại");
      setPreview(teacher.imageURL); // revert
    }

    // Reset input để có thể chọn lại cùng file
    e.target.value = "";
  };

  return (
    <div className="relative group shrink-0 cursor-pointer" onClick={() => inputRef.current?.click()}>
      <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-gray-200 group-hover:border-[#9DBB82] transition-colors">
        <Image
          src={preview}
          width={80}
          height={80}
          className="w-full h-full object-cover"
          alt="Teacher"
          unoptimized
        />
      </div>

      {/* Overlay khi hover */}
      <div className="absolute inset-0 rounded-xl bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        {uploading ? (
          <Loader2 size={18} className="text-white animate-spin" />
        ) : (
          <>
            <Upload size={16} className="text-white" />
            <span className="text-white text-[10px] mt-1 font-medium">Đổi ảnh</span>
          </>
        )}
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
        className="hidden"
        onChange={handleFileChange}
      />
    </div>
  );
}

export default function AdminDashboard() {
  const [data, setData] = useState<SiteData | null>(null);
  const [saving, setSaving] = useState(false);
  const [toast, setToast] = useState<{ msg: string; ok: boolean } | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/data")
      .then((r) => r.json())
      .then(setData)
      .catch(() => router.push("/admin"));
  }, [router]);

  const showToast = (msg: string, ok = true) => {
    setToast({ msg, ok });
    setTimeout(() => setToast(null), 3000);
  };

  const save = async () => {
    if (!data) return;
    setSaving(true);
    const res = await fetch("/api/data", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    setSaving(false);
    showToast(res.ok ? "✓ Đã lưu thành công!" : "✗ Lưu thất bại, thử lại.", res.ok);
  };

  const logout = async () => {
    await fetch("/api/auth", { method: "DELETE" });
    router.push("/admin");
  };

  const updateTeacher = (index: number, field: keyof Teacher, value: string) => {
    if (!data) return;
    const teachers = [...data.teachers];
    teachers[index] = { ...teachers[index], [field]: value };
    setData({ ...data, teachers });
  };

  const addTeacher = () => {
    if (!data) return;
    setData({
      ...data,
      teachers: [
        ...data.teachers,
        {
          id: Date.now().toString(),
          imageURL: "/images/Teacher1.png",
          nameTeacher: "TÊN GIẢNG VIÊN MỚI",
          introduction: "Nhập giới thiệu giảng viên...",
        },
      ],
    });
  };

  const removeTeacher = (index: number) => {
    if (!data) return;
    if (!confirm("Xóa giảng viên này?")) return;
    setData({ ...data, teachers: data.teachers.filter((_, i) => i !== index) });
  };

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex items-center gap-3 text-gray-500">
          <Loader2 size={20} className="animate-spin text-[#9DBB82]" />
          Đang tải...
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top nav */}
      <div className="sticky top-0 z-40 bg-[#1A3A2A] text-white px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-[#9DBB82]/20 rounded-lg flex items-center justify-center">
            <Brain size={18} className="text-[#9DBB82]" />
          </div>
          <div>
            <p className="font-bold text-sm">Admin Dashboard</p>
            <p className="text-xs text-gray-400">Học viện Tiềm Năng Việt Nam</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {toast && (
            <span
              className={`text-sm px-3 py-1.5 rounded-lg font-medium transition-all ${
                toast.ok
                  ? "bg-[#9DBB82]/20 text-[#9DBB82]"
                  : "bg-red-500/20 text-red-300"
              }`}
            >
              {toast.msg}
            </span>
          )}
          <button
            onClick={save}
            disabled={saving}
            className="flex items-center gap-2 bg-[#9DBB82] text-[#1A3A2A] px-4 py-2 rounded-lg font-bold text-sm hover:bg-white transition-colors disabled:opacity-50"
          >
            {saving ? <Loader2 size={15} className="animate-spin" /> : <Save size={15} />}
            {saving ? "Đang lưu..." : "Lưu thay đổi"}
          </button>
          <button
            onClick={logout}
            className="flex items-center gap-2 border border-white/20 px-3 py-2 rounded-lg text-sm hover:bg-white/10 transition-colors"
          >
            <LogOut size={15} />
            Đăng xuất
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 flex flex-col gap-6">

        {/* Register URL */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h2 className="font-black text-[#1A3A2A] text-lg mb-1">Link đăng ký</h2>
          <p className="text-xs text-gray-500 mb-4">
            Link Google Forms mở ra khi học viên bấm &quot;Đăng ký ngay&quot;
          </p>
          <div className="flex gap-2">
            <input
              type="url"
              value={data.registerUrl}
              onChange={(e) => setData({ ...data, registerUrl: e.target.value })}
              className="flex-1 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#9DBB82] focus:border-transparent transition-all"
              placeholder="https://docs.google.com/forms/..."
            />
            <a
              href={data.registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-3 text-sm font-medium text-gray-600 hover:border-[#9DBB82] hover:text-[#1A3A2A] transition-colors shrink-0"
            >
              <ExternalLink size={15} />
              Kiểm tra
            </a>
          </div>
        </div>

        {/* Teachers */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="font-black text-[#1A3A2A] text-lg mb-1">Danh sách giảng viên</h2>
              <p className="text-xs text-gray-500">{data.teachers.length} giảng viên</p>
            </div>
            <button
              onClick={addTeacher}
              className="flex items-center gap-2 bg-[#F0F7EB] text-[#1A3A2A] border border-[#9DBB82]/40 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-[#9DBB82] hover:text-white hover:border-[#9DBB82] transition-all"
            >
              <Plus size={15} />
              Thêm giảng viên
            </button>
          </div>

          <div className="flex flex-col gap-5">
            {data.teachers.map((teacher, index) => (
              <div
                key={teacher.id}
                className="border border-gray-100 rounded-xl p-5 flex gap-4 items-start hover:border-[#9DBB82]/30 transition-colors"
              >
                {/* Upload ảnh — click để đổi */}
                <div className="flex flex-col items-center gap-1.5 shrink-0">
                  <TeacherImageUpload
                    teacher={teacher}
                    onUploaded={(url) => updateTeacher(index, "imageURL", url)}
                  />
                  <span className="text-[10px] text-gray-400">Click để đổi</span>
                </div>

                {/* Fields */}
                <div className="flex flex-col gap-3 flex-1 min-w-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-gray-400 font-medium">Tên giảng viên</label>
                      <input
                        type="text"
                        value={teacher.nameTeacher}
                        onChange={(e) => updateTeacher(index, "nameTeacher", e.target.value)}
                        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9DBB82] focus:border-transparent"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-xs text-gray-400 font-medium">
                        Đường dẫn ảnh
                        <span className="ml-1 text-[#9DBB82]">(tự cập nhật sau upload)</span>
                      </label>
                      <input
                        type="text"
                        value={teacher.imageURL}
                        onChange={(e) => updateTeacher(index, "imageURL", e.target.value)}
                        className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9DBB82] focus:border-transparent text-gray-500"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xs text-gray-400 font-medium">Giới thiệu</label>
                    <textarea
                      value={teacher.introduction}
                      onChange={(e) => updateTeacher(index, "introduction", e.target.value)}
                      rows={3}
                      className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#9DBB82] focus:border-transparent resize-none"
                    />
                  </div>
                </div>

                {/* Delete */}
                <button
                  onClick={() => removeTeacher(index)}
                  className="shrink-0 p-2 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  title="Xóa giảng viên"
                >
                  <Trash2 size={17} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Save footer */}
        <div className="bg-[#1A3A2A]/5 border border-[#1A3A2A]/10 rounded-xl px-5 py-4 flex justify-between items-center text-sm text-[#1A3A2A]/70">
          <span>
            Nhớ bấm <strong>Lưu thay đổi</strong> sau khi chỉnh sửa xong.
          </span>
          <button
            onClick={save}
            disabled={saving}
            className="flex items-center gap-2 bg-[#1A3A2A] text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-[#9DBB82] hover:text-[#1A3A2A] transition-all disabled:opacity-50"
          >
            <Save size={15} />
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
}
