import { Inter } from "next/font/google";
import "./globals.css";
import Topnav from "./components/Topnav";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Data Visualization",
  description: "Data Visualization V2",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topnav />
        {children}
        </body>
    </html>
  );
}