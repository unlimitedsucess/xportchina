"use client";
import { useState } from "react";

const countries = [
  { code: "AF", name: "Afghanistan", dial_code: "+93" },
  { code: "AL", name: "Albania", dial_code: "+355" },
  { code: "DZ", name: "Algeria", dial_code: "+213" },
  { code: "AS", name: "American Samoa", dial_code: "+1684" },
  { code: "AD", name: "Andorra", dial_code: "+376" },
  { code: "AO", name: "Angola", dial_code: "+244" },
  { code: "AI", name: "Anguilla", dial_code: "+1264" },
  { code: "AG", name: "Antigua and Barbuda", dial_code: "+1268" },
  { code: "AR", name: "Argentina", dial_code: "+54" },
  { code: "AM", name: "Armenia", dial_code: "+374" },
  { code: "AU", name: "Australia", dial_code: "+61" },
  { code: "AT", name: "Austria", dial_code: "+43" },
  { code: "AZ", name: "Azerbaijan", dial_code: "+994" },
  { code: "BS", name: "Bahamas", dial_code: "+1242" },
  { code: "BH", name: "Bahrain", dial_code: "+973" },
  { code: "BD", name: "Bangladesh", dial_code: "+880" },
  { code: "BB", name: "Barbados", dial_code: "+1246" },
  { code: "BY", name: "Belarus", dial_code: "+375" },
  { code: "BE", name: "Belgium", dial_code: "+32" },
  { code: "BZ", name: "Belize", dial_code: "+501" },
  { code: "BJ", name: "Benin", dial_code: "+229" },
  { code: "BM", name: "Bermuda", dial_code: "+1441" },
  { code: "BT", name: "Bhutan", dial_code: "+975" },
  { code: "BO", name: "Bolivia", dial_code: "+591" },
  { code: "BA", name: "Bosnia and Herzegovina", dial_code: "+387" },
  { code: "BW", name: "Botswana", dial_code: "+267" },
  { code: "BR", name: "Brazil", dial_code: "+55" },
  { code: "BN", name: "Brunei Darussalam", dial_code: "+673" },
  { code: "BG", name: "Bulgaria", dial_code: "+359" },
  { code: "BF", name: "Burkina Faso", dial_code: "+226" },
  { code: "BI", name: "Burundi", dial_code: "+257" },
  { code: "KH", name: "Cambodia", dial_code: "+855" },
  { code: "CM", name: "Cameroon", dial_code: "+237" },
  { code: "CA", name: "Canada", dial_code: "+1" },
  { code: "CV", name: "Cape Verde", dial_code: "+238" },
  { code: "CF", name: "Central African Republic", dial_code: "+236" },
  { code: "TD", name: "Chad", dial_code: "+235" },
  { code: "CL", name: "Chile", dial_code: "+56" },
  { code: "CN", name: "China", dial_code: "+86" },
  { code: "CO", name: "Colombia", dial_code: "+57" },
  { code: "KM", name: "Comoros", dial_code: "+269" },
  { code: "CD", name: "Congo (DRC)", dial_code: "+243" },
  { code: "CG", name: "Congo (ROC)", dial_code: "+242" },
  { code: "CR", name: "Costa Rica", dial_code: "+506" },
  { code: "CI", name: "Côte d’Ivoire", dial_code: "+225" },
  { code: "HR", name: "Croatia", dial_code: "+385" },
  { code: "CU", name: "Cuba", dial_code: "+53" },
  { code: "CY", name: "Cyprus", dial_code: "+357" },
  { code: "CZ", name: "Czech Republic", dial_code: "+420" },
  { code: "DK", name: "Denmark", dial_code: "+45" },
  { code: "DJ", name: "Djibouti", dial_code: "+253" },
  { code: "DO", name: "Dominican Republic", dial_code: "+1‑809" },
  { code: "EC", name: "Ecuador", dial_code: "+593" },
  { code: "EG", name: "Egypt", dial_code: "+20" },
  { code: "SV", name: "El Salvador", dial_code: "+503" },
  { code: "GQ", name: "Equatorial Guinea", dial_code: "+240" },
  { code: "ER", name: "Eritrea", dial_code: "+291" },
  { code: "EE", name: "Estonia", dial_code: "+372" },
  { code: "ET", name: "Ethiopia", dial_code: "+251" },
  { code: "FJ", name: "Fiji", dial_code: "+679" },
  { code: "FI", name: "Finland", dial_code: "+358" },
  { code: "FR", name: "France", dial_code: "+33" },
  { code: "GA", name: "Gabon", dial_code: "+241" },
  { code: "GM", name: "Gambia", dial_code: "+220" },
  { code: "GE", name: "Georgia", dial_code: "+995" },
  { code: "DE", name: "Germany", dial_code: "+49" },
  { code: "GH", name: "Ghana", dial_code: "+233" },
  { code: "GR", name: "Greece", dial_code: "+30" },
  { code: "GU", name: "Guam", dial_code: "+1‑671" },
  { code: "GT", name: "Guatemala", dial_code: "+502" },
  { code: "GN", name: "Guinea", dial_code: "+224" },
  { code: "GW", name: "Guinea‑Bissau", dial_code: "+245" },
  { code: "HT", name: "Haiti", dial_code: "+509" },
  { code: "HN", name: "Honduras", dial_code: "+504" },
  { code: "HK", name: "Hong Kong", dial_code: "+852" },
  { code: "HU", name: "Hungary", dial_code: "+36" },
  { code: "IS", name: "Iceland", dial_code: "+354" },
  { code: "IN", name: "India", dial_code: "+91" },
  { code: "ID", name: "Indonesia", dial_code: "+62" },
  { code: "IR", name: "Iran", dial_code: "+98" },
  { code: "IQ", name: "Iraq", dial_code: "+964" },
  { code: "IE", name: "Ireland", dial_code: "+353" },
  { code: "IL", name: "Israel", dial_code: "+972" },
  { code: "IT", name: "Italy", dial_code: "+39" },
  { code: "JP", name: "Japan", dial_code: "+81" },
  { code: "JO", name: "Jordan", dial_code: "+962" },
  { code: "KZ", name: "Kazakhstan", dial_code: "+7" },
  { code: "KE", name: "Kenya", dial_code: "+254" },
  { code: "KR", name: "South Korea", dial_code: "+82" },
  { code: "KW", name: "Kuwait", dial_code: "+965" },
  { code: "KG", name: "Kyrgyzstan", dial_code: "+996" },
  { code: "LA", name: "Laos", dial_code: "+856" },
  { code: "LV", name: "Latvia", dial_code: "+371" },
  { code: "LB", name: "Lebanon", dial_code: "+961" },
  { code: "LY", name: "Libya", dial_code: "+218" },
  { code: "LT", name: "Lithuania", dial_code: "+370" },
  { code: "LU", name: "Luxembourg", dial_code: "+352" },
  { code: "MO", name: "Macao", dial_code: "+853" },
  { code: "MK", name: "North Macedonia", dial_code: "+389" },
  { code: "MG", name: "Madagascar", dial_code: "+261" },
  { code: "MW", name: "Malawi", dial_code: "+265" },
  { code: "MY", name: "Malaysia", dial_code: "+60" },
  { code: "MV", name: "Maldives", dial_code: "+960" },
  { code: "ML", name: "Mali", dial_code: "+223" },
  { code: "MT", name: "Malta", dial_code: "+356" },
  { code: "MH", name: "Marshall Islands", dial_code: "+692" },
  { code: "MR", name: "Mauritania", dial_code: "+222" },
  { code: "MU", name: "Mauritius", dial_code: "+230" },
  { code: "MX", name: "Mexico", dial_code: "+52" },
  { code: "FM", name: "Micronesia", dial_code: "+691" },
  { code: "MD", name: "Moldova", dial_code: "+373" },
  { code: "MC", name: "Monaco", dial_code: "+377" },
  { code: "MN", name: "Mongolia", dial_code: "+976" },
  { code: "ME", name: "Montenegro", dial_code: "+382" },
  { code: "MA", name: "Morocco", dial_code: "+212" },
  { code: "MZ", name: "Mozambique", dial_code: "+258" },
  { code: "MM", name: "Myanmar", dial_code: "+95" },
  { code: "NA", name: "Namibia", dial_code: "+264" },
  { code: "NR", name: "Nauru", dial_code: "+674" },
  { code: "NP", name: "Nepal", dial_code: "+977" },
  { code: "NL", name: "Netherlands", dial_code: "+31" },
  { code: "NZ", name: "New Zealand", dial_code: "+64" },
  { code: "NI", name: "Nicaragua", dial_code: "+505" },
  { code: "NE", name: "Niger", dial_code: "+227" },
  { code: "NG", name: "Nigeria", dial_code: "+234" },
  { code: "NO", name: "Norway", dial_code: "+47" },
  { code: "OM", name: "Oman", dial_code: "+968" },
  { code: "PK", name: "Pakistan", dial_code: "+92" },
  { code: "PW", name: "Palau", dial_code: "+680" },
  { code: "PA", name: "Panama", dial_code: "+507" },
  { code: "PG", name: "Papua New Guinea", dial_code: "+675" },
  { code: "PY", name: "Paraguay", dial_code: "+595" },
  { code: "PE", name: "Peru", dial_code: "+51" },
  { code: "PH", name: "Philippines", dial_code: "+63" },
  { code: "PL", name: "Poland", dial_code: "+48" },
  { code: "PT", name: "Portugal", dial_code: "+351" },
  { code: "PR", name: "Puerto Rico", dial_code: "+1‑787" },
  { code: "QA", name: "Qatar", dial_code: "+974" },
  { code: "RO", name: "Romania", dial_code: "+40" },
  { code: "RU", name: "Russia", dial_code: "+7" },
  { code: "RW", name: "Rwanda", dial_code: "+250" },
  { code: "SA", name: "Saudi Arabia", dial_code: "+966" },
  { code: "SN", name: "Senegal", dial_code: "+221" },
  { code: "RS", name: "Serbia", dial_code: "+381" },
  { code: "SG", name: "Singapore", dial_code: "+65" },
  { code: "SK", name: "Slovakia", dial_code: "+421" },
  { code: "SI", name: "Slovenia", dial_code: "+386" },
  { code: "ZA", name: "South Africa", dial_code: "+27" },
  { code: "KR", name: "South Korea", dial_code: "+82" },
  { code: "ES", name: "Spain", dial_code: "+34" },
  { code: "LK", name: "Sri Lanka", dial_code: "+94" },
  { code: "SE", name: "Sweden", dial_code: "+46" },
  { code: "CH", name: "Switzerland", dial_code: "+41" },
  { code: "TW", name: "Taiwan", dial_code: "+886" },
  { code: "TH", name: "Thailand", dial_code: "+66" },
  { code: "TN", name: "Tunisia", dial_code: "+216" },
  { code: "TR", name: "Turkey", dial_code: "+90" },
  { code: "UG", name: "Uganda", dial_code: "+256" },
  { code: "UA", name: "Ukraine", dial_code: "+380" },
  { code: "AE", name: "United Arab Emirates", dial_code: "+971" },
  { code: "GB", name: "United Kingdom", dial_code: "+44" },
  { code: "US", name: "United States", dial_code: "+1" },
  { code: "UY", name: "Uruguay", dial_code: "+598" },
  { code: "UZ", name: "Uzbekistan", dial_code: "+998" },
  { code: "VE", name: "Venezuela", dial_code: "+58" },
  { code: "VN", name: "Vietnam", dial_code: "+84" },
  { code: "YE", name: "Yemen", dial_code: "+967" },
  { code: "ZM", name: "Zambia", dial_code: "+260" },
  { code: "ZW", name: "Zimbabwe", dial_code: "+263" }
];



export default function PhoneModal({ setShowPhoneModal, setPhone }) {
   const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [localPhone, setLocalPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSave = () => {
    if (!localPhone.trim()) return;

    setIsLoading(true);

    setTimeout(() => {
      setPhone(`${selectedCountry.dial_code}${localPhone}`);
      setLocalPhone("");
      setShowPhoneModal(false);
      setIsLoading(false);
    }, 3000); // 3 seconds
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center text-black justify-center">
      <div className="bg-white w-[90%] max-w-md p-5 rounded-lg shadow-lg">
        <h2 className="font-RobotoMedium text-[18px] mb-3">WhatsApp Number</h2>
        <label className="block text-black font-RobotoRegular text-base mb-1">Select country and enter number</label>

        <div className="flex items-center border border-gray-300 rounded mb-4 overflow-hidden">
          <span
            className="px-3 py-2 text-lg bg-gray-50"
            style={{ fontFamily: "Segoe UI Emoji, Apple Color Emoji, sans-serif" }}
          >
            {selectedCountry.flag}
          </span>
          <select
            value={selectedCountry.code}
            onChange={e =>
              setSelectedCountry(
                countries.find(c => c.code === e.target.value)
              )
            }
            className="appearance-none px-2 py-2 outline-none bg-transparent w-28 text-sm"
          >
            {countries.map(c => (
              <option key={c.code} value={c.code}>
                {c.dial_code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            placeholder="8012345678"
            value={localPhone}
            onChange={e => setLocalPhone(e.target.value)}
            className="flex-1 px-3 py-2 outline-none text-sm"
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={() => {
              setShowPhoneModal(false);
              setLocalPhone("");
            }}
            className="px-4 py-2 rounded bg-gray-200"
          >
            Cancel
          </button>
         <button
            onClick={handleSave}
            disabled={isLoading}
            className="px-4 py-2 rounded bg-blue-600 text-white flex items-center gap-2"
          >
            {isLoading ? (
              <span className="animate-spin w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
            ) : (
              "Save"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
