import Image from "next/image";

export default function AnnouncementHeader() {
  return (
    <>
      <div className="relative w-full my-8">
        <Image
          src="/announcement_header_2.jpeg"
          alt="Physics formulas showing velocity, displacement, and acceleration relationships"
          width={1920}
          height={1080}
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>
      <div className="flex justify-center items-center my-8">
        <div className="relative">
          <Image
            src="/announcement_header_3.jpeg"
            alt="Physics formulas showing velocity, displacement, and acceleration relationships"
            width={720}
            height={480}
            className="rounded-lg"
            priority
          />
        </div>
      </div>
      <div className="relative w-full my-8">
        <Image
          src="/announcement_header_4.jpeg"
          alt="Physics formulas showing velocity, displacement, and acceleration relationships"
          width={1920}
          height={1080}
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>
    </>
  );
}
