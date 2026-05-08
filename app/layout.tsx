import "./globals.css";
import { Poppins, Inter } from "next/font/google";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["600", "700", "800"],
    variable: "--font-heading",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-body",
});

export const metadata = {
    icons: {
        icon: "/pervoi_logo_site.png",
    },
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="pt-br" className={`${poppins.variable} ${inter.variable}`}>
        <body className="font-body">
        {children}
        </body>
        </html>
    );
}