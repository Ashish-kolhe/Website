import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Coddeit",
  description: "Learn Coding the Right Way",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <script type='text/javascript' src='//pl25530450.profitablecpmrate.com/d6/93/6a/d6936a28afba2ac2919882f1e0c5b392.js'></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <main className=" container min-h-screen mx-auto">
          {children}
          </main>
       
      </body>
    </html>
  );
}
