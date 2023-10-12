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
              Voice Mail
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
          <h3 className="bg-gradient-to-b from-orange-400 via-yellow-500 to-orange-600 py-12 px-16 rounded-3xl text-white font-bold mx-12 text-4xl">
            Voice Mail es el nodo de <span className="text-red-600">Claro</span>{" "}
            que permite el manejo de mensajes telefónicos para un gran grupo de
            personas. Permite a los usuarios recibir, almacenar y gestionar
            mensajes de voz de las personas que le llaman cuando se encuentra
            ausente o con la línea ocupada.
            <br />
            <br />
            En su configuración más básica, provee únicamente las
            funcionalidades de un contestador automático, sin embargo es un
            sistema mucho más sofisticado, que provee múltiples funcionalidades.
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
            bg={"bg-gradient-to-b from-orange-400 via-yellow-500 to-orange-600"}
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
      </div>
    </div>
  );
};

export default Home;
