import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "sonner";

import AuthProvider from "@/provider/AuthProvider";
import ReduxProvider from "@/provider/ReduxProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ridhi Suman Fabrics",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AuthProvider>
        <ReduxProvider>
          <body className={inter.className}>
            <Toaster position="bottom-right" richColors />
            {children}
          </body>
        </ReduxProvider>
      </AuthProvider>
    </html>
  );
}
