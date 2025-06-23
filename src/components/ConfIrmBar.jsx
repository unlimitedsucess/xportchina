"use client";

import { usePathname, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function ConfirmBar() {
  const pathname = usePathname();
  const router = useRouter();
  const cart = useSelector((state) => state.cart.cart);

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, "")) || 0;
    return acc + price * item.quantity;
  }, 0);

  if (cart.length === 0) return null;

  const isCartPage = pathname.includes("/cart");

  const handleClick = () => {
    if (isCartPage) {
      console.log("✅ Order confirmed!");
    } else {
      router.push("/cart");
    }
  };

  return (
    <>
      <div
        className={`mx-auto fixed bottom-0 left-0 right-0 z-50 w-full max-w-[720px] px-4 sm:px-6 py-4 bg-blue-600 rounded-t-lg  ${
          isCartPage
            ? "flex justify-center relative"
            : "flex justify-between items-center"
        }`}
      >
        {!isCartPage && (
          <div className="flex gap-2">
            <svg
              width="25"
              height="25"
              viewBox="0 0 32 32"
              version="1.1"
              fill="#ffffff"
            >
              <g id="surface1" fill="#ffffff">
                <path
                  d="M 7.304688 4 L 4.664063 11.042969 L 6.804688 11.042969 L 8.695313 6 L 23.308594 6 L 25.199219 11.042969 L 27.332031 11.042969 L 24.691406 4 Z M 2 12 L 2 18 L 3.257813 18 L 6.257813 28 L 25.746094 28 L 28.746094 18 L 30 18 L 30 12 Z M 4 14 L 28 14 L 28 16 L 27.253906 16 L 24.253906 26 L 7.742188 26 L 4.742188 16 L 4 16 Z M 11 17 L 11 24 L 13 24 L 13 17 Z M 15 17 L 15 24 L 17 24 L 17 17 Z M 19 17 L 19 24 L 21 24 L 21 17 Z "
                  fill="#ffffff"
                ></path>
              </g>
            </svg>
            <div className="flex flex-col">
              <p className="text-sm font-RobotoMedium text-ffffff">
                {totalItems} item{totalItems !== 1 && "s"}
              </p>
              <p className="text-lg font-bold text-white">
                ${totalPrice.toLocaleString()}
              </p>
            </div>
          </div>
        )}

        <button
          onClick={handleClick}
          className={`flex items-center gap-2 px-6 py-2 rounded-lg hover:bg-gray-800 transition-all duration-300 ${
            isCartPage ? "text-white mx-auto" : "text-white"
          }`}
        >
          <span className="text-sm sm:text-base font-RobotoBold">
            {isCartPage ? "Confirm Order" : "View Cart"}
          </span>
        </button>

        {isCartPage && (
          <Image
            src="/assets/arrow-long-right-white.svg"
            alt="arrow"
            width={32}
            height={24}
            className="absolute right-4 top-1/2 -translate-y-1/2"
          />
        )}
      </div>
    </>
  );
}
