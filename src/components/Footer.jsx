import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className=" text-gray-300 text-sm mt-12  w-full pb-4">
      <div className="flex gap-1 w-full text-2f3d55 border py-4 px-4 sm:px-5 bordertb ">
        <Link className="text-2f3d55 font-RobotoRegular text-base" href="/">
          Xport China || ASIC Miners
        </Link>
        /
        <p className="text-2f3d55 font-RobotoBold text-base ">
          Partes & Repuestos para Bitmain Antminer
        </p>
      </div>
      <div className="w-full px-4 py-4 gap-2.5 flex flex-col  ">
        <h1 className="text-[#2547AD] font-RobotoBold text-sm">Contact Us</h1>
        <p className="font-RobotoMedium text-2f3d55 text-sm">Phone</p>
       
        <p className="font-RobotoMedium text-2f3d55 text-sm">Email</p>
        <span className="font-RobotoRegular text-2f3d55 text-sm">
          t.me/Xportchina_exclusivo
        </span>
      </div>
      <div className="flex gap-2 w-full justify-center pb-[120px] items-center">
        <p className="text-base font-RobotoRegular text-2f3d55">powered by</p>
        <Link
          href="https://www.xportchinalatam.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="w-[125px;] h-[40px]"
            src="/header/powered_by.png"
            alt="Logo"
            width={125}
            height={104}
            loading="lazy"
          />
        </Link>
      </div>
      <div className="w-fit fixed z-70 bottom-2 right-4 px-4 mb-25 sm:mb-0 flex justify-end">
        
      </div>
    </footer>
  );
}
