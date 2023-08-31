"use client";
import React, { useState } from "react";
import NavHome from "@/components/NavHome";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import Link from "next/link";

const FramerLink = motion(Link);

const Links = ({ name, img, link }) => {
  return (
    <FramerLink
      className="col-span-1 rounded-[2rem] select-none m-auto drop-shadow-md w-full h-full min-h-[240px] no-underline relative inline-flex items-center justify-start overflow-hidden transition-all group bg-cover"
      href={link}
      target="_blank"
      style={{ backgroundImage: `url(${img})` }}
      initial={{ opacity: 0, y: 70 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.6,
          duration: 0.6,
        },
      }}
      viewport={{ once: true }}
    >
      <span className="w-0 h-0 rounded-[2rem] bg-black absolute bottom-0 left-1/2 -translate-x-1/2 ease-out duration-500 transition-all w-full group-hover:h-full -z-1 opacity-50"></span>
      <h1 className="absolute bottom-0 uppercase font-extrabold text-3xl text-[#800000] text-center left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:text-white z-10 group-hover:-translate-y-[60px] group-hover:text-6xl group-hover:hyphens-auto">
        {name}
      </h1>
    </FramerLink>
  );
};

const Home = () => {
  return (
    <div className="bg-slate-300 w-full">
      <TransitionEffect />
      <NavHome />
      <div className="mx-24 mt-0 justify-center gap-x-5 gap-y-6">
        <motion.div
          className="select-none m-auto duration-300"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.4,
              duration: 0.6,
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
            <h1 className="text-center text-7xl font-extrabold mix-blend-lighten bg-slate-300 uppercase">
              LINKS
            </h1>
          </div>
        </motion.div>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-3 md:grid-cols-1 min-h-screen gap-y-8 gap-x-16 mx-24 my-12">
          <Links
            name="PAW"
            img={"../PWA.png"}
            link="http://portalweb/userportal/Default.aspx"
          />
          <Links
            name="ECMS"
            img={"../Ericsson.png"}
            link="https://172.18.167.74/custcare_cmax/login"
          />
          <Links
            name="PPG"
            img={"../PPG.png"}
            link="http://portalprepago/PPG/cas/Home.jsp"
          />
          <Links
            name="PAP"
            img={"../PAP.png"}
            link="http://adminprepago/PAP/app/Home.jsp"
          />
          <Links
            name="PAF"
            img={"../PAF.webp"}
            link="http://172.27.4.133/age-web/index.xhtml"
          />
          <Links
            name="PAF ADMIN"
            img={"../ADMINPAF.jpg"}
            link="http://172.27.4.133/age-web-admin/"
          />
          <Links
            name="SAAM"
            img={"../SAAM.png"}
            link="http://portalweb/userportal/EntradaApp.aspx?idApp=SAAM-WEB-NEW"
          />
          <Links
            name="HP SM"
            img={"../SM%20Consulta.png"}
            link="http://smweb:8080/smanager/index.do?"
          />
          <Links
            name="SM Report"
            img={"../SM%20Catalog.png"}
            link="http://smcatalogo:8180/src/secure/main.jsp"
          />
          <Links
            name="ZTE"
            img={"../ZTE.png"}
            link="http://172.18.247.82:8080/uniportal/frame/welcome.action"
          />
          <Links
            name="Porta node"
            img={"../Portanode.png"}
            link="http://portalweb/userportal/EntradaApp.aspx?idApp=PORTANODE"
          />
          <Links
            name="Mapa Digital"
            img={"../Mapa%20digital.jpg"}
            link="http://portalweb/userportal/EntradaApp.aspx?idApp=mapa-digital"
          />
          <Links
            name="Serien"
            img={"../SERIEN.png"}
            link="http://portalweb/userportal/EntradaApp.aspx?idApp=SERNEGWEB"
          />
          <Links
            name="VoLTE SIM"
            img={"../VoLTE.jpg"}
            link="http://nttappsweb0005/ClaroAyuda/A_Formularios/Frm_VoLTE.aspx"
          />
          <Links
            name="OTA"
            img={"../OTA.png"}
            link="https://172.18.64.59:9080/SCI/login"
          />
          <Links
            name="POC"
            img={"../Claro.png"}
            link="http://portalweb/userportal/EntradaApp.aspx?idApp=POC01"
          />
          <Links
            name="Ens Dash"
            img={"../EnsDash.jpg"}
            link="http://172.27.17.32:7040/HerramientaAR/Switch_CheckQ3.jsp"
          />
          <Links
            name="SMART CARE"
            img={"../SmartCare.png"}
            link="https://172.18.67.2:8443/cas/login"
          />
          <Links
            name="Switch Backup"
            img={"../TrxBackup.png"}
            link="https://pawtest/userportal/EntradaApp.aspx?idApp=TRXBACKUP"
          />
          <Links
            name="PSR"
            img={"../SWAGGER.jpg"}
            link="http://ntpappsweb0008/PSR/swagger/ui/index#!/MainService/MainService_UpdateProfileByPhoneNumber"
          />
          <Links
            name="ENS API"
            img={"../API.png"}
            link="http://cwl-soaprod.corp.codetel.com.do/EJB-EnsembleServicesWrapper-context-root/EnWrapperServiceSoapHttpPort?wsdl"
          />
          <Links
            name="HUB API"
            img={"../API.png"}
            link="http://osbprod.corp.codetel.com.do/services/ServiceGateway/ServiceGatewayPostActivationService?wsdl"
          />
          <Links
            name="SMGR"
            img={"../SMGR.avif"}
            link="https://172.27.72.88/tools/Tabla-Offers/"
          />
          <Links
            name="Offers"
            img={"../SMGR.avif"}
            link="https://172.27.72.88/portal/catalogo-de-offertas-red-prepago/"
          />
          <Links
            name="MAPA CELDAS"
            img={"../Mapa%20digital.jpg"}
            link="http://portallmetricas/CorpoMovilSite/1CORNoDisponTest.aspx"
          />
          <Links
            name="Claro Ayuda"
            img={"../claroayuda.png"}
            link="http://nttappsweb0005/claroayuda/"
          />
          <Links
            name="Fripick"
            img={"../Fripick.png"}
            link="https://p.fripick.com/login/"
          />
          <Links
            name="SOX"
            img={"../Sharepoint.jpg"}
            link="http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx"
          />
          <Links
            name="PAC"
            img={"../PAC.png"}
            link="https://pac.corp.codetel.com.do/isf-web/login.xhtml"
          />
          <Links
            name="QA22 PPG"
            img={"../PPG.png"}
            link="http://lxtwlcluts03:7010/PPG/cas/Home.jsp"
          />
          <Links
            name="QA22 PAP"
            img={"../PAP.png"}
            link="http://lxtwlcluts04:7020/PAP/app/IccidStatus.jsp"
          />
          <Links
            name="QA9 PPG"
            img={"../PPG.png"}
            link="http://lxtwlcluts04:7110/PPG/cas/Home.jsp"
          />
          <Links
            name="QA9 PAP"
            img={"../PAP.png"}
            link="http://lxtwlcluts04:7120/PAP/app/IccidStatus.jsp"
          />
          <Links name="RHOL" img={"../Claro.png"} link="http://rhol" />
          <Links
            name="JIRA"
            img={"../JIRA.png"}
            link="https://monitortdtb.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
