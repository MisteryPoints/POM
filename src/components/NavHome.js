"use client";
import React, { useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { motion } from "framer-motion";
import NavDrop from "./NavDrop";
import Link from "next/link";

const FramerLink = motion(Link);
const FramerImage = motion(Image);

const NavHome = () => {
  const [showProcess, setShowProcess] = useState(false);
  const [showTech, setShowTech] = useState(false);
  const showDropdownP = (e) => {
    setShowProcess(!showProcess);
  };
  const hideDropdownP = (e) => {
    setShowProcess(false);
  };
  const showDropdownT = (e) => {
    setShowTech(!showTech);
  };
  const hideDropdownT = (e) => {
    setShowTech(false);
  };
  return (
    <>
      <main
        className={
          "bg-hero h-screen -mt-12 lg:min-h-[700px] 2xl:max-h-[800px] bg-cover bg-no-repeat relative -z-0 selection:bg-red-700 selection:text-white"
        }
      >
        <div className="h-screen mt-12 min-h-[650px] max-h-[750px] w-full bg-gray-700/40 absolute -z-10 select-none">
          <Image
            src="/logo-pom.png"
            priority="true"
            width="110"
            height="59"
            alt="Logo POM"
            className="mx-auto mt-4"
          />
        </div>
        <div className="pt-36 mx-auto select-none">
          <Navbar expand="lg" className="bg-transparent mx-auto">
            <Container fluid>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav
                  className="me-auto my-2 my-lg-0 mx-auto"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link
                    href="/"
                    className="mx-8 !font-bold !text-xl !text-slate-200 uppercase"
                  >
                    Inicio
                  </Nav.Link>
                  <NavDropdown
                    title={
                      <span className="mx-8 !font-bold !text-xl !text-slate-200 uppercase">
                        Tecnologías
                      </span>
                    }
                    id="collasible-nav-dropdown"
                    menuVariant="dark"
                    show={showTech}
                    onMouseEnter={showDropdownT}
                    onMouseLeave={hideDropdownT}
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
                        <NavDropdown.Item href="/saam" className="pr-2 pl-3">
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
                    <NavDropdown.Item href="/dashboard" className="pr-2 pl-3">
                      Dashboard Estadísticas
                    </NavDropdown.Item>
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
                  </NavDropdown>
                  <NavDropdown
                    title={
                      <span className="mx-8 !font-bold !text-xl !text-slate-200 uppercase">
                        Procesos
                      </span>
                    }
                    id="collasible-nav-dropdown"
                    menuVariant="dark"
                    show={showProcess}
                    onMouseEnter={showDropdownP}
                    onMouseLeave={hideDropdownP}
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
                  </NavDropdown>
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
          <h3 className="text-md text-white mx-auto">
            Página de documentación interna
          </h3>
          <FramerLink
            href="/dashboard"
            className="bg-transparent mt-10 px-5 py-2 border-2 border-solid border-white rounded-lg cursor-pointer text-white font-bold text-center mx-auto
                hover:!bg-white hover:!text-black no-underline"
            whileHover={{
              y: [-5, -10, -12, -10, -5],
              transition: {
                duration: 1.2,
                repeat: Infinity,
              },
            }}
          >
            Ver Dashboard
          </FramerLink>
        </div>
      </main>
      <div className="lg:-mt-[120px] 2xl:-mt-[175px] z-10 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1000 100"
          fill="#CBD5E1"
        >
          <path
            fill="#CBD5E1"
            d="M500 97C126.7 96.3.8 19.8 0 0v100h1000V1c0 18.4-126.7 96.8-500 96z"
          />
        </svg>
      </div>
      <Link
        className="bg-slate-300 w-full flex pb-[125px]"
        href="http://intranet/Pages/default.aspx"
        target="_blank"
      >
        <FramerImage
          src="/logo-claro-giant.png"
          width={300}
          height={300}
          className="absolute left-1/2 -ml-[150px] -mt-[175px] z-10"
          alt="Logo Claro"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
    </>
  );
};

export default NavHome;
