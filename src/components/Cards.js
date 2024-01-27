import { ABirthday } from "@/api/API";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaCakeCandles, FaClipboardUser } from "react-icons/fa6";
import { RiDashboard2Line } from "react-icons/ri";
import { BsPhone } from "react-icons/bs";
import { TbDeviceLandlinePhone, TbMailFilled } from "react-icons/tb";

const FramerImage = motion(Image);
const monthNames = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Sept.",
  "Octubre",
  "Nov.",
  "Dic.",
];

const Cards = ({
  nombre,
  puesto,
  link,
  desc,
  img,
  mail,
  movil,
  station,
  lider,
}) => {
  const [movils, setMovils] = useState(false);
  const [stations, setStations] = useState(false);
  const [birth, setBirth] = useState(false);
  const Api = ABirthday?.find((element) => element.nombre == nombre);
  const cumple =
    Api?.birthday?.split("-")[0] +
    " de " +
    monthNames[Api?.birthday?.split("-")[1] - 1];

  return (
    <article
      className={`w-full max-w-[300px] max-h-[445px] top-0 h-full items-center justify-center border border-solid border-gray-900 ${
        puesto.includes("Gerente")
          ? "bg-gradient-to-b from-sky-300 from-20% to-white"
          : puesto.includes("Líder")
          ? "bg-gradient-to-b from-yellow-500 from-20% to-white"
          : puesto.includes("Medios")
          ? "bg-violet-200 shadow-md shadow-gray-600"
          : puesto.includes("Procesos")
          ? "bg-green-200 shadow-md shadow-gray-600"
          : puesto.includes("ING III")
          ? "bg-blue-200 shadow-md shadow-gray-600"
          : puesto.includes("ING IV")
          ? "bg-gradient-to-b from-black from-5% via-yellow-300 to-80% to-white shadow-md shadow-gray-600"
          : "bg-white shadow-md shadow-gray-600"
      }  p-6 relative transition-all duration-200 opacity-80 hover:opacity-100 self-center justify-self-center ${
        lider ? "rounded-t-2xl" : "rounded-2xl"
      } `}
    >
      <div className='rounded-full max-w-[220px] max-h-[220px] flex justify-center items-center mx-auto'>
        <div className={`bg-gradient-to-b ${
        puesto.includes("Gerente")
          ? "from-blue-300"
          : puesto.includes("Líder")
          ? "from-yellow-300"
          : puesto.includes("Medios")
          ? "from-violet-200"
          : puesto.includes("Procesos")
          ? "from-green-200"
          : puesto.includes("ING III")
          ? "from-blue-200"
          : puesto.includes("ING IV")
          ? "from-yellow-200"
          : "from-white"
      } to-black w-[230px] h-[230px] z-30 absolute rounded-full`}></div>
        <FramerImage
            src={img}
            alt={nombre}
            className="w-full h-auto max-w-[225px] rounded-full z-50 relative" 
            initial={{ y:-35 }}
            whileHover={{ scaleY: 1.05, y: -42.5 }}
            transition={{ duration: 0.2 }}
            width={750}
            height={1000}
          /> 
      </div>
      <div className="w-full flex flex-col items-start justify-between">
        <Link
          href={link}
          className="hover:underline underline-offset-2 decoration-gray-900 hover:opacity-80 w-full"
        >
          <h2 className="my-2 w-full text-center text-base font-bold lg:text-lg text-gray-900 ">
            {nombre}
          </h2>
        </Link>
        <h2 className="my-2 w-full text-center text-xs lg:text-sm select-none">
          {puesto}
        </h2>
        <div className="mt-2 w-full flex justify-center flex-wrap">
          <Link
            href={desc}
            target="_blank"
            className="text-red-700 hover:text-white border-1 flex gap-1 border-red-700 hover:bg-red-800 focus:ring-4 no-underline rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-200 font-semibold"
          >
            <span className="text-lg">
              <FaClipboardUser />
            </span>
            Desc. Puesto
          </Link>
          <Link
            href={"http://ntpappsweb0007/Items/"}
            target="_blank"
            className="text-[#2e3f4f] hover:text-white border-1 flex gap-2 border-[#2e3f4f] hover:bg-[#2e3f4f] focus:ring-4 no-underline  rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-200 font-semibold"
          >
            <span className="text-lg">
              <RiDashboard2Line />
            </span>
            Item Control
          </Link>
          <p
            onClick={() => setStations(!stations)}
            className={`border-sky-500 border-2 focus:ring-4 no-underline flex gap-2 rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-400 cursor-pointer font-semibold hover:!border-sky-200 ${
              stations ? "bg-white text-sky-500 " : "bg-sky-500  text-white"
            }`}
          >
            <span className="text-base">
              <TbDeviceLandlinePhone />
            </span>
            {stations ? station : "Estación"}
          </p>
          <Link
            href={mail}
            target="_blank"
            className="text-black hover:!text-white border-1 flex gap-2 border-black hover:bg-black focus:ring-4 no-underline rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-200 font-semibold"
          >
            <span className="text-base">
              <TbMailFilled />
            </span>{" "}
            Correo
          </Link>
          <p
            onClick={() => setMovils(!movils)}
            className={`border-blue-500 flex border-2 focus:ring-4 no-underline rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-400 cursor-pointer font-semibold hover:!border-blue-200 ${
              movils ? "bg-white text-blue-500 " : "bg-blue-500  text-white"
            }`}
          >
            <span className="text-base">
              <BsPhone />
            </span>
            {movils ? movil : "Celular"}
          </p>
          <p
            onClick={() => setBirth(!birth)}
            className={`border-red-500 flex gap-2 border-2 focus:ring-4 no-underline rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-400 cursor-pointer font-semibold hover:!border-blue-200 ${
              birth ? "bg-white text-red-500 " : "bg-red-500  text-white"
            }`}
          >
            <span className="text-lg">
              <FaCakeCandles />
            </span>{" "}
            {birth ? cumple : "Cumpleaños"}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Cards;
