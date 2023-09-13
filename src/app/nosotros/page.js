"use client";
import React, { useState } from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect"; 
import { motion } from 'framer-motion';
import Cards from "@/components/Cards";
import {BsFillArrowDownSquareFill} from 'react-icons/bs'

const Home = () => {
  const [gerencia, setGerencia] = useState(false);
  const [supervisor, setSupervisor] = useState(false);
  return (
    <div className="bg-slate-300 w-full">
      <TransitionEffect />
      <NavHome />    
      <motion.div
        className="select-none m-auto duration-300"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.1,
            duration: 0.4,
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
            Nosotros
          </h1>
        </div>
      </motion.div>
      <div className="w-full flex flex-col items-center justify-center -mt-[30px]">
        <Cards
          nombre="Freddy Ortiz"
          puesto="Gerente de Operaciones Móviles" 
          link="/"
          img="/FreddyOrtiz.png"
          mail="mailto:freddy_ortiz@claro.com.do" 
          movil='8093508310'
          station='X-2422'
          lider={true}
        />
        <button className="w-full max-w-[299px] h-full flex items-center justify-center text-3xl text-black bg-white -mt-[1px] opacity-80 rounded-b-2xl" onClick={() => setGerencia(!gerencia)}><BsFillArrowDownSquareFill/></button>
        {gerencia ? ( 
        <div className="grid grid-cols-5 w-full justify-center items-center mt-[30px] mx-auto"> 
            <Cards
              nombre="Jorge Roque"
              puesto="Analista Medios de Recargo" 
              link="/"
              img="/JorgeRoque.png"
              mail="mailto:jorge_roque@claro.com.do" 
              movil='8299657933'
              station='X-2564'
              lider={false}
            />
            <Cards
              nombre="Parisa Pastrano"
              puesto="Analista Medios de Recargo" 
              link="/"
              img="/ParisaPastrano.png"
              mail="mailto:parisa_pastrano@claro.com.do" 
              movil='8299657933'
              station='X-2859'
              lider={false}
            /> 
            <div className="flex flex-col justify-center col-span-1">  
              <Cards
                nombre="José Al. Rodríguez"
                puesto="Líder de Operaciones Móviles" 
                link="/"
                img="/JoseRodriguez.png"
                mail="mailto:jose_al_rodriguez@claro.com.do" 
                movil='8299657933'
                station='X-2832'
                lider={true}
              />
              <button className="w-full max-w-[299px] h-full flex items-center justify-center self-center justify-self-center text-3xl text-black bg-white -mt-[1px] opacity-80 rounded-b-2xl" onClick={() => setSupervisor(!supervisor)}><BsFillArrowDownSquareFill/></button> 
            </div>
            <Cards
              nombre="Ruben Evertz"
              puesto="Analista Sr. Operaciones Móviles" 
              link="/"
              img="/RubenEvertz.png"
              mail="mailto:ruben_evertz@claro.com.do" 
              movil='8299657933'
              station='X-2591'
              lider={false}
            />
            
            
            <Cards
              nombre="Wilson Brito"
              puesto="Analista Sr Procesos y Estadísticas" 
              link="/"
              img="/WilsonBrito.png"
              mail="mailto:wilson_brito@claro.com.do" 
              movil='8299657933'
              station='X-7230'
              lider={false}
            />
          </div>
          
        ) : ''}
        
        {supervisor ? ( 
            <div className="grid grid-cols-5 justify-center items-center w-full gap-5 mt-[30px]"> 
                <Cards
                  nombre="Ginet Matos"
                  puesto="Analista Sr. Prevención y Proyectos" 
                  link="/"
                  img="/GinetMatos.png"
                  mail="mailto:ginet_matos@claro.com.do" 
                  movil='8299657933'
                  station='X-4797'
                  lider={false}
                /> 
                <Cards
                  nombre="Yael Segura"
                  puesto="Analista Sr. Prevención y Proyectos" 
                  link="/"
                  img="/YaelSegura.png"
                  mail="mailto:yael_segura@claro.com.do" 
                  movil='8299657933'
                  station='X-4776'
                  lider={false}
                /> 
                <Cards
                  nombre="Rafael Pichardo"
                  puesto="Analista Sr. Prevención y Proyectos" 
                  link="/"
                  img="/RafaelPichardo.png"
                  mail="mailto:rafael_pichardo@claro.com.do" 
                  movil='8299657933'
                  station='X-8112'
                  lider={false}
                /> 
                <Cards
                  nombre="Kelvin Ceballo"
                  puesto="Analista Operaciones Móviles" 
                  link="/"
                  img="/KelvinCeballos.png"
                  mail="mailto:kelvin_ceballo@claro.com.do" 
                  movil='8299657933'
                  station='X-2031'
                  lider={false}
                /> 
                <Cards
                  nombre="Cristian Melo"
                  puesto="Analista Operaciones Móviles" 
                  link="/"
                  img="/CristianMelo.png"
                  mail="mailto:cristian_melo@claro.com.do" 
                  movil='8299657933'
                  station='X-3230'
                  lider={false}
                />  
 
                  <Cards
                    nombre="Willy Alcantara"
                    puesto="Analista Operaciones Móviles" 
                    link="/"
                    img="/WillyAlcantara.png"
                    mail="mailto:willy_alcantara@claro.com.do" 
                    movil='8299657933'
                    station='X-4002'
                    lider={false}
                  /> 
                  <Cards
                    nombre="Ariangel Díaz"
                    puesto="Analista Operaciones Móviles" 
                    link="/"
                    img="/AriangelDiaz.png"
                    mail="mailto:ariangel_diaz@claro.com.do" 
                    movil='8299657933'
                    station='X-2847'
                    lider={false}
                  /> 
                  <Cards
                    nombre="Mabeel Fernández"
                    puesto="Analista Operaciones Móviles" 
                    link="/"
                    img="/MabeelFernandez.png"
                    mail="mailto:mabeel_fernandez@claro.com.do" 
                    movil='8299657933'
                    station='X-5735'
                    lider={false}
                  /> 
                  <Cards
                    nombre="Víctor Tejada"
                    puesto="Analista Operaciones Móviles" 
                    link="/"
                    img="/VictorTejada.png"
                    mail="mailto:victor_tejada@claro.com.do" 
                    movil='8097298392'
                    station='X-5118'
                    lider={false}
                  />    
            </div> 
        ) : ''}
      </div>
    </div>
  );
};

export default Home;
