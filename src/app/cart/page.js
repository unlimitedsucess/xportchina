"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import ItemsSelected from "@/components/ItemsSelected";
import Image from "next/image";

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
    <main className="pt-24 px-5 pb-12 bg-white min-h-screen w-full m-auto relative">
      {/* Coupon Modal */}
      {showCouponModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-md p-5 rounded-lg shadow-lg">
            <h2 className="text-xl font-RobotoBold text-000000 mb-3">
              Enter Coupon Code
            </h2>
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="e.g., SAVE10"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4 outline-0"
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

      {/* Phone Change Modal */}
      {showPhoneModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-md p-5 rounded-lg shadow-lg">
            <h2 className="text-[18px] font-RobotoMedium text-000000 mb-3">
              Update Mobile Number
            </h2>
            <label className="block text-sm mb-1 font-RobotoRegular text-000000">
              Enter new number with country code
            </label>
            <input
              type="tel"
              value={newPhone}
              onChange={(e) => setNewPhone(e.target.value)}
              placeholder="+2348012345678"
              className="w-full border border-gray-300 rounded px-4 py-2 mb-4 outline-0 text-000000"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setShowPhoneModal(false);
                  setNewPhone("");
                }}
                className="px-4 py-2 rounded bg-gray-200 text-black"
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

      <div className="h-fit relative px-5 w-[650px] m-auto">
        <div
          className="w-[140px] h-fit py-2.5 px-5 rounded-[4px] bg-white text-center mb-5"
          style={{ boxShadow: "0 2px 3px 0 hsla(0, 0%, 51%, 0.5)" }}
        >
          <h1 className="font-RobotoMedium text-2xl text-000000">
            ${totalPrice.toLocaleString()}
          </h1>
          <p className="font-RobotoMedium text-[18px] text-000000">
            {totalItems} item{totalItems !== 1 && "s"}
          </p>
        </div>

        {/* Chat Section */}
        <div
          className="flex text-000000 items-center justify-between mb-5 w-full py-2.5 px-5 rounded-[4px]"
          style={{ boxShadow: "0 2px 3px 0 hsla(0, 0%, 51%, 0.5)" }}
        >
          <div>
            <h1 className="font-RobotoMedium text-[18px]">have a question?</h1>
            <p className="font-RobotoRegular text-[16px]">chat with us</p>
          </div>
          <a
            className="flex items-center gap-2 rounded-2xl bg-[#EFF7F0] font-RobotoRegular text-[12px] text-000000 py-1.5 px-3"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25"
              height="25"
            >
              <path
                fill="#cfd8dc"
                d="M24 4C13 4 4 13 4 24c0 3.4.8 6.7 2.5 9.6L4 43.1c-.1.3 0 .7.2.9s.5.3.8.3c.1 0 .2 0 .3-.1l9.7-2.5c2.8 1.5 6 2.2 9.2 2.2 11 0 20-9 20-20S35 4 24 4z"
              ></path>
              <path
                fill="#40c351"
                d="M24 6c10 0 18 8 18 18s-8 18-18 18c-3 0-6-.8-8.6-2.3l-1-.5-5.8 1.5 1.5-5.8-.5-1C7.8 30 7 27 7 24 7 14 14 6 24 6m0-2C13 4 4 13 4 24c0 3.4.8 6.7 2.5 9.6L4 43.1c-.1.3 0 .7.2.9.2.2.5.3.8.3.1 0 .2 0 .3-.1l9.7-2.5c2.8 1.5 6 2.2 9.2 2.2 11 0 20-9 20-20S35 4 24 4z"
              ></path>
              <path
                fill="#fff"
                d="M19.3 16c-.4-.8-.7-.8-1.1-.8-.3 0-.6 0-.9 0s-.8.1-1.3.6c-.4.5-1.7 1.6-1.7 4 0 2.3 1.7 4.6 1.9 4.9.2.3 3.3 5.3 8.1 7.2 4 1.6 4.8 1.3 5.7 1.2.9-.1 2.8-1.1 3.2-2.3s.4-2.1.3-2.3c-.1-.2-.4-.3-.9-.6s-2.8-1.4-3.2-1.5c-.4-.2-.8-.2-1.1.2-.3.5-1.2 1.5-1.5 1.9-.3.3-.6.4-1 .1-.5-.2-2-.7-3.8-2.4-1.4-1.3-2.4-2.8-2.6-3.3-.3-.5 0-.7.2-1 .2-.2.5-.6.7-.8.2-.3.3-.5.5-.8.1-.3.1-.6 0-.8C20.6 19.3 19.7 17 19.3 16z"
              ></path>
            </svg>
            chat now
          </a>
        </div>

        <ItemsSelected />

        {/* Apply Coupon Button */}
        <div
          className="w-full flex gap-2.5 text-[#2547AD] bg-white h-fit py-2.5 px-5 rounded-[4px] mt-5 cursor-pointer"
          style={{ boxShadow: "0 2px 3px 0 hsla(0, 0%, 51%, 0.5)" }}
          onClick={() => setShowCouponModal(true)}
        >
          <svg
            fill="#2547ad"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="25"
            height="25"
          >
            <path d="M 9 16 C 6.8 16 5 17.8 5 20v14h1c3.3 0 6 2.7 6 6s-2.7 6-6 6h-1v14c0 2.2 1.8 4 4 4h62c2.2 0 4-1.8 4-4V46h-1c-3.3 0-6-2.7-6-6s2.7-6 6-6h1V20c0-2.2-1.8-4-4-4H9z"></path>
          </svg>
          <button className="cursor-pointer">Apply coupon</button>
        </div>

        {/* Total */}
        <div
          className="w-full bg-white h-fit py-2.5 px-5 rounded-[4px] flex items-center justify-between font-RobotoBold text-000000 mt-5"
          style={{ boxShadow: "0 2px 3px 0 hsla(0, 0%, 51%, 0.5)" }}
        >
          <p>Total</p>
          <p>${totalPrice.toLocaleString()}</p>
        </div>

        {/* Billing Details */}
        <div
          className="w-full bg-white h-fit py-2.5 px-5 rounded-[4px] font-RobotoMedium text-000000 mt-5"
          style={{ boxShadow: "0 2px 3px 0 hsla(0, 0%, 51%, 0.5)" }}
        >
          <h1 className="text-[18px]">Billing details</h1>
          <form>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-base font-RobotoRegular">Name</label>
              <input
                type="text"
                required
                className="py-2 px-3.5 rounded-sm border border-000000 outline-none focus:ring-0 focus:border-000000"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-base font-RobotoRegular">
                Mobile number
              </label>
              <div className="flex items-center justify-between">
                <p>{phone}</p>
                <button
                  type="button"
                  onClick={() => setShowPhoneModal(true)}
                  className="text-blue-600 hover:underline"
                >
                  Change Number
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-base font-RobotoRegular">Email</label>
              <input
                type="email"
                required
                className="py-2 px-3.5 text-000000 rounded-sm border border-000000 outline-none focus:ring-0 focus:border-000000"
              />
            </div>
          </form>
        </div>

        <div
          className="w-full bg-white h-fit py-2.5 px-5 rounded-[4px]  font-RobotoBold text-000000 mt-5"
          style={{ boxShadow: "0 2px 3px 0 hsla(0, 0%, 51%, 0.5)" }}
        >
          <h1 className="font-RobotoMedium  text-[18px] mb-2">
            Additional Details
          </h1>
          <div className="flex flex-col gap-1 mb-1">
            <label className="text-base font-RobotoRegular">
              Additional Note
            </label>
            <input
              placeholder="Entere here"
              type="text"
              required
              className="py-2 px-3.5 rounded-sm border border-000000 outline-none focus:ring-0 focus:border-000000"
            />
          </div>
        </div>
        <div
          className="w-full bg-white h-fit py-2.5 px-5 rounded-[4px]  font-RobotoBold text-000000 mt-5"
          style={{ boxShadow: "0 2px 3px 0 hsla(0, 0%, 51%, 0.5)" }}
        >
          <h1 className="text-[18px]">Shipping details</h1>
          <form>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-base font-RobotoRegular">Country</label>
              <select className="py-2 px-3.5 rounded-sm border border-000000 outline-none focus:ring-0 focus:border-000000">
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

            <div className="flex flex-col gap-1 mb-2">
              <label className="text-base font-RobotoRegular">
                Pincode/Zipcode/Postal code
              </label>
              <input
                type="number"
                placeholder="Please enter your Pincode/Zipcode/Postal code"
                required
                className="py-2 px-3.5 rounded-sm border border-000000 outline-none focus:ring-0 focus:border-000000"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-base font-RobotoRegular">
                Flat, House no., Building, Company, Apartment*
              </label>
              <input
                type="text"
                placeholder="Flat, House no., Building, Company, Apartment"
                required
                className="py-2 px-3.5 rounded-sm border border-000000 outline-none focus:ring-0 focus:border-000000"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-base font-RobotoRegular">
                Area, Colony, Street, Sector, Village
              </label>
              <input
                placeholder="Area, Colony, Street, Sector, Village"
                type="text"
                required
                className="py-2 px-3.5 rounded-sm border border-000000 outline-none focus:ring-0 focus:border-000000"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-base font-RobotoRegular">Landmark</label>
              <input
                placeholder="near post-office, hospital, school, bank"
                type="text"
                required
                className="py-2 px-3.5 text-000000 rounded-sm border border-000000 outline-none focus:ring-0 focus:border-000000"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-base font-RobotoRegular">State</label>
              <input
                placeholder="Type state name"
                type="text"
                required
                className="py-2 px-3.5 text-000000 rounded-sm border border-000000 outline-none focus:ring-0 focus:border-000000"
              />
            </div>
            <div className="flex flex-col gap-1 mb-2">
              <label className="text-base font-RobotoRegular">City</label>
              <input
                placeholder="Type city name"
                type="text"
                required
                className="py-2 px-3.5 text-000000 rounded-sm border border-000000 outline-none focus:ring-0 focus:border-000000"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="w-full px-[200px] flex items-center justify-center"></div>
    </main>
  );
}
