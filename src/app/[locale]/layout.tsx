import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../../components/navigation/Navbar";
import { Box } from "@mui/material";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `JJB's Portfolio`,
  description: "Awesome Developer",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    console.log("error", error);
    notFound();
  }
  return (
    <html lang={locale}>
      <body
        className={`${inter.className} bg-[url('../../../public/night-road.jpg')] bg-no-repeat bg-cover min-h-screen h-auto w-screen `}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
  ``;
}
