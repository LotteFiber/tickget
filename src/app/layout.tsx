import "./globals.css";
import { Ticket } from "lucide-react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { homePath, ticketsPath } from "@/paths";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tickget",
  description: "Web app for seaching ticket",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav
          className=" supports-backdrop-blur:bg-background/60
		fixed left-0 right-0 top-0 z-20
		border-b bg-background/95 backgrop-blur
		w-ful flex py-2.5 px-5 justify-between"
        >
          <div>
            <Link
              href={homePath()}
              className={buttonVariants({ variant: "ghost" })}
            >
              <Ticket />
              <h1 className="ml-1 text-lg font-semibold">Tickget</h1>
            </Link>
          </div>
          <div>
            <Link
              href={ticketsPath()}
              className={buttonVariants({ variant: "outline" })}
            >
              Tickets
            </Link>
          </div>
        </nav>
        <main
          className="min-h-screen flex-1
	  overflow-y-auto overflow-x-hidden
	  py-24 px-8
	  bg-secondary/20
	  flex flex-col"
        >
          {children}
        </main>
      </body>
    </html>
  );
}
