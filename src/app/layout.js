import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "900"],
  display: "swap",
  subsets: ["latin"],
  variable: "--poppins-font",
});

export const metadata = {
  title: "Portal de Operaciones Moviles",
  description: "Portal de Operaciones Moviles",
  icons: {
    icon: "/POM.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable + " bg-slate-300 scrollbar scrollbar-thumb-red-600 scrollbar-track-slate-300 scroll-smooth overflow-x-hidden"}>{children}</body>
    </html>
  );
}
