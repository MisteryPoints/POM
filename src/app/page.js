"use client";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import {motion} from 'framer-motion'
import { useEffect } from "react";

const Valor = ({nombre, descripcion, par}) => (
  <motion.li 
    className="text-2xl font-semibold p-2" 
    initial={ par ? { opacity: 0, x: 170 } : { opacity: 0, x: -170 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: { 
        delay: 0.4,
        duration: 0.5 
      },
    }} 
    viewport={{ once: true }}
  >
    <span className="font-bold">{nombre}:</span> {descripcion}
  </motion.li>
)

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <div className="bg-slate-300 w-full">
      <TransitionEffect />
      <NavHome />
      <div className="grid grid-cols-12 mx-24 mt-0 justify-center gap-x-5 gap-y-6">
        <motion.div className="col-span-12 select-none m-auto duration-300"   
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { 
              delay: 0.5,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <div style={{background: "url(https://media.istockphoto.com/id/1292947888/vector/%C3%B0%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C2%B5-%C3%B1%C3%B1%C3%B1%C3%B1%C3%B0%C3%B0%C3%B1%C3%B1%C3%B0%C3%B0.jpg?s=612x612&w=0&k=20&c=YagL6dH_mSj9NfTN8vCvsT3Lya9d8SbI32LKYPLDhVs=)"}}
              className="m-20">
              <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 uppercase">
                BIENVENIDOS A
                <br/>OPERACIONES MOVILES 
              </h1>
          </div>
        </motion.div> 
        <motion.div className="col-span-6 rounded-3xl select-none m-auto"   
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.8,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <div style={{background: "url(https://media.istockphoto.com/id/1292947888/vector/%C3%B0%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C2%B5-%C3%B1%C3%B1%C3%B1%C3%B1%C3%B0%C3%B0%C3%B1%C3%B1%C3%B0%C3%B0.jpg?s=612x612&w=0&k=20&c=YagL6dH_mSj9NfTN8vCvsT3Lya9d8SbI32LKYPLDhVs=)"}}
              className="m-20">
              <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 uppercase">
                OPERACIONES MóVILES 
              </h1>
          </div>
        </motion.div>
        <motion.div className="col-span-6 rounded-3xl select-none m-auto"   
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.8,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <div style={{background: "url(https://media.istockphoto.com/id/1292947888/vector/%C3%B0%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C2%B5-%C3%B1%C3%B1%C3%B1%C3%B1%C3%B0%C3%B0%C3%B1%C3%B1%C3%B0%C3%B0.jpg?s=612x612&w=0&k=20&c=YagL6dH_mSj9NfTN8vCvsT3Lya9d8SbI32LKYPLDhVs=)"}}
              className="m-20">
              <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 uppercase">
                CLARO
              </h1>
          </div>
        </motion.div>
        <motion.div className="col-span-6 rounded-3xl select-none m-auto"   
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.6,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full"> 
            MISION
          </h1> 
        </motion.div>
        <motion.div className="col-span-6 rounded-3xl select-none m-auto drop-shadow-md"   
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.6,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full"> 
            MISION
          </h1> 
        </motion.div> 
        <motion.div className="col-span-6 rounded-3xl bg-white/30 text-gray-800 hover:bg-white/60 select-none m-auto drop-shadow-md duration-300"   
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.5,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <p className="justify-center font-semibold text-xl w-full p-12"> 
            Lograr que toda la población de la República Dominicana, pueda satisfacer sus necesidades de comunicación y entretenimiento digital, brindándole productos y servicios de voz, datos y video de avanzada tecnología, accesibilidad y calidad, a través de la mejor experiencia de servicio, con la finalidad de acercar más a las personas y elevar su calidad de vida.
          </p> 
        </motion.div> 
        <motion.div className="col-span-6 rounded-3xl bg-white/30 text-gray-800 hover:bg-white/60 select-none m-auto drop-shadow-md duration-300"   
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.5,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <p className="justify-center font-semibold text-xl w-full p-12"> 
            Lograr que toda la población de la República Dominicana, pueda satisfacer sus necesidades de comunicación y entretenimiento digital, brindándole productos y servicios de voz, datos y video de avanzada tecnología, accesibilidad y calidad, a través de la mejor experiencia de servicio, con la finalidad de acercar más a las personas y elevar su calidad de vida.
          </p> 
        </motion.div> 
        <motion.div className="col-span-6 rounded-3xl select-none m-auto drop-shadow-md"   
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.8,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full"> 
            VISION
          </h1> 
        </motion.div>
        <motion.div className="col-span-6 rounded-3xl select-none m-auto drop-shadow-md"   
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.8,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full"> 
            VISION
          </h1> 
        </motion.div>
        <motion.div className="col-span-6 rounded-3xl bg-white/30 text-gray-800 hover:bg-white/60 select-none m-auto drop-shadow-md duration-300"   
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.8,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <p className="justify-center font-semibold text-xl w-full p-12"> 
            Ser la solución integral preferida de telecomunicaciones en la República Dominicana, con un crecimiento rentable y sostenido en participación del mercado.
          </p> 
        </motion.div> 
        <motion.div className="col-span-6 rounded-3xl bg-white/30 text-gray-800 hover:bg-white/60 select-none m-auto drop-shadow-md duration-300"   
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.8,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <p className="justify-center font-semibold text-xl w-full p-12"> 
            Ser la solución integral preferida de telecomunicaciones en la República Dominicana, con un crecimiento rentable y sostenido en participación del mercado.
          </p> 
        </motion.div> 
        <motion.div className="col-span-6 rounded-3xl select-none drop-shadow-md"   
          initial={{ opacity: 0, y: -70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { 
              delay: 1,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full mb-3"> 
            VALORES
          </h1> 
          <motion.ul className="list-disc  mx-20 rounded-3xl bg-white/30 hover:bg-white/60 text-gray-800 py-5 px-20">
            <Valor
              nombre='Honestidad'
              descripcion='Ser coherentes entre lo que decimos y hacemos, respetando las leyes, las políticas y las normas de la compañía.'
              par={false}
            /> 
            <Valor
              nombre='Austeridad'
              descripcion='Cumplir con nuestro trabajo en el tiempo, con los costos y la calidad requeridos, usando la menor cantidad de recursos y evitando desperdicios.'
              par={true}
            />
            <Valor
              nombre='Respeto'
              descripcion='Tratar bien a todas las personas, aceptando la diversidad.'
              par={false}
            />
            <Valor
              nombre='Responsabilidad'
              par={true}
              descripcion='Cumplir con nuestros deberes y tareas, asumiendo los resultados de nuestras acciones y decisiones.'
            /> 
          </motion.ul>
        </motion.div>
         
        <motion.div className="col-span-6 rounded-3xl select-none drop-shadow-md"   
          initial={{ opacity: 0, y: -70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { 
              delay: 1,
              duration: 0.5 
            },
          }}
          viewport={{ once: true }}> 
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full mb-3"> 
            VALORES
          </h1> 
          <motion.ul className="list-disc mx-20 rounded-3xl bg-white/30 hover:bg-white/60 text-gray-800 py-5 px-20">
            <Valor
              nombre='Honestidad'
              descripcion='Ser coherentes entre lo que decimos y hacemos, respetando las leyes, las políticas y las normas de la compañía.'
              par={false}
            /> 
            <Valor
              nombre='Austeridad'
              descripcion='Cumplir con nuestro trabajo en el tiempo, con los costos y la calidad requeridos, usando la menor cantidad de recursos y evitando desperdicios.'
              par={true}
            />
            <Valor
              nombre='Respeto'
              descripcion='Tratar bien a todas las personas, aceptando la diversidad.'
              par={false}
            />
            <Valor
              nombre='Responsabilidad'
              par={true}
              descripcion='Cumplir con nuestros deberes y tareas, asumiendo los resultados de nuestras acciones y decisiones.'
            /> 
          </motion.ul>
        </motion.div>
      </div>
    </div>
  );
}
