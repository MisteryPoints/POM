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
      <body className={poppins.variable + " bg-slate-300 scrollbar scrollbar-thumb-red-600 scrollbar-track-slate-300 scroll-smooth overflow-x-hidden pb-[80px]"}>{children}
      <footer className="flex w-full bg-slate-200 text-2xl text-gray-700 shadow-xl shadow-[0px_-16px_25px_0px_rgba(241,245,249,0.65)] gap-5 px-20 translate-y-[80px] mt-[10px] select-none"> 
        <p className="mt-[10px]">
          Copyright © 2023, Claro República Dominicana. Todos los derechos reservados
        </p>
        <p className="mt-[10px]">Desarrollado por equipo de Desarrollos Operativos, Operaciones Móviles.</p>
      </footer>
      </body>
    </html>
  );
}
