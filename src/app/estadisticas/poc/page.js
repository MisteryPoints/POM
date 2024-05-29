"use client";
import React from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion"; 
import { forceDark } from '@/api/forceDark';
import Script from 'next/script' 

const Home = () => {
  return (
    <div className="bg-slate-300 w-full">
      <TransitionEffect />
      <NavHome />
      <div className="grid grid-cols-12 mx-24 mt-0 justify-center gap-x-5 gap-y-2">
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
              Dashboard POC
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="col-span-12 select-none m-auto duration-300 w-full min-h-screen"
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
            <iframe
              loading='lazy'
              defaulttheme="system"
              src="https://ntppbirpt0001/reports/powerbi/POC/Estadistica%20SAAM?rs:Command=Render&rc:Toolbar=false"
              className='min-h-screen min-w-full rounded-lg shadow-xl shadow-slate-500 forceDark'
              style={{background: "#C4C4C4", color: "black"}} onLoadStart={() => forceDark} >
              <meta name="color-scheme" content="dark"></meta>   
            </iframe>   
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
