"use client";
import React, { useEffect, useRef, useState } from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion, useScroll, useTransform } from "framer-motion";
import { SlArrowRightCircle } from "react-icons/sl";
import Slideshow from "@/components/SlideShow";

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
              ECMS
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
          <h3 className="bg-gradient-to-b from-teal-400 via-blue-500 to-sky-600 py-12 px-16 rounded-3xl text-white font-bold mx-12 text-4xl">
            ECMS es la plataforma de <span className="text-red-600">Claro</span>{" "}
            que permite el manejo de Cartera para Suscripciones Prepagadas.
            <br />
            <br />
            Posee funcionamiento de varios bolsillos (Dedicated Account), que
            permite el manejo de balances promocionales, bonos, ofertas o
            asignación de minutos de servicios mixtos (Control y Flota).
            <br />
            <br />
            También, a través del PAM se permite controlar el corte de las
            suscipciones Mixtas y su asignación de minutos de Voz y SMS.
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
            bg={"bg-gradient-to-b from-teal-400 via-blue-500 to-sky-600"}
            images={[
              "/ecms/ECMS1.png",
              "/ecms/ECMS2.png",
              "/ecms/ECMS3.png",
              "/ecms/ECMS4.png",
              "/ecms/ECMS5.png",
              "/ecms/ECMS6.png",
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
                    ECMS:
                  </span>{" "}
                  Ericsson Client Management System. Sistema de Manejo de
                  Clientes de Ericsson.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Contract overview:
                  </span>{" "}
                  Visualización de Contrato o Servicio.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Service Fee Expiration:
                  </span>{" "}
                  Expiración del Servicio (Suspensión ZB2).
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Supervision Fee Expiration:
                  </span>{" "}
                  Expiración de la supervisión (Suspensión ZB1).
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Charging Services:
                  </span>{" "}
                  Servicios del Plan Cargado.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    VPN Hybrid:
                  </span>{" "}
                  Activación de Habla Gratis Flota.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Pending Validation:
                  </span>{" "}
                  Validación de Cliente Pendiente, para clientes preactivos.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    USSD EOCN:
                  </span>{" "}
                  End of Call Notification, Notificación al finalizar llamada,
                  este permite ver su balance al completar una llamada.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Account overview:
                  </span>{" "}
                  Visualización de Cuenta del Cliente.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Service Removal:
                  </span>{" "}
                  Cancelación por ZB2.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Credit clearance:
                  </span>{" "}
                  Vigencia de Balance.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Main account:
                  </span>{" "}
                  Cuenta Principal.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    Dedicated Accounts:
                  </span>{" "}
                  Cuentas Dedicadas o Secundarias.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    InitialAmt:
                  </span>{" "}
                  Cuenta de Plan Control.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    MonthlySms:
                  </span>{" "}
                  Cuenta de Plan Control SMS.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    PAM:
                  </span>{" "}
                  Period Account Manager, Manejador de Corte de Cuentas.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    SIM:
                  </span>{" "}
                  Suscriber Identity Module, Tarjeta SIM del Cliente.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    MSISDN:
                  </span>{" "}
                  Mobile Station Integrated Services Digital Network, Teléfono
                  del Cliente.
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
