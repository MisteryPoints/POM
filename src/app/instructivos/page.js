"use client";
import React, { useState } from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import {motion} from 'framer-motion'
import Link from "next/link"; 


const FramerLink = motion(Link); 

const Instructivos = ({name, img, link,}) => {
  return ( 
    <FramerLink className="col-span-1 rounded-[2rem] select-none m-auto drop-shadow-md w-[240px] h-[240px] no-underline relative inline-flex items-center justify-start overflow-hidden transition-all group bg-cover"   
      href={link}
      target="_blank"
      style={{backgroundImage: `url(${img})`}}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { 
          delay: 0.4,
          duration: 0.6 
        },
      }}
      viewport={{ once: true }}
      download=''
    >  
      <span className="w-0 h-0 rounded-[2rem] bg-black absolute bottom-0 left-1/2 -translate-x-1/2 ease-out duration-500 transition-all w-[102%] group-hover:h-full -z-1 opacity-50"></span> 
      <h1 className="absolute bottom-0 uppercase font-extrabold text-2xl text-gray-800 text-center left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:text-white z-10 group-hover:-translate-y-[60px] group-hover:text-3xl group-hover:hyphens-auto">{name}</h1> 
    </FramerLink>
  )
}

const Home = () => {
  return (
    <div className="bg-slate-300 w-full">
      <TransitionEffect />
      <NavHome />
      <div className="mx-24 mt-0 justify-center gap-x-5 gap-y-6">
        <motion.div className="select-none m-auto duration-300"   
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { 
              delay: 0.6,
              duration: 0.6 
            },
          }}
          viewport={{ once: true }}> 
          <div style={{background: "url(https://media.istockphoto.com/id/1292947888/vector/%C3%B0%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C2%B5-%C3%B1%C3%B1%C3%B1%C3%B1%C3%B0%C3%B0%C3%B1%C3%B1%C3%B0%C3%B0.jpg?s=612x612&w=0&k=20&c=YagL6dH_mSj9NfTN8vCvsT3Lya9d8SbI32LKYPLDhVs=)"}}
              className="m-20">
              <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 uppercase">
                INSTRUCTIVOS 
              </h1>
          </div>
        </motion.div>  
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 min-h-screen gap-y-8 gap-x-16 mx-24 my-12"> 
          <Instructivos
            name='Diagnóstico Averías Móviles'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/Documentos/DIAGN%C3%93STICO%20AVER%C3%8DAS%20M%C3%93VILES.docx'
            file=''
          />  
          <Instructivos
            name='Manejo Fallas Móviles Provisión'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/Documentos/MANEJO%20DE%20FALLAS%20M%C3%93VILES%20EN%20SISTEMAS%20DE%20APROVISIONAMIENTO.docx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
          <Instructivos
            name='SOX'
            img={'../Sharepoint.jpg'}
            link='http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx'
          />  
        </div>
      </div>
    </div>
  );
};

export default Home;
