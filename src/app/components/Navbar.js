import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="bg-red-600 flex justify-center w-full p-6 shadow-xl select-none">
      <div className="absolute left-12 flex">
        <Image src="/logo-claro.svg" width="80" height="80" alt="Logo POM" />
        <h2 className="text-white font-bold text-sm pt-6">POM</h2>
      </div>
      <h1 className="text-white font-bold text-3xl">Portal Operaciones Móviles</h1> 
    </div>
  )
}

export default Navbar
