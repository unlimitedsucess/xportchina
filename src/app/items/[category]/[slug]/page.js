"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState, use } from "react";
import products from "@/data/product";
import CartButton from "@/components/CartButton";

export default function ProductDetail(props) {
  const router = useRouter();

  // ✅ Use new Next.js App Router style param unwrapping
  const { slug, category } = use(props.params);

  const [product, setProduct] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Get all products in the same category
  const categoryProducts = products.filter((p) => p.category === category);
  console.log("filtered products", categoryProducts);
  console.log("filtered category", category);

useEffect(() => {
  const index = categoryProducts.findIndex((p) => p.slug === slug);
  if (index !== -1) {
    setCurrentIndex(index);
    setProduct(categoryProducts[index]);
  }
}, [slug, category, categoryProducts]);

  const handleNext = () => {
    if (currentIndex < categoryProducts.length - 1) {
      const nextProduct = categoryProducts[currentIndex + 1];
      router.push(`/items/${nextProduct.category}/${nextProduct.slug}`);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevProduct = categoryProducts[currentIndex - 1];
      router.push(`/items/${prevProduct.category}/${prevProduct.slug}`);
    }
  };

  if (!product) {
    return <div className="pt-32 text-center">Loading...</div>;
  }

  const related = categoryProducts.filter((p) => p.slug !== slug);

  return (
    <main className="pt-24 px-5 pb-12  min-h-screen">
      <div className="w-full h-fit relative px-5">
        <button
          onClick={handlePrev}
          className={`${
            currentIndex === 0 ? "hidden" : "flex"
          } absolute left-0 top-1/2 transform -translate-y-1/2 z-3 bg-white rounded-full shadow-md hover:scale-110 transition`}
        >
          <Image
            width={40}
            height={40}
            src="/assets/navButton/left-angle-black-4.png"
            alt="arrow-left"
          />
        </button>
        <button
          onClick={handleNext}
          className={`${
            currentIndex === categoryProducts.length - 1 ? "hidden" : "flex"
          } absolute right-0 top-1/2 transform -translate-y-1/2 z-3 bg-white rounded-full shadow-md hover:scale-110 transition`}
        >
          <Image
            width={40}
            height={40}
            src="/assets/navButton/right-angle-black-2.png"
            alt="arrow-right"
          />
        </button>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Image
            src={product.img}
            alt={product.title}
            width={600}
            height={400}
            className="rounded-lg w-full h-[500px] object-cover"
          />

          <div>
            <p className="text-2xl text-blue-600 font-RobotoBold mb-4">
              price: {product.price}
            </p>

            <h1 className="text-2xl font-RobotoBold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-[#888888] text-base font-RobotoMedium">
              {product.details.sku} <br />
              {product.details.power} <br />
              {product.details.dimensions} <br />
              {product.details.weight} <br />
              {product.details.warranty}
            </p>

            <p className="text-gray-700 mb-6">{product.description}</p>
            <CartButton product={product} className="w-fit" />

            <p className="text-[#333333] text-lg font-RobotoMedium pt-2">
              {product.moreDetails.fuente} <br />
              {product.moreDetails.cable} <br />
              {product.moreDetails.flete} <br />
              {product.moreDetails.Flete} <br />
              {product.moreDetails.Aduana} <br />
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">
          {`${product.category} ${related.length}`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 w-full">
          {related.map((item) => (
            <div
              key={item.slug}
              className="bg-white shadow rounded p-4 cursor-pointer hover:shadow-lg w-full"
              onClick={() => router.push(`/items/${category}/${item.slug}`)}
            >
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-md object-cover w-full h-48"
              />
              <h3 className="mt-2 font-semibold text-gray-800 text-md">
                {item.title}
              </h3>
              <p className="text-blue-600 font-bold">{item.price}</p>
              {/* ✅ Use the correct item here */}
              <div onClick={(e) => e.stopPropagation()}>
                <CartButton product={item} className="w-fit" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
