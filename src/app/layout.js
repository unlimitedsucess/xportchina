import ConfirmBar from "@/components/ConfIrmBar";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "@/components/Providers";

export const metadata = {
  title: "Xport China || ASIC Miners",
  description: "Official ASIC catalog viewer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-ffffff min-h-screen">
        <Providers>
          <Header />
          <div className="mb-20">{children}</div> n
          <ConfirmBar/>
        </Providers>
      </body>
    </html>
  );
}
