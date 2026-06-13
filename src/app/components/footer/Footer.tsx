import ArrowRightIcon from "@/app/icons/ArrowRightIcon";
import { Facebook } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 bg-[#9DBB82] gap-4 p-4 md:p-4">
      <div className="flex justify-center items-center">
        <p>Học viện Tiềm Năng Việt Nam</p>
      </div>
      <div className="flex flex-col items-center gap-3">
        <Link
          className="text-[#fa1a1a] animate-blink font-bold"
          href="https://docs.google.com/forms/d/e/1FAIpQLSelEWeBl-qLQdP2i52akwBp3z2ZXC6VEOkefcm9GtFhYVNGzQ/viewform"
          target="_blank"
        >
          Đăng ký ngay!
        </Link>
        <div>
          <div className="w-full h-fit flex justify-between items-center border-[2.8px] border-solid border-black p-2">
            <p>Học viện Tiềm Năng Việt Nam</p>
            <ArrowRightIcon />
          </div>
        </div>
        <div className="flex items-center gap-10">
          <Link href={"#"}>
            <Facebook />
          </Link>
          <Link href={"#"}>
            <Facebook />
          </Link>
          <Link href={"#"}>
            <Facebook />
          </Link>
        </div>
      </div>
      <div className="flex items-center flex-col justify-center">
        <p>Liên hệ</p>
        <Link href="tel:0366816416">0366816416</Link>
      </div>
    </div>
  );
};

export default Footer;
