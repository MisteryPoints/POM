import { ThemeProvider } from "@/components/providers/ThemeProvider";
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={
          poppins.variable +
          " bg-slate-300 dark:bg-slate-900 !scrollbar !scrollbar-thumb-red-600 !scrollbar-track-[#11141a] !scroll-smooth !overflow-x-hidden pb-[80px]"
        }
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        > 
          {children}
          <footer className="flex justify-between xl:flex-wrap 2xl:flex-nowrap w-full bg-slate-200 dark:bg-slate-800 text-lg 2xl:text-xl text-slate-700/90 dark:text-slate-200/90 shadow-[0px_-18px_25px_0px_rgba(241,245,249,0.75)] dark:shadow-slate-800 gap-x-5 px-20 translate-y-[80px] mt-[10px] select-none text-center">
            <p className="2xl:mt-[10px] mb-2 w-full">
              Copyright © 2023, Claro República Dominicana. Todos los derechos
              reservados
            </p>
            <p className="2xl:mt-[10px] mb-2 w-full">
              Desarrollado por equipo de Desarrollos Operativos, Operaciones
              Móviles.
            </p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
