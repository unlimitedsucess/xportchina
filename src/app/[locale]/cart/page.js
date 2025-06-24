"use client";

import { useSelector } from "react-redux";
import { useState } from "react";
import ItemsSelected from "@/components/ItemsSelected";
import PhoneModal from "@/components/PhoneModal";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.cart);
  const [showCouponModal, setShowCouponModal] = useState(false);
  const [coupon, setCoupon] = useState("");
  const [phone, setPhone] = useState("+130000000000");
  const [showPhoneModal, setShowPhoneModal] = useState(false);
 

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
    <main className="pt-24 px-4 pb-12 min-h-screen w-full m-auto">
      {/* Coupon Modal */}
      {showCouponModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50  text-black flex justify-center items-center">
          <div className="bg-white w-[90%] max-w-md p-5 rounded-lg shadow-lg">
            <h2 className="font-RobotoMedium text-[18px] text-black mb-3">Enter Coupon Code</h2>
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
         <PhoneModal setShowPhoneModal={setShowPhoneModal} setPhone={setPhone} />
      )}

      {/* Main Content */}
      <div className="w-full max-w-[650px] mx-auto">
        {/* Total Box */}
        <div className="w-[140px] py-2.5 px-5 text-black rounded mb-5 bg-white  shadow-custom-header">
          <h1 className="text-[24px] font-RobotoMedium">
            ${totalPrice.toLocaleString()}
          </h1>
          <p className="text-[18px] font-RobotoRegular">
            {totalItems} item{totalItems !== 1 && "s"}
          </p>
        </div>

        {/* Chat Box */}
        <div className="flex text-black   justify-between items-center py-3 px-5 bg-white shadow-custom-header rounded mb-5">
          <div>
            <p className="text-[18px] font-RobotoMedium">Have a question?</p>
            <p className="text-[16px] font-RobotoRegular">Chat with us</p>
          </div>
          <a
            href="https://wa.me/17023197242https://wa.me/17023197242"
            className="bg-[#EFF7F0] text-[12px] font-RobotoRegular px-4 py-1.5 rounded-2xl flex items-center gap-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="25"
              height="25"
            >
              <path
                fill="#fff"
                d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"
              ></path>
              <path
                fill="#fff"
                d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"
              ></path>
              <path
                fill="#cfd8dc"
                d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"
              ></path>
              <path
                fill="#40c351"
                d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"
              ></path>
              <path
                fill="#fff"
                fillRule="evenodd"
                d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"
                clipRule="evenodd"
              ></path>
            </svg>
            Chat now
          </a>
        </div>

        {/* Items */}
        <ItemsSelected />

        {/* Coupon Button */}
        <div
          onClick={() => setShowCouponModal(true)}
          className="w-full flex items-center gap-3 cursor-pointer mt-5 py-2.5 px-5 bg-white rounded font-RobotoMedium shadow-custom-header text-[#2547AD]"
        >
          <svg
            fill="#2547ad"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 80 80"
            width="25"
            height="25"
          >
            <path d="M 9 16 C 6.8026661 16 5 17.802666 5 20 L 5 34 L 6 34 C 9.325562 34 12 36.674438 12 40 C 12 43.325562 9.325562 46 6 46 L 5 46 L 5 60 C 5 62.197334 6.8026661 64 9 64 L 71 64 C 73.197334 64 75 62.197334 75 60 L 75 46 L 74 46 C 70.674438 46 68 43.325562 68 40 C 68 36.674438 70.674438 34 74 34 L 75 34 L 75 20 C 75 17.802666 73.197334 16 71 16 L 9 16 z M 9 18 L 24 18 A 1 1 0 0 0 25 19 A 1 1 0 0 0 26 18 L 71 18 C 72.116666 18 73 18.883334 73 20 L 73 32.203125 C 69.084606 32.718014 66 35.947865 66 40 C 66 44.052135 69.084606 47.281986 73 47.796875 L 73 60 C 73 61.116666 72.116666 62 71 62 L 26 62 A 1 1 0 0 0 25 61 A 1 1 0 0 0 24 62 L 9 62 C 7.8833339 62 7 61.116666 7 60 L 7 47.796875 C 10.915394 47.281986 14 44.052135 14 40 C 14 35.947865 10.915394 32.718014 7 32.203125 L 7 20 C 7 18.883334 7.8833339 18 9 18 z M 25 21 A 1 1 0 0 0 24 22 A 1 1 0 0 0 25 23 A 1 1 0 0 0 26 22 A 1 1 0 0 0 25 21 z M 25 25 A 1 1 0 0 0 24 26 A 1 1 0 0 0 25 27 A 1 1 0 0 0 26 26 A 1 1 0 0 0 25 25 z M 39.097656 27.644531 C 36.118656 27.644531 34 30.028672 34 33.388672 C 34 36.765672 36.118656 39.148437 39.097656 39.148438 C 42.076656 39.148438 44.179688 36.764672 44.179688 33.388672 C 44.179688 30.011672 42.076656 27.644531 39.097656 27.644531 z M 53.283203 28.058594 L 44.908203 39.494141 L 35.787109 51.941406 L 38.832031 51.941406 L 47.025391 40.736328 L 56.294922 28.058594 L 53.283203 28.058594 z M 25 29 A 1 1 0 0 0 24 30 A 1 1 0 0 0 25 31 A 1 1 0 0 0 26 30 A 1 1 0 0 0 25 29 z M 39.097656 29.763672 C 40.587656 29.763672 41.53125 31.153672 41.53125 33.388672 C 41.53125 35.573672 40.553656 37.029297 39.097656 37.029297 C 37.624656 37.029297 36.648437 35.589672 36.648438 33.388672 C 36.648438 31.187672 37.607656 29.763672 39.097656 29.763672 z M 25 33 A 1 1 0 0 0 24 34 A 1 1 0 0 0 25 35 A 1 1 0 0 0 26 34 A 1 1 0 0 0 25 33 z M 25 37 A 1 1 0 0 0 24 38 A 1 1 0 0 0 25 39 A 1 1 0 0 0 26 38 A 1 1 0 0 0 25 37 z M 52.919922 40.851562 C 49.940922 40.851562 47.820313 43.235703 47.820312 46.595703 C 47.820312 49.972703 49.940922 52.355469 52.919922 52.355469 C 55.898922 52.355469 58 49.971703 58 46.595703 C 58 43.218703 55.898922 40.851562 52.919922 40.851562 z M 25 41 A 1 1 0 0 0 24 42 A 1 1 0 0 0 25 43 A 1 1 0 0 0 26 42 A 1 1 0 0 0 25 41 z M 52.919922 42.970703 C 54.409922 42.970703 55.351563 44.360703 55.351562 46.595703 C 55.351562 48.780703 54.375922 50.236328 52.919922 50.236328 C 51.446922 50.236328 50.46875 48.796703 50.46875 46.595703 C 50.46875 44.394703 51.429922 42.970703 52.919922 42.970703 z M 25 45 A 1 1 0 0 0 24 46 A 1 1 0 0 0 25 47 A 1 1 0 0 0 26 46 A 1 1 0 0 0 25 45 z M 25 49 A 1 1 0 0 0 24 50 A 1 1 0 0 0 25 51 A 1 1 0 0 0 26 50 A 1 1 0 0 0 25 49 z M 25 53 A 1 1 0 0 0 24 54 A 1 1 0 0 0 25 55 A 1 1 0 0 0 26 54 A 1 1 0 0 0 25 53 z M 25 57 A 1 1 0 0 0 24 58 A 1 1 0 0 0 25 59 A 1 1 0 0 0 26 58 A 1 1 0 0 0 25 57 z"></path>
          </svg>
          <span>Apply coupon</span>
        </div>

        {/* Total Summary */}
        <div className="flex justify-between text-black py-2.5 px-5 mt-5 bg-white rounded font-RobotoMedium shadow-custom-header ">
          <p>Total</p>
          <p>${totalPrice.toLocaleString()}</p>
        </div>

        {/* Billing Form */}
        <div className="py-4 px-5 mt-5 bg-white text-black rounded  shadow-custom-header ">
          <h2 className="font-RobotoMedium text-[18px] mb-2">Billing details</h2>
          <form className="space-y-3">
            <div>
              <label className="block font-RobotoRegular  mb-1 text-base">Name</label>
              <input
                type="text"
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>
            <div>
              <label className="block font-RobotoRegular  mb-1 text-base">Mobile number</label>
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
              <label className="block font-RobotoRegular  mb-1 text-base">Email</label>
              <input
                type="email"
                required
                className="w-full border px-3 py-2 rounded"
              />
            </div>
          </form>
        </div>

        {/* Additional Notes */}
        <div className="py-4 px-5 mt-5 text-black bg-white rounded shadow-custom-header">
          <h2 className="font-RobotoMedium text-[18px] mb-2">Additional Details</h2>
          <div>
            <label className="block mb-1 font-RobotoRegular text-[16px]">Additional Note</label>
            <input
              type="text"
              placeholder="Enter note"
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        </div>

        {/* Shipping Form */}
        <div className="py-4 px-5 text-black mt-5 bg-white rounded shadow-custom-header">
          <h2 className="font-RobotoMedium text-[18px] mb-2">Shipping Details</h2>
          <form className="space-y-3">
            <div>
              <label className="block mb-1font-RobotoRegular text-[16px]">Country</label>
              <select className="w-full border font-RobotoRegular text-[16px]  px-3 py-2 rounded">
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
              <label className="block mb-1 font-RobotoRegular text-[16px]">Pincode/Zipcode</label>
              <input
                type="number"
                className="w-full border px-3 py-2 rounded font-RobotoRegular text-[16px]"
              />
            </div>
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">Flat/House/Apartment</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">Street/Area</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">Landmark</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">State</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
            <div>
              <label className="block mb-1 font-RobotoRegular text-[16px]">City</label>
              <input type="text" className="w-full border px-3 py-2 rounded" />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
