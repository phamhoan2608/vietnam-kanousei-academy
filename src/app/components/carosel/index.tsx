"use client";

import * as React from "react";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export type ITeacher = {
  imageURL: string;
  nameTeacher: string;
  introduction: string;
};

export const teacherList: ITeacher[] = [
  {
    imageURL: "/images/Teacher1.png",
    nameTeacher: "MASUDA KATSUTOSHI",
    introduction:
      "Hiệu trưởng Học viện Tiềm Năng Nhật Bản và là một nhà tư vấn tâm  lý Não bộ. Đã và đang tiến hành các hoạt động hỗ trợ phát triển bản thân và tư vấn tâm lý cho người Việt Nam sinh sống tại Nhật Bản.",
  },
  {
    imageURL: "/images/Teacher2.png",
    nameTeacher: "NGUYỄN HÀ ANH",
    introduction:
      "Đại diện Học viện Tiềm Năng Việt Nam. Giảng viên được công nhận bởi học viện Tiềm năng Nhật Bản. Ngoài ra còn là một thông dịch viên hoạt động trên nhiều lĩnh vực làm cầu nối trong các hoạt động ngoại giao giữa Việt Nam và Nhật Bản.",
  },
  {
    imageURL: "/images/Teacher3.png",
    nameTeacher: "NAM ORICA",
    introduction:
      "Giảng viên được công nhận bởi học viện Tiềm Năng Nhật Bản. Đã và đang hoạt động trong lĩnh vực phát triển tiềm năng con người.",
  },
  {
    imageURL: "/images/Teacher4.png",
    nameTeacher: "NGUYỄN THU TRANG",
    introduction:
      "Giảng viên được công nhận bởi học viện Tiềm Năng Nhật Bản và là nhà tư vấn tâm lý Não bộ. Đã và đang tiến hành các hoạt động hỗ trợ phát triển bản thân và tư vấn tâm lý cho người Việt Nam sinh sống tại Nhật Bản.",
  },
];

export function CarouselDemo() {
  const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {teacherList.map((item: ITeacher, index) => (
          <CarouselItem key={index}>
            <div className="max-w-[400px] flex flex-col gap-8 items-center">
              <Image src={item.imageURL} width={400} height={400} className="w-full object-cover" alt="Brain" />
              <p className="text-[26px] font-bold">{item.nameTeacher}</p>
              <p className="text-center">{item.introduction}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
