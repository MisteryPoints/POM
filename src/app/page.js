import NavHome from "./components/NavHome";
import Prevencion from "./components/Prevencion";
import Provision from "./components/Provision";

export default function Home() {
  return (
    <div className="bg-[#121212] w-full">
      <NavHome />
      <Provision />
      <Prevencion />
    </div>
  );
}
