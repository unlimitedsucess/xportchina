"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { useSelector } from "react-redux";

export default function Header() {
  const pathname = usePathname(); // get current route
  const router = useRouter();
  const isHome = pathname === "/";

  const cart = useSelector((state) => state.cart.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white h-[57px] shadow-custom-header w-full fixed z-10">
      <div className="flex justify-between px-5 items-center h-full w-full">
        <div className="flex gap-25 items-center w-fit">
          <div className="flex gap-4 items-center">
            {/* 🠔 Back Button (hidden on homepage) */}
            {!isHome && (
              <button
                onClick={() => router.back()}
                aria-label="Go back"
                className="p-1 rounded hover:bg-gray-100 transition"
              >
                <svg
                  fill="#2547ad"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 28 25"
                  width="32px"
                  height="32px"
                >
                  <path
                    d="M 10 4.9296875 L 2.9296875 12 L 10 19.070312 L 11.5 17.570312 L 6.9296875 13 L 21 13 L 21 11 L 6.9296875 11 L 11.5 6.4296875 L 10 4.9296875 z"
                    fill="#2547ad"
                  ></path>
                </svg>
              </button>
            )}

            {/* Logo and Brand Title */}
            <Link href="/">
              <div className="text-18p flex items-center md:text-20p md:gap-1 font-RobotoBold text-2f3d55">
                <Image
                  className="h-7.5 w-7.5"
                  src="/header/logo.png"
                  alt="Logo"
                  width={128}
                  height={64}
                />
                <h1 className="pl-2">Xport China || ASIC Miners</h1>
              </div>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-12 items-center">
            <a
              className="text-base text-2f3d55 font-RobotoRegular"
              href="https://t.me/Xportchina_exclusivo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram: @xportchina
            </a>
            <Link className="text-base text-2f3d55 font-RobotoRegular" href="">
              Tiktok: @xportchinaasic
            </Link>
            <a
              className="text-base text-2f3d55 font-RobotoRegular"
              href="https://t.me/Xportchina_exclusivo"
              target="_blank"
              rel="noopener noreferrer"
            >
              Telegram: @xportchina
            </a>
          </div>
        </div>

        {/* Icons (user, search, cart) */}
        <div className="flex items-center gap-2">
          <Link href="">
            <svg
              fill="#2547ad"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              width="28"
              height="28"
            >
              <path d="M 12 3 A 4 4 0 0 0 8 7 A 4 4 0 0 0 12 11 A 4 4 0 0 0 16 7 A 4 4 0 0 0 12 3 z M 12 14 C 8.996 14 3 15.508 3 18.5 L 3 20 C 3 20.552 3.448 21 4 21 L 20 21 C 20.552 21 21 20.552 21 20 L 21 18.5 C 21 15.508 15.004 14 12 14 z" />
            </svg>
          </Link>

          <Link href="">
            <svg
              width="20"
              height="20"
              viewBox="0 0 44 44"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#2547ad" fillRule="nonzero">
                <path d="M17,0 C7.6,0 0,7.6 0,17s7.6,17 17,17c3.4,0 6.5-1 9.1-2.7L38.4,43.6l4.2-4.2L30.5,27.3C32.7,24.4 34,20.9 34,17C34,7.6 26.4,0 17,0Zm0,4c7.2,0 13,5.8 13,13s-5.8,13-13,13S4,24.2,4,17 9.8,4 17,4Z" />
              </g>
            </svg>
          </Link>

          <Link
            href="/cart"
            className="relative w-[45px] h-[45px] bg-blue-700 rounded-full flex items-center justify-center"
          >
            <svg
              fill="#fff"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
              width="25"
              height="25"
            >
              <path d="M 7.6582031 2 C 6.8615365 2 6.1344998 2.4791595 5.8203125 3.2109375 L 3.3398438 9 L 2.0019531 9 C 1.6889531 9 1.3950781 9.1455313 1.2050781 9.3945312 C 1.0170781 9.6425312 0.95315625 9.964625 1.0351562 10.265625 L 3.5957031 19.53125 C 3.8347031 20.39525 4.6274375 21 5.5234375 21 L 18.476562 21 C 19.372563 21 20.164344 20.396203 20.402344 19.533203 L 22.962891 10.267578 C 23.045891 9.9665781 22.982922 9.6425312 22.794922 9.3945312 C 22.604922 9.1455313 22.310047 9 21.998047 9 L 20.660156 9 L 18.177734 3.2128906 C 17.865994 2.4777169 17.13651 2 16.339844 2 L 7.6582031 2 z M 7.6582031 4 L 16.339844 4 L 18.482422 9 L 5.5175781 9 L 7.6582031 4 z M 8 12 C 8.552 12 9 12.448 9 13 L 9 17 C 9 17.552 8.552 18 8 18 C 7.448 18 7 17.552 7 17 L 7 13 C 7 12.448 7.448 12 8 12 z M 12 12 C 12.552 12 13 12.448 13 13 L 13 17 C 13 17.552 12.552 18 12 18 C 11.448 18 11 17.552 11 17 L 11 13 C 11 12.448 11.448 12 12 12 z M 16 12 C 16.552 12 17 12.448 17 13 L 17 17 C 17 17.552 16.552 18 16 18 C 15.448 18 15 17.552 15 17 L 15 13 C 15 12.448 15.448 12 16 12 z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-[18px] h-[18px] flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
