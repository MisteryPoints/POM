"use client";
import React from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import Image from "next/image";
import Instructive from "@/components/Instructive";

const FramerImage = motion(Image);

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
              Rebotes Prepago
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="col-span-12 select-none m-auto duration-300 pt-12"
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
          <div className="col-span-6 left-0 font-bold gap-x-5">
            <h1 className="text-[40px]">Plataforma:</h1><h2 className="text-[40px] text-gray-700">Bounces</h2>
          </div>
          <h2>Preguntas Frecuentes</h2>
          <Instructive
            title='¿Qué es Bounces?'
            img=''
            details='Bounces es el nuevo módulo de gestión de rebotes Prepago, flota, AIR y Datos, por el que se plantea manejar usando el nuevo nodo EDA, esto permite mayor velocidad y mejor gestión de los rebotes, siendo un upgrade de sistemas y descargando un poco el Sistema de PPG que anteriormente gestionaba a parte de muchas cosas este procesamiento lo que consumía amplias capacidades.' createdBy='Víctor Tejada' 
            date='02Abril2024'
            system='Bounces'
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
