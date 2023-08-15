'use client';
import React, { useState } from 'react'
import {motion} from 'framer-motion'
import { MdOutlineArrowDropDownCircle } from 'react-icons/md'
import Image from 'next/image'
import Link from 'next/link'

const FramerImage = motion(Image);

const ProvisionCard = ({nombre, descripcion, responsable, link, logo, mail}) => (
  
  <article className="w-full items-center justify-center rounded-2xl border border-solid border-gray-900 bg-light shadow-xl hover:shadow-2xl p-6 relative transition-all duration-200  overflow-hidden">
    <div className="absolute top-0 -right-4  -z-10 w-[102%] h-[101.5%] rounded-[32px] bg-gray-900" />
    <Link href={mail} target="_blank" className="w-full cursor-pointer">
      <FramerImage
        src={logo}
        alt={nombre}
        className="w-full h-auto rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}  
        width={800}
        height={330}
      />
    </Link>
    <div className="w-full flex flex-col items-start justify-between mt-4"> 
      <Link
        href={link}
        target="_blank"
        className="hover:underline underline-offset-2 decoration-gray-900 hover:opacity-80 w-full"
      >
        <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl text-gray-900 ">
          {nombre}
        </h2>
      </Link>
      <h2 className="my-2 w-full text-left text-md lg:text-lg select-none">
        {descripcion}
      </h2>
      <div className="mt-2 flex items-center w-full justify-between md:justify-start">
        <Link
          href={link}
          target="_blank"
          className="text-red-700 hover:text-white border-1 border-red-700 hover:bg-red-800 focus:ring-4 no-underline focus:ring-red-300 font-medium rounded-lg text-md font-bold px-5 py-2.5 text-center mr-2 mb-2 transition-all duration-200"
        >
          Visita
        </Link> 
        <h2 className="my-2 w-full text-right text-2xl font-bold lg:text-xl select-none">
          {responsable}
        </h2>
      </div>
    </div>
  </article>
)

const Provision = () => {
  const [spi, setSpi] = useState(false)

  return (
    <motion.div className="bg-[#121212] w-full">  
      <div onClick={() => setSpi(!spi)} className="mx-20 pt-48 text-gray-300 text-6xl hover:cursor-pointer flex">
        <motion.p  className="-rotate-90" 
          animate={spi ? { rotate: 90 } : ''}
          transition={{ duration: 1 }}><MdOutlineArrowDropDownCircle/></motion.p>
        <p>&nbsp;Soporte Provisión Inalámbricos</p>
      </div> 
      <div className="w-full px-20 py-10 grid grid-cols-2 gap-4">
        <ProvisionCard 
          nombre="Rebotes Prepago"
          descripcion="Gestión de manejo de los Rebotes generados por Transacciones en el Portal de Administración Prepago, gestionado por el Analista de Rebotes Prepago."
          responsable="Willy Alcantara X-4002"
          link="/rebotes/prepago"
          logo="/WillyAlcantara.png"
          mail="mailto:willy_alcantara@claro.com.do"
          />
        <ProvisionCard 
          nombre="Rebotes Postpago"
          descripcion="Gestión de manejo de los Rebotes generados por Transacciones en el Switch de Ensamble, gestionado por el Analista de Rebotes Postpago."
          responsable="Mabeel Fernandez X-5735"
          link="/rebotes/postpago"
          logo="/MabeelFernandez.png"
          mail="mailto:mabeel_fernandez@claro.com.do"
          />
        <ProvisionCard 
          nombre="Compare de Aprovisionamiento"
          descripcion="Gestión de los diferentes Compares entre nuestros Nodos y los Sistemas, gestionado por el Analista de Compare."
          responsable="Ariangel Diaz X-2847"
          link="/compare"
          logo="/AriangelDiaz.png"
          mail="mailto:ariangel_diaz@claro.com.do"
          /> 
        <ProvisionCard 
          nombre="Casos SAAM / SWAT Team"
          descripcion="Gestión de casos de Aprovisionamiento y Avería. Soporte SWAT Team de casos Flota y Conectividad."
          responsable="Cristian Melo X-3230"
          link="/casos"
          logo="/CristianMelo.png"
          mail="mailto:cristian_melo@claro.com.do"
          />
        <ProvisionCard 
          nombre="Casos SAAM / Desarrollos Operativos"
          descripcion="Gestión de casos de Aprovisionamiento y Avería. Encargado de los desarrollos requeridos en el área de Operaciones Móviles."
          responsable="Víctor Tejada X-5118"
          link="/casos"
          logo="/VictorTejada.png"
          mail="mailto:victor_tejada@claro.com.do"
          />
        <ProvisionCard 
          nombre="Soporte Vespertino SAAM y Medios"
          descripcion="Soporte Vespertino de casos nocturnos. Gestión de casos de Aprovisionamiento y Avería. Gestión de casos de Medio de Recargo de Reclamaciones de balance y ofertas de datos."
          responsable="Kelvin Ceballo X-2031"
          link="/rebotes/prepago"
          logo="/KelvinCeballos.png"
          mail="mailto:kelvin_ceballo@claro.com.do"
          /> 
        
      </div>
    </motion.div>
  )
}

export default Provision
