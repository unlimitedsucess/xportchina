"use client";

import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/app/store/cartSlice";

export default function ItemsSelected() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (slug, type) => {
    const item = cart.find((i) => i.slug === slug);
    if (!item) return;

    const newQuantity = type === "inc" ? item.quantity + 1 : item.quantity - 1;
    if (newQuantity < 1) return;

    dispatch(updateQuantity({ slug, quantity: newQuantity }));
  };

  const handleRemove = (slug) => {
    dispatch(removeFromCart(slug));
  };

  return (
    <div
      className="w-full bg-white h-fit py-2.5 px-5 rounded-[4px] text-000000"
      style={{ boxShadow: "0 2px 3px 0 hsla(0, 0%, 51%, 0.5)" }}
    >
      <h1 className="text-lg font-semibold mb-4">Your order items</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div
            key={item.slug}
            className="w-full flex justify-between  rounded-[4px] mb-3 py-2 px-2"
            style={{ boxShadow: "0 2px 3px 0 hsla(0, 0%, 51%, 0.5)" }}
          >
            <div className="flex gap-3 w-full ">
              <Image
                src={item.img}
                width={80}
                height={80}
                alt={item.title}
                className="rounded object-cover"
              />
              <div className="flex flex-col justify-between w-full">
                <h2 className="font-medium text-sm text-black">{item.title}</h2>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => handleQuantityChange(item.slug, "dec")}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => handleQuantityChange(item.slug, "inc")}
                  >
                    +
                  </button>
                </div>
                <button
                  className="text-sm text-red-600 underline mt-2 text-left w-fit"
                  onClick={() => handleRemove(item.slug)}
                >
                  Remove
                </button>
              </div>
            </div>
            <p className="text-sm font-bold text-gray-800"> {item.price.toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}
