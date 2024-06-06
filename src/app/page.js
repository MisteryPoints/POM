"use client";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AnimationName = {
  enter: {
    opacity: 1,
    rotateX: 0,
    x: 0,
    scrollTo: { x: 100 },
    transition: {
      duration: 0.9,
    },
    display: "grid",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    x: -2900,
    transition: {
      duration: 0.9,
      delay: 0.1,
    },
  },
};

const Valor = ({ nombre, descripcion, par }) => (
  <motion.li
    className="xl:text 2xl:text-2xl font-semibold p-2"
    initial={par ? { opacity: 0, x: 170 } : { opacity: 0, x: -170 }}
    whileInView={{
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.4,
        duration: 0.4,
      },
    }}
    viewport={{ once: true }}
  >
    <span className="font-bold text-teal-900">{nombre}:</span> {descripcion}
  </motion.li>
);

export default function Home() {
  const [selector, setSelector] = useState(false)
  const [mov, setMov] = useState(true)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const changeSelector = () => {
    setMov(!mov)
    setTimeout(() => {
      setSelector(!selector)
    }, 400);
  }
 
  return (
    <div className="w-full">
      <TransitionEffect />
      <NavHome />
      <div className="grid grid-cols-12 mx-24 -mt-8 justify-center gap-x-5 gap-y-6">
        <motion.div
          className="col-span-12 select-none m-auto duration-300"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.1,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <div
            style={{
              background:
                "url(https://media.istockphoto.com/id/1292947888/vector/%C3%B0%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C2%B5-%C3%B1%C3%B1%C3%B1%C3%B1%C3%B0%C3%B0%C3%B1%C3%B1%C3%B0%C3%B0.jpg?s=612x612&w=0&k=20&c=YagL6dH_mSj9NfTN8vCvsT3Lya9d8SbI32LKYPLDhVs=)",
            }}
            className="m-20"
          >
            <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 dark:text-red-800 dark:mix-blend-normal dark:bg-slate-900 uppercase">
              BIENVENIDOS A
              <br />
              OPERACIONES MOVILES
            </h1>
          </div>
        </motion.div>
        
        <motion.div
          className="col-span-12 select-none m-auto bg-gradient-to-br from-sky-700 via-blue-800 to-teal-600"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.6,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <h1 className="justify-center text-center mix-blend-lighten dark:mix-blend-darken dark:text-white font-extrabold text-6xl bg-slate-300 dark:bg-slate-900 m-auto w-full uppercase">
            NUESTRO PROPóSITO
          </h1>
        </motion.div>
        
        <motion.div
          className="col-span-12 select-none m-auto max-h-[48px] duration-300 max-w-[1200px] my-5 bg-gradient-to-br from-sky-700 via-blue-800 to-teal-600"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.4,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <h1 className="justify-center font-extrabold text-5xl w-full uppercase  mix-blend-lighten bg-slate-300 dark:text-white dark:bg-slate-900 dark:mix-blend-darken">
            Hacer Posible un Mundo Mejor
          </h1>
        </motion.div>

        <div className="col-span-12 flex w-full justify-center">
          <button className={`text-2xl ${!selector ? 'bg-red-800' : 'bg-red-600 hover:bg-red-600/90'} text-white font-bold uppercase px-6 py-4 rounded-l-2xl !transition-all !duration-400`} disabled={!selector} onClick={changeSelector}>Claro</button>
          <button className={`text-2xl ${selector ? 'bg-blue-800' : 'bg-blue-500 hover:bg-blue-500/90'} text-white font-bold uppercase px-6 py-4 rounded-r-2xl !transition-all !duration-400`} disabled={selector} onClick={changeSelector}>Operaciones Móviles</button>
        </div>
        { !selector ? (
        <motion.div 
        className="col-span-12 grid grid-cols-12"
        animate={mov ? "enter" : "exit"}
        variants={AnimationName}>
          <motion.div
          className="col-span-12 rounded-3xl select-none m-auto" 
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.6,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <div
            style={{
              background:
                "url(https://media.istockphoto.com/id/1292947888/vector/%C3%B0%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C2%B5-%C3%B1%C3%B1%C3%B1%C3%B1%C3%B0%C3%B0%C3%B1%C3%B1%C3%B0%C3%B0.jpg?s=612x612&w=0&k=20&c=YagL6dH_mSj9NfTN8vCvsT3Lya9d8SbI32LKYPLDhVs=)",
            }}
            className="m-12"
          >
            <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 dark:text-red-600 dark:mix-blend-normal dark:bg-slate-900 uppercase">
              CLARO
            </h1>
          </div>
        </motion.div>
        <motion.div
          className="col-span-6 rounded-3xl select-none m-auto drop-shadow-md"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.6,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <h1 className="justify-center text-center text-sky-700 font-bold text-6xl m-auto w-full uppercase">
          Misión
          </h1>
        </motion.div>
        <motion.div
          className="col-span-6 rounded-3xl select-none m-auto drop-shadow-md"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.8,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <h1 className="justify-center text-center text-blue-800 font-bold text-6xl m-auto w-full uppercase">
            Visión
          </h1>
        </motion.div>
        <motion.div
          className="col-start-2 col-end-6 xl:col-span-6 rounded-3xl bg-white/30 dark:bg-white/70 text-sky-700  hover:bg-white/60 dark:hover:bg-white/80 select-none m-auto drop-shadow-md duration-300 max-w-[800px] my-5 mx-6"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.4,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <p className="justify-center font-semibold text-xl w-full px-12 py-8 mb-0">
          &quot;Brindamos la mejor experiencia de servicio a través de las más avanzadas soluciones de comunicación, tecnología de información y contenido digital para acelerar el desarrollo de los países donde operamos y promover la igualdad de oportunidades entre la gente.&quot; 
          </p>
        </motion.div>
        <motion.div
          className="col-start-2 col-end-6 xl:col-span-6 rounded-3xl bg-white/30 dark:bg-white/70 text-blue-600  hover:bg-white/60 dark:hover:bg-white/80 select-none m-auto drop-shadow-md duration-300 max-w-[800px] my-5 mx-6"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.8,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <p className="justify-center font-semibold text-xl w-full px-12 py-8 mb-0">
          &quot;Consolidarnos como un agente de cambio al proporcionar servicios de conectividad y alta tecnología; preservando nuestro liderazgo en la industria de las telecomunicaciones y reafirmando nuestro compromiso con las personas para hacer un mundo más próspero para todos.&quot; 
          </p>
        </motion.div>
        <motion.div
          className="col-span-12 rounded-3xl select-none drop-shadow-md mx-[200px]"
          initial={{ opacity: 0, y: -70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <h1 className="justify-center text-center text-teal-600 font-bold text-6xl m-auto w-full mb-3">
            VALORES
          </h1>
          <motion.ul className="list-disc mx-12 xl:mx-20 rounded-3xl bg-white/30 dark:bg-white/70 dark:hover:bg-white/80 hover:bg-white/60 text-teal-700 2xl:py-5 2xl:px-20 py-3 px-12 transition-all duration-600">
            <Valor
              nombre="Sustentabilidad"
              descripcion="Usar nuestros recursos apoyando el desarrollo económico a largo plazo de nuestro país, protegiendo al mismo tiempo los elementos medioambientales, sociales y culturales."
              par={false}
            />
            <Valor
              nombre="Desarrollo Humano"
              descripcion="Apoyamos el desarrollo de los individuos en el centro del desarrollo, de manera que se goce de más oportunidades y un alto nivel de vida."
              par={true}
            />
            <Valor
              nombre="Integridad"
              descripcion="Impulsamos ser personas honestas, respetuosas, adherirse a nuestros valores y tomar sistemáticamente decisiones positivas."
              par={false}
            />
            <Valor
              nombre="Experiencia del Cliente"
              par={true}
              descripcion="Brindar a los consumidores la experiencia para hacerlo sentir especial y único, al tiempo que puede realizar todo con facilidad."
            />
            <Valor
              nombre="Eficiencia"
              descripcion="Utilizar de la mejor forma posible los recursos para conseguir nuestras metas."
              par={false}
            />
            <Valor
              nombre="Colaboración"
              par={true}
              descripcion="Trabajamos en conjunto para cumplir nuestras metas en común."
            />
            <Valor
              nombre="Innovación"
              descripcion="Incentivamos la generación de nuevas ideas, nuevo proyectos y nuevos productos y/o nuevos modos de satisfacer a nuestros clientes de manera eficiente y eficaz."
              par={false}
            />
          </motion.ul>
        </motion.div>
        </motion.div >
        ) : ( 
        <motion.div 
          className="col-span-12 grid grid-cols-12"
          animate={mov ? "exit" : "enter"}
          variants={AnimationName}>
          <motion.div
          className="col-span-12 rounded-3xl select-none m-auto"
          initial={{ opacity: 0, x: -70 }} 
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.6,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <div
            style={{
              background:
                "url(https://media.istockphoto.com/id/1292947888/vector/%C3%B0%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C2%B5-%C3%B1%C3%B1%C3%B1%C3%B1%C3%B0%C3%B0%C3%B1%C3%B1%C3%B0%C3%B0.jpg?s=612x612&w=0&k=20&c=YagL6dH_mSj9NfTN8vCvsT3Lya9d8SbI32LKYPLDhVs=)",
            }}
            className="m-12"
          >
            <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 dark:text-red-600 dark:mix-blend-normal dark:bg-slate-900 uppercase">
              Operaciones Móviles
            </h1>
          </div>
        </motion.div>
        
        <motion.div
          className="col-span-6 rounded-3xl select-none m-auto"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.6,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full uppercase">
            Misión
          </h1>
        </motion.div>
        <motion.div
          className="col-span-6 rounded-3xl select-none m-auto drop-shadow-md"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.8,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full uppercase">
            Visión
          </h1>
        </motion.div>
        <motion.div
          className="col-start-2 col-end-6 xl:col-span-6 rounded-3xl bg-white/30 dark:bg-white/70 text-blue-600  hover:bg-white/60 dark:hover:bg-white/80 select-none m-auto drop-shadow-md duration-300 max-w-[800px] my-5 mx-6"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.4,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <p className="justify-center font-semibold text-xl w-full p-12">
            Lograr que toda la población de la República Dominicana, pueda
            satisfacer sus necesidades de comunicación y entretenimiento
            digital, brindándole productos y servicios de voz, datos y video de
            avanzada tecnología, accesibilidad y calidad, a través de la mejor
            experiencia de servicio, con la finalidad de acercar más a las
            personas y elevar su calidad de vida.
          </p>
        </motion.div>
        <motion.div
          className="col-start-2 col-end-6 xl:col-span-6 rounded-3xl bg-white/30 dark:bg-white/70 text-blue-600  hover:bg-white/60 dark:hover:bg-white/80 select-none m-auto drop-shadow-md duration-300 max-w-[800px] my-5 mx-6"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              delay: 0.8,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <p className="justify-center font-semibold text-xl w-full p-12">
            Ser la solución integral preferida de telecomunicaciones en la
            República Dominicana, con un crecimiento rentable y sostenido en
            participación del mercado.
          </p>
        </motion.div>
        <motion.div
          className="col-span-12 rounded-3xl select-none drop-shadow-md mx-[200px]"
          initial={{ opacity: 0, y: -70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 1,
              duration: 0.4,
            },
          }}
          viewport={{ once: true }}
        >
          <h1 className="justify-center text-center text-red-600 font-bold text-6xl m-auto w-full mb-3">
            VALORES
          </h1>
          <motion.ul className="list-disc mx-12 xl:mx-20 rounded-3xl bg-white/30 dark:bg-white/70 dark:hover:bg-white/80 hover:bg-white/60 text-teal-700 2xl:py-5 2xl:px-20 py-3 px-12 transition-all duration-600 ">
            <Valor
              nombre="Honestidad"
              descripcion="Ser coherentes entre lo que decimos y hacemos, respetando las leyes, las políticas y las normas de la compañía."
              par={false}
            />
            <Valor
              nombre="Austeridad"
              descripcion="Cumplir con nuestro trabajo en el tiempo, con los costos y la calidad requeridos, usando la menor cantidad de recursos y evitando desperdicios."
              par={true}
            />
            <Valor
              nombre="Respeto"
              descripcion="Tratar bien a todas las personas, aceptando la diversidad."
              par={false}
            />
            <Valor
              nombre="Responsabilidad"
              par={true}
              descripcion="Cumplir con nuestros deberes y tareas, asumiendo los resultados de nuestras acciones y decisiones."
            />
          </motion.ul>
        </motion.div>
        </motion.div>
        )}

        
      </div>
    </div>
  );
}

