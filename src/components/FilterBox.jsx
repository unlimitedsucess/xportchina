// components/FilterBox.js
"use client";

export default function FilterBox({
  minPrice,
  maxPrice,
  onMinChange,
  onMaxChange,
}) {
  return (
    <div className="flex flex-col gap-5 w-[250px]">
      <div className="py-2.5 px-5 rounded-md">
        <h1 className="text-white font-RobotoMedium text-base whitespace-nowrap">
          Sub categories
        </h1>
      </div>

      {/* Price Filter */}
      <div className="w-full py-4 px-5 h-fit bg-ffffff shadow-2xl rounded-b-sm" >
        <p className= "text-[#2f3d55] text-base font-RobotoRegular">Price</p>
        <form className="flex flex-row items-center  h-fit flex-rap w-full gap-4 box-border text-[#2f3d55]  rounded-md">
          {/* Min Price Input */}
          <div className="flex flex-col flex-1 m-0 min-w-[40%]">
            <label className="text-sm mb-1 text-white">Min</label>
            <div className="flex px-2 gap-1.5 py-1 rounded border border-[#0f0f0f] bg-white items-center">
              <p>$</p>
              <input
                className="flex-1 min-w-0 outline-none bg-transparent appearance-none text-black [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                type="number"
                placeholder="Min"
                value={minPrice}
                onChange={(e) => onMinChange(e.target.value)}
              />
            </div>
          </div>

          <p className="mt-[20px]">-</p>

          {/* Max Price Input */}
          <div className="flex flex-col flex-1 min-w-[40%]">
            <label className="text-sm mb-1 text-white">Max</label>
            <div className="flex px-2 gap-1.5 py-1 rounded border border-[#0f0f0f] bg-white items-center">
              <p>$</p>
              <input
                className="flex-1 min-w-0 outline-none bg-transparent appearance-none text-black [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                type="number"
                placeholder="Max"
                value={maxPrice}
                onChange={(e) => onMaxChange(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
