"use client";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";

export const metadata = {
  title: "POM | Pagina de Inicio",
  description: "Portal de Operaciones Moviles",
  icons: {
    icon: "/icono-pom.jpg",
  },
};

export default function Home() {
  return (
    <div className="bg-slate-300 w-full">
      <TransitionEffect />
      <NavHome />
      <div className="h-screen w-full grid grid-cols-12 grid-rows-3">
        <div className="col-span-3 bg-slate-200 w-full rounded-3xl select-none">
          <div className="flex flex-row justify-center text-center m-auto">
            <h1 className="pt-2 font-semibold">¿Quienes somos?</h1>
          </div>
          <h2 className="pt-3 text-center text-2xl font-semibold text-red-600">
            ¡Somos Operaciones Móviles!
          </h2>
        </div>
        <div className="col-span-9 bg-slate-400 w-full"></div>
        <div className="col-span-9 bg-slate-400 w-full"></div>
        <div className="col-span-3 bg-slate-200 w-full"></div>
        <div className="col-span-12 bg-slate-400 w-full"></div>
      </div>
    </div>
  );
}
