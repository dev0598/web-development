import type {Metadata} from "next";
import { Analytics } from "@vercel/analytics/next"
import {Archivo} from 'next/font/google';
import "./globals.css";

const archivo = Archivo({
    display: "swap",
    weight: "variable",
    subsets: ["latin"],
    variable: '--font-archivo',
});

export const metadata: Metadata = {
    title: "Anself Dynamics Webpage",
    description: "AI Medtech Startup",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`antialiased text-stone-900 ${archivo.variable} font-sans`}>{children}
        <Analytics />
        </body>
        </html>
    );
}
