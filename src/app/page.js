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
    <div className="bg-slate-200 w-full">
      <TransitionEffect />
      <NavHome />
    </div>
  );
}
