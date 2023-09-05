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
            link='../sox/DIAGN%C3%93STICO%20AVER%C3%8DAS%20M%C3%93VILES.pdf' 
          />  
          <Instructivos
            name='Manejo Fallas Móviles Provisión'
            img={'../Sharepoint.jpg'}
            link='../sox/MANEJO%20DE%20FALLAS%20M%C3%93VILES%20EN%20SISTEMAS%20DE%20APROVISIONAMIENTO.pdf'
          />  
          <Instructivos
            name='Manejo Errores Rebotes'
            img={'../Sharepoint.jpg'}
            link='../sox/MANEJO%20DE%20ERRORES%20Y%20REBOTES.pdf'
          />  
          <Instructivos
            name='Manual Voucher Server'
            img={'../Sharepoint.jpg'}
            link='../sox/MANUAL%20DE%20USUARIO%20VOUCHER%20SERVER.pdf'
          />  
          <Instructivos
            name='Reverso'
            img={'../Sharepoint.jpg'}
            link='../sox/REVERSO.pdf'
          />  
          <Instructivos
            name='Fallas Cancelación Servicios Móviles'
            img={'../Sharepoint.jpg'}
            link='../sox/GESTI%C3%93N%20DE%20FALLAS%20EN%20CANCELACI%C3%93N%20DE%20SERVICIOS%20M%C3%93VILES.pdf'
          />  
          <Instructivos
            name='Reclamación Medios de Recarga'
            img={'../Sharepoint.jpg'}
            link='../sox/CIERRE%20RECLAMACIONES%20MEDIOS%20DE%20RECARGA.pdf'
          />   
          <Instructivos
            name='Contingencia No Disp Ensamble'
            img={'../Sharepoint.jpg'}
            link='../sox/CONTINGENCIA%20ANTE%20NO%20DISPONIBILIDAD%20DE%20ENSEMBLE.pdf'
          />  
          <Instructivos
            name='Sistema Commplex'
            img={'../Sharepoint.jpg'}
            link='../sox/SISTEMA%20COMMPLEX.pdf'
          />  
          <Instructivos
            name='SAAM'
            img={'../Sharepoint.jpg'}
            link='../sox/SISTEMA%20DE%20ADMINISTRACI%C3%93N%20DE%20AVER%C3%8DAS%20M%C3%93VILES.pdf'
          />  
          <Instructivos
            name='Manual Bancatel'
            img={'../Sharepoint.jpg'}
            link='../sox/MANUAL%20DE%20USUARIOS%20BANCATEL.pdf'
          />  
          <Instructivos
            name='Operacional CCM Móviles'
            img={'../Sharepoint.jpg'}
            link='../sox/OPERACIONAL%20CCM%20M%C3%93VILES.pdf'
          />  
          <Instructivos
            name='Series Negadas'
            img={'../Sharepoint.jpg'}
            link='../sox/MANEJO%20DE%20SERIES%20NEGADAS.pdf'
          />  
          <Instructivos
            name='Reverso Carga Fácil'
            img={'../Sharepoint.jpg'}
            link='../sox/REVERSO%20CARGA%20F%C3%81CIL.pdf'
          />  
          <Instructivos
            name='Compares Provisión'
            img={'../Sharepoint.jpg'}
            link='../sox/COMPARES%20DE%20APROVISIONAMIENTO.pdf'
          />  
          <Instructivos
            name='Contingencia Provisión Manejados OpeMov'
            img={'../Sharepoint.jpg'}
            link='../sox/CONTINGENCIA%20APROVISIONAMIENTO%20DE%20SERVICIOS%20MANEJADA%20POR%20OPERACIONES%20M%C3%93VILES.pdf'
          />  
          <Instructivos
            name='Averías Segmento EyF Automáticas'
            img={'../Sharepoint.jpg'}
            link='../sox/AVER%C3%8DAS%20APLICACIONES%20M%C3%93VILES%20AUTOM%C3%81TICAS%20SEGMENTO%20E%20Y%20F.pdf'
          />  
          <Instructivos
            name='Averías Localización Vehicular'
            img={'../Sharepoint.jpg'}
            link='../sox/AVER%C3%8DAS%20DE%20LOCALIZACI%C3%93N%20VEHICULAR.pdf'
          />  
          <Instructivos
            name='Reclamación Norton Antivirus'
            img={'../Sharepoint.jpg'}
            link='../sox/GESTI%C3%93N%20DE%20RECLAMACIONES%20Y%20AVER%C3%8DAS%20NORTON%20SEGURIDAD%20DIGITAL.pdf'
          />  
          <Instructivos
            name='Casos SWAT TEAM'
            img={'../Sharepoint.jpg'}
            link='../sox/ATENCI%C3%93N%20CASOS%20SWAT%20TEAM.pdf'
          />  
          <Instructivos
            name='Desbloqueo Equipos Móviles'
            img={'../Sharepoint.jpg'}
            link='../sox/DESBLOQUEO%20EQUIPOS%20M%C3%93VILES.pdf'
          />  
          <Instructivos
            name='Validaciones CCM'
            img={'../Sharepoint.jpg'}
            link='../sox/VALIDACI%C3%93N%20DE%20USUARIOS%20EN%20CALL%20CENTER%20M%C3%93VILES.pdf'
          />  
          <Instructivos
            name='Ajustes por Averías y Provisión'
            img={'../Sharepoint.jpg'}
            link='../sox/AJUSTES%20POR%20APROVISIONAMIENTO%20M%C3%93VIL%20Y%20AVER%C3%8DAS.pdf'
          />  
          <Instructivos
            name='Ajustes Prepago'
            img={'../Sharepoint.jpg'}
            link='../sox/AJUSTE%20PREPAGO.pdf'
          />  
          <Instructivos
            name='Excepción Límites Líneas Prepago'
            img={'../Sharepoint.jpg'}
            link='../sox/MANEJO%20DE%20EXCEPCI%C3%93N%20L%C3%8DMITE%20DE%20L%C3%8DNEAS%20PREPAGADAS.pdf'
          />  
          <Instructivos
            name='Fallas Provisión Datos Móviles'
            img={'../Sharepoint.jpg'}
            link='../sox/GESTI%C3%93N%20DE%20FALLAS%20APROVISIONAMIENTO%20SERVICIO%20DE%20DATOS%20M%C3%93VILES.pdf'
          />  
          <Instructivos
            name='Averías Móviles'
            img={'../Sharepoint.jpg'}
            link='../sox/AVER%C3%8DAS%20M%C3%93VILES.pdf'
          />  
          <Instructivos
            name='Admin Códigos NXX'
            img={'../Sharepoint.jpg'}
            link='../sox/ADMINISTRACI%C3%93N%20DE%20C%C3%93DIGOS%20NXX.pdf'
          />  
          <Instructivos
            name='Acceso al 911'
            img={'../Sharepoint.jpg'}
            link='../sox/BLOQUEO%20Y%20DESBLOQUEO%20ACCESO%20AL%20911.pdf'
          />  
          <Instructivos
            name='Averías Claro Sync'
            img={'../Sharepoint.jpg'}
            link='../sox/AVER%C3%8DA%20SERVICIO%20CLARO%20SYNC.pdf'
          />  
          <Instructivos
            name='Auditorías Ofertas Móviles'
            img={'../Sharepoint.jpg'}
            link='../sox/AUDITOR%C3%8DA%20OFERTAS%20M%C3%93VILES.pdf'
          />  
        </div>
      </div>
    </div>
  );
};

export default Home;
