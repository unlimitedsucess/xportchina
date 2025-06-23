"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import CartButton from "./CartButton"; // ✅ Make sure this path is correct

export default function Items({ title, price, img, slug, category, ...rest }) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/items/${category}/${slug}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-lg transition"
    >
      <Image
        src={img}
        alt={title}
        width={300}
        height={200}
        className="rounded-md object-cover w-full h-48"
      />
      <h2 className="mt-2 text-lg font-semibold text-gray-800">{title}</h2>
      <p className="text-blue-600 font-bold">{price}</p>

      {/* ✅ Stop propagation inside CartButton */}
      <div onClick={(e) => e.stopPropagation()}>
        <CartButton
          product={{ title, price, img, slug, category, ...rest }}
          className="mt-2"
        />
      </div>
    </div>
  );
}
