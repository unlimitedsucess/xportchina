import ConfirmBar from "@/components/ConfIrmBar";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Xport China || ASIC Miners",
  description: "Official ASIC catalog viewer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=" min-h-screen h-dvh overflow-auto">
        <Providers>
          <Header />
          <div className="mb-20">{children}</div> n
          <ConfirmBar/>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
