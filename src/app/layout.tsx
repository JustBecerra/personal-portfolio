import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navigation/Navbar";
import Image from "next/image";
import nightRoad from "../../public/night-road.jpg";
import { Box } from "@mui/material";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `JJB's Portfolio`,
  description: "Awesome Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Box
          className="bg-[url('../../public/night-road.jpg')] bg-no-repeat bg-cover"
          width="100vw"
          height="100vh"
        >
          <Navbar />
          {children}
        </Box>
      </body>
    </html>
  );
}
