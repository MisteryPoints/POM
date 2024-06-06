"use client";
import React from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import Image from "next/image";

const FramerImage = motion(Image);

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
            <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 dark:text-red-800 dark:mix-blend-normal dark:bg-slate-900 uppercase">
              Dashboard Medios de Recargo
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
          <FramerImage
            src="/mantenimiento.png"
            priority="true"
            width="600"
            height="600"
            alt="Mantenimiento"
            className="mx-auto"
            initial={{ opacity: 0, y: 70 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 1,
                duration: 0.4,
              },
            }}
            viewport={{ once: true }}
          />
          <h1 className="text-center text-7xl font-extrabold uppercase dark:text-slate-200">
            Mantenimiento
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
