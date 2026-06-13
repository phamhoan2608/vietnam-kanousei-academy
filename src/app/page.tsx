"use client";

import Image from "next/image";
import Header from "./components/header/Header";
import Link from "next/link";
import { CarouselDemo, ITeacher } from "./components/carosel";
import Footer from "./components/footer/Footer";
import { Users, Clock, Award, Brain, CheckCircle, Phone, Mail, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const DEFAULT_REGISTER_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSelEWeBl-qLQdP2i52akwBp3z2ZXC6VEOkefcm9GtFhYVNGzQ/viewform";

const STATS = [
  { number: "30,000+", label: "Học viên tư vấn", Icon: Users },
  { number: "25+", label: "Năm kinh nghiệm", Icon: Clock },
  { number: "3+", label: "Năm tại Việt Nam", Icon: Award },
  { number: "4", label: "Giảng viên chuyên gia", Icon: Brain },
];

const WHY_US = [
  { title: "Khoa học thực chứng", desc: "Tất cả phương pháp đều dựa trên khoa học não bộ và tâm lý học, không phải lý thuyết mơ hồ hay cảm tính." },
  { title: "25 năm kinh nghiệm", desc: "Đã tư vấn cho hơn 30,000 người, với bề dày kinh nghiệm từ Nhật Bản được mang đến Việt Nam." },
  { title: "Phù hợp người Việt Nam", desc: "Chương trình thiết kế riêng cho người Việt Nam, phù hợp với văn hóa và tư duy người Việt." },
  { title: "Giảng viên chuyên nghiệp", desc: "Đội ngũ được công nhận bởi Học viện Tiềm Năng Nhật Bản, giàu kinh nghiệm thực chiến." },
  { title: "Trải nghiệm thực tiễn", desc: "Không chỉ học lý thuyết mà còn trải nghiệm ở cấp độ giác quan để tạo ra thay đổi thực sự từ bên trong." },
  { title: "Kết quả rõ ràng", desc: "Mang lại câu trả lời logic, có thể kiểm chứng — không mơ hồ, không thiếu cơ sở khoa học." },
];

const PROGRAMS = [
  {
    img: "/images/KanouseiCamp.png",
    title: "KANOUSEI CAMP",
    sub: "Trại huấn luyện tập trung 2 ngày 1 đêm",
    desc: "Cải thiện kỹ năng giao tiếp, tăng cường khả năng chịu đựng căng thẳng và phát triển sự tập trung vào bản thân dựa trên khoa học não bộ.",
    items: [
      "Học ở cấp độ giác quan, không chỉ kiến thức",
      "Giám sát bởi giáo sư đại học",
      "Không giới hạn tuổi tác, giới tính, nghề nghiệp",
    ],
  },
  {
    img: "/images/BrainActivtionTraining.png",
    title: "BRAIN ACTIVATION TRAINING",
    sub: "Lớp học của não và trái tim",
    desc: "Khoá học thiết kế riêng cho người Việt Nam bởi Học viện Tiềm Năng Nhật Bản, đã được đón nhận rộng rãi trong hơn 3 năm qua.",
    items: [
      "12 chủ đề dưới góc nhìn khoa học não bộ",
      "Xác định mục tiêu và định hướng tương lai",
      "Tháo gỡ phiền não và thay đổi mindset",
    ],
  },
];

const DEFAULT_TEACHERS: ITeacher[] = [
  {
    id: "1",
    imageURL: "/images/Teacher1.png",
    nameTeacher: "MASUDA KATSUTOSHI",
    introduction:
      "Hiệu trưởng Học viện Tiềm Năng Nhật Bản và là một nhà tư vấn tâm lý Não bộ. Đã và đang tiến hành các hoạt động hỗ trợ phát triển bản thân và tư vấn tâm lý cho người Việt Nam sinh sống tại Nhật Bản.",
  },
  {
    id: "2",
    imageURL: "/images/Teacher2.png",
    nameTeacher: "NGUYỄN HÀ ANH",
    introduction:
      "Đại diện Học viện Tiềm Năng Việt Nam. Giảng viên được công nhận bởi học viện Tiềm năng Nhật Bản. Ngoài ra còn là một thông dịch viên hoạt động trên nhiều lĩnh vực làm cầu nối trong các hoạt động ngoại giao giữa Việt Nam và Nhật Bản.",
  },
  {
    id: "3",
    imageURL: "/images/Teacher3.png",
    nameTeacher: "NAM ORICA",
    introduction:
      "Giảng viên được công nhận bởi học viện Tiềm Năng Nhật Bản. Đã và đang hoạt động trong lĩnh vực phát triển tiềm năng con người.",
  },
  {
    id: "4",
    imageURL: "/images/Teacher4.png",
    nameTeacher: "NGUYỄN THU TRANG",
    introduction:
      "Giảng viên được công nhận bởi học viện Tiềm Năng Nhật Bản và là nhà tư vấn tâm lý Não bộ. Đã và đang tiến hành các hoạt động hỗ trợ phát triển bản thân và tư vấn tâm lý cho người Việt Nam sinh sống tại Nhật Bản.",
  },
];

export default function Home() {
  const [registerUrl, setRegisterUrl] = useState(DEFAULT_REGISTER_URL);
  const [teachers, setTeachers] = useState<ITeacher[]>(DEFAULT_TEACHERS);

  useEffect(() => {
    fetch("/api/data")
      .then((r) => r.json())
      .then((d) => {
        if (d.registerUrl) setRegisterUrl(d.registerUrl);
        if (d.teachers?.length) setTeachers(d.teachers);
      })
      .catch(() => {});
  }, []);

  const openRegister = () => window.open(registerUrl, "_blank");

  return (
    <main className="w-full flex flex-col overflow-x-hidden">
      <Header />

      {/* ── HERO ────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-white via-[#f6faf2] to-[#fff5f8] pt-20 overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-1/4 right-0 w-64 h-64 md:w-[480px] md:h-[480px] bg-[#FFB8CF]/25 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-48 h-48 md:w-72 md:h-72 bg-[#9DBB82]/15 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 w-full px-5 sm:px-10 md:px-16 lg:px-20 py-12 md:py-20">
          <div className="flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">

            {/* Left: copy */}
            <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
              <span className="inline-flex justify-center lg:justify-start">
                <span className="text-xs font-bold text-[#9DBB82] uppercase tracking-[0.2em] bg-[#9DBB82]/10 px-4 py-2 rounded-full border border-[#9DBB82]/30">
                  Học viện Tiềm Năng Việt Nam
                </span>
              </span>

              <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-black text-[#1A3A2A] leading-[1.1] tracking-tight">
                Thấu hiểu<br />
                bản thân<br />
                là thấu hiểu{" "}
                <span className="relative inline-block">
                  <span className="relative z-10">bộ não</span>
                  <span className="absolute bottom-1 left-0 right-0 h-3 bg-[#9DBB82]/50 -z-0 rounded-sm" />
                </span>
              </h1>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
                Khoa học thần kinh đã chứng minh mọi cảm xúc, suy nghĩ và hành động của bạn đều xuất phát từ não bộ. Hiểu não — thay đổi cuộc đời.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <button
                  onClick={openRegister}
                  className="h-14 px-8 bg-[#1A3A2A] text-white font-bold rounded-xl hover:bg-[#9DBB82] hover:text-[#1A3A2A] transition-all duration-300 shadow-lg shadow-[#1A3A2A]/20 text-sm"
                >
                  Đăng ký ngay →
                </button>
                <Link
                  href="#about"
                  className="h-14 px-8 border-2 border-[#1A3A2A]/30 text-[#1A3A2A] font-bold rounded-xl hover:bg-[#1A3A2A] hover:text-white hover:border-[#1A3A2A] transition-all duration-300 flex items-center justify-center text-sm"
                >
                  Tìm hiểu thêm
                </Link>
              </div>

              {/* Mini stats */}
              <div className="flex gap-8 justify-center lg:justify-start pt-4 border-t border-gray-100">
                {[
                  { n: "30,000+", l: "Học viên" },
                  { n: "25+", l: "Năm KN" },
                  { n: "3+", l: "Năm tại VN" },
                ].map(({ n, l }) => (
                  <div key={l}>
                    <p className="text-2xl md:text-3xl font-black text-[#1A3A2A]">{n}</p>
                    <p className="text-xs text-gray-500 mt-1">{l}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image */}
            <div className="w-full lg:w-1/2">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-full mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#9DBB82]/20 to-[#FFB8CF]/20 rounded-3xl blur-xl" />
                <Image
                  src="/images/Tree.png"
                  width={640}
                  height={640}
                  priority
                  className="relative w-full object-cover drop-shadow-2xl"
                  alt="Cây não bộ"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ───────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-[#1A3A2A]">
        <div className="px-5 sm:px-10 md:px-16 lg:px-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
          {STATS.map(({ number, label, Icon }) => (
            <div key={label} className="flex flex-col items-center gap-3">
              <div className="w-12 h-12 bg-[#9DBB82]/20 rounded-2xl flex items-center justify-center">
                <Icon size={22} className="text-[#9DBB82]" />
              </div>
              <p className="text-3xl sm:text-4xl md:text-5xl font-black">{number}</p>
              <p className="text-xs text-gray-400 uppercase tracking-widest leading-tight">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────── */}
      <section id="about" className="py-16 md:py-24 px-5 sm:px-10 md:px-16 lg:px-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold text-[#9DBB82] uppercase tracking-[0.2em]">Sứ mệnh của chúng tôi</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-[#1A3A2A] leading-tight">
              Tất cả những gì xảy ra<br className="hidden sm:block" />
              trong cuộc đời bạn đều do{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#1A3A2A]">BỘ NÃO</span>
                <span className="absolute bottom-0 left-0 right-0 h-3 bg-[#9DBB82]/40 -z-0 rounded-sm" />
              </span>{" "}
              tạo nên.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-gray-700 text-base leading-relaxed">
                Nhiều người đánh đồng những trải nghiệm trong quá khứ với bản thân con người họ. Chúng ta tưởng tượng tương lai như một phần mở rộng của quá khứ — nhưng thực ra não bộ có những khả năng vượt xa những gì ta đã trải nghiệm.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-gray-700 text-base leading-relaxed">
                Lo lắng, căng thẳng, sức khỏe, tình yêu, hôn nhân, gia đình, công việc, kỹ năng tương lai — tất cả đều phản ánh cách bạn đang sử dụng não bộ trong cuộc sống hiện tại.
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
              <p className="text-gray-700 text-base leading-relaxed">
                Nếu bạn tiếp tục dùng não bộ theo cách cũ, bạn sẽ chỉ lặp lại quá khứ. Chỉ khi khai thác đúng tiềm năng não bộ, bạn mới tạo ra được tương lai như mình mong muốn.
              </p>
            </div>
            <div className="bg-[#9DBB82]/10 rounded-2xl p-6 md:p-8 border border-[#9DBB82]/20">
              <p className="text-[#1A3A2A] text-base leading-relaxed font-medium">
                Chúng tôi nghiên cứu cách sử dụng não bộ trong cuộc sống thực và hệ thống hóa{" "}
                <strong>&quot;Chương trình hỗ trợ phát triển bản thân&quot;</strong>{" "}
                — đó là Lý thuyết Noutaisei ©.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── NOUTAISEI THEORY ────────────────────────── */}
      <section id="theory" className="py-16 md:py-24 px-5 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-br from-[#fff5f8] via-[#FFB8CF]/20 to-white">
        <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row gap-10 lg:gap-16 items-center">

          {/* Text */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 text-center lg:text-left">
            <span className="inline-flex justify-center lg:justify-start">
              <span className="text-xs font-bold text-[#9DBB82] uppercase tracking-[0.2em] bg-[#9DBB82]/10 px-4 py-2 rounded-full border border-[#9DBB82]/30">
                Lý thuyết cốt lõi
              </span>
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#1A3A2A] leading-tight">
              Lý thuyết<br />
              <span className="text-[#9DBB82]">Noutaisei ©</span>
              <br />
              <span className="text-2xl sm:text-3xl font-bold text-gray-500">Phát triển trí não</span>
            </h2>

            <div className="flex flex-col gap-4 text-gray-700 text-base leading-relaxed">
              <p>
                Thấu hiểu bản thân là thấu hiểu bộ não. Lý thuyết Noutaisei © hệ thống hóa các lý thuyết và phương pháp giúp thay đổi cuộc sống tốt đẹp hơn thông qua hiểu và sử dụng não bộ.
              </p>
              <p>
                Trong 25 năm qua, chúng tôi đã tư vấn cho hơn{" "}
                <strong className="text-[#1A3A2A]">30,000 người</strong>{" "}
                về các vấn đề tinh thần, sức khỏe, công việc, hôn nhân và nuôi dạy con cái.
              </p>
              <p>
                Lý thuyết kết hợp triết học, tâm lý học, sinh lý học và khoa học não bộ để cung cấp câu trả lời rõ ràng, có thể kiểm chứng — không mơ hồ.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <button
                onClick={openRegister}
                className="h-12 px-8 bg-[#1A3A2A] text-white font-bold rounded-xl hover:bg-[#9DBB82] hover:text-[#1A3A2A] transition-all duration-300 flex items-center gap-2 text-sm"
              >
                Xem chương trình đào tạo <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative max-w-sm sm:max-w-md lg:max-w-full mx-auto">
              <div className="absolute -inset-6 bg-[#FFB8CF]/30 rounded-3xl blur-2xl" />
              <Image
                src="/images/Brain.png"
                width={640}
                height={640}
                className="relative w-full object-cover drop-shadow-xl rounded-2xl"
                alt="Não bộ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROGRAMS ────────────────────────────────── */}
      <section id="programs" className="py-16 md:py-24 px-5 sm:px-10 md:px-16 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold text-[#9DBB82] uppercase tracking-[0.2em]">Khóa học</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-[#1A3A2A]">Chương trình đào tạo</h2>
            <p className="mt-3 text-gray-500 text-base">Thiết kế riêng cho người Việt Nam</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {PROGRAMS.map((card) => (
              <div
                key={card.title}
                className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 bg-white group"
              >
                <div className="overflow-hidden">
                  <Image
                    src={card.img}
                    width={600}
                    height={360}
                    className="w-full object-cover h-48 sm:h-56 md:h-60 group-hover:scale-105 transition-transform duration-500"
                    alt={card.title}
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col gap-5 flex-1">
                  <div>
                    <span className="text-xs font-bold text-[#9DBB82] uppercase tracking-widest">{card.sub}</span>
                    <h3 className="mt-2 text-xl md:text-2xl font-black text-[#1A3A2A]">{card.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-2 items-start text-sm text-gray-700">
                        <CheckCircle size={15} className="text-[#9DBB82] mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={openRegister}
                    className="mt-auto h-12 w-full bg-[#FFB8CF] text-[#1A3A2A] font-bold rounded-xl hover:bg-[#9DBB82] hover:text-white transition-all duration-300 text-sm"
                  >
                    Đăng ký ngay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────── */}
      <section className="py-16 md:py-24 px-5 sm:px-10 md:px-16 lg:px-20 bg-[#F0F7EB]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold text-[#9DBB82] uppercase tracking-[0.2em]">Lý do chọn chúng tôi</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-[#1A3A2A]">Tại sao chọn chúng tôi?</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 border border-[#9DBB82]/20 hover:shadow-lg hover:border-[#9DBB82]/60 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-[#9DBB82]/15 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle size={18} className="text-[#9DBB82]" />
                </div>
                <h3 className="font-bold text-base md:text-lg text-[#1A3A2A] mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEACHERS ────────────────────────────────── */}
      <section id="teachers" className="py-16 md:py-24 px-5 sm:px-10 md:px-16 lg:px-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-xs font-bold text-[#9DBB82] uppercase tracking-[0.2em]">Đội ngũ chuyên gia</span>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-black text-[#1A3A2A]">Giảng viên đào tạo</h2>
            <p className="mt-3 text-gray-500 text-base">Được công nhận bởi Học viện Tiềm Năng Nhật Bản</p>
          </div>

          {/* Mobile carousel */}
          <div className="md:hidden flex justify-center">
            <CarouselDemo teachers={teachers} />
          </div>

          {/* Desktop grid */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
            {teachers.map((item: ITeacher) => (
              <div
                key={item.id}
                className="flex flex-col items-center gap-4 bg-gray-50 rounded-2xl p-6 hover:shadow-lg hover:bg-white border border-transparent hover:border-[#9DBB82]/30 transition-all duration-300"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-[#9DBB82]/20 ring-offset-2 shrink-0">
                  <Image
                    src={item.imageURL}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    alt={item.nameTeacher}
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-sm font-black text-[#1A3A2A] mb-2">{item.nameTeacher}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.introduction}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────── */}
      <section id="cta" className="py-20 md:py-28 px-5 sm:px-10 md:px-16 lg:px-20 bg-gradient-to-br from-[#1A3A2A] via-[#1f4a35] to-[#2a5a42] text-white">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-6 md:gap-8">
          <div className="w-16 h-16 bg-[#9DBB82]/20 rounded-2xl flex items-center justify-center ring-1 ring-[#9DBB82]/30">
            <Brain size={28} className="text-[#9DBB82]" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            Bắt đầu hành trình<br />
            khám phá bộ não của bạn
          </h2>

          <p className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed">
            Tham gia cùng hơn 30,000 người đã thay đổi cuộc sống thông qua khoa học não bộ. Đăng ký ngay hôm nay!
          </p>

          <button
            onClick={openRegister}
            className="h-14 md:h-16 px-10 md:px-14 text-base md:text-lg font-black bg-[#9DBB82] text-[#1A3A2A] rounded-xl hover:bg-[#FFB8CF] hover:text-[#1A3A2A] transition-all duration-300 shadow-xl shadow-black/20"
          >
            Đăng ký ngay →
          </button>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 text-gray-300 text-sm pt-2">
            <Link href="tel:0366816416" className="flex gap-2 items-center justify-center hover:text-[#9DBB82] transition-colors">
              <Phone size={16} />
              0366 816 416
            </Link>
            <Link href="mailto:info@kanousei.vn" className="flex gap-2 items-center justify-center hover:text-[#9DBB82] transition-colors">
              <Mail size={16} />
              info@kanousei.vn
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
