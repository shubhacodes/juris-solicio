import Image from "next/image";
import homePhoto from "../public/home-photo.jpg";

export default function HomeBanner() {
  return (
    <div className="relative w-full h-[50vh] min-h-[400px] max-h-[600px]">
      <Image
        src="/home-photo.jpg"
        alt="Home Photo"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />{" "}
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          Welcome to Juris Solicio
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl">
          Providing expert legal services with integrity and dedication
        </p>
      </div>
    </div>
  );
}
