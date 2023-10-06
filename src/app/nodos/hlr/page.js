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
              HLR
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
          <h3 className="bg-gradient-to-b from-gray-500 via-yellow-500 to-yellow-300 py-12 px-16 rounded-3xl text-white font-bold mx-12 text-4xl">
            HLR es el nodo de <span className="text-red-600">Claro</span> que
            permite el aprovisionamiento de los perfiles del cliente en la
            central.
            <br />
            <br />
            Dentro de la central se maneja el aprovisionamiento de los servicios
            de Red, datos, APN privados, sms, llamadas, VoLTE, VoWIFI, 5G y
            demás.
            <br />
            <br />
            También, permite la personalización de todos estos servicios de
            acuerdo al profile recibido en los template, que refleja los
            parámetros del plan contratado.
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
            bg={"bg-gradient-to-b from-gray-500 via-yellow-500 to-yellow-300"}
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
                    HLR:
                  </span>{" "}
                  Home Location Register, Forma parte de la infraestructura de
                  telecomunicaciones empleada en las redes móviles para
                  almacenar información acerca de los abonados y apoya el
                  agrupamiento de conexiones.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    VLR:
                  </span>{" "}
                  Visitor Location Register, es una base de datos más volátil
                  que almacena, para el área cubierta por un MSC, los
                  identificativos, permisos, tipos de abono y localizaciones en
                  la red de todos los usuarios activos en ese momento y en ese
                  tramo de la red.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    MSC:
                  </span>{" "}
                  Mobile Switching Center, son vitales para cualquier consumidor
                  con un dispositivo móvil. El sitio generalmente consiste en
                  una gran torre donde los operadores inalámbricos colocan
                  antenas para suministrar servicios a dispositivos móviles
                  dentro de las áreas circundantes.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    MSISDN:
                  </span>{" "}
                  Mobile Station Integrated Services Digital Network, es el
                  número de teléfono que identifica a un dispositivo durante las
                  llamadas o las sesiones de datos.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    IMSI:
                  </span>{" "}
                  International Mobile Subscriber Identity, es un número único
                  que identifica a una sim card.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    SIM:
                  </span>{" "}
                  Subscriber Identity Module, son las encargadas de almacenar la
                  clave de servicio de los suscriptores o usuarios para poder
                  identificarse en la red de manera única.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    AUC:
                  </span>{" "}
                  Authentication Centre, es el centro de autenticación de las
                  tarjetas SIM.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    NAM:
                  </span>{" "}
                  Network Access Mode, propiedad que mantiene el acceso a la red
                  del cliente, en 0 disponible red e internet, en 1 solo red y
                  en 2 bloqueado.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    PDP:
                  </span>{" "}
                  Policy Decision Point, define los protocolos de RED a
                  utilizar, pueden ser IPV4 o IPV6.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    TS11:
                  </span>{" "}
                  Servicio de Telefonía.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    TS12:
                  </span>{" "}
                  Servicio de Telefonía para Emergencias.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    TS21:
                  </span>{" "}
                  Servicio de Minimensajes Entrantes.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    TS21:
                  </span>{" "}
                  Servicio de Minimensajes Salientes.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    CAW:
                  </span>{" "}
                  Call Waiting, servicio de Llamada en Espera.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    CFU:
                  </span>{" "}
                  Call Forwarding Unconditional, Desvío de llamada
                  incondicional, este servicio permite desviar todas las
                  llamadas entrantes.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    CFB:
                  </span>{" "}
                  Call Forwarding on Busy, Desvío de llamada en caso de que el
                  abonado destino esté comunicando.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    CFNRC:
                  </span>{" "}
                  Call Forwarding on Not Reachable, Desvío de llamada en caso de
                  que el abonado destino no esté alcanzable.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    CFNRC:
                  </span>{" "}
                  Call Forwarding on Not Reachable, Desvío de llamada en caso de
                  que el abonado destino no esté alcanzable.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    CFNRY:
                  </span>{" "}
                  Call Forwarding on Not Reply, Desvío de llamada en caso de no
                  tener respuesta.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    BAOC:
                  </span>{" "}
                  Barring of All Outgoing Calls, Prohibición de todas las
                  llamadas salientes.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    BOIC:
                  </span>{" "}
                  Barring of All Outgoing International Calls, Prohibición de
                  todas las llamadas salientes internacionales.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    APN:
                  </span>{" "}
                  Access Point Name, es el nombre de la puerta de acceso entre
                  la red GPRS y otra red.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    GPRS:
                  </span>{" "}
                  General Packet Radio Service, Estándar de comunicación para
                  teléfonos móviles que transmite la información por grupos
                  significativos o paquetes.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    EPS:
                  </span>{" "}
                  Evolved Packet System, es la evolución de la red de internet
                  siendo manejada por paquetes de datos.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    HSS:
                  </span>{" "}
                  Home Subscriber Server, sirve como depósito principal de la
                  base de datos de la información del suscriptor dentro de un
                  core network LTE/EPC o IMS.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    PGW:
                  </span>{" "}
                  Packet Gateway, es un servidor/sistema dentro de una red móvil
                  (3G en adelante) que proporciona conectividad entre el
                  dispositivo del usuario, como un teléfono celular, y otras
                  redes, como Internet.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    ODB:
                  </span>{" "}
                  Operator Determined call Barring, es la estructura de la
                  operadora donde se puede configurar los bloqueos de llamadas.
                </li>
                <li>
                  <span className="font-bold text-2xl text-blue-600 underline-offset-1 underline">
                    QOS:
                  </span>{" "}
                  Quality of Service, es la calidad de la velocidad de la red.
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
