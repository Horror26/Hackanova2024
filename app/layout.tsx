import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import TimeoutDIV from "@/components/TimeoutDIV";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
 
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <div className="flex h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
