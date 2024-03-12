import type { Metadata } from "next";
import { Inter, Noto_Sans } from "next/font/google";
import "./globals.css";
import classNames from "classnames";
import StickyHeader from "./_components/StickyHeader";
import MainNavBar from "./_components/MainNavBar";

const inter = Inter({ subsets: ["latin"] });
const noto = Noto_Sans({ subsets: ['latin']})

export const metadata: Metadata = {
  title: "Mark Centoni | Software Engineer, Neuroscience Enthusiast",
  description: "Professional and personal information about Mark Centoni",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(noto.className)}>
        <StickyHeader>
          <MainNavBar />
        </StickyHeader>
        <div className={`grid grid-cols-12 m-w-12 pt-48`}>
          <section className={`col-span-1`}></section>
          <section className={`main col-span-10`}>
            {children}
          </section>
          <section className={`col-span-1`}></section>
        </div>
      </body>
    </html>
  );
}
