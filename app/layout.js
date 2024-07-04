import { Inter, Aclonica } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const aclonica = Aclonica({ weight: "400", subsets: ["latin"] });

export const metadata = {
  title: "Ridhi Suman Fabrics",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + aclonica.className}>{children}</body>
    </html>
  );
}
