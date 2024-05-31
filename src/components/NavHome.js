"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { Navigation } from "./Navigation"; 
import { motion } from "framer-motion"; 
import Link from "next/link"; 
import { ABirthday } from "@/api/API";
import BirthCard from "./BirthCard";  
import { ImCross } from 'react-icons/im'
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons';
import { useTheme } from 'next-themes';


const FramerLink = motion(Link);
const FramerImage = motion(Image);

const AnimationCard = {
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1,
      duration: 0.9,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    x: 700,
    transition: {
      duration: 0.9,
      delay: 0.1,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

const CheckDate = () => {
  let cumple;
  const date = new Date();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const fixedDate =
    day.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    }) +
    "-" +
    month.toLocaleString("en-US", {
      minimumIntegerDigits: 2,
      useGrouping: false,
    });

  ABirthday.forEach(({ nombre, birthday, img, mail, movil, station }) => {
    if (birthday == fixedDate) {
      cumple = {
        nombre,
        birthday,
        img,
        mail,
        movil,
        station,
      };
    }
  });
  return cumple;
};

const NavHome = () => {
  const refD = useRef(null);
  const [cumple, setCumple] = useState(false);
  const [not, setNot] = useState(false);

  useEffect(() => {
    if (!cumple && !not) {
      setCumple(CheckDate());
    }
    if (not) {
      setTimeout(() => {
        setCumple(false);
      }, [400]);
    }
  }, [cumple, not]);

  const handleDragEnd = () => {
    const modalElement = refD?.current;
    if (modalElement) {
      const coords = modalElement.style.transform.match(
        /^translateX\((.+)px\) translateY\((.+)px\) translateZ/
      );
      if (coords[1] > 200) {
        setNot(true);
      }
    }
  };
  
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => { 
    setMounted(true); 
  }, []); 

  if(!mounted) return null; //Evitar problemas de rehidratación.

  return (
    <>
      <main
        className={
          "h-screen -mt-12 lg:min-h-[900px] 2xl:max-h-[1200px] bg-cover bg-no-repeat relative -z-0 selection:bg-red-700 selection:text-white shadow-[0px_15px_25px_10px_rgba(17,20,26,0.65)]"
        }
      >
        <div className='absolute z-[-2] flex flex-col content-between h-full w-full'>
          <div className="flex w-full bg-black !min-h-[20.5%]"></div>
          <div className="flex w-full bg-transparent min-h-[62%]"></div>
          <div className="flex w-full bg-black !min-h-[17.5%]"></div>
        </div>
        <div className="h-screen mt-12 min-h-[650px] max-h-[750px] w-full bg-gray-700/10 absolute -z-10 select-none"></div>
        <Link href="/">
          <FramerImage
            src="/logo-pom.png"
            priority="true"
            width="120"
            height="60"
            alt="Logo POM"
            className="mx-auto z-50"
            initial={{ opacity: 0, y: 0, scale: 1.0 }}
            whileInView={{
              opacity: 1,
              y: 70,
              transition: {
                delay: 0.6,
                duration: 0.7,
              },
            }}
            whileHover={{
              scale: [1.05, 0.85, 1.21, 0.85, 1.05],
              transition: {
                duration: 3,
                ease: "easeOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
              },
            }}
            viewport={{ once: true }}
          />
        </Link>
        <div className="pt-[89px] mx-auto select-none">
            <div className="flex justify-center py-1 px-1 gap-x-6">
              <Navigation />
              <Tabs defaultValue={theme} className="mt-[2.5px]">
                  <TabsList className='border duration-400'>
                      <TabsTrigger value='light' onClick={() => setTheme('light')}>
                          <SunIcon className='!transition-all h-[1.2rem] w-[1.2rem] rotate-0 duration-500 dark:rotate-180' />
                      </TabsTrigger>
                      <TabsTrigger value='dark' onClick={() => setTheme('dark')}>
                          <MoonIcon className='!transition-all h-[1.2rem] w-[1.2rem] rotate-90 duration-500 dark:rotate-0' />
                      </TabsTrigger>
                      <TabsTrigger value='system' onClick={() => setTheme('system')}>
                          <DesktopIcon className='h-[1.2rem] w-[1.2rem]' />
                      </TabsTrigger>
                  </TabsList>
              </Tabs>
            </div> 
        </div>
        <div className="w-full absolute flex z-[-5] max-h-[62.7%] mt-[-17px] h-screen brightness-50">
            <div className='w-full h-full bg-bg bg-cover absolute z-[-15]' />
        </div>
        <div className="w-full flex flex-col mt-10">
          <h1 className="text-[64px] text-red-600 font-bold uppercase mx-auto">
            Portal de Operaciones Móviles
          </h1>
          <h3 className="text-md text-white mx-auto select-none">
            Página de Documentación Interna.
          </h3>
          <div className="flex max-w-[800px] flex-wrap justify-center items-center m-auto gap-x-5 pt-[50px]">
            <FramerLink
              href="/estadisticas/provision"
              className="bg-transparent mt-10 px-5 py-2 border-2 border-solid border-white rounded-lg cursor-pointer text-white font-bold text-center mx-auto
                hover:!bg-white hover:!text-black no-underline select-none"
              whileHover={{
                y: [-5, -10, -12, -10, -5],
                transition: {
                  duration: 1.2,
                  repeat: Infinity,
                },
              }}
            >
              Estadísticas Diarias
            </FramerLink>
            <FramerLink
              href="/estadisticas/ccm"
              className="bg-transparent mt-10 px-5 py-2 border-2 border-solid border-white rounded-lg cursor-pointer text-white font-bold text-center mx-auto
                hover:!bg-white hover:!text-black no-underline select-none"
              whileHover={{
                y: [-5, -10, -12, -10, -5],
                transition: {
                  duration: 1.2,
                  repeat: Infinity,
                },
              }}
            >
              Dashboard CCM
            </FramerLink>
            <FramerLink
              href="/estadisticas/poc"
              className="bg-transparent mt-10 px-5 py-2 border-2 border-solid border-white rounded-lg cursor-pointer text-white font-bold text-center mx-auto
                hover:!bg-white hover:!text-black no-underline select-none"
              whileHover={{
                y: [-5, -10, -12, -10, -5],
                transition: {
                  duration: 1.2,
                  repeat: Infinity,
                },
              }}
            >
              Dashboard POC
            </FramerLink>
            <FramerLink
              href="/estadisticas/mor"
              className="bg-transparent mt-10 px-5 py-2 border-2 border-solid border-white rounded-lg cursor-pointer text-white font-bold text-center mx-auto
                hover:!bg-white hover:!text-black no-underline select-none"
              whileHover={{
                y: [-5, -10, -12, -10, -5],
                transition: {
                  duration: 1.2,
                  repeat: Infinity,
                },
              }}
            >
              Dashboard MOR
            </FramerLink>
            <FramerLink
              href="/estadisticas/recargo"
              className="bg-transparent mt-10 px-5 py-2 border-2 border-solid border-white rounded-lg cursor-pointer text-white font-bold text-center mx-auto
                hover:!bg-white hover:!text-black no-underline select-none"
              whileHover={{
                y: [-5, -10, -12, -10, -5],
                transition: {
                  duration: 1.2,
                  repeat: Infinity,
                },
              }}
            >
              Dashboard Medios de Recargo
            </FramerLink>
          </div>
        </div>
      </main>
      <Link
        className="bg-slate-300 w-full flex"
        href="http://intranet/Pages/default.aspx"
        target="_blank"
      >
        <FramerImage
          src="/logo-claro-giant.png"
          width={150}
          height={150}
          className="absolute right-[50px] top-8 z-10 xl:w-[100px] xl:h-[100px] 2xl:w-[150px] 2xl:h-[150px]"
          alt="Logo Claro"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
      {cumple ? (
        <motion.div
          className="absolute right-[50px] top-[300px]"
          ref={refD}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          whileTap={{ boxShadow: "0px 0px 15px rgba(0,0,0,0.2)" }}
          dragElastic={{ left: 0, right: 0.8 }}
          onDragEnd={handleDragEnd}
          initial={{
            x: 700,
            opacity: 0,
          }}
          animate={!not ? "enter" : "exit"}
          variants={AnimationCard}
          viewport={{ once: true }}
        >
          <button
            className="absolute -top-4 -right-4 px-[10px] py-[10px] bg-red-700 hover:bg-red-600 z-10 rounded-full font-bold text-white transition-all duration-300"
            onClick={() => {
              setNot(true);
            }}
          >
            <ImCross/>
          </button>
  
          <BirthCard
            nombre={cumple.nombre}
            img={cumple.img}
            mail={cumple.mail}
            movil={cumple.movil}
            station={cumple.station}
          />
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
};

 
export default NavHome;