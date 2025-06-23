"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import ItemsSelected from "@/components/ItemsSelected";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.cart);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [phone, setPhone] = useState("+130000000000");
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [newPhone, setNewPhone] = useState("");

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, "")) || 0;
    return acc + price * item.quantity;
  }, 0);

  const handleApplyCoupon = () => {
    console.log("Coupon applied:", coupon);
    setShowCouponModal(false);
    setCoupon("");
  };

  return (
    <main className="pt-24 px-4 pb-12 bg-white min-h-screen w-full m-auto">
      {/* Coupon Modal */}
      {showCouponModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-md p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">Enter Coupon Code</h2>
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="e.g., SAVE10"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowCouponModal(false)}
                className="px-4 py-2 rounded bg-gray-200 text-black"
              >
                Cancel
              </button>
              <button
                onClick={handleApplyCoupon}
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Phone Modal */}
      {showPhoneModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-md p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-medium mb-3">Update Mobile Number</h2>
            <label className="text-sm mb-1">Enter new number with country code</label>
            <input
              type="tel"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              placeholder="+2348012345678"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowPhoneModal(false);
                  setNewPhone("");
                }}
                className="px-4 py-2 rounded bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (newPhone.trim()) {
                    setPhone(newPhone);
                    setNewPhone("");
                    setShowPhoneModal(false);
                  }
                }}
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Cart Content */}
      <div className="w-full max-w-[650px] mx-auto">
        {/* Total Box */}
        <div className="w-full py-2.5 px-5 rounded mb-5 bg-white text-center shadow">
          <h1 className="text-2xl font-medium">${totalPrice.toLocaleString()}</h1>
          <p className="text-lg">{totalItems} item{totalItems !== 1 && "s"}</p>
        </div>

        {/* Chat Box */}
        <div className="flex justify-between items-center py-3 px-5 bg-white shadow rounded mb-5">
          <div>
            <p className="font-medium text-base">Have a question?</p>
            <p className="text-sm">Chat with us</p>
          </div>
          <a
            href="#"
            className="bg-[#EFF7F0] text-sm px-4 py-1.5 rounded-2xl flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20"
              height="20"
            >
              <path fill="#40c351" d="M24 4C13 4 4 13 4 24c0..." />
            </svg>
            Chat now
          </a>
        </div>

        {/* Items */}
        <ItemsSelected />

        {/* Coupon Button */}
        <div
          onClick={() => setShowCouponModal(true)}
          className="w-full flex items-center gap-3 cursor-pointer mt-5 py-2.5 px-5 bg-white rounded shadow text-blue-700"
        >
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
            <path d="..." />
          </svg>
          <span>Apply coupon</span>
        </div>

        {/* Total Summary */}
        <div className="flex justify-between py-2.5 px-5 mt-5 bg-white rounded shadow font-semibold">
          <p>Total</p>
          <p>${totalPrice.toLocaleString()}</p>
        </div>

        {/* Billing Form */}
        <div className="py-4 px-5 mt-5 bg-white rounded shadow">
          <h2 className="font-medium text-lg mb-2">Billing details</h2>
          <form className="space-y-3">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input type="text" required className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Mobile number</label>
              <div className="flex justify-between items-center">
                <p>{phone}</p>
                <button
                  type="button"
                  onClick={() => setShowPhoneModal(true)}
                  className="text-blue-600 text-sm underline"
                >
                  Change
                </button>
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input type="email" required className="w-full border px-3 py-2 rounded" />
            </div>
          </form>
        </div>

        {/* Additional Details */}
        <div className="py-4 px-5 mt-5 bg-white rounded shadow">
          <h2 className="font-medium text-lg mb-2">Additional Details</h2>
          <div>
            <label className="block mb-1 text-sm">Additional Note</label>
            <input
              type="text"
              placeholder="Enter note"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>

        {/* Shipping Form */}
        <div className="py-4 px-5 mt-5 bg-white rounded shadow">
          <h2 className="font-medium text-lg mb-2">Shipping Details</h2>
          <form className="space-y-3">
            <div>
              <label className="block mb-1 text-sm">Country</label>
              <select className="w-full border px-3 py-2 rounded">
                <option value="">Select a country</option>
                {/* Add country options */}
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm">Pincode/Zipcode</label>
              <input type="number" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Flat/House/Apartment</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Street/Area</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Landmark</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 text-sm">State</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 text-sm">City</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}

import { useSelector } from "react-redux";
import { useState } from "react";
import ItemsSelected from "@/components/ItemsSelected";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.cart);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [phone, setPhone] = useState("+130000000000");
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [newPhone, setNewPhone] = useState("");

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, "")) || 0;
    return acc + price * item.quantity;
  }, 0);

  const handleApplyCoupon = () => {
    console.log("Coupon applied:", coupon);
    setShowCouponModal(false);
    setCoupon("");
  };

  return (
    <main className="pt-24 px-4 pb-12 bg-white min-h-screen w-full m-auto">
      {/* Coupon Modal */}
      {showCouponModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-md p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-3">Enter Coupon Code</h2>
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="e.g., SAVE10"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowCouponModal(false)}
                className="px-4 py-2 rounded bg-gray-200 text-black"
              >
                Cancel
              </button>
              <button
                onClick={handleApplyCoupon}
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Phone Modal */}
      {showPhoneModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-md p-5 rounded-lg shadow-lg">
            <h2 className="text-lg font-medium mb-3">Update Mobile Number</h2>
            <label className="text-sm mb-1">Enter new number with country code</label>
            <input
              type="tel"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              placeholder="+2348012345678"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowPhoneModal(false);
                  setNewPhone("");
                }}
                className="px-4 py-2 rounded bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (newPhone.trim()) {
                    setPhone(newPhone);
                    setNewPhone("");
                    setShowPhoneModal(false);
                  }
                }}
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Cart Content */}
      <div className="w-full max-w-[650px] mx-auto">
        {/* Total Box */}
        <div className="w-full py-2.5 px-5 rounded mb-5 bg-white text-center shadow">
          <h1 className="text-2xl font-medium">${totalPrice.toLocaleString()}</h1>
          <p className="text-lg">{totalItems} item{totalItems !== 1 && "s"}</p>
        </div>

        {/* Chat Box */}
        <div className="flex justify-between items-center py-3 px-5 bg-white shadow rounded mb-5">
          <div>
            <p className="font-medium text-base">Have a question?</p>
            <p className="text-sm">Chat with us</p>
          </div>
          <a
            href="#"
            className="bg-[#EFF7F0] text-sm px-4 py-1.5 rounded-2xl flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="20"
              height="20"
            >
              <path fill="#40c351" d="M24 4C13 4 4 13 4 24c0..." />
            </svg>
            Chat now
          </a>
        </div>

        {/* Items */}
        <ItemsSelected />

        {/* Coupon Button */}
        <div
          onClick={() => setShowCouponModal(true)}
          className="w-full flex items-center gap-3 cursor-pointer mt-5 py-2.5 px-5 bg-white rounded shadow text-blue-700"
        >
          <svg fill="currentColor" width="20" height="20" viewBox="0 0 20 20">
            <path d="..." />
          </svg>
          <span>Apply coupon</span>
        </div>

        {/* Total Summary */}
        <div className="flex justify-between py-2.5 px-5 mt-5 bg-white rounded shadow font-semibold">
          <p>Total</p>
          <p>${totalPrice.toLocaleString()}</p>
        </div>

        {/* Billing Form */}
        <div className="py-4 px-5 mt-5 bg-white rounded shadow">
          <h2 className="font-medium text-lg mb-2">Billing details</h2>
          <form className="space-y-3">
            <div>
              <label className="block mb-1 text-sm">Name</label>
              <input type="text" required className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Mobile number</label>
              <div className="flex justify-between items-center">
                <p>{phone}</p>
                <button
                  type="button"
                  onClick={() => setShowPhoneModal(true)}
                  className="text-blue-600 text-sm underline"
                >
                  Change
                </button>
              </div>
            </div>
            <div>
              <label className="block mb-1 text-sm">Email</label>
              <input type="email" required className="w-full border px-3 py-2 rounded" />
            </div>
          </form>
        </div>

        {/* Additional Details */}
        <div className="py-4 px-5 mt-5 bg-white rounded shadow">
          <h2 className="font-medium text-lg mb-2">Additional Details</h2>
          <div>
            <label className="block mb-1 text-sm">Additional Note</label>
            <input
              type="text"
              placeholder="Enter note"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>

        {/* Shipping Form */}
        <div className="py-4 px-5 mt-5 bg-white rounded shadow">
          <h2 className="font-medium text-lg mb-2">Shipping Details</h2>
          <form className="space-y-3">
            <div>
              <label className="block mb-1 text-sm">Country</label>
              <select className="w-full border px-3 py-2 rounded">
                <option value="">Select a country</option>
                {/* Add country options */}
              </select>
            </div>
            <div>
              <label className="block mb-1 text-sm">Pincode/Zipcode</label>
              <input type="number" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Flat/House/Apartment</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Street/Area</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 text-sm">Landmark</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 text-sm">State</label>
              <input type="text" className="w-full border px-3 py-2 rounded"/>
            </div>
            <div>
              <label className="block mb-1 text-sm">City</label>
              <input type="text" className="w-full border px-3 py-2 rounded"/>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
