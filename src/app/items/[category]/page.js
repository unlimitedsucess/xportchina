"use client";

import { useParams } from "next/navigation";
import products from "@/data/product";
import Items from "@/components/Items";
import FilterBox from "@/components/FilterBox";
import { useEffect, useState, useMemo } from "react";

const categoryLabels = {
  all: "Equipos Nuevos || 2 año de garantía",
  "brand-new": "Bitmain Antminers Nuevos || Brand New",
  "second-hand": "Bitmain Antminers Usados || Second Hand (used)",
  "piscinas-inmersion": "Piscinas para refrigeracion por inmersion",
  "hydro-cabinas": "Hydro Cabinas",
  "spare-part": "Partes & Repuestos para Bitmain Antminer",
};

export default function CategoryPage() {
  const params = useParams();
  const category = params?.category || "all";

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const filteredProducts = useMemo(() => {
    const min = parseFloat(minPrice) || 0;
    const max = parseFloat(maxPrice) || Infinity;

    return products.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      try {
        const numericPrice = parseFloat(p.price.replace(/[$,]/g, ""));
        return numericPrice >= min && numericPrice <= max;
      } catch {
        return false;
      }
    });
  }, [category, minPrice, maxPrice]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [filteredProducts]);

  if (isLoading) {
    return (
      <main className="flex gap-6 pt-24 px-6 pb-12 bg-white min-h-screen">
        <div className="w-64 bg-gray-100 rounded-lg p-4 animate-pulse"></div>
        <div className="flex-1">
          <div className="h-10 bg-gray-100 rounded w-1/2 mx-auto mb-6 animate-pulse"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-gray-100 rounded-lg h-80 animate-pulse"></div>
            ))}
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex gap-6 pt-24 px-6 pb-12 bg-white min-h-screen">
      {/* Sidebar Filter */}
      <div className="hidden md:block w-64 flex-shrink-0">
        <FilterBox
          minPrice={minPrice}
          maxPrice={maxPrice}
          onMinChange={setMinPrice}
          onMaxChange={setMaxPrice}
        />
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          {categoryLabels[category] || "Productos"}
        </h1>

        <p className="text-center text-gray-600 mb-4">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "item" : "items"} encontrados
        </p>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-lg text-gray-600">No se encontraron productos</p>
            <button
              onClick={() => {
                setMinPrice("");
                setMaxPrice("");
              }}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <Items
                key={`${product.slug}-${product.category}`}
                {...product}
              />
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
