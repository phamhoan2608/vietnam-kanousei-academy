"use client";

import * as React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

export type ITeacher = {
  id: string;
  imageURL: string;
  nameTeacher: string;
  introduction: string;
};

export function CarouselDemo({ teachers }: { teachers: ITeacher[] }) {
  const plugin = React.useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xs"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {teachers.map((item) => (
          <CarouselItem key={item.id}>
            <div className="flex flex-col gap-5 items-center p-2">
              <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-[#9DBB82]/20 ring-offset-2">
                <Image
                  src={item.imageURL}
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                  alt={item.nameTeacher}
                />
              </div>
              <p className="text-lg font-black text-center text-[#1A3A2A]">{item.nameTeacher}</p>
              <p className="text-center text-sm text-gray-500 leading-relaxed">{item.introduction}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
