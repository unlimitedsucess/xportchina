"use client";

import { useSelector } from "react-redux";
import { toast } from "sonner";
import { useState } from "react";
import Image from "next/image";

export default function ConfirmButtonBar({ cartRef }) {
  const cart = useSelector((state) => state.cart.cart);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmitOrder = async () => {
    const formValues = cartRef?.current?.getOrderData?.();
    if (!formValues) {
      toast.error("Please fill all required fields.");
      return;
    }

    console.log("Form Values:", formValues);

    try {
      setIsSubmitting(true);
      const response = await fetch(
        "https://send-email-myu2.onrender.com/api/v1/email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formValues),
        }
      );

      const result = await response.json();
      console.log("Response from server:", result);

      if (!response.ok) {
        if (result.errors) {
          result.errors.forEach((error) => toast.error(error));
        } else if (result.message) {
          toast.error(result.message);
        } else {
          toast.error("An error occurred. Please try again.");
        }
      } else {
        toast.success("Order submitted successfully!");
      }
    } catch (err) {
      toast.error("Network error. Try again later.");
    } finally {
      setIsSubmitting(false);
      setShowModal(false);
    }
  };

  if (cart.length === 0) return null;

  return (
    <>
      {/* Floating confirm button */}
      <div className="mx-auto fixed bottom-0 mb-[10px] left-0 right-0 z-50 w-full max-w-[320px] md:max-w-[620px] px-4 sm:px-6 py-4 bg-blue-600 rounded-lg flex justify-center">
        <button
          onClick={() => setShowModal(true)}
          disabled={isSubmitting}
          className="text-white px-6 py-2 rounded-lg flex items-center gap-2 text-sm sm:text-base font-RobotoBold"
        >
          {isSubmitting ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="white"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="white"
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
          ) : (
            <>
              <span>Confirm Order</span>
              <Image
                src="/assets/arrow-long-right-white.svg"
                alt="arrow"
                width={32}
                height={24}
                className="absolute right-4 top-1/2 -translate-y-1/2"
              />
            </>
          )}
        </button>
      </div>

      {/* Confirmation Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-sm text-black">
            <h2 className="text-lg font-semibold mb-2">Confirm Your Order</h2>
            <p className="text-sm mb-5">
              Do you want to confirm and finalize this order?
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 rounded bg-gray-200"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmitOrder}
                disabled={isSubmitting}
                className="px-4 py-2 rounded bg-blue-600 text-white"
              >
                {isSubmitting ? "Submitting..." : "Yes, Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
