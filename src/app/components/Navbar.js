import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="bg-gradient-to-l from-red-600 from-[88%] via-red-700 via-[95%] to-red-800 to-[98%] flex justify-center w-full p-6 shadow-xl select-none">
      <div className="absolute left-12 flex">
        <Image src="/logo-claro.svg" width="80" height="80" alt="Logo Claro" /> 
      </div>
      <h1 className="text-white font-bold text-3xl">Portal Operaciones Móviles</h1> 
    </div>
  )
}

export default Navbar
