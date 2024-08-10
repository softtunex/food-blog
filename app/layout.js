import { Inter } from "next/font/google";
import "./globals.css";
import { MainHeader } from "../components/mainHeader/main-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "All meal",
  description: "Test meals",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
