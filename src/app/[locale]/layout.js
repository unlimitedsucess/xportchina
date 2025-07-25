
import ViewCartBar from "@/components/ViewCartBar";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";
import "../globals.css";
import GoogleOutput from "@/components/googleOutput";
import { Toaster } from "sonner";

export const metadata = {
  title: "Xport China || ASIC Miners",
  description: "Official ASIC catalog viewer",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({ children }) {
  
  return (
   <html lang="en" suppressHydrationWarning>
  <body className="min-h-screen h-dvh overflow-auto">
        <Providers>
          <Header />
            <Toaster position="top-center" richColors closeButton /> {/* ✅ Add this */}
           <GoogleOutput />
          <div className="mb-20">{children}</div>
          <ViewCartBar />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
