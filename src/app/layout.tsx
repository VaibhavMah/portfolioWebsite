import type { Metadata } from "next";
import "./globals.css";



export const metadata: Metadata = {
  title: "Portfolio",
  description: "Vaibhav Maheshwari",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  );
}
