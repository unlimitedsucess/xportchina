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
          amount: parseFloat((fullProduct?.price || cartItem.price || "0").replace(/[$,]/g, "")),
          quantity: cartItem.quantity,
          imageUrl: `https://xportchina.vercel.app${fullProduct?.img}` ||"",
          sku: fullProduct?.details?.sku || "",
          warranty: fullProduct?.details?.warranty,
          aduana: fullProduct?.moreDetails?.Aduana || "",
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
    <main className=" px-4 pb-12 min-h-screen w-full m-auto">
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
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">
                  Bosnia and Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cabo Verde">Cabo Verde</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo (Congo-Brazzaville)">
                  Congo (Congo-Brazzaville)
                </option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Greece">Greece</option>
                <option value="Grenada">Grenada</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="North Korea">North Korea</option>
                <option value="North Macedonia">North Macedonia</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts and Nevis">
                  Saint Kitts and Nevis
                </option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Vincent and the Grenadines">
                  Saint Vincent and the Grenadines
                </option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">
                  Sao Tome and Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Korea">South Korea</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-Leste">Timor-Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City">Vatican City</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
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
