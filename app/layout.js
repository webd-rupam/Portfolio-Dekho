import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Chat from "@/components/Chat";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Webd's Portfolio - My personal portfolio",
  description: "This is a portfolio website of a Web Developer where he can showcase his skills.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Chat/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
