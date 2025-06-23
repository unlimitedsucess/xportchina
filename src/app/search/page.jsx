"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import products from "@/data/product";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  const filtered =
    query && query.trim() !== ""
      ? products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <div className="px-4 sm:px-6 md:px-8 py-6 max-w-screen-xl mx-auto w-full">
      {!query || query.trim() === "" ? (
        <p className="text-black text-base text-center sm:text-left">
          Search products by{" "}
          <span className="font-medium">
            SKU, title, description, price, tags, colors
          </span>
          , etc.
        </p>
      ) : (
        <>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-black text-center sm:text-left">
            Results for: <span className="text-blue-600">"{query}"</span>
          </h2>

          {filtered.length === 0 ? (
            <p className="text-black text-center sm:text-left">
              No products found. Please try searching something else.
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {filtered.map((product) => (
                <Link
                  key={product.slug}
                  href={`/items/${product.slug}`}
                  className="border rounded p-2 hover:shadow-md transition bg-white"
                >
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={200}
                    height={120}
                    className="w-full h-[120px] sm:h-[140px] object-cover rounded"
                  />
                  <h2 className="text-sm mt-2 font-medium text-black truncate">
                    {product.title}
                  </h2>
                  <p className="text-xs text-gray-600">{product.price}</p>
                </Link>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
