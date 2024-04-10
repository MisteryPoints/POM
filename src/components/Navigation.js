'use client'

import * as React from 'react'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from "@/lib/utils" 
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu" 
 
const statistics = [
  {
    title: "Estadísticas Diarias",
    href: "/estadisticas/provision",
    description:
      "Datos informativos de las estadísticas diarias (daily).",
  },
  {
    title: "Dashboard CCM",
    href: "/estadisticas/ccm",
    description:
      "Dashboards y estadísticas del equipo de CCM.",
  },
  {
    title: "Dashboard MOR",
    href: "/estadisticas/mor",
    description: "Datos informativos de las estadísticas mensuales (monthly).",
  },
  {
    title: "Dashboard POC",
    href: "/estadisticas/poc",
    description:
      "Estadísticas del Portal POC.",
  },
  {
    title: "Dashboard Medios de Recargo",
    href: "/estadisticas/recargo",
    description:
      "Dashboards y estadísticas del equipo de Medios de Recargo.",
  }, 
]

const tools = [
  {
    title: "ECMS",
    href: "/nodos/ecms",
    description:
      "Sección de documentación sobre el nodo ECMS.",
  },
  {
    title: "EDA",
    href: "/nodos/eda",
    description:
      "Sección de documentación sobre el nodo EDA.",
  },
  {
    title: "SDP",
    href: "/nodos/sdp",
    description: "Sección de documentación sobre el nodo SDP.",
  },
  {
    title: "AIR",
    href: "/nodos/air",
    description:
      "Sección de documentación sobre los nodos de los AIR.",
  },
  {
    title: "Centrales",
    href: "/nodos/hlr",
    description:
      "Sección de documentación sobre el nodo HLR.",
  }, 
  {
    title: "Minimensajes",
    href: "/nodos/zte",
    description:
      "Sección de documentación sobre el nodo ZTE.",
  }, 
  {
    title: "Subscription Manager",
    href: "/nodos/sm",
    description:
      "Documentación SM.",
  }, 
  {
    title: "Voice Mail",
    href: "/nodos/vm",
    description:
      "Sección de documentación sobre el nodo del Voice Mail.",
  }, 
  {
    title: "VoLTE",
    href: "/nodos/volte",
    description:
      "Sección de documentación sobre el nodo SPG e IMS.",
  }, 
]

const systems = [
  {
    title: "SAAM",
    href: "/sistemas/saam",
    description:
      "Sección de documentación sobre el sistema SAAM.",
  },
  {
    title: "Commplex",
    href: "/sistemas/commplex",
    description:
      "Sección de documentación sobre el sistema Commplex.",
  },
  {
    title: "PPG",
    href: "/sistemas/ppg",
    description: "Sección de documentación sobre el sistema PPG.",
  },
  {
    title: "Ensemble",
    href: "/sistemas/ensemble",
    description:
      "Sección de documentación sobre el sistema Ensamble.",
  }, 
]

const techs = [
  {
    title: "Links",
    href: "/links",
    description:
      "Acceso a los Links utilizados en el área de Operaciones Móviles.",
  },
  {
    title: "Instructivos",
    href: "/instructivos",
    description:
      "Acceso a los instructivos del área de Operaciones Móviles.",
  }, 
]



export function Navigation() {
  const [reference, setReference] = useState('')
  const refE = useRef(null);
  const refH = useRef(null);
  const refT = useRef(null);
  const refS = useRef(null);
  const refP = useRef(null); 

  useEffect(() => {
    console.log(reference?.current?.offsetLeft)
  }, [reference])
 
  return (
    <NavigationMenu position={reference?.current?.offsetLeft}> l
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle() + ' bg-transparent border-2 border-red-900 !font-bold !text-lg !text-gray-100 no-underline hover:!bg-gray-100 hover:!text-black !transition-all !duration-200 h-[38px]'}>
              Inicio
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger ref={refE} className='bg-transparent border-2 border-red-900 !font-bold !text-lg !text-gray-100 no-underline hover:!bg-gray-100 hover:!text-black !transition-all !duration-200 h-[38px]' onMouseOver={()=> setReference(refE)}
          >Estadísticas</NavigationMenuTrigger> 
          <NavigationMenuContent className='bg-gradient-to-r from-[-20%] to-60% from-red-900 to-black'>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/estadisticas"
                  > 
                    <div className="mb-2 mt-4 text-lg font-medium text-red-700">
                      Estadísticas
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Sección de estadísticas del área de Operaciones Móviles.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {statistics.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger ref={refH} className='bg-transparent border-2 border-red-900 !font-bold !text-lg !text-gray-100 no-underline hover:!bg-gray-100 hover:!text-black !transition-all !duration-200 h-[38px]' onMouseOver={() => setReference(refH)}>Herramientas</NavigationMenuTrigger> 
          <NavigationMenuContent className='bg-gradient-to-r from-[-20%] to-60% from-red-900 to-black'>
            <ul className="grid gap-3 p-4 md:w-[600px] lg:w-[700px] lg:grid-cols-[.75fr_1fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  > 
                    <div className="mb-2 mt-4 text-lg font-medium text-red-700">
                      Herramientas
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Sección de Herramientas y nodos del área de Operaciones Móviles.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {tools.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))} 
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger ref={refS} className='bg-transparent border-2 border-red-900 !font-bold !text-lg !text-gray-100 no-underline hover:!bg-gray-100 hover:!text-black !transition-all !duration-200 h-[38px]' onMouseOver={() => setReference(refS)}>Sistemas</NavigationMenuTrigger> 
          <NavigationMenuContent className='bg-gradient-to-r from-[-20%] to-60% from-red-900 to-black'>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-4">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  > 
                    <div className="mb-2 mt-4 text-lg font-medium text-red-700">
                      Sistemas
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Sección de Sistemas del área de Operaciones Móviles.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {systems.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))} 
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger ref={refT} className='bg-transparent border-2 border-red-900 !font-bold !text-lg !text-gray-100 no-underline hover:!bg-gray-100 hover:!text-black !transition-all !duration-200 h-[38px]'  onMouseOver={() => setReference(refT)}>Tecnologías</NavigationMenuTrigger> 
          <NavigationMenuContent className='bg-gradient-to-r from-[-20%] to-60% from-red-900 to-black'>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  > 
                    <div className="mb-2 mt-4 text-lg font-medium text-red-700">
                      Tecnologías
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Sección de Tecnologías del área de Operaciones Móviles.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              {techs.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))} 
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger ref={refP} className='bg-transparent border-2 border-red-900 !font-bold !text-lg !text-gray-100 no-underline hover:!bg-gray-100 hover:!text-black !transition-all !duration-200 h-[38px]'  onMouseOver={() => setReference(refP)}>Procesos</NavigationMenuTrigger> 
          <NavigationMenuContent className='bg-gradient-to-r from-[-20%] to-60% from-red-900 to-black justify-center'>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {statistics.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle() + ' bg-transparent border-2 border-red-900 !font-bold !text-lg !text-gray-100 no-underline hover:!bg-gray-100 hover:!text-black !transition-all !duration-200 h-[38px]'}>
              Nosotros
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
 
const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none text-red-700">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})

ListItem.displayName = "ListItem"