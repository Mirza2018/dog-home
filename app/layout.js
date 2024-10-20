import localFont from "next/font/local";
import "./globals.css";
import { Inter,Roboto } from 'next/font/google'
import Navbar from "@/components/Share/Navbar";
const roboto_init=Roboto({
  subsets:['latin'],
  weight:['100','300','700'],
  variable:'--font-roboto'
})
const inter = Inter({  weight: ["100","200","300","400","500","600","700","800","900"], subsets: ['latin'] })

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} overflow-x-hidden`}
      >
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
