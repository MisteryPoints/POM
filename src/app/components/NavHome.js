'use client';
import React, {useState} from 'react'
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import { motion } from 'framer-motion'

const NavHome = () => {
    const [showProcess, setShowProcess] = useState(false);
    const [showTech, setShowTech] = useState(false);
    const showDropdownP = (e)=>{
        setShowProcess(!showProcess);
    }
    const hideDropdownP = e => { 
        setShowProcess(false); 
    }
    const showDropdownT = (e)=>{
        setShowTech(!showTech);
    }
    const hideDropdownT = e => { 
        setShowTech(false); 
    }
  return (
    <>
        <main className={'bg-hero h-screen bg-cover bg-no-repeat relative -z-0 shadow-xl selection:bg-red-700 selection:text-white'}> 
            <div className='h-screen w-full bg-gray-700/60 absolute -z-10 select-none'>
                <Image src="/logo-pom.png" priority="true" width="110" height="59" alt="Logo POM" className="mx-auto mt-4" /> 
            </div>
            <div className="pt-24 mx-auto select-none">
                <Navbar expand="lg" className="bg-transparent mx-auto">
                <Container fluid> 
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav 
                    className="me-auto my-2 my-lg-0 mx-auto"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                        <Nav.Link href="/" className="mx-8 !font-bold !text-xl !text-slate-200 uppercase">Inicio</Nav.Link>
                        <NavDropdown title={
                            <span className="!font-bold !text-xl !text-slate-200 uppercase">Tecnologías</span>
                        } id="collasible-nav-dropdown" menuVariant="dark" show={showTech}
                        onMouseEnter={showDropdownT} 
                        onMouseLeave={hideDropdownT} className="mx-8 !font-bold !text-xl !text-white">
                        <NavDropdown.Item href="#action/3.1">Dashboard Estadísticas</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title={
                            <span className="!font-bold !text-xl !text-slate-200 uppercase">Procesos</span>
                        } id="collasible-nav-dropdown" menuVariant="dark" show={showProcess}
                        onMouseEnter={showDropdownP} 
                        onMouseLeave={hideDropdownP}  className="mx-8 !font-bold !text-xl !text-white">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/link" className="mx-8 !font-bold !text-xl !text-slate-200 uppercase">Nosotros</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
            </div>
            <div className='w-full flex flex-col mt-10'>
                <h1 className="text-[64px] text-red-600 font-bold uppercase mx-auto">
                    Portal de Operaciones Móviles
                </h1>
                <h3 className="text-md text-white mx-auto">
                    Página de documentación interna
                </h3>
                <motion.div className="bg-transparent px-5 py-2 border-2 border-solid border-white rounded-lg cursor-pointer text-white font-bold text-center mx-auto
                hover:!bg-white hover:!text-black"
                    whileHover={{ 
                        y: [-5, -10, -12, -10, -5],
                        transition: {
                            repeat: Infinity
                        }
                    }}>
                        Ver Dashboard
                </motion.div>
                
            </div>
        </main>
        <div className="-mt-32 z-10 relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                viewBox="0 0 1000 100" 
            >
                <path fill="#121212" d="M500 97C126.7 96.3.8 19.8 0 0v100h1000V1c0 18.4-126.7 96.8-500 96z" />
            </svg>
        </div>
        <div className="bg-[#121212] h-screen w-full flex"> 
            <Image src="/logo-claro-giant.png" width={300} height={300} className="absolute left-1/2 -ml-[150px] -mt-[150px] z-10" alt="Logo Claro" />
        </div>
    </>
    
  )
}

export default NavHome
