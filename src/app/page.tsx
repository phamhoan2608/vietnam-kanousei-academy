"use client";
import Image from "next/image";
import Header from "./components/header/Header";
import { Facebook } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CarouselDemo, ITeacher, teacherList } from "./components/carosel";
import Footer from "./components/footer/Footer";

export default function Home() {
  const handleRegisterForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSelEWeBl-qLQdP2i52akwBp3z2ZXC6VEOkefcm9GtFhYVNGzQ/viewform",
      "_blank"
    );
  };

  return (
    <main className="w-full flex flex-col justify-center relative">
      <Header />
      <section className="part-1 w-full flex-col-reverse flex mt-[32px] md:mt-[82px] md:flex-row gap-[80px] md:gap-5 px-[32px] md:px-[82px]">
        <div className="flex flex-col gap-10 w-full md:w-[40%]">
          <h1>
            Thấu hiểu bản thân <br /> là thấu hiểu bộ não
          </h1>
          <p className="text-[24px]">
            Khoa học thần kinh gần đây đã tiết lộ rằng các giác quan, cảm xúc, suy nghĩ và hành động cũng như ý thức và
            vô thức của chúng ta đều bị ảnh hưởng bởi não. Nói cách khác, cuộc sống của chúng ta được tạo ra bởi bộ não
            của chúng ta. Chúng tôi nghiên cứu cách sử dụng bộ não trong cuộc sống thực để tối đa hóa tiềm năng của cuộc
            sống và hệ thống hóa &quot;Chương trình hỗ trợ phát triển bản thân&quot; áp dụng khoa học về não bộ.
          </p>
          <div className="flex justify-between">
            <Button className="w-[200px] h-[88px] text-[24px] bg-[#9DBB82] text-black rounded-none border-4 border-solid border-black hover:bg-[none]">
              Xem thêm
            </Button>
            <Image
              src="/svg/ArrowLeftShort.svg"
              width={100}
              height={200}
              className="object-cover md:hidden"
              alt="Arrow"
            />
          </div>
        </div>
        <div className="w-full md:w-[60%]">
          <div className="relative">
            <Image src="/images/Tree.png" width={400} height={400} className="w-full object-cover" alt="Image 1" />
            <Image
              src="/svg/Star.svg"
              width={200}
              height={200}
              className="object-cover absolute md:-bottom-[80px] md:-left-[80px] w-[100px] md:w-[200px] -bottom-[40px] -left-[40px]"
              alt="Image 1"
            />
          </div>
        </div>
      </section>

      <section className="part-2 hidden md:flex md:justify-between md:pt-10 px-[32px] md:px-[82px]">
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
        <div>
          <Image src="/svg/ArrowLeft.svg" width={200} height={200} className="object-cover" alt="Arrow" />
        </div>
      </section>

      <section className="part-3 flex flex-col gap-10 mt-[200px] px-[32px] md:px-[82px]">
        <div className="relative">
          <p className="relative z-10 text-center text-[48px] font-bold">
            Tất cả những gì xảy ra trong cuộc đời của bạn đều do <br /> BỘ NÃO của bạn tạo nên.
          </p>
          <Image src="/svg/QuotationMark.svg" width={300} height={200} className="absolute bottom-0 z-0" alt="Arrow" />
        </div>
        <div className="flex flex-col gap-10">
          <p>
            Nhiều người đánh đồng với những trải nghiệm trong quá khứ của họ là bản thân con người họ. Chúng ta tưởng
            tượng về tương lai như một phần mở rộng của những trải nghiệm của mình, và hóa ra bộ não của chúng ta thực
            sự có những khả năng vượt xa những gì chúng ta có được thông qua trải nghiệm hoặc những gì chúng ta tưởng
            tượng. Nhiều sự kiện xung quanh chúng ta...
          </p>

          <p>
            Lo lắng, căng thẳng, sức khỏe, Tình yêu, hôn nhân, gia đình, Chăm sóc trẻ em, công việc, kỹ năng Tương lai,
            mục tiêu và mục đích trong cuộc sống của bạn Có thể nói tất cả những điều này đều phản ánh cách bạn sử dụng
            bộ não của mình trong cuộc sống hiện tại.
          </p>

          <p>
            Nếu bạn muốn tương lai của mình diễn ra theo cách bạn mong muốn, nếu bạn tiếp tục sử dụng bộ não của mình
            theo cách như trước, thì cuối cùng bạn sẽ chỉ lặp lại quá khứ. Chỉ bằng cách khai thác tiềm năng của bộ não,
            bạn mới có thể tạo ra tương lai mà bạn mong muốn.
          </p>

          <p>
            Chúng tôi nghiên cứu cách sử dụng bộ não trong cuộc sống thực để tối đa hóa tiềm năng của cuộc sống và hệ
            thống hóa &quot;Chương trình hỗ trợ phát triển bản thân&quot; áp dụng khoa học về não bộ. Đó là lý thuyết
            Noutaisei ©(tạm dịch: phát triển trí não).
            <br />
            Lý thuyết này nhằm mục đích giúp bạn hiểu các cơ chế của não, tiếp thu các phương pháp thực tế cụ thể về
            công nghệ trí tuệ và hỗ trợ sự phát triển bản thân để đạt được mục tiêu của bạn.
          </p>
        </div>

        <div className="flex justify-end">
          <Image src="/svg/ArrowLeft.svg" width={200} height={200} className="object-cover" alt="Arrow" />
        </div>
      </section>

      <section className="flex flex-col-reverse md:flex-row bg-[#FFB8CF] p-[80px] mt-10 px-[32px] md:px-[82px] gap-10">
        <div className="w-full md:w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-5 text-[40px] md:text-[48px] font-bold">
            <p className="bg-[#9DBB82]">Lý thuyết Noutaisei</p>
            <p className="bg-[#9DBB82]">Phát triển trí não</p>
          </div>

          <div className="flex flex-col gap-8">
            <p>
              Thấu hiểu bản thân là thấu hiểu bộ não. Lý thuyết Noutaisei © (tạm dịch: phát triển trí não) cố gắng hệ
              thống hóa các lý thuyết và phát triển các phương pháp nhằm thay đổi cuộc sống của chúng ta tốt đẹp hơn
              bằng cách hiểu và sử dụng bộ não.
              <br />
              <span className="hidden md:block">
                Tại Lý thuyết Noutaisei ©, chúng tôi xây dựng lý thuyết của mình từ quan điểm rằng “mọi thứ xảy ra trong
                cuộc sống đều do bộ não tạo ra”. Mọi thứ về chúng ta đều là kết quả của phản ứng não bộ.
              </span>
            </p>
            <p className="hidden md:block">
              Trong 25 năm qua, chúng tôi đã tư vấn cho hơn 30.000 người. Các hoạt động tư vấn bao gồm từ các vấn đề về
              tinh thần, tư vấn sức khỏe, tư vấn công việc, quản lý tổ chức, hướng dẫn bán hàng, tư vấn quản lý, các mối
              quan hệ con người như hôn nhân, tình yêu, nuôi dạy con cái và nơi làm việc, các vấn đề pháp lý và quản lý
              tài sản. Mẫu số chung giữa họ là thứ có thể được giải thích rõ ràng một cách hợp lý, chứ không phải là lý
              thuyết về tinh thần hay lòng can đảm.
            </p>
            <p className="hidden md:block">
              Lý thuyết Noutaisei © cố gắng đưa ra lập luận bằng cách kết hợp triết học, nghiên cứu tôn giáo, sinh lý
              học, vật lý và kinh tế, tập trung vào khoa học não bộ và tâm lý học. Dựa trên lý thuyết có hệ thống về sự
              phát triển trí não này, chúng tôi đã phát triển và cung cấp “Mind Technology ©” (tạm dịch: kỹ thuật tâm
              trí), một công nghệ kích hoạt não bộ bằng cách kết hợp tư vấn, trị liệu huấn luyện, chữa bệnh, quản lý,
              v.v. một cách phức tạp.
            </p>
          </div>

          <Button className="w-[auto] h-[88px] text-[24px] bg-[transparent] text-black rounded-none border-4 border-solid border-black hover:bg-[none]">
            CHƯƠNG TRÌNH ĐÀO TẠO
          </Button>
        </div>
        <div className="w-full md:w-1/2 hidden md:block">
          <Image src="/images/Brain.png" width={400} height={400} className="w-full object-cover " alt="Brain" />
        </div>
        <div className="w-full md:w-1/2 block md:hidden relative">
          <Image
            src="/images/Brain_SP.png"
            width={400}
            height={400}
            className="w-full object-cover relative z-10"
            alt="Brain"
          />
          <Image
            src="/svg/ArrowDown.svg"
            width={80}
            height={100}
            className="w-1/5 object-cover cursor-pointer bottom-5 absolute"
            alt="Brain"
          />

          <Image
            src="/svg/Star.svg"
            width={200}
            height={100}
            className="w-2/5 object-cover cursor-pointer top-0 right-0 absolute z-0"
            alt="Brain"
          />
        </div>
      </section>

      <section className="relative md:pt-10">
        <p className="text-[40px] md:text-[48px] text-center bg-[#9DBB82] md:bg-[#FFFFFF] font-bold">
          Chương trình đào tạo
        </p>
        <div className="w-2/3 h-[100px] bg-[#9DBB82] absolute -z-50 hidden md:block"></div>
        <div className="flex flex-col md:flex-row justify-evenly gap-[80px] pt-[40px] px-[40px] md:px-[80px]">
          <div className="flex flex-col gap-10 border-2 border-solid border-black relative md:min-w-[300px] md:max-w-[500px]">
            <Image
              src="/images/KanouseiCamp.png"
              width={400}
              height={400}
              className="w-full object-cover "
              alt="Brain"
            />
            <p className="font-bold text-3xl md:text-4xl text-center pb-[80px] md:pb-0">KANOUSEI CAMP</p>
            <p className="font-bold px-5 text-3xl text-center hidden md:block">
              Chương trình trại huấn luyện tập trung 2 ngày 1 đêm
            </p>
            <div className="p-5 pb-10 hidden md:block">
              <p>
                Nội dung tập trung vào cải thiện kỹ năng giao tiếp dựa trên khoa học não bộ, tăng cường khả năng chịu
                đựng căng thẳng và phát triển sự tập trung vào bản thân.
              </p>
              <p>
                Nhiều khả năng khác nhau chuyên về giao tiếp tương tự như kỹ năng giao tiếp và tất cả các khả năng liên
                quan đến bạn sẽ mở rộng sau hai ngày.
              </p>
              <p>
                Vì là kỳ nghỉ qua đêm nên nó mang lại cảm giác vô cùng đắm chìm, ảnh hưởng đến tâm lý sâu sắc của bạn.
              </p>
              <p>
                Vì mang tính trải nghiệm nên bạn không chỉ có thể học kiến ​​thức mà còn học được ở cấp độ giác quan.
              </p>
              <p>Vì là khoa học thần kinh nên chúng ta có thể nhận được câu trả lời rõ ràng thay vì mơ hồ.</p>
              <p>
                - Được giám sát bởi các giáo sư từ nhiều trường đại học khác nhau nên không có sự thiên vị hay sai sót
                nào.
              </p>
              <p>Người hướng dẫn là người chuyên nghiệp nên rất dễ hiểu và thú vị.</p>
              <p>Bạn có thể tham gia khóa học bao nhiêu lần tùy thích để bất cứ ai cũng có thể học được.</p>
              <p>
                Vì là nguyên tắc/luật nên không bị ràng buộc bởi tuổi tác, giới tính, nghề nghiệp, văn hóa, chủng tộc.
              </p>
            </div>
            <Button
              className="w-[200PX] h-[60px] text-[24px] bg-[#FFB8CF] 
            text-black rounded-none border-4 border-solid border-black hover:bg-[none]
             absolute -bottom-[30px] left-[calc(50%-100px)]"
              onClick={handleRegisterForm}
            >
              ĐĂNG KÝ
            </Button>
          </div>
          <div className="flex flex-col gap-10 border-2 border-solid border-black relative md:min-w-[300px] md:max-w-[500px]">
            <Image
              src="/images/BrainActivtionTraining.png"
              width={400}
              height={400}
              className="w-full object-cover "
              alt="Brain"
            />
            <p className="font-bold text-3xl md:text-4xl text-center pb-[80px] md:pb-0">BRAIN ACTIVATION TRAINING</p>
            <p className="font-bold px-5 text-3xl text-center hidden md:block">Lớp học của não và trái tim</p>
            <div className="p-5 pb-10 hidden md:block">
              <p>
                Đây là khoá học được xây dựng và thiết kế riêng dành cho người Việt Nam bởi học viện Tiềm Năng Nhật Bản.
                Khoá học này đã được mang tới Việt Nam cách đây 3 năm và được nhiều bạn tham gia đón nhận.
              </p>
              <p>
                Khoá học này dành cho những bạn mong muốn xác định mục tiêu và định hướng tương lai, Những bạn mong muốn
                tìm hiểu về khoa học não bộ
                <br />
                Những bạn đang có phiền não, trăn trở trong cuộc sống cần tìm cách tháo gỡ 12 chủ đề liên quan biện giải
                dưới góc nhìn khoa học não bộ về các nội dung:
              </p>
              <ul>
                <li>Phiền não </li>
                <li>Thiết lập mục tiêu </li>
                <li>Cảm xúc</li>
                <li>Thay đổi mindset </li>
                <li>Sự tử tế, lòng biết ơn, sự dũng cảm, cổ vũ </li>
                <li>Các kỹ thuật tâm trí và cách áp dụng trong cuộc sống </li>
              </ul>
            </div>

            <Button
              className="w-[200PX] h-[60px] text-[24px] bg-[#FFB8CF] 
            text-black rounded-none border-4 border-solid border-black hover:bg-[none]
             absolute -bottom-[30px] left-[calc(50%-100px)]"
              onClick={handleRegisterForm}
            >
              ĐĂNG KÝ
            </Button>
          </div>
        </div>
      </section>

      <section className="pt-[80px] px-10 pb-10 overflow-hidden">
        <p className="text-[40px] md:text-[48px] text-center font-bold pb-10">Giảng viên đào tạo</p>
        <div className="block md:hidden">
          <div className="flex justify-center ">
            <CarouselDemo />
          </div>
        </div>
        <div className="hidden md:block">
          <div className="grid grid-cols-2 justify-center place-items-center gap-10 items-start">
            {teacherList.map((item: ITeacher) => {
              return (
                <div key={item.imageURL} className="max-w-[400px] flex flex-col gap-8 items-center">
                  <Image src={item.imageURL} width={400} height={400} className="w-full object-cover" alt="Brain" />
                  <p className="text-[36px] font-bold">{item.nameTeacher}</p>
                  <p className="text-center">{item.introduction}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />

      <div className="absolute w-1/2 h-[818px] bg-[#FFB8CF] right-0 top-0 z-[-999]"></div>
    </main>
  );
}
