"use client";

import { useImperativeHandle, forwardRef, useRef, useState } from "react";
import { useSelector } from "react-redux";
import PhoneModal from "@/components/PhoneModal";
import ItemsSelected from "@/components/ItemsSelected";
import ConfirmButtonBar from "@/components/ConfirmButtonBar";
import products from "@/data/product";

const CartPage = forwardRef((props, ref) => {
  const cart = useSelector((state) => state.cart.cart);


  const nameRef = useRef();
  const emailRef = useRef();
  const noteRef = useRef();
  const countryRef = useRef();
  const zipRef = useRef();
  const houseRef = useRef();
  const streetRef = useRef();
  const landmarkRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();

  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [phone, setPhone] = useState("+130000000000");
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [coupon, setCoupon] = useState("");

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce((acc, item) => {
    const price = parseFloat(item.price.replace(/[$,]/g, "")) || 0;
    return acc + price * item.quantity;
  }, 0);

  useImperativeHandle(ref, () => ({
    getOrderData() {
      const selectedProducts = cart.map((cartItem) => {
        const fullProduct = products.find((p) => p.slug === cartItem.slug);
         console.log("Full Product:", fullProduct);

        
        return {
          productName: fullProduct?.title || "N/A",
          description: fullProduct?.details?.dimensions || "",
          amount: fullProduct?.price || cartItem.price,
          quantity: cartItem.quantity,
          imageUrl: fullProduct?.img || "",
          sku: fullProduct?.details?.sku || "",
          warranty: fullProduct?.details?.warranty || "",
          fuente: fullProduct?.moreDetails?.fuente || "",
          aduana: fullProduct?.moreDetails?.Aduana || "",
          cable: fullProduct?.moreDetails?.cable || fullProduct?.moreDetails?.Radiador || "",
          category : fullProduct?.category || "",
        };
      });

     
      return {
        name: nameRef.current?.value,
        mobileNumber: phone,
        email: emailRef.current?.value,
        additionalNote: noteRef.current?.value,
        country: countryRef.current?.value,
        zipCode: zipRef.current?.value,
        house: houseRef.current?.value,
        street: streetRef.current?.value,
        landmark: landmarkRef.current?.value,
        state: stateRef.current?.value,
        city: cityRef.current?.value,
        total: totalPrice.toFixed(2),
        products: selectedProducts,
      };
    },
  }));

  return (
    <main className="pt-24 px-4 pb-12 min-h-screen w-full m-auto">
      {showPhoneModal && <PhoneModal setShowPhoneModal={setShowPhoneModal} setPhone={setPhone} />}

      <div className="w-full max-w-[650px] mx-auto">
        <div className="w-[140px] py-2.5 px-5 text-black rounded mb-5 bg-white shadow-custom-header">
          <h1 className="text-[24px] font-RobotoMedium">${totalPrice.toLocaleString()}</h1>
          <p className="text-[18px] font-RobotoRegular">
            {totalItems} item{totalItems !== 1 && "s"}
          </p>
        </div>

        <div className="flex text-black justify-between items-center py-3 px-5 bg-white shadow-custom-header rounded mb-5">
          <div>
            <p className="text-[18px] font-RobotoMedium">Have a question?</p>
            <p className="text-[16px] font-RobotoRegular">Chat with us</p>
          </div>
          <a
            href="https://wa.me/17023197242"
            className="bg-[#EFF7F0] text-[12px] font-RobotoRegular px-4 py-1.5 rounded-2xl flex items-center gap-2"
          >
            Chat now
          </a>
        </div>

        <ItemsSelected />

        <div className="py-4 px-5 mt-5 bg-white text-black rounded shadow-custom-header">
          <h2 className="font-RobotoMedium text-[18px] mb-2">Billing details</h2>
          <form className="space-y-3">
            <div>
              <label className="block font-RobotoRegular mb-1 text-base">Name</label>
              <input type="text" ref={nameRef} required className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block font-RobotoRegular mb-1 text-base">Mobile number</label>
              <div className="flex justify-between items-center">
                <p>{phone}</p>
                <button type="button" onClick={() => setShowPhoneModal(true)} className="text-blue-600 text-sm underline">
                  Change
                </button>
              </div>
            </div>
            <div>
              <label className="block font-RobotoRegular mb-1 text-base">Email</label>
              <input type="email" ref={emailRef} required className="w-full border px-3 py-2 rounded" />
            </div>
          </form>
        </div>

        <div className="py-4 px-5 mt-5 text-black bg-white rounded shadow-custom-header">
          <h2 className="font-RobotoMedium text-[18px] mb-2">Additional Details</h2>
          <label className="block mb-1 font-RobotoRegular text-[16px]">Additional Note</label>
          <input ref={noteRef} type="text" placeholder="Enter note" className="w-full border px-3 py-2 rounded" />
        </div>

        <div className="py-4 px-5 text-black mt-5 bg-white rounded shadow-custom-header">
          <h2 className="font-RobotoMedium text-[18px] mb-2">Shipping Details</h2>
          <form className="space-y-3">
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">Country</label>
              <select ref={countryRef} className="w-full border font-RobotoRegular text-[16px] px-3 py-2 rounded">
                <option value="">Select a country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
              </select>
            </div>
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">Zipcode</label>
              <input ref={zipRef} type="number" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">Flat/House</label>
              <input ref={houseRef} type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">Street/Area</label>
              <input ref={streetRef} type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">Landmark</label>
              <input ref={landmarkRef} type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">State</label>
              <input ref={stateRef} type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">City</label>
              <input ref={cityRef} type="text" className="w-full border px-3 py-2 rounded" />
            </div>
          </form>
        </div>

        <div className="mt-6">
          <ConfirmButtonBar cartRef={ref} />
        </div>
      </div>
    </main>
  );
});

CartPage.displayName = "CartPage";
export default CartPage;
