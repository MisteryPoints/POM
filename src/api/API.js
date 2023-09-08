/** Arreglo de Links -Estático- */
const ALinks = [
  {
    name:"PAW",
    img:"../PAW.png",
    category: [
      'favoritos',
      'portales'
    ],
    link:"http://portalweb/userportal/Default.aspx"
  },
  {
    name:"ECMS",
    img:"../Ericsson.png",
    category: [
      'favoritos'
    ],
    link:"https://172.18.167.74/custcare_cmax/login"
  },
  {
    name:"PPG",
    img:"../PPG.png",
    category: [
      'favoritos',
    ],
    link:"http://portalprepago/PPG/cas/Home.jsp"
  },
  {
    name:"PAP",
    img:"../PAP.png",
    category: [
      'favoritos'
    ],
    link:"http://adminprepago/PAP/app/Home.jsp"
  },
  {
    name:"PAF",
    img:"../PAF.webp",
    category: [
      'favoritos'
    ],
    link:"http://172.27.4.133/age-web/index.xhtml" 
  },
  {
    name:"PAF ADMIN",
    img:"../ADMINPAF.jpg",
    category: [
      'favoritos'
    ],
    link:"http://172.27.4.133/age-web-admin/"
  },
  {
    name:"SAAM",
    img:"../SAAM.png",
    category: [
      'favoritos'
    ],
    link:"http://portalweb/userportal/EntradaApp.aspx?idApp=SAAM-WEB-NEW" 
  },
  {
    name:"HP SM",
    img:"../SM%20Consulta.png",
    category: [
      'reportes'
    ],
    link:"http://smweb:8080/smanager/index.do?"
  },
  {
    name:"SM Report",
    img:"../SM%20Catalog.png",
    category: [
      'reportes'
    ],
    link:"http://smcatalogo:8180/src/secure/main.jsp"
  },
  {
    name:"ZTE",
    img:"../ZTE.png",
    category: [
      'favoritos'
    ],
    link:"http://172.18.247.82:8080/uniportal/frame/welcome.action"
  },
  {
    name:"Porta node",
    img:"../Portanode.png",
    category: [
      'favoritos'
    ],
    link:"http://portalweb/userportal/EntradaApp.aspx?idApp=PORTANODE"
  },
  {
    name:"Mapa Digital",
    img:"../Mapa%20digital.jpg",
    category: [
      'favoritos',
      'mapas'
    ],
    link:"http://portalweb/userportal/EntradaApp.aspx?idApp=mapa-digital"
  },
  {
    name:"Serien",
    img:"../SERIEN.png",
    category: [
      'favoritos'
    ],
    link:"http://portalweb/userportal/EntradaApp.aspx?idApp=SERNEGWEB"
  },
  {
    name:"VoLTE SIM",
    img:"../VoLTE.jpg",
    category: [
      'otros'
    ],
    link:"http://nttappsweb0005/ClaroAyuda/A_Formularios/Frm_VoLTE.aspx"
  },
  {
    name:"OTA",
    img:"../OTA.png",
    category: [
      'favoritos'
    ],
    link:"https://172.18.64.59:9080/SCI/login"
  },
  {
    name:"POC",
    img:"../Claro.png",
    category: [
      'portales'
    ],
    link:"http://portalweb/userportal/EntradaApp.aspx?idApp=POC01"
  },
  {
    name:"Ens Dash",
    img:"../EnsDash.jpg",
    category: [
      'otros'
    ],
    link:"http://172.27.17.32:7040/HerramientaAR/Switch_CheckQ3.jsp"
  },
  {
    name:"SMART CARE",
    img:"../SmartCare.png",
    category: [
      'otros'
    ],
    link:"https://172.18.67.2:8443/cas/login"
  },
  {
    name:"Switch Backup",
    img:"../TrxBackup.png",
    category: [
      'otros'
    ],
    link:"https://pawtest/userportal/EntradaApp.aspx?idApp=TRXBACKUP"
  },
  {
    name:"PSR",
    img:"../SWAGGER.jpg",
    category: [
      'otros'
    ],
    link:"http://ntpappsweb0008/PSR/swagger/ui/index#!/MainService/MainService_UpdateProfileByPhoneNumber"
  },
  {
    name:"ENS API",
    img:"../API.png",
    category: [
      'otros'
    ],
    link:"http://cwl-soaprod.corp.codetel.com.do/EJB-EnsembleServicesWrapper-context-root/EnWrapperServiceSoapHttpPort?wsdl"
  },
  {
    name:"HUB API",
    img:"../API.png",
    category: [
      'otros'
    ],
    link:"http://osbprod.corp.codetel.com.do/services/ServiceGateway/ServiceGatewayPostActivationService?wsdl"
  },
  {
    name:"SMGR",
    img:"../SMGR.avif",
    category: [
      'otros'
    ],
    link:"https://172.27.72.88/tools/Tabla-Offers/"
  },
  {
    name:"Offers",
    img:"../SMGR.avif",
    category: [
      'otros'
    ],
    link:"https://172.27.72.88/portal/catalogo-de-offertas-red-prepago/"
  },
  {
    name:"MAPA CELDAS",
    img:"../Mapa%20digital.jpg",
    category: [
      'mapas'
    ],
    link:"http://portallmetricas/CorpoMovilSite/1CORNoDisponTest.aspx"
  },
  {
    name:"Claro Ayuda",
    img:"../claroayuda.png",
    category: [
      'portales'
    ],
    link:"http://nttappsweb0005/claroayuda/"
  },
  {
    name:"Fripick",
    img:"../Fripick.png",
    category: [ 
      'portales'
    ],
    link:"https://p.fripick.com/login/"
  },
  {
    name:"SOX",
    img:'../Sharepoint.jpg',
    category: [
      'portales'
    ],
    link:"http://moss/docoficialv2/_layouts/15/start.aspx#/Documentos/Forms/OPERACIONES.aspx"
  },
  {
    name:"PAC",
    img:"../PAC.png",
    category: [
      'portales'
    ],
    link:"https://pac.corp.codetel.com.do/isf-web/login.xhtml"
  },
  {
    name:"QA22 PPG",
    img:"../PPG.png",
    category: [
      'QA'
    ],
    link:"http://lxtwlcluts03:7010/PPG/cas/Home.jsp"
  },
  {
    name:"QA22 PAP",
    img:"../PAP.png",
    category: [
      'QA'
    ],
    link:"http://lxtwlcluts04:7020/PAP/app/IccidStatus.jsp"
  }, 
  {
    name:"QA9 PPG",
    img:"../PPG.png",
    category: [
      'QA'
    ],
    link:"http://lxtwlcluts04:7110/PPG/cas/Home.jsp"
  },
  {
    name:"QA9 PAP",
    img:"../PAP.png",
    category: [
      'QA'
    ],
    link:"http://lxtwlcluts04:7120/PAP/app/IccidStatus.jsp"
  },
  {
    name:"RHOL",
    img:"../Claro.png",
    category: [
      'portales'
    ],
    link:"http://rhol"
  },
  {
    name:"JIRA",
    img:"../JIRA.png",
    category: [
      'reportes'
    ],
    link:"https://monitortdtb.atlassian.net/servicedesk/customer/portal/1/user/login?destination=portal%2F1"
  }, 
]

/** Arreglo de Instructivos -Estático- */
const AInstructivos = [
  {
    name:'Diagnóstico Averías Móviles',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/DIAGN%C3%93STICO%20AVER%C3%8DAS%20M%C3%93VILES.pdf' 
  },
  {
    name:'Manejo Fallas Móviles Provisión',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/MANEJO%20DE%20FALLAS%20M%C3%93VILES%20EN%20SISTEMAS%20DE%20APROVISIONAMIENTO.pdf'
  },
  {
    name:'Manejo Errores Rebotes',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/MANEJO%20DE%20ERRORES%20Y%20REBOTES.pdf'
  },
  {
    name:'Manual Voucher Server',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/MANUAL%20DE%20USUARIO%20VOUCHER%20SERVER.pdf'
  },
  {
    name:'Reverso',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/REVERSO.pdf' 
  },
  {
    name:'Fallas Cancelación Servicios Móviles',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/GESTI%C3%93N%20DE%20FALLAS%20EN%20CANCELACI%C3%93N%20DE%20SERVICIOS%20M%C3%93VILES.pdf' 
  },
  {
    name:'Reclamación Medios de Recarga',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/CIERRE%20RECLAMACIONES%20MEDIOS%20DE%20RECARGA.pdf'
  },
  {
    name:'Contingencia No Disp Ensamble',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/CONTINGENCIA%20ANTE%20NO%20DISPONIBILIDAD%20DE%20ENSEMBLE.pdf'
  },
  {
    name:'Sistema Commplex',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/SISTEMA%20COMMPLEX.pdf'
  },
  {
    name:'SAAM',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/SISTEMA%20DE%20ADMINISTRACI%C3%93N%20DE%20AVER%C3%8DAS%20M%C3%93VILES.pdf'
  },
  {
    name:'Manual Bancatel',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/MANUAL%20DE%20USUARIOS%20BANCATEL.pdf'
  },
  {
    name:'Operacional CCM Móviles',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/OPERACIONAL%20CCM%20M%C3%93VILES.pdf'
  },
  {
    name:'Series Negadas',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/MANEJO%20DE%20SERIES%20NEGADAS.pdf'
  },
  {
    name:'Reverso Carga Fácil',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/REVERSO%20CARGA%20F%C3%81CIL.pdf'
  },
  {
    name:'Compares Provisión',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/COMPARES%20DE%20APROVISIONAMIENTO.pdf'
  },
  {
    name:'Contingencia Provisión Manejados OpeMov',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/CONTINGENCIA%20APROVISIONAMIENTO%20DE%20SERVICIOS%20MANEJADA%20POR%20OPERACIONES%20M%C3%93VILES.pdf'
  },
  {
    name:'Averías Segmento EyF Automáticas',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/AVER%C3%8DAS%20APLICACIONES%20M%C3%93VILES%20AUTOM%C3%81TICAS%20SEGMENTO%20E%20Y%20F.pdf'
  },
  {
    name:'Averías Localización Vehicular',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/AVER%C3%8DAS%20DE%20LOCALIZACI%C3%93N%20VEHICULAR.pdf'
  },
  {
    name:'Reclamación Norton Antivirus',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/GESTI%C3%93N%20DE%20RECLAMACIONES%20Y%20AVER%C3%8DAS%20NORTON%20SEGURIDAD%20DIGITAL.pdf'
  },
  {
    name:'Casos SWAT TEAM',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/ATENCI%C3%93N%20CASOS%20SWAT%20TEAM.pdf'
  },
  {
    name:'Desbloqueo Equipos Móviles',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/DESBLOQUEO%20EQUIPOS%20M%C3%93VILES.pdf'
  },
  {
    name:'Validaciones CCM',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/VALIDACI%C3%93N%20DE%20USUARIOS%20EN%20CALL%20CENTER%20M%C3%93VILES.pdf'
  },
  {
    name:'Ajustes por Averías y Provisión',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/AJUSTES%20POR%20APROVISIONAMIENTO%20M%C3%93VIL%20Y%20AVER%C3%8DAS.pdf'
  },
  {
    name:'Ajustes Prepago',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/AJUSTE%20PREPAGO.pdf'
  },
  {
    name:'Excepción Límites Líneas Prepago',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/MANEJO%20DE%20EXCEPCI%C3%93N%20L%C3%8DMITE%20DE%20L%C3%8DNEAS%20PREPAGADAS.pdf'
  },
  {
    name:'Fallas Provisión Datos Móviles',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/GESTI%C3%93N%20DE%20FALLAS%20APROVISIONAMIENTO%20SERVICIO%20DE%20DATOS%20M%C3%93VILES.pdf'
  },
  {
    name:'Averías Móviles',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/AVER%C3%8DAS%20M%C3%93VILES.pdf'
  },
  {
    name:'Admin Códigos NXX',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/ADMINISTRACI%C3%93N%20DE%20C%C3%93DIGOS%20NXX.pdf'
  },
  {
    name:'Acceso al 911',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/BLOQUEO%20Y%20DESBLOQUEO%20ACCESO%20AL%20911.pdf'
  },
  {
    name:'Averías Claro Sync',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/AVER%C3%8DA%20SERVICIO%20CLARO%20SYNC.pdf'
  },
  {
    name:'Auditorías Ofertas Móviles',
    img:'../Sharepoint.jpg',
    category: [
      ''
    ],
    link:'../sox/AUDITOR%C3%8DA%20OFERTAS%20M%C3%93VILES.pdf'
  }, 
]

export { ALinks, AInstructivos };