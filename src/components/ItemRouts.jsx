"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ItemRouts() {
  const [loadingSlug, setLoadingSlug] = useState(null);
  const router = useRouter();

  const items = [
    {
      title: "Equipos Nuevos || Brand New Bitmain",
      image: "/images/brandnew/brandnewIProfile.jpg",
      alt: "Brand New Product",
      slug: "brand-new",
      label: "Bitmain Antminers Nuevos || Brand New",
      count: "15 items",
    },
    {
      title: "Equipos de segunda mano || Second Hand",
      image: "/images/secondhand/secondhandP.jpg",
      alt: "Second Hand Product",
      slug: "second-hand",
      label: "Bitmain Antminers Usados || Second Hand (used)",
      count: "2 items",
    },
    {
      title: "Piscinas para inmersión & Hydro Cabinas",
      group: true,
      items: [
        {
          image: "/images/refigerator/refiP.jpg",
          alt: "Refrigerator",
          slug: "piscinas-inmersion",
          label: "Piscinas para refrigeracion por inmersion",
          count: "6 items",
        },
        {
          image: "/images/refigerator/hydro.jpg",
          alt: "Hydro Cabinas",
          slug: "hydro-cabinas",
          label: "Hydro Cabinas",
          count: "7 items",
        },
      ],
    },
    {
      title: "Repuestos para Bitmain Antminer ||Spare part",
      image: "/images/secondhand/secondhandP.jpg",
      alt: "Second Hand Product",
      slug: "second-hand",
      label: "Partes & Repuestos para Bitmain Antminer )",
      count: "6 items",
    },
  ];

  const handleClick = (slug, e) => {
    e.preventDefault();
    setLoadingSlug(slug);
    setTimeout(() => {
      router.push(`/items/${slug}`);
    }, 700);
  };

  const renderBox = (item) => (
    <div
      key={item.slug}
      className="bg-ffffff mt-5 h-[320px] rounded-[12px] w-[229px] cursor-pointer shadow-md hover:shadow-lg transition-shadow"
      onClick={(e) => handleClick(item.slug, e)}
    >
      <Image
        className="rounded-t-[12px] h-[241px] w-[229px]"
        src={item.image}
        alt={item.alt}
        width={419}
        height={500}
      />
      {loadingSlug === item.slug ? (
        <div className="flex justify-center items-center h-[58px]">
          <div className="w-5 h-5 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          <p className="text-center text-sm font-RobotoBold text-[#373737] pt-2 px-2">
            {item.label}
          </p>
          <p className="text-center m-auto text-sm font-RobotoRegular text-[#373737] px-2.5">
            {item.count}
          </p>
        </>
      )}
    </div>
  );

  return (
    <main className="pt-16">
      <h1 className="text-2f3d55">
        Sign up to continue. <br />
        Debe resgistrase para continuar.
      </h1>
      <div className="pt-10">
        {items.map((section, index) => (
          <div className="pt-8" key={index}>
            <h1 className="text-21p text-2f3d55 font-RobotoBold">
              {section.title}
            </h1>
            {section.group ? (
              <div className="flex gap-8 mt-5 flex-wrap">
                {section.items.map((item) => renderBox(item))}
              </div>
            ) : (
              renderBox(section)
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
