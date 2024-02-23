import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/AuthContext/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConnectHub",
  description: "A social media platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <AuthProvider>
         <body className={inter.className}>{children}</body>
      </AuthProvider>
    </html>
  );
}
