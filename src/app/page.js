"use client";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import {motion} from 'framer-motion'

const Valor = ({nombre, descripcion, par}) => (
  <motion.li 
    className="text-2xl font-semibold p-2" 
    initial={ par ? { opacity: 0, x: 170 } : { opacity: 0, x: -170 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: { 
        delay: 0.6,
        duration: 0.6 
      },
    }} 
    viewport={{ once: true }}
  >
    <span className="font-bold">{nombre}:</span> {descripcion}
  </motion.li>
)

export default function Home() {
  return (
    <div className="bg-slate-300 w-full">
      <TransitionEffect />
      <NavHome />
      <div className="grid grid-cols-12 mx-24 mt-2 justify-center gap-x-5 gap-y-6">
        <motion.div className="col-span-12 select-none m-auto duration-300"   
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.6,
              duration: 0.6 
            },
          }}
          viewport={{ once: true }}> 
          <div style={{background: "url(https://cdn2.vectorstock.com/i/1000x1000/73/31/red-background-texture-vector-11257331.jpg)"}}
              class="m-20">
              <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 uppercase">
                BIENVENIDOS
                <br/>OPERACIONES MOVILES 
              </h1>
          </div>
        </motion.div> 
        <motion.div className="col-span-3 rounded-3xl select-none m-auto drop-shadow-md"   
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.6,
              duration: 0.6 
            },
          }}
          viewport={{ once: true }}> 
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full"> 
            MISION
          </h1> 
        </motion.div>
        <motion.div className="col-span-9 rounded-3xl bg-white/30 text-gray-800 hover:bg-white/60 select-none m-auto drop-shadow-md duration-300"   
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.6,
              duration: 0.6 
            },
          }}
          viewport={{ once: true }}> 
          <p className="justify-center font-semibold text-xl w-full p-12"> 
            Lograr que toda la población de la República Dominicana, pueda satisfacer sus necesidades de comunicación y entretenimiento digital, brindándole productos y servicios de voz, datos y video de avanzada tecnología, accesibilidad y calidad, a través de la mejor experiencia de servicio, con la finalidad de acercar más a las personas y elevar su calidad de vida.
          </p> 
        </motion.div> 
        <motion.div className="col-span-9 rounded-3xl bg-white/30 text-gray-800 hover:bg-white/60 select-none m-auto drop-shadow-md duration-300"   
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.6,
              duration: 0.6 
            },
          }}
          viewport={{ once: true }}> 
          <p className="justify-center font-semibold text-xl w-full p-12"> 
            Ser la solución integral preferida de telecomunicaciones en la República Dominicana, con un crecimiento rentable y sostenido en participación del mercado.
          </p> 
        </motion.div> 
        <motion.div className="col-span-3 rounded-3xl select-none m-auto drop-shadow-md"   
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { 
              delay: 0.6,
              duration: 0.6 
            },
          }}
          viewport={{ once: true }}> 
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full"> 
            VISION
          </h1> 
        </motion.div>
        <motion.div className="col-span-12 rounded-3xl select-none drop-shadow-md"   
          initial={{ opacity: 0, y: -70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { 
              delay: 0.6,
              duration: 0.6 
            },
          }}
          viewport={{ once: true }}> 
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full mb-3"> 
            VALORES
          </h1> 
          <motion.ul className="list-disc mx-44 rounded-3xl bg-white/30 hover:bg-white/60 text-gray-800 py-5 px-20">
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
