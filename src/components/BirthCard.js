import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'

const FramerImage = motion(Image);
 

const BirthCard = ({
  nombre, 
  img,
  mail, 
  movil,
  station, 
}) => {
    const [movils, setMovils] = useState(false)
    const [stations, setStations] = useState(false)
    return (
        <article className={`w-full max-w-[300px] max-h-[320px] top-0 h-full items-center justify-center border border-solid border-gray-900 bg-gray-200 rounded-3xl`}>  
            <FramerImage
                src={img}
                alt={nombre}
                className="w-full h-auto rounded-lg" 
                whileHover={{ scale: 1.05  }}
                transition={{ duration: 0.2 }}
                width={800}
                height={330}
            /> 
            <div className="w-full flex flex-col items-start justify-between mt-4"> 
                <h2 className="my-2 w-full text-center text-base font-bold lg:text-lg text-gray-900 ">
                {nombre}
                </h2> 
                <div className="mt-2 w-full flex justify-center flex-wrap">  
                    <p
                        onClick={() => setStations(!stations)}  
                    className={`border-sky-500 border-2 focus:ring-4 no-underline rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-400 cursor-pointer font-semibold hover:!border-sky-200 ${stations ? 'bg-white text-sky-500 ' : 'bg-sky-500  text-white'}`}
                    >
                    {stations ? station : 'Estación'}
                    </p>
                    <Link
                        href={mail}
                        target='_blank'
                        className="text-black hover:!text-white border-1 border-black hover:bg-black focus:ring-4 no-underline rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-200 font-semibold"
                    >
                        Correo
                    </Link> 
                    <p
                        onClick={() => setMovils(!movils)}  
                    className={`border-blue-500 border-2 focus:ring-4 no-underline rounded-lg text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-400 cursor-pointer font-semibold hover:!border-blue-200 ${movils ? 'bg-white text-blue-500 ' : 'bg-blue-500  text-white'}`}
                    >
                    {movils ? movil : 'Celular'}
                    </p>
                </div>
            </div>
        </article>  
) 
}

export default BirthCard
