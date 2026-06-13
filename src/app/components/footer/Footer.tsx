import { Facebook, Instagram, Youtube, Phone, Mail, Brain } from "lucide-react";
import Link from "next/link";
import React from "react";

const REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSelEWeBl-qLQdP2i52akwBp3z2ZXC6VEOkefcm9GtFhYVNGzQ/viewform";

const Footer = () => {
  return (
    <footer>
      {/* Main footer */}
      <div className="bg-[#1A3A2A] text-white py-16 px-8 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#9DBB82]/20 rounded-xl border border-[#9DBB82]/40 flex items-center justify-center shrink-0">
                <Brain size={22} className="text-[#9DBB82]" />
              </div>
              <div className="leading-tight">
                <p className="font-bold text-white text-base">Học viện Tiềm Năng</p>
                <p className="font-medium text-[#9DBB82] text-sm">Việt Nam</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ứng dụng khoa học não bộ để phát triển tiềm năng con người.
              Chương trình được thiết kế riêng cho người Việt Nam từ
              Học viện Tiềm Năng Nhật Bản.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: "Facebook" },
                { Icon: Instagram, label: "Instagram" },
                { Icon: Youtube, label: "Youtube" },
              ].map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 border border-gray-500 flex items-center justify-center hover:border-[#9DBB82] hover:text-[#9DBB82] transition-colors"
                >
                  <Icon size={16} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-[#9DBB82] text-lg border-b border-[#9DBB82]/30 pb-2">
              Liên kết nhanh
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "Về chúng tôi", href: "#about" },
                { label: "Chương trình đào tạo", href: "#programs" },
                { label: "Giảng viên", href: "#teachers" },
                { label: "Lý thuyết Noutaisei", href: "#theory" },
                { label: "Đăng ký ngay", href: REGISTER_URL },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  className="text-gray-300 hover:text-[#9DBB82] transition-colors text-sm flex items-center gap-2 group"
                >
                  <span className="text-[#9DBB82] group-hover:translate-x-1 transition-transform inline-block">
                    →
                  </span>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact column */}
          <div className="flex flex-col gap-6">
            <h4 className="font-bold text-[#9DBB82] text-lg border-b border-[#9DBB82]/30 pb-2">
              Liên hệ
            </h4>
            <div className="flex flex-col gap-4">
              <Link
                href="tel:0366816416"
                className="flex items-center gap-3 text-gray-300 hover:text-[#9DBB82] transition-colors text-sm"
              >
                <Phone size={16} className="shrink-0 text-[#9DBB82]" />
                0366 816 416
              </Link>
              <Link
                href="mailto:info@kanousei.vn"
                className="flex items-center gap-3 text-gray-300 hover:text-[#9DBB82] transition-colors text-sm"
              >
                <Mail size={16} className="shrink-0 text-[#9DBB82]" />
                info@kanousei.vn
              </Link>
            </div>
            <Link
              href={REGISTER_URL}
              target="_blank"
              className="inline-block bg-[#9DBB82] text-black border-2 border-[#9DBB82] px-6 py-3 font-bold text-sm text-center hover:bg-transparent hover:text-[#9DBB82] transition-all animate-blink"
            >
              ĐĂNG KÝ NGAY!
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-black text-gray-500 py-4 px-8 text-center text-xs">
        © 2024 Học viện Tiềm Năng Việt Nam. Tất cả quyền được bảo lưu.
      </div>
    </footer>
  );
};

export default Footer;
