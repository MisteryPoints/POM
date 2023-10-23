"use client";
import React, { useEffect, useRef, useState } from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion, useScroll, useTransform } from "framer-motion";
import Slideshow from "@/components/SlideShow";
import { SlArrowRightCircle } from "react-icons/sl";

const Home = () => {
  const [glosario, setGlosario] = useState(false);
  const refD = useRef(null);
  const refG = useRef(null);
  const { scrollYProgress } = useScroll();
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100]);

  useEffect(() => {
    if (glosario) {
      setTimeout(() => {
        window.scrollTo(0, refG?.current?.offsetTop - 50);
      }, 200);
    }
  }, [glosario]);

  const handleDragEnd = () => {
    const modalElement = refD?.current;
    if (modalElement) {
      const coords = modalElement.style.transform.match(
        /^translateX\((.+)px\) translateY\((.+)px\) translateZ/
      );
      if (coords[1] > 450) {
        setGlosario(false);
      }
    }
  };
  return (
    <div className="bg-slate-300 w-full">
      <TransitionEffect />
      <NavHome />
      <div className="grid grid-cols-12 mx-24 mt-0 justify-center gap-x-5 gap-y-6">
        <motion.div
          className="col-span-12 select-none m-auto duration-300"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <div
            style={{
              background:
                "url(https://media.istockphoto.com/id/1292947888/vector/%C3%B0%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C2%B5-%C3%B1%C3%B1%C3%B1%C3%B1%C3%B0%C3%B0%C3%B1%C3%B1%C3%B0%C3%B0.jpg?s=612x612&w=0&k=20&c=YagL6dH_mSj9NfTN8vCvsT3Lya9d8SbI32LKYPLDhVs=)",
            }}
            className="m-20"
          >
            <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 uppercase">
              COMMPLEX
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="col-span-6 select-none m-auto duration-300"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <h3 className="bg-gradient-to-b from-blue-600 via-blue-900 to-blue-700 py-12 px-16 rounded-3xl text-white font-bold mx-12 text-4xl">
            COMMPLEX Es una herramienta que establece conexiones con todos los nodos de aprovisionamiento inalámbricos, es un sistema utilizado para corregir los errores/rebotes presentados en las activaciones y cambios realizados en los servicios móviles: Prepago, Control, Postpago y Flota.  
          </h3>
        </motion.div>
        <motion.div
          className="col-span-6 select-none m-auto duration-300"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.5,
              duration: 0.5,
            },
          }}
          viewport={{ once: true }}
        >
          <Slideshow
            bg={"bg-gradient-to-b from-blue-600 via-gray-200 to-blue-800"}
            images={[
              "/commplex/COMMPLEX1.png",
              "/commplex/COMMPLEX2.png",
              "/commplex/COMMPLEX3.png",
              "/commplex/COMMPLEX4.png", 
              "/commplex/COMMPLEX5.png", 
              "/commplex/COMMPLEX6.png", 
              "/commplex/COMMPLEX7.png", 
              "/commplex/COMMPLEX8.png", 
            ]}
          />
        </motion.div>
        {glosario ? (
          <motion.div
            className="col-span-12 select-none m-auto duration-300"
            ref={refG}
            initial={{ opacity: 0, y: -70 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.4,
              },
            }}
            viewport={{ once: true }}
          >
            <h1 className="text-center text-7xl font-extrabold uppercase mb-8">
              Glosario
            </h1>
            <motion.div
              className="w-full flex"
              ref={refD}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
              dragElastic={{ left: 0, right: 0.8 }}
              onDragEnd={handleDragEnd}
            >
              <ul className="text-white font-semibold text-xl py-5 px-6 bg-gradient-to-br from-slate-900 to-blue-950 rounded-l-2xl drop-shadow-lg max-w-[800px]">
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Aprovisionamiento:
                  </span>{" "}
                  Proceso mediante el cual se realizan las activaciones y cambios a los servicios solicitados por los clientes.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Avería:
                  </span>{" "}
                  Interrupción temporal, general o parcial del servicio, independientemente de que se produzcan por causas internas o externas a la prestadora.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    API:
                  </span>{" "}
                  Interfase encargada de la conexión entre Ensemble y Suscription Manager (SMGR).
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    EMA (Ericsson Multi Activation System)::
                  </span>{" "}
                  Nodo externo cuya funcionalidad principal es ser la interfaz para aprovisionamiento con el HLR (Home Location Register) y otros nodos.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Ensemble:
                  </span>{" "}
                  Sistema utilizado para la venta de equipos móviles, el aprovisionamiento del servicio móvil, tratamiento y la facturación de los clientes con servicio móvil Postpago, captura y aplicación de pagos alámbricos e Inalámbricos, y seguimiento y control del inventario de equipos móviles.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    ECMS (Ericsson Customer Management System):
                  </span>{" "}
                  Es el sistema a través del cual se activan las líneas con un tipo de facturación prepago. En este sistema también se asignan y controlan los minutos de los servicios flota y control.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    IMSI “International Mobile Suscriber Identity” (Identidad Internacional del Suscriptor Móvil):
                  </span>{" "}
                  Es un número único que identifica al usuario de la línea de servicio.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    OTA:
                  </span>{" "}
                  Módulo por el cual se envían campañas, o sea difusiones masivas de mensajes, por ejemplo “#Vacunate”.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    PCRF:
                  </span>{" "}
                  Es el nodo de software designado en tiempo-real para determinar reglas de políticas para la red de datos, tanto para las reglas de navegación y cobros.
                </li> 
              </ul>
              <div
                className="h-auto mb-3 rounded-r-2xl bg-slate-900 text-white cursor-pointer flex justify-center items-center text-3xl"
                onClick={() => setGlosario(false)}
              >
                <SlArrowRightCircle />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <button
            className="-rotate-90 text-2xl font-bold p-3 bg-slate-900 text-white rounded-t-3xl text-center absolute bottom-[-200px] -right-10 hover:bg-slate-950 transition-all duration-400"
            onClick={() => setGlosario(true)}
            style={{
              y: yPosAnim,
            }}
          >
            Glosario
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
