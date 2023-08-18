"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const FramerImage = motion(Image);

const PrevAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    x: 0,
    scrollTo: { x: 100 },
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    x: -700,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const PrevencionCard = ({
  nombre,
  descripcion,
  responsable,
  link,
  logo,
  mail,
}) => (
  <article className="w-full max-w-[550px] items-center justify-center rounded-2xl border border-solid border-gray-900 bg-white shadow-gray-200 shadow-none hover:shadow-md p-6 relative transition-all duration-200 opacity-80 hover:opacity-100 ">
    <Link
      href={mail}
      target="_blank"
      className="w-full cursor-pointer overflow-hidden"
    >
      <FramerImage
        src={logo}
        alt={nombre}
        className="w-full h-auto rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        width={800}
        height={330}
      />
    </Link>
    <div className="w-full flex flex-col items-start justify-between mt-4">
      <Link
        href={link}
        target="_blank"
        className="hover:underline underline-offset-2 decoration-gray-900 hover:opacity-80 w-full"
      >
        <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl text-gray-900 ">
          {nombre}
        </h2>
      </Link>
      <h2 className="my-2 w-full text-left text-md lg:text-lg select-none">
        {descripcion}
      </h2>
      <div className="mt-2 flex items-center w-full justify-between md:justify-start">
        <Link
          href={link}
          target="_blank"
          className="text-red-700 hover:text-white border-1 border-red-700 hover:bg-red-800 focus:ring-4 no-underline focus:ring-red-300 rounded-lg text-md px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-200"
        >
          Visita
        </Link>
        <h2 className="my-2 w-full text-right text-2xl font-bold lg:text-xl select-none">
          {responsable}
        </h2>
      </div>
    </div>
  </article>
);

const Prevencion = () => {
  const [prev, setPrev] = useState(false);
  const reference = useRef(null);
  const { scrollYProgress } = useScroll();
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100]);

  useEffect(() => {
    if (prev) {
      setTimeout(() => {
        window.scrollTo(0, reference?.current?.offsetTop - 110);
      }, 200);
    }
  }, [prev]);

  return (
    <motion.div className="bg-[#121212] w-full">
      <div
        onClick={() => {
          setPrev(!prev);
        }}
        className="mx-20 mt-2 text-gray-300 text-5xl hover:cursor-pointer flex pb-10"
        style={{
          y: yPosAnim,
        }}
      >
        <motion.p
          initial={{ rotate: -90 }}
          animate={prev ? { rotate: 0 } : ""}
          transition={{ duration: 0.3 }}
        >
          <MdOutlineArrowDropDownCircle />
        </motion.p>
        <p>&nbsp;Soporte Proyectos y Averías Móviles</p>
      </div>
      <motion.div
        ref={reference}
        className={"w-full px-20 pb-10 overflow-hidden"}
        animate={prev ? "enter" : "exit"}
        variants={PrevAnimate}
      >
        <div className="grid grid-cols-2 gap-4 mx-auto">
          <PrevencionCard
            nombre="Síntomas Aprovisionamiento / Funcional SAAM / Reportes CNOC"
            descripcion="Análisis de Causa Raiz y seguimiento de Sintomas de Aprovisionamiento. Soporte Funcional de SAAM sus aplicativos y adición de nuevos modulos o features."
            responsable="Yael Segura X-4776"
            link="/prevencion/aprovisionamiento"
            logo="/YaelSegura.png"
            mail="mailto:yael_segura@claro.com.do"
          />
          <PrevencionCard
            nombre="Síntomas Reclamación / Auditorías Prepago y Postpago / Funcional OTA"
            descripcion="Análisis de Causa Raiz y seguimiento de Sintomas de Reclamación. Gestión de Auditorías Prepago y Postpago de ofertas aplicadas. Soporte Funcional de OTA."
            responsable="Ginet Matos X-4797"
            link="/prevencion/reclamacion"
            logo="/GinetMatos.png"
            mail="mailto:ginet_matos@claro.com.do"
          />
          <div className="col-span-2 mx-auto">
            <PrevencionCard
              nombre="Síntomas Averías / Auditorías Pines / Síntomas SIF"
              descripcion="Análisis de Causa Raiz y seguimiento de Sintomas de Averías. Gestión de Auditorías Pines. Análisis de Causa Raiz y seguimiento de Sintomas del Producto SIF."
              responsable="Rafael Pichardo X-8112"
              link="/prevencion/averias"
              logo="/RafaelPichardo.png"
              mail="mailto:rafael_pichardo@claro.com.do"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Prevencion;
