import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/context/AuthContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ConnectHub",
  description: "A social media platform",
};

export default function RootLayout({ children }) {
  const queryClien = new QueryClient()
  return (
    <html lang="en" data-theme="light">
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <body className={inter.className}>{children}</body>
        </AuthProvider>
      </QueryClientProvider>
    </html>
  );
}
