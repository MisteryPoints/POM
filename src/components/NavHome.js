"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { motion } from "framer-motion";
import NavDrop from "./NavDrop";
import Link from "next/link";
import NavFather from "./NavFather";
import { ABirthday } from "@/api/API";
import BirthCard from "./BirthCard";

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

  const fixedDate = day.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  }) + '-' + month.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false
  });


  ABirthday.forEach(({nombre, birthday, img, mail, movil, station}) => {
    if(birthday == fixedDate) {
      cumple = {
        nombre,
        birthday,
        img,
        mail,
        movil,
        station
      }
    }
  })
  return cumple;
} 

const NavHome = () => {
  const [cumple, setCumple] = useState(false)
  const [not, setNot] = useState(false)

  useEffect(() => { 
    if(!cumple && !not) { 
      setCumple(CheckDate()) 
    }
    if(not){
      setTimeout(() => { 
        setCumple(false)
      },[500])
    }
  }, [cumple, not])

  return (
    <>
      <main
        className={
          "bg-hero h-screen -mt-12 lg:min-h-[900px] 2xl:max-h-[1200px] bg-cover bg-no-repeat relative -z-0 selection:bg-red-700 selection:text-white shadow-[0px_15px_25px_10px_rgba(17,20,26,0.65)]"
        }
      >
        <div className="h-screen mt-12 min-h-[650px] max-h-[750px] w-full bg-gray-700/10 absolute -z-10 select-none"></div>
        <Link href="/">
          <FramerImage
            src="/logo-pom.png"
            priority="true"
            width="110"
            height="50"
            alt="Logo POM"
            className="mx-auto z-50"
            initial={{ opacity: 0, y: 0 }}
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
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
              },
            }}
            viewport={{ once: true }}
          />
        </Link>
        <div className="pt-[90px] mx-auto select-none">
          <Navbar expand="lg" className="bg-transparent mx-auto">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                  className="me-auto my-2 my-lg-0 mx-auto"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <NavFather
                    name={
                      <span className="mx-8 !font-bold !text-xl !text-slate-200 uppercase no-underline">
                        Inicio
                      </span>
                    }
                    id="collasible-nav-dropdown"
                    className="mx-8 !font-bold !text-xl !text-white no-underline"
                  >
                    <NavDropdown.Item
                      href="/estadisticas/provision"
                      className="pr-2 pl-3"
                    >
                      Estadisticas Diarias
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="/estadisticas/ccm"
                      className="pr-2 pl-3"
                    >
                      Dashboard CCM
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="/estadisticas/poc"
                      className="pr-2 pl-3"
                    >
                      Dashboard POC
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="/estadisticas/mor"
                      className="pr-2 pl-3"
                    >
                      Dashboard MOR
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="/estadisticas/recargo"
                      className="pr-2 pl-3"
                    >
                      Dashboard Medios de Recargo
                    </NavDropdown.Item>
                  </NavFather>
                  <NavFather
                    name={
                      <span className="mx-8 !font-bold !text-xl !text-slate-200 uppercase">
                        Tecnologías
                      </span>
                    }
                    className="mx-8 !font-bold !text-xl !text-white"
                  >
                    <NavDrop
                      name={
                        <span className="text-md font-normal block w-[150px] !text-gray-200 no-underline">
                          Herramientas
                        </span>
                      }
                    >
                      <NavDrop
                        name={
                          <Link
                            href="/nodos"
                            className="text-md font-normal block w-[150px] !text-gray-200 no-underline"
                          >
                            Nodos
                          </Link>
                        }
                      >
                        <NavDropdown.Item
                          href="/nodos/ecms"
                          className="pr-2 pl-3"
                        >
                          ECMS
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/nodos/eda"
                          className="pr-2 pl-3"
                        >
                          EMA / EDA
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/nodos/sdp"
                          className="pr-2 pl-3"
                        >
                          SDP
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/nodos/air"
                          className="pr-2 pl-3"
                        >
                          AIR
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/nodos/hlr"
                          className="pr-2 pl-3"
                        >
                          HLR
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/nodos/zte"
                          className="pr-2 pl-3"
                        >
                          SMSC / ZTE
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/nodos/sm"
                          className="pr-2 pl-3"
                        >
                          SMGR
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/nodos/vm"
                          className="pr-2 pl-3"
                        >
                          Voice Mail
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/nodos/volte"
                          className="pr-2 pl-3"
                        >
                          SPG / IMS
                        </NavDropdown.Item>
                      </NavDrop>
                      <NavDropdown.Divider />
                      <NavDrop
                        name={
                          <Link
                            href="/sistemas"
                            className="text-md font-normal block w-[150px] !text-gray-200 no-underline"
                          >
                            Sistemas
                          </Link>
                        }
                      >
                        <NavDropdown.Item
                          href="/sistemas/saam"
                          className="pr-2 pl-3"
                        >
                          SAAM
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/sistemas/commplex"
                          className="pr-2 pl-3"
                        >
                          Commplex
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/sistemas/ppg"
                          className="pr-2 pl-3"
                        >
                          PPG
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          href="/sistemas/ensemble"
                          className="pr-2 pl-3"
                        >
                          Ensemble
                        </NavDropdown.Item>
                      </NavDrop>
                    </NavDrop>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/links" className="pr-2 pl-3">
                      Links
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item
                      href="/instructivos"
                      className="pr-2 pl-3"
                    >
                      Instructivos
                    </NavDropdown.Item>
                  </NavFather>
                  <NavFather
                    name={
                      <span className="mx-8 !font-bold !text-xl !text-slate-200 uppercase">
                        Procesos
                      </span>
                    }
                    className="mx-8 !font-bold !text-xl !text-white"
                  >
                    <NavDrop
                      name={
                        <Link
                          href="/rebotes"
                          className="text-md font-normal block w-[150px] !text-gray-200 no-underline"
                        >
                          Rebotes
                        </Link>
                      }
                    >
                      <NavDropdown.Item
                        href="/rebotes/prepago"
                        className="pr-2 pl-3"
                      >
                        Rebotes Prepago
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/rebotes/postpago"
                        className="pr-2 pl-3"
                      >
                        Rebotes Postpago
                      </NavDropdown.Item>
                    </NavDrop>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/compare" className="pr-2 pl-3">
                      Compare
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDrop
                      name={
                        <Link
                          href="/casos"
                          className="text-md font-normal block w-[150px] !text-gray-200 no-underline"
                        >
                          Casos SAAM
                        </Link>
                      }
                    >
                      <NavDropdown.Item
                        href="/casos/provision"
                        className="pr-2 pl-3"
                      >
                        Aprovisionamiento
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/casos/averias"
                        className="pr-2 pl-3"
                      >
                        Averías
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/casos/reclamacion"
                        className="pr-2 pl-3"
                      >
                        Reclamación
                      </NavDropdown.Item>
                    </NavDrop>
                    <NavDrop
                      name={
                        <Link
                          href="/prevencion"
                          className="text-md font-normal block w-[150px] !text-gray-200 no-underline"
                        >
                          Prevención de Averías
                        </Link>
                      }
                    >
                      <NavDropdown.Item
                        href="/prevencion/provision"
                        className="pr-2 pl-3"
                      >
                        Síntomas Aprovisionamiento
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/prevencion/averias"
                        className="pr-2 pl-3"
                      >
                        Síntomas Averías
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/prevencion/reclamacion"
                        className="pr-2 pl-3"
                      >
                        Síntomas Reclamación
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/prevencion/sif"
                        className="pr-2 pl-3"
                      >
                        Síntomas SIF
                      </NavDropdown.Item>
                    </NavDrop>
                    <NavDropdown.Item
                      href="/nxx"
                      className="pr-2 pl-3"
                    >
                      Admin NXX
                    </NavDropdown.Item>
                    <NavDropdown.Item
                      href="/estadisticas"
                      className="pr-2 pl-3"
                    >
                      Procesos y Estadísticas
                    </NavDropdown.Item>
                  </NavFather>
                  <Nav.Link
                    href="/nosotros"
                    className="mx-8 !font-bold !text-xl !text-slate-200 uppercase"
                  >
                    Nosotros
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        <div className="w-full flex flex-col mt-10">
          <h1 className="text-[64px] text-red-600 font-bold uppercase mx-auto">
            Portal de Operaciones Móviles
          </h1>
          <h3 className="text-md text-white mx-auto select-none">
            Página de documentación interna
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
      { cumple ? (
        <motion.div className='absolute right-[50px] top-[300px]'   
          initial={{ 
            x: 700,
            opacity: 0 }}
          animate={!not ? "enter" : "exit"}
          variants={AnimationCard}
          viewport={{ once: true }}
        >
          <button className="absolute -top-4 -right-4 px-3 py-2 bg-red-600 hover:bg-red-500 z-10 rounded-full font-bold text-white transition-all duration-300" onClick={() => {
              setNot(true)
            }}>X</button>
            
          <p className="absolute -top-4 left-[-50px] px-3 py-2  z-10 rounded-full font-bold text-white text-3xl transition-all duration-300 -rotate-45 select-none">🥳🎉</p>
          <p className="absolute -bottom-4 left-[-50px] px-3 py-2  z-10 rounded-full font-bold text-white text-3xl transition-all duration-300 rotate-45 select-none">🎊🎉</p>
          <p className="absolute -bottom-4 right-[-50px] px-3 py-2  z-10 rounded-full font-bold text-white text-3xl transition-all duration-300 -rotate-45 select-none">🥳🎊</p>

          <BirthCard
            nombre={cumple.nombre}
            img={cumple.img}
            mail={cumple.mail}
            movil={cumple.movil}
            station={cumple.station}
            />
        </motion.div>
      ) : ''}
      

    </>
  );
};

export default NavHome;
