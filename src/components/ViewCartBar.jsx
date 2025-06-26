"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function ViewCartBar() {
  const router = useRouter();
  const pathname = usePathname();
  const cart = useSelector((state) => state.cart.cart);

  if (pathname.includes("/cart") || cart.length === 0) return null;

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, "")) || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <div className="mx-auto fixed bottom-0 mb-[10px] left-0 right-0 z-50 w-full max-w-[340px] md:max-w-[620px] px-4 sm:px-6 py-4 bg-blue-600 rounded-lg flex justify-between items-center">
      <div className="flex gap-2">
        <svg width="25" height="25" viewBox="0 0 32 32" fill="#fff">
          <path d="M 7.304688 4 L 4.664063 11.042969 L 6.804688 11.042969 L 8.695313 6 L 23.308594 6 L 25.199219 11.042969 L 27.332031 11.042969 L 24.691406 4 Z M 2 12 L 2 18 L 3.257813 18 L 6.257813 28 L 25.746094 28 L 28.746094 18 L 30 18 L 30 12 Z M 4 14 L 28 14 L 28 16 L 27.253906 16 L 24.253906 26 L 7.742188 26 L 4.742188 16 L 4 16 Z" />
        </svg>
        <div className="flex flex-col">
          <p className="text-sm font-RobotoMedium text-white">
            {totalItems} item{totalItems !== 1 && "s"}
          </p>
          <p className="text-lg font-bold text-white">
            ${totalPrice.toLocaleString()}
          </p>
        </div>
      </div>

      <button
        onClick={() => router.push("/cart")}
        className="text-white  w-fit px-6 py-2 rounded-lg text-sm sm:text-base font-RobotoBold flex gap-3 items-center"
      >
        View Cart
        <Image
          src="/assets/arrow-long-right-white.svg"
          alt="arrow"
          width={24}
          height={24}
          className="absolute right-4 top-1/2 -translate-y-1/2"
        />
      </button>
    </div>
  );
}
