"use client";
import CartPage from "@/components/CartPage";
import { useRef } from "react";

export default function CartPageWrapper() {
  const cartRef = useRef();

  return (
    <div className="pt-1" data-cart-page-ref>
      <CartPage ref={cartRef} />
    </div>
  );
}
