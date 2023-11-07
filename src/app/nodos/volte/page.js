"use client";
import React from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import Slideshow from "@/components/SlideShow";

const Home = () => {
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
              VOLTE
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
          <h3 className="bg-gradient-to-b from-gray-700 via-slate-800 to-slate-900 py-12 px-16 rounded-3xl text-white font-bold mx-12 text-4xl">
            VoLTE significa Voz sobre LTE, ofrece la posibilidad de realizar
            llamadas de voz a través de la red móvil LTE/4G
            <br />
            <br />
            SPG siginfica Service Provisioning Gateway, que es el nodo que nos
            permite el aprovisionamiento del servicio VoLTE en el IMS.
            <br />
            <br />
            IMS significa IP Multimedia Subsystem, define un marco de trabajo y
            arquitectura base para tráfico de voz, datos, video, servicios e
            imágenes conjuntamente a través de infraestructura basada en el
            enrutamiento de paquetes a través de direcciones IP.
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
            bg={"bg-gradient-to-b from-gray-700 via-slate-800 to-slate-900"}
            images={[
              "/volte/VOLTE1.png",
              "/volte/VOLTE2.png",
              "/volte/VOLTE3.png",
              "/volte/VOLTE4.png",
              "/volte/VOLTE5.png", 
            ]}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
