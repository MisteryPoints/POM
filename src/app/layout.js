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
    icon: "/icono-pom.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.variable + " bg-slate-200"}>{children}</body>
    </html>
  );
}
