import React, { useEffect } from 'react'
import {motion} from 'framer-motion'
import Image from 'next/image'

const FramerImage = motion(Image);

const ProvisionCard = ({nombre, descripcion, responsable, link, logo}) => (
  
  <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-xl hover:shadow-2xl p-6 relative transition-all duration-200 dark:border-light dark:bg-dark dark:text-light">
    <div className="absolute top-0 -right-4  -z-10 w-[102%] h-[101.5%] rounded-[32px] bg-dark dark:bg-light xs:h-[102%] xs:-right-2 xs:-top-[1px] xs:rounded-[25px]" />
    <Link href={link} target="_blank" className="w-full cursor-pointer">
      <FramerImage
        src={logo}
        alt={nombre}
        className="w-full h-auto rounded-lg"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
    <div className="w-full flex flex-col items-start justify-between mt-4"> 
      <Link
        href={link}
        target="_blank"
        className="hover:underline underline-offset-2 w-full"
      >
        <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl ">
          {nombre}
        </h2>
      </Link>
      <div className="mt-2 flex items-center w-full justify-between md:justify-start">
        <Link
          href={link}
          target="_blank"
          className="rounded-xl bg-dark text-light p-2 px-6 text-lg font-semibold border-2 border-dark hover:bg-light hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-white dark:hover:border-light md:text-base"
        >
          Visita
        </Link> 
      </div>
      <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-2xl ">
        {responsable}
      </h2>
    </div>
  </article>
)

const Provision = () => {
  return (
    <div className="bg-[#121212] min-h-screen w-full grid grid-cols-12">
      <ProvisionCard 
        nombre="Rebotes Prepago"
        descripcion="Gestión de manejo de los Rebotes generados por Transacciones en el Portal de Administración Prepago, gestionado por el Analista de Rebotes Prepago."
        responsable="Willy Alcantara X-4002"
        link="/rebotes/prepago"
        logo=""
        />
      
    </div>
  )
}

export default Provision
