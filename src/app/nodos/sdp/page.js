"use client";
import React from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import Slideshow from "@/components/SlideShow";

const Home = () => {
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
            <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 dark:text-red-700 dark:mix-blend-normal dark:bg-slate-900 uppercase">
              SDP
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
          <h3 className="bg-gradient-to-b from-gray-400 via-slate-600 to-slate-700 py-12 px-16 rounded-3xl text-white font-bold mx-12 text-4xl opacity-90 hover:opacity-100 transition-all duration-400">
            SDP es un nodo de <span className="text-red-600">Claro</span>{" "}
            significa “Session Description Protocol” (Protocolo de descripción
            de sesión). Contiene información fundamental del Suscriptor y una
            sincronización con los AIR, siendo así un número mal aprovisionado
            en los SDP percibirá inconveniente en los AIR y en ECMS.
            <br />
            <br />
            Por nuestros sistemas podemos ver a que SDP apunta la suscripción,
            en caso de no apuntar a ninguna por algún inconveniente o error,
            este responde con NXXDOMAIN, ya que el campo no puede estar vacío.
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
            bg={"bg-gradient-to-b from-gray-400 via-slate-600 to-slate-700"}
            images={["/sdp/SDP1.png", "/sdp/SDP2.png"]}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
