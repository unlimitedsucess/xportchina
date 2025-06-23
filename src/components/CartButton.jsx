"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart, updateQuantity } from "@/app/store/cartSlice";

export default function CartButton({ className = "", product }) {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.cart.find((item) => item.slug === product.slug)
  );

  const [quantity, setQuantity] = useState(cartItem?.quantity || 0);

  useEffect(() => {
    setQuantity(cartItem?.quantity || 0);
  }, [cartItem]);

  const handleAdd = () => {
    dispatch(addToCart(product));
  };

  const handleIncrease = () => {
    dispatch(updateQuantity({ slug: product.slug, quantity: quantity + 1 }));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ slug: product.slug, quantity: quantity - 1 }));
    } else {
      dispatch(removeFromCart(product.slug));
    }
  };

  if (quantity === 0) {
    return (
      <button
        onClick={handleAdd}
        className={`bg-blue-600 text-white px-6 py-2 w-full rounded hover:bg-blue-700 ${className}`}
      >
        Add to Cart
      </button>
    );
  }

  return (
    <div className={`flex items-center gap-3 w-full ${className}`}>
      <button
        onClick={handleDecrease}
        className="w-8 h-8 bg-[#EAEFF7] text-black rounded text-lg font-bold"
      >
        -
      </button>
      <span className="text-lg text-black font-semibold">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="w-8 h-8 bg-[#2547AD] rounded text-white text-lg font-bold"
      >
        +
      </button>
    </div>
  );
}
