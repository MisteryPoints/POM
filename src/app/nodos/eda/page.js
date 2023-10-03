"use client";
import React, { useEffect, useRef, useState } from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion, useScroll, useTransform } from "framer-motion";
import { SlArrowRightCircle } from "react-icons/sl";
import Slideshow from "@/components/SlideShow";
import Link from "next/link";

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
              EMA / EDA
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
          <h3 className="bg-gradient-to-b from-green-500 via-teal-500 to-green-700 py-12 px-16 rounded-3xl text-white font-bold mx-12 text-4xl opacity-90 hover:opacity-100 transition-all duration-400">
            EMA es un nodo de <span className="text-red-600">Claro</span> que
            permite el flujo de las transacciones de Aprovisionamiento del
            servicio digitado, brindando el mismo a los nodos correspondientes
            de la red.
            <br />
            <br />
            EDA está en proceso de pruebas y mejorará el rendimiento de su
            predecesor EMA, siendo así un Multi Aprovisionador - se encarga de
            hacer la interacción en un formato entendible para el NB
            (NorthBound) que sería Sistemas TI hacia los nodos SB (SouthBound)
            que serían los nodos de la Red CORE.
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
            bg={"bg-gradient-to-b from-green-500 via-teal-500 to-green-700"}
            images={[
              "/ema/EMA1.png",
              "/ema/EMA2.png",
              "/ema/EMA3.png",
              "/ema/EMA4.png",
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
                    EMA:
                  </span>{" "}
                  Ericsson Multi - Activation. Multi Activador.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    EDA:
                  </span>{" "}
                  Ericsson Dynamic Activation. Activador Dinámico.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Service Class:
                  </span>{" "}
                  Es la identificación denominada a través de EMA/EDA que posee
                  la configuración del Plan y su descripción en ECMS.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Rebote:
                  </span>{" "}
                  Es provocado cuando una transacción no completa
                  satisfactoriamente y retorna un error.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    FL1:
                  </span>{" "}
                  Es el Puerto Flota Gateway que utiliza el Switch para activar
                  servicios mixtos. Estos se comunican con PPG dejando logs a
                  través de mixto y luego son enviados a EMA/EDA por el módulo
                  de rebotes.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    MST1:
                  </span>{" "}
                  Es el Puerto MINSAT OLM que utiliza el Switch para activar o
                  modificar el Perfil del cliente en PPG, suele ser utilizado
                  para servicios Postpago (No Mixtos).
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
        <Link
          className="-rotate-90 text-2xl font-bold p-3 bg-green-900 text-white rounded-t-3xl text-center absolute bottom-[-420px] -right-28 hover:bg-green-950 transition-all duration-400 hover:cursor-pointer no-underline"
          href="../sox/Lista%20de%20Service%20Class.xlsx"
          target="_blank"
        >
          Lista de Service Class
        </Link>
        <Link
          className="-rotate-90 text-2xl font-bold p-3 bg-teal-900 text-white rounded-t-3xl text-center absolute bottom-[-700px] -right-24 hover:bg-teal-950 transition-all duration-400 hover:cursor-pointer no-underline"
          href="../sox/Respuestas%20del%20AIR.xlsx"
          target="_blank"
        >
          Respuestas del AIR
        </Link>
      </div>
    </div>
  );
};

export default Home;
