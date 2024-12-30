import Footer from "../components/Footer";
import Header from "../components/Header";
import Providers from "../components/Providers";
import { cn } from "../lib/utils";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";
var inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
var calistoga = Calistoga({
    subsets: ["latin"],
    variable: "--font-serif",
    weight: ["400"],
});
export var metadata = {
    title: "Rohit's Portfolio",
    description: "My personal site to showcase my developer work and opinions.",
};
export default function RootLayout(_a) {
    var children = _a.children;
    return (<html lang="en">
      <body className={cn("mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased", inter.variable, calistoga.variable)}>
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>);
}
