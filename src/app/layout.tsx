import { Sidebar } from "@/components/custom/sidebar";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
import ClientProvider from "./provider";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Taskman",
  description: "Task Management Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <ClientProvider>
          <Sidebar />
          {children}
        </ClientProvider>
      </body>
    </html>
  );
}
