"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Menu, X, Brain } from "lucide-react";

const NAV_LINKS = [
  { label: "Về chúng tôi", href: "#about" },
  { label: "Chương trình", href: "#programs" },
  { label: "Giảng viên", href: "#teachers" },
];

const Logo = () => (
  <div className="w-10 h-10 bg-[#1A3A2A] rounded-xl flex items-center justify-center shadow-md shrink-0">
    <Brain size={22} className="text-[#9DBB82]" />
  </div>
);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-white/80 backdrop-blur-sm py-5"
        }`}
      >
        <div className="flex justify-between items-center px-8 md:px-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Logo />
            <div className="leading-tight">
              <p className="font-bold text-[#1A3A2A] text-base">Học viện Tiềm Năng</p>
              <p className="font-medium text-[#9DBB82] text-sm">Việt Nam</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-[#1A3A2A] hover:text-[#9DBB82] transition-colors font-medium text-sm tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="#cta"
            className="hidden md:flex items-center gap-2 bg-[#9DBB82] text-black border-2 border-black px-5 py-2 font-semibold text-sm hover:bg-[#1A3A2A] hover:text-white hover:border-[#1A3A2A] transition-all"
          >
            Liên hệ ngay
          </Link>

          {/* Mobile hamburger */}
          <button
            className="block md:hidden p-2 text-[#1A3A2A]"
            onClick={() => setMenuOpen(true)}
            aria-label="Mở menu"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      {/* Mobile Full-screen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-[100] flex flex-col">
          <div className="flex justify-between items-center px-8 py-5 border-b border-gray-100">
            <Link href="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
              <Logo />
              <p className="font-bold text-[#1A3A2A]">Học viện Tiềm Năng VN</p>
            </Link>
            <button onClick={() => setMenuOpen(false)} aria-label="Đóng menu">
              <X size={26} className="text-[#1A3A2A]" />
            </button>
          </div>

          <nav className="flex flex-col items-center justify-center flex-1 gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-3xl font-bold text-[#1A3A2A] hover:text-[#9DBB82] transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#cta"
              className="mt-4 bg-[#9DBB82] text-black border-2 border-black px-10 py-4 text-xl font-bold hover:bg-[#1A3A2A] hover:text-white hover:border-[#1A3A2A] transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Liên hệ ngay
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
