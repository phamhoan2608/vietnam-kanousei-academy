import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="w-full flex pt-[32px] md:pt-[82px] px-[32px] md:px-[82px]">
      <div className="w-full h-fit flex justify-between items-center border-[2.8px] border-solid border-black p-2">
        <Link href={"/"} className="font-bold text-[24px] inline-block drop-shadow-custom">
          Học viện Tiềm Năng Việt Nam
        </Link>
        <div className="md:flex hidden gap-8">
          <Link href={"#"}>Về chúng tôi</Link>
          <Link href={"#"}>Chương trình đào tạo</Link>
        </div>
      </div>
      <div className="w-[100px] md:w-[200px] flex items-center justify-center border-[2.8px] border-solid border-black border-l-0 p-2 bg-[#9DBB82]">
        <Link className="hidden md:block" href={"#"}>
          Liên hệ
        </Link>
        <Image src="/svg/Menu.svg" width={40} height={40} className="object-cover block md:hidden" alt="Menu" />
      </div>
    </header>
  );
};

export default Header;
