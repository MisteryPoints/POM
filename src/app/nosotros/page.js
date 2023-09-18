"use client";
import React, { useEffect, useRef, useState } from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect"; 
import { motion, useScroll, useTransform } from 'framer-motion';
import Cards from "@/components/Cards";
import {BsFillArrowDownSquareFill} from 'react-icons/bs'

const AnimationCard = {
  enter: {
    opacity: 1,
    rotateX: 0,
    x: 0,
    scrollTo: { x: 100 },
    transition: {
      duration: 0.5,
    },
    display: "'grid",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    x: -700,
    transition: {
      duration: 0.5,
      delay: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const Home = () => {
  const [gerencia, setGerencia] = useState(false);
  const [supervisor, setSupervisor] = useState(false); 
  const refG = useRef(null);
  const refS = useRef(null);
  const { scrollYProgress } = useScroll();
  const yPosAnim = useTransform(scrollYProgress, [0, 0.4, 1], [0, -250, -100]);

  useEffect(() => {
    if (gerencia) {
      setTimeout(() => {
        window.scrollTo(0, refG?.current?.offsetTop - 50);
      }, 200);
    }
  }, [gerencia]);
  
  useEffect(() => {
    if (supervisor) {
      setTimeout(() => {
        window.scrollTo(0, refS?.current?.offsetTop - 50);
      }, 200);
    }
  }, [supervisor]);
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
      <motion.div className="w-full flex flex-col items-center justify-center -mt-[30px] scroll-smooth" 
        initial={{ opacity: 0, y: 70 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            delay: 0.4,
            duration: 0.4,
          },
        }}
        viewport={{ once: true }}>
        <Cards
          nombre="Freddy Ortiz"
          puesto="Gerente de Operaciones Móviles" 
          desc='/'
          link="/"
          img="/FreddyOrtiz.png"
          mail="mailto:freddy_ortiz@claro.com.do" 
          movil='8093508310'
          station='X-2422'
          lider={true}
        />
        <button className="w-full max-w-[299px] h-full flex items-center justify-center text-3xl text-black bg-sky-100 -mt-[1px] opacity-80 rounded-b-2xl" onClick={() =>{ 
          setGerencia(!gerencia)
          setSupervisor(false)
        }} style={{
          y: yPosAnim,
        }}><BsFillArrowDownSquareFill/></button>
        {gerencia ? ( 
        <motion.div className="grid grid-cols-5 w-full justify-center items-center mt-[30px] mx-auto" 
          ref={refG}
          animate={gerencia ? "enter" : "exit"}
          variants={AnimationCard}
        > 
            <Cards
              nombre="Jorge Roque"
              puesto="Analista Medios de Recargo" 
              desc='/'
              link="/casos/reclamacion"
              img="/JorgeRoque.png"
              mail="mailto:jorge_roque@claro.com.do" 
              movil='8097984614'
              station='X-2564'
              lider={false}
            />
            <Cards
              nombre="Parisa Pastrano"
              puesto="Analista Medios de Recargo" 
              desc='/'
              link="/casos/reclamacion"
              img="/ParisaPastrano.png"
              mail="mailto:parisa_pastrano@claro.com.do" 
              movil='8097076704'
              station='X-2859'
              lider={false}
            /> 
            <div className="flex flex-col justify-center col-span-1">  
              <Cards
                nombre="José Al. Rodríguez"
                puesto="Líder de Operaciones Móviles" 
                desc='/'
                link="/"
                img="/JoseRodriguez.png"
                mail="mailto:jose_al_rodriguez@claro.com.do" 
                movil='8299657933'
                station='X-2832'
                lider={true}
              />
              <button className="w-full max-w-[298px] h-full flex items-center justify-center self-center justify-self-center text-3xl text-black bg-yellow-800/60 -mt-[1px] opacity-80 rounded-b-2xl" onClick={() => setSupervisor(!supervisor)} style={{
                  y: yPosAnim,
                }}><BsFillArrowDownSquareFill/></button> 
            </div>
            <Cards
              nombre="Ruben Evertz"
              puesto="Analista Sr. Operaciones Móviles" 
              desc='/'
              link="/nxx"
              img="/RubenEvertz.png"
              mail="mailto:ruben_evertz@claro.com.do" 
              movil='8097192380'
              station='X-2591'
              lider={false}
            />
            
            
            <Cards
              nombre="Wilson Brito"
              puesto="Analista Sr Procesos y Estadísticas" 
              desc='/'
              link="/estadisticas"
              img="/WilsonBrito.png"
              mail="mailto:wilson_brito@claro.com.do" 
              movil='8299865658'
              station='X-7230'
              lider={false}
            />
          </motion.div>
          
        ) : ''}
        
        {supervisor ? ( 
            <motion.div className="grid grid-cols-5 justify-center items-center w-full gap-5 mt-[30px]" 
              ref={refS} 
              animate={supervisor ? "enter" : "exit"}
              variants={AnimationCard}>  
                <Cards
                  nombre="Kelvin Ceballo"
                  puesto="Analista Operaciones Móviles" 
                  desc='/'
                  link="/casos"
                  img="/KelvinCeballos.png"
                  mail="mailto:kelvin_ceballo@claro.com.do" 
                  movil='8298730217'
                  station='X-2031'
                  lider={false}
                /> 
                <Cards
                  nombre="Ginet Matos"
                  puesto="Analista Sr. Prevención y Proyectos" 
                  desc='https://clarocomdo-my.sharepoint.com/:x:/g/personal/jose_al_rodriguez_claro_com_do/EfNrhLza2WJBkXYZtYoPK-oB_parhA8eOVbbsnazrOkmPg?wdOrigin=TEAMS-ELECTRON.p2p.bim&wdExp=TEAMS-CONTROL&wdhostclicktime=1694725608273&web=1'
                  link="/prevencion/reclamacion"
                  img="/GinetMatos.png"
                  mail="mailto:ginet_matos@claro.com.do" 
                  movil='8096530242'
                  station='X-4797'
                  lider={false}
                /> 
                <Cards
                  nombre="Yael Segura"
                  puesto="Analista Sr. Prevención y Proyectos" 
                  desc='https://clarocomdo-my.sharepoint.com/:x:/g/personal/jose_al_rodriguez_claro_com_do/EVXxkdBgAHJGtS_g6GONk_MBsVp1zCpNIIoApZc7RQ6sLg?wdOrigin=TEAMS-ELECTRON.p2p.bim&wdExp=TEAMS-CONTROL&wdhostclicktime=1694725764152&web=1'
                  link="/prevencion/provision"
                  img="/YaelSegura.png"
                  mail="mailto:YaelSegura@claro.com.do" 
                  movil='8293827000'
                  station='X-4776'
                  lider={false}
                /> 
                <Cards
                  nombre="Rafael Pichardo"
                  puesto="Analista Sr. Prevención y Proyectos" 
                  desc='https://clarocomdo-my.sharepoint.com/:x:/g/personal/jose_al_rodriguez_claro_com_do/EfNrhLza2WJBkXYZtYoPK-oB_parhA8eOVbbsnazrOkmPg?wdOrigin=TEAMS-ELECTRON.p2p.bim&wdExp=TEAMS-CONTROL&wdhostclicktime=1694725608273&web=1'
                  link="/prevencion/averias"
                  img="/RafaelPichardo.png"
                  mail="mailto:rafael_pichardo@claro.com.do" 
                  movil='8494025052'
                  station='X-8112'
                  lider={false}
                /> 
                <Cards
                  nombre="Cristian Melo"
                  puesto="Analista Operaciones Móviles"  
                  desc='/'
                  link="/casos"
                  img="/CristianMelo.png"
                  mail="mailto:cristian_melo@claro.com.do" 
                  movil='8292172547'
                  station='X-3230'
                  lider={false}
                />  
                <div className='col-span-5 w-full flex gap-5 justify-center'>
                  <Cards
                    nombre="Willy Alcantara"
                    puesto="Analista Operaciones Móviles"  
                    desc='/'
                    link="/rebotes/prepago"
                    img="/WillyAlcantara.png"
                    mail="mailto:willy_alcantara@claro.com.do" 
                    movil='8097217805'
                    station='X-4002'
                    lider={false}
                  /> 
                  <Cards
                    nombre="Ariangel Díaz"
                    puesto="Analista Operaciones Móviles" 
                    desc='/'
                    link="/compare"
                    img="/AriangelDiaz.png"
                    mail="mailto:ariangel_diaz@claro.com.do" 
                    movil='8295510127'
                    station='X-2847'
                    lider={false}
                  /> 
                  <Cards
                    nombre="Mabeel Fernández"
                    puesto="Analista Operaciones Móviles" 
                    desc='/'
                    link="/rebotes/postpago"
                    img="/MabeelFernandez.png"
                    mail="mailto:mabeel_fernandez@claro.com.do" 
                    movil='8292501445'
                    station='X-5735'
                    lider={false}
                  /> 
                  <Cards
                    nombre="Víctor Tejada"
                    puesto="Analista Operaciones Móviles" 
                    desc='/'
                    link="/casos"
                    img="/VictorTejada.png"
                    mail="mailto:victor_tejada@claro.com.do" 
                    movil='8097298392'
                    station='X-5118'
                    lider={false}
                  />    
                </div>
            </motion.div> 
        ) : ''}
      </motion.div>
    </div>
  );
};

export default Home;
