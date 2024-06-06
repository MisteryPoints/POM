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
    <div className="w-full">
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
            <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 dark:text-red-800 dark:mix-blend-normal dark:bg-slate-900 uppercase">
              SAAM
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
          <h3 className="bg-gradient-to-b from-red-600 via-red-900 to-red-700 py-12 px-16 rounded-3xl text-white font-bold mx-12 text-4xl">
            SAAM es el Sistema de Administración de Averías Móviles. Diseñado para manejar los diferentes reportes e interacciones por parte del cliente sobre su servicio con fines de generar una interacción, reclamación, reporte de aprovisionamiento o Averías, sobre su servicio contratado.  
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
            bg={"bg-gradient-to-b from-red-600 via-gray-200 to-red-800"}
            images={[
              "/saam/SAAM1.png",
              "/saam/SAAM2.png",
              "/saam/SAAM3.png",
              "/saam/SAAM4.png", 
              "/saam/SAAM5.png", 
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
            <h1 className="text-center text-7xl font-extrabold uppercase mb-8 text-slate-800 dark:text-slate-300">
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
              <ul className="text-white font-semibold text-xl py-5 px-6 bg-gradient-to-br from-slate-900 dark:from-slate-400 to-blue-950 rounded-l-2xl drop-shadow-lg max-w-[800px]">
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Aprovisionamiento:
                  </span>{" "}
                  Proceso mediante el cual se realizan las activaciones y cambios a los servicios solicitados por los clientes.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Avería:
                  </span>{" "}
                  Interrupción temporal, general o parcial del servicio, independientemente de que se produzcan por causas internas o externas a la prestadora.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Avería Tipo I:
                  </span>{" "}
                  Interrupción temporal, general o parcial del servicio, en la que se afecta a un (1) Usuario Titular en particular.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Avería Tipo II:
                  </span>{" "}
                  Interrupción temporal, general o parcial del servicio, debido a la falla de un elemento central de red o que afecte a por lo menos un cinco por ciento (5%) de la base de clientes del Segmento de mercado del servicio afectado o treinta mil (30,000) usuarios afectados.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Averías Reiteradas Tipo Uno (1): 
                  </span>{" "}
                  Dos o más eventos de la misma naturaleza y causa que se han producido durante un lapso de tiempo menor o igual a 30 días calendarios y que haya afectado a un mismo cliente. Corresponde crédito, aunque la suma de la duración de cada evento no totalice veinticuatro (24) horas. Para indicar que tenemos una avería reiterada deben darse las condiciones de mismo cliente con el mismo servicio afectado en menos de treinta (30) días.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Averías Reiteradas Tipo Dos (2): 
                  </span>{" "}
                  Dos o más eventos de la misma naturaleza y causa (salida del mismo elemento de la red) que se han producido durante un lapso de tiempo menor o igual a treinta (30) días calendario o que haya sido afectado el cinco por ciento (5%) de los clientes del servicio. En este caso corresponde otorgar crédito, aunque la suma de la duración de cada evento no totalice cuatro (4) horas. Para indicar que tenemos una avería reiterada deben darse las condiciones de mismo cliente con el mismo servicio afectado en menos de treinta (30) días.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    BAN (Billing Account Number o Número de Cuenta del Cliente): 
                  </span>{" "}
                  Es el número de cuenta donde están contenido los datos del cliente, este permanece en el sistema aún el cliente haya perdido su línea de forma definitiva.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Captura:
                  </span>{" "}
                  Es el proceso de documentación de las interacciones que se tenga con un cliente.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Account overview:
                  </span>{" "}
                  Visualización de Cuenta del Cliente.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Service Removal:
                  </span>{" "}
                  Cancelación por ZB2.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Casos:
                  </span>{" "}
                  Son aquellos donde el representante debe escalar hacia un segundo nivel de soporte, porque no cuenta con los accesos y/o tiempo suficiente para resolver el problema del cliente.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Centro de Operaciones de la Red (COR):
                  </span>{" "}
                  Monitorea el funcionamiento de los elementos de la red y emite las alertas y comunicaciones internas necesarias, al momento de identificar una avería, y da seguimiento hasta que se solucione. Identifica causa raíz de las averías y contribuye al cierre de las brechas.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Interacción:
                  </span>{" "}
                  Es el nombre que se la da a la información entre el representante y el cliente, la cual se documenta en el sistema o a aquella avería, que el representante pudo resolver en conjunto con el cliente sin necesidad de escalar a un 2do nivel.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Minimensajes: 
                  </span>{" "}
                  Es el servicio de envío y recepción de mensajes de texto a través de un celular.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Reclamaciones: 
                  </span>{" "}
                  Corresponde a las reclamaciones de balance de los clientes con servicio móvil Prepago.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 dark:text-blue-700 underline-offset-1 underline">
                    Voz:
                  </span>{" "}
                  Se refiere al servicio a través del cual el cliente puede comunicarse con otra persona, comunicación verbal.
                </li> 
              </ul>
              <div
                className="h-auto mb-3 rounded-r-2xl bg-slate-900 dark:bg-blue-700 text-white cursor-pointer flex justify-center items-center text-3xl"
                onClick={() => setGlosario(false)}
              >
                <SlArrowRightCircle />
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <button
            className="-rotate-90 text-2xl font-bold p-3 bg-slate-900 dark:bg-blue-700 text-white rounded-t-3xl text-center absolute bottom-[-200px] -right-10 hover:bg-slate-950 transition-all duration-400"
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
