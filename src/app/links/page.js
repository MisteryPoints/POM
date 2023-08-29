"use client";
import React, { useState } from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import {motion} from 'framer-motion'
import Link from "next/link";
import Image from "next/image"; 


const FramerLink = motion(Link);
const FramerImage = motion(Image);

const Links = ({name, img, link}) => {
  const [isHover, setIsHover] = useState(false)
  
  const hovering = (e) => {
    setIsHover(!isHover);
  };
  const stopHovering = (e) => {
    setIsHover(false);
  }; 
  return ( 
    <FramerLink className="col-span-1 rounded-3xl select-none m-auto drop-shadow-md w-full h-full min-h-[225px] no-underline relative inline-flex items-center justify-start overflow-hidden transition-all group bg-cover"   
      href={link}
      target="_blank"
      style={{backgroundImage: `url(${img})`}}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { 
          delay: 0.6,
          duration: 0.6 
        },
      }}
      viewport={{ once: true }}
    >  
      <span className="w-0 h-0 rounded bg-black absolute bottom-0 left-1/2 -translate-x-1/2 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1 opacity-50"></span> 
      <h1 className="absolute bottom-0 uppercase font-extrabold text-3xl text-[#800000] text-center left-1/2 -translate-x-1/2 transition-all duration-300 ease-in-out group-hover:text-white z-10 group-hover:-translate-y-[70px] group-hover:text-6xl">{name}</h1> 
    </FramerLink>
  )
}

const Home = () => {
  return (
    <div className="bg-slate-300 w-full">
      <TransitionEffect />
      <NavHome />
      <div className="mx-24 mt-0 justify-center gap-x-5 gap-y-6">
        <motion.div className="select-none m-auto duration-300"   
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { 
              delay: 0.6,
              duration: 0.6 
            },
          }}
          viewport={{ once: true }}> 
          <div style={{background: "url(https://media.istockphoto.com/id/1292947888/vector/%C3%B0%C3%B0%C3%B0%C3%B0%C3%B0%C3%B1%C3%B0%C3%B0%C3%B0%C2%B5-%C3%B1%C3%B1%C3%B1%C3%B1%C3%B0%C3%B0%C3%B1%C3%B1%C3%B0%C3%B0.jpg?s=612x612&w=0&k=20&c=YagL6dH_mSj9NfTN8vCvsT3Lya9d8SbI32LKYPLDhVs=)"}}
              className="m-20">
              <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 uppercase">
                LINKS 
              </h1>
          </div>
        </motion.div>  
        <div className="grid xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-1 min-h-screen gap-y-8 gap-x-16 mx-24 my-12"> 
          <Links
            name='PAW'
            img={'../PWA.png'}
            link='http://portalweb/userportal/Default.aspx'
          />  
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />  
          <Links
            name='PPG'
            img={'../PPG.png'}
            link='http://portalprepago/PPG/cas/Home.jsp'
          />  
          <Links
            name='PAP'
            img={'../PAP.png'}
            link='http://adminprepago/PAP/app/Home.jsp'
          />  
          <Links
            name='PAF'
            img={'../PAF.webp'}
            link='http://172.27.4.133/age-web/index.xhtml'
          />   
          <Links
            name='PAF ADMIN'
            img={'../ADMINPAF.jpg'}
            link='http://172.27.4.133/age-web-admin/'
          />   
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />   
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />  
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />  
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />  
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />  
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />  
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />  
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />  
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />  
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />  
          <Links
            name='ECMS'
            img={'../Ericsson.png'}
            link='https://172.18.167.74/custcare_cmax/login'
          />  
        </div>
      </div>
    </div>
  );
};

export default Home;
