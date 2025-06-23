"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";
  const isSearchPage = pathname === "/search";

  const [searchInput, setSearchInput] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const cart = useSelector((state) => state.cart.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white h-[57px] shadow-custom-header w-full fixed z-30">
      <div className="flex justify-between px-4 sm:px-5 items-center h-full w-full relative">
        {!isHome && !isSearchPage && (
          <button
            onClick={() => router.back()}
            className="mr-2"
            aria-label="Go back"
          >
            <svg fill="#2547ad" width="30" height="30" viewBox="0 0 28 25">
              <path d="M10 4.93L2.93 12 10 19.07 11.5 17.57 6.93 13H21v-2H6.93l4.57-4.57L10 4.93z" />
            </svg>
          </button>
        )}

        {isSearchPage ? (
          <div className="w-full flex items-center gap-2">
            <button
              onClick={() => router.back()}
              className="mr-2"
              aria-label="Go back"
            >
              <svg fill="#2547ad" width="30" height="30" viewBox="0 0 28 25">
                <path d="M10 4.93L2.93 12 10 19.07 11.5 17.57 6.93 13H21v-2H6.93l4.57-4.57L10 4.93z" />
              </svg>
            </button>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => {
                const value = e.target.value;
                setSearchInput(value);
                router.replace(`/search?q=${encodeURIComponent(value)}`);
              }}
              placeholder="Search products..."
              className="flex-1 h-10 px-4 border border-gray-300 rounded-md focus:outline-none"
            />
          </div>
        ) : (
          <>
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(true)}
                className="block sm:hidden"
                aria-label="Open menu"
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2547ad"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>

              {/* Logo */}
              <Link href="/">
                <div className="flex items-center">
                  <Image
                    className="h-7.5 w-7.5"
                    src="/header/logo.png"
                    alt="Logo"
                    width={128}
                    height={64}
                  />
                  <h1 className="pl-2 font-bold text-base hidden sm:block text-2f3d55">
                    Xport China || ASIC Miners
                  </h1>
                </div>
              </Link>

              {/* Social Handles (Desktop only) */}
              <div className="hidden sm:flex gap-6 ml-6 items-center">
                <a
                  href="https://t.me/Xportchina_exclusivo"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-800"
                >
                  Instagram: @xportchina
                </a>
                <Link href="/" className="text-sm font-medium text-gray-800">
                  Tiktok: @xportchinaasic
                </Link>
                <a
                  href="https://t.me/Xportchina_exclusivo"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-gray-800"
                >
                  Telegram: @xportchina
                </a>
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => router.push("/search")}
                aria-label="Search"
              >
                <svg width="20" height="20" viewBox="0 0 44 44">
                  <g fill="#2547ad" fillRule="nonzero">
                    <path d="M17 0C7.6 0 0 7.6 0 17s7.6 17 17 17c3.4 0 6.5-1 9.1-2.7L38.4 43.6l4.2-4.2L30.5 27.3C32.7 24.4 34 20.9 34 17 34 7.6 26.4 0 17 0zm0 4c7.2 0 13 5.8 13 13s-5.8 13-13 13S4 24.2 4 17 9.8 4 17 4z" />
                  </g>
                </svg>
              </button>

              <Link href="/cart" className="relative">
                <div className="w-[42px] h-[42px] bg-blue-700 rounded-full flex items-center justify-center">
                  <svg fill="#fff" viewBox="0 0 25 25" width="22" height="22">
                    <path d="M7.66 2c-.8 0-1.53.48-1.84 1.21L3.34 9H2c-.31 0-.61.15-.8.4a1 1 0 0 0-.16.87l2.56 9.27c.24.87 1.03 1.46 1.97 1.46h12.95c.94 0 1.74-.6 1.97-1.47l2.56-9.26a1 1 0 0 0-.15-.88c-.18-.24-.48-.4-.8-.4h-1.34l-2.48-5.79A2 2 0 0 0 16.34 2H7.66zm0 2h8.68l2.14 5H5.52L7.66 4zM8 12c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1zm4 0c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1zm4 0c.55 0 1 .45 1 1v4c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1z" />
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs w-[18px] h-[18px] flex items-center justify-center rounded-full">
                      {totalItems}
                    </span>
                  )}
                </div>
              </Link>
            </div>

            {/* Mobile Slide-in Menu */}
            {menuOpen && (
              <div className="fixed inset-0 z-40 flex">
                <div className="w-3/5 sm:w-1/3 bg-white h-full shadow-lg p-5 flex flex-col">
                  <button
                    className="self-end mb-4"
                    onClick={() => setMenuOpen(false)}
                    aria-label="Close menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke="#000"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" />
                      <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" />
                    </svg>
                  </button>

                  <a
                    href="https://t.me/Xportchina_exclusivo"
                    target="_blank"
                    rel="noreferrer"
                    className="mb-3 text-sm font-medium text-gray-800"
                  >
                    Instagram: @xportchina
                  </a>
                  <Link
                    href="/"
                    className="mb-3 text-sm font-medium text-gray-800"
                  >
                    Tiktok: @xportchinaasic
                  </Link>
                  <a
                    href="https://t.me/Xportchina_exclusivo"
                    target="_blank"
                    rel="noreferrer"
                    className="mb-3 text-sm font-medium text-gray-800"
                  >
                    Telegram: @xportchina
                  </a>
                </div>
                <div
                  className="flex-1 bg-black/30"
                  onClick={() => setMenuOpen(false)}
                ></div>
              </div>
            )}
          </>
        )}
      </div>
    </header>
  );
}
