import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaAnglesDown } from 'react-icons/fa6';

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
        <article className={`w-full w-[350px] h-[350px] top-0 h-full items-center justify-center bg-birthday bg-cover rounded-3xl opacity-90 hover:opacity-100 overflow-hidden transition-all duration-400`}>  
            <div className='rounded-full overflow-hidden max-w-[120px] max-h-[120px] flex justify-center items-center mx-auto mt-[90px]'>
                <div className='bg-gradient-to-b from-red-500 via-red-900 to-black w-[130px] h-[130px] z-30 absolute rounded-full'></div>
                <FramerImage
                    src={img}
                    alt={nombre}
                    className="w-full h-auto rounded-full opacity-90 z-50 relative" 
                    whileHover={{ scale: 1.05  }}
                    transition={{ duration: 0.2 }}
                    width={750}
                    height={1000}
                /> 
            </div>
            <div className="w-full flex flex-col items-start justify-between mt-1">  
                <h2 className="bg-gradient-to-b from-red-500 via-red-900 to-black my-2 w-full text-center text-base font-bold lg:text-lg text-white select-none max-w-[150px] rounded-full mx-auto">
                {nombre}
                </h2> 
                <div className='text-black font-extrabold text-3xl mt-[35px] text-sm  text-center w-full select-none flex justify-center'  >
                <motion.p 
                animate={{ y: [-5, -10, -5, 0], }}
                transition={{ duration: 1, repeat: Infinity }}><FaAnglesDown size={20}/></motion.p>  
                </div>
                <div className="-mt-3 w-full flex justify-center flex-wrap">  
                    <p
                        onClick={() => setStations(!stations)}  
                    className={`border-black border-2 focus:ring-4 font-bold no-underline rounded-full text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-400 cursor-pointer hover:!border-slate-600 ${stations ? 'bg-black text-red-600 ' : 'bg-white  text-black'}`}
                    >
                    {stations ? station : 'Estación'}
                    </p>
                    <Link
                        href={mail}
                        target='_blank'
                        className="border-black border-2 focus:ring-4 font-bold no-underline rounded-full text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-400 cursor-pointer hover:!border-slate-600 bg-white text-black"
                    >
                        Correo
                    </Link> 
                    <p
                        onClick={() => setMovils(!movils)}  
                    className={`border-black border-2 focus:ring-4 font-bold no-underline rounded-full text-xs px-2 py-1 text-center mr-2 mb-2 transition-all duration-400 cursor-pointer hover:!border-slate-600 ${movils ? 'bg-blue-600 text-white ' : 'bg-white  text-black'}`}
                    >
                    {movils ? movil : 'Celular'}
                    </p>
                </div>
            </div>
        </article>  
) 
}

export default BirthCard
