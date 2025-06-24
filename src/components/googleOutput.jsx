"use client";
import dynamic from "next/dynamic";

export default function GoogleOutput() {
const GoogleTranslate = dynamic(() => import("./GoogleTranslate"), {
    ssr: false,
    });

    return(
        <div className="pt-20 px-4 w-full max-w-xs sm:max-w-none overflow-auto">
            <GoogleTranslate />
        </div>
    )

}