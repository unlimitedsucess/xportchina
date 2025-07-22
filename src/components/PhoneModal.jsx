"use client";
import { useState } from "react";

const countries = [
  { code: "AF", name: "Afghanistan", dial_code: "+93" },
  { code: "AX", name: "Åland Islands", dial_code: "+358" },
  { code: "AL", name: "Albania", dial_code: "+355" },
  { code: "DZ", name: "Algeria", dial_code: "+213" },
  { code: "AS", name: "American Samoa", dial_code: "+1684" },
  { code: "AD", name: "Andorra", dial_code: "+376" },
  { code: "AO", name: "Angola", dial_code: "+244" },
  { code: "AI", name: "Anguilla", dial_code: "+1264" },
  { code: "AQ", name: "Antarctica", dial_code: "+672" },
  { code: "AG", name: "Antigua and Barbuda", dial_code: "+1268" },
  { code: "AR", name: "Argentina", dial_code: "+54" },
  { code: "AM", name: "Armenia", dial_code: "+374" },
  { code: "AW", name: "Aruba", dial_code: "+297" },
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
  { code: "IO", name: "British Indian Ocean Territory", dial_code: "+246" },
  { code: "BN", name: "Brunei Darussalam", dial_code: "+673" },
  { code: "BG", name: "Bulgaria", dial_code: "+359" },
  { code: "BF", name: "Burkina Faso", dial_code: "+226" },
  { code: "BI", name: "Burundi", dial_code: "+257" },
  { code: "KH", name: "Cambodia", dial_code: "+855" },
  { code: "CM", name: "Cameroon", dial_code: "+237" },
  { code: "CA", name: "Canada", dial_code: "+1" },
  // ...and so on for all ~200+ ISO 3166 countries :contentReference[oaicite:1]{index=1}
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
