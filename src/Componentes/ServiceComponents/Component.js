import { React } from "react";

import { ServiceComponent } from "./ServiceComponent";

import {
  FaElementor,
  FaCode,
  FaCss3,
  FaDocker,
  FaHtml5,
  FaJenkins,
  FaJs,
  FaNode,
  FaWordpressSimple,
  FaReact,
  FaBootstrap,
  FaSass,
  FaAdobe,
  FaCloud,
} from "react-icons/fa";
import {
  FcBusinessman,
  FcCollaboration,
  FcElectronics,
  FcIdea,
  FcInspection,
  FcMultipleDevices,
  FcTemplate,
  FcUpload,
  FcWorkflow,
} from "react-icons/fc";
import { DiFirebase, DiIllustrator, DiLess, DiMaterializecss, DiMysql, DiOnedrive, DiPhotoshop, DiPostgresql, DiScala, DiVisualstudio } from 'react-icons/di'

export const Component1 = () => {
  const serviceProps = {
    mainIcon: <FaCode size="20em" color="#034ea2" />,
    mainTitle: "Creación de WebSites",
    mainSubTitle:
      "Impulsando la transformación digital de nuestros clientes con las nuevas tecnologías",
    firstCardIcon: <FcBusinessman size="5em" className="logoColor" />,
    firstCardTitle: "Recursos asignados",
    firstCardSubTitle:
      "Rellene la brecha de habilidades de sus recursos internos con los mejores talentos UltraWeb asignados a sus proyectos a tiempo completo y administrados por usted directamente.",
    secondCardIcon: <FcCollaboration size="5em" className="logoColor" />,
    secondCardTitle: "Célula Ágil",
    secondCardSubTitle:
      "Le proporcionamos un equipo de desarrollo dedicado, liderado por un Administrador de Proyectos de nuestra parte que le informa periódicamente y le consulta sobre todas las decisiones importantes del proyecto.",
    thirdCardIcon: <FcInspection size="5em" className="logoColor" />,
    thirdCardTitle: "Proceso completo",
    thirdCardSubTitle:
      "Concéntrese en sus actividades comerciales principales mientras configuramos todo el proceso de desarrollo y asumimos toda la responsabilidad del proyecto y todos los riesgos relacionados.",
    competenciaIcon1: (
      <FaHtml5 size="4em" color="#F16529" className="mx-auto" />
    ),
    competenciaIcon2: <FaCss3 size="4em" color="#2565AE" className="mx-auto" />,
    competenciaIcon3: <FaJs size="4em" color="#F0DB4F" className="mx-auto" />,
    competenciaIcon4: <FaNode size="4em" color="#80BC10" className="mx-auto" />,
    competenciaIcon5: (
      <DiVisualstudio size="4em" color="#573792" className="mx-auto" />
    ),
    competenciaIcon6: <FaWordpressSimple size="4em" className="mx-auto" />,
    competenciaIcon7: (
      <FaReact size="4em" color="#02A5E6" className="mx-auto" />
    ),
    lastTitle: "AÚN HAY MÁS...",
    lastSubTitle: "Soluciones a la medida para cada tipo de proceso empresarial",
    firstImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Foptimizar.svg?alt=media&token=9c8641bc-04f9-4eec-a229-c1c2f3e4a5b2",
    firstImgTitle: "¿Quiere optimizar el proceso comercial interno?",
    firstImgSubTitle:
      "Diseñamos y creamos aplicaciones que optimizan o transforman con elegancia sus procesos comerciales internos al optimizar las operaciones, mejorar su transparencia, impulsar la eficiencia de los empleados, mejorar la colaboración entre departamentos y mejorar la presentación de informes y la planificación.",
    secondImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Fmejorar.svg?alt=media&token=aec1e396-fd9e-49d0-92eb-f07c9f37be68",
    secondImgTitle: "¿Quiere mejorar las interacciones con los clientes?",
    secondImgSubTitle:
      "Podemos crear aplicaciones orientadas al cliente que faciliten la experiencia con su marca, impulsen el conocimiento de la marca, impresionen y retengan a sus clientes, permitiendo que su negocio se destaque y aumente su participación en el mercado. Para satisfacer las demandas de los usuarios modernos, prestamos especial atención al diseño llamativo, la facilidad de uso y el alto rendimiento en la aplicación que creamos.",
    thirdImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Fagilizar.svg?alt=media&token=990c56e7-9034-41ee-9ac5-892f32cc0d83",
    thirdImgTitle: "¿Quiere agilizar la colaboración con socios comerciales?",
    thirdImgSubTitle:
      "Podemos crear aplicaciones potentes, ricas en características y resistentes a fallas que garanticen un entorno B2B conveniente para el intercambio de servicios, productos y datos entre empresas. Nuestro equipo se ocupa de los detalles de las aplicaciones B2B, tales como un grupo extenso de stakeholders del proyecto, procesos comerciales de larga duración, negociaciones intensivas, modelos de ventas únicos, la inclusión de servicios adicionales y seguimientos en la funcionalidad de la aplicación, varias opciones de pago.",
  };
  return <ServiceComponent serviceProps={serviceProps} />;
};

export const Component2 = () => {
  const serviceProps = {
    mainIcon: <FaElementor size="20em" color="#034ea2" />,
    mainTitle: "Servicio de UX/UI",
    mainSubTitle:
      "Trabaja con nuestros diseñadores para construir el producto digital que les encantará a tus usuarios.",
    firstCardIcon: <FcMultipleDevices size="5em" className="logoColor" />,
    firstCardTitle: "Construimos tu MPV",
    firstCardSubTitle:
      "Ponemos a prueba tu idea de negocio creando un producto mínimo viable. Pruebe diferentes soluciones y ponga el MVP en acción para recopilar comentarios de la vida real de los usuarios finales.",
    secondCardIcon: <FcTemplate size="5em" className="logoColor" />,
    secondCardTitle: "Rediseñamos tu interfaz",
    secondCardSubTitle:
      "Mejore su producto digital existente mediante la restauración de su UX y UI. Haga que sea más atractivo para los usuarios y lleve su negocio al siguiente nivel.",
    thirdCardIcon: <FcIdea size="5em" className="logoColor" />,
    thirdCardTitle: "Creamos tu producto",
    thirdCardSubTitle:
      "Cuéntenos su idea y deje que nuestro equipo de diseño se encargue de todo, desde una investigación exhaustiva hasta el diseño y desarrollo de un producto completo.",
    competenciaIcon1: <DiIllustrator size="4em" color="#F16529" className="mx-auto" />,
    competenciaIcon2: <DiPhotoshop size="4em" color="#2565AE" className="mx-auto" />,
    competenciaIcon3: <FaBootstrap size="4em" color="#573792" className="mx-auto" />,
    competenciaIcon4: <FaSass size="4em" color="#EB96C6" className="mx-auto" />,
    competenciaIcon5: <DiMaterializecss size="4em" color="#FF71A6" className="mx-auto" />,
    competenciaIcon6: <DiLess size="4em" color="#4F859C" className="mx-auto" />,
    competenciaIcon7: <FaAdobe size="4em" color="#F40F02" className="mx-auto" />,
    lastTitle: "Nuestro proceso de diseño",
    lastSubTitle: "",
    firstImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Fdiseno1.svg?alt=media&token=db765e85-7985-4b41-995e-c6b9fe597b24",
    firstImgTitle: "Investigación y descubrimiento",
    firstImgSubTitle:
      "Los diseñadores de UX realizan una investigación de usuarios para comprender cómo piensan los usuarios finales de su producto. Durante los talleres, discutimos varias soluciones y elegimos la mejor para su negocio.",
    secondImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Fdiseno2.svg?alt=media&token=4f305fae-3316-4737-ba16-b3f1ed223c67",
    secondImgTitle: "Flujo de usuario y Wireframing",
    secondImgSubTitle:
      "Determinamos todos los caminos que recorre el usuario para cumplir sus objetivos. Creamos prototipos de baja fidelidad que le permiten sentir el flujo de su futuro producto digital.",
    thirdImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Fagilizar.svg?alt=media&token=990c56e7-9034-41ee-9ac5-892f32cc0d83",
    thirdImgTitle: "Pruebas y diseño de UI",
    thirdImgSubTitle:
      "Probamos los prototipos para obtener el flujo de trabajo óptimo para cada función de su aplicación. Creamos interfaces de usuario finales y preparamos guías de estilo para mantener el diseño consistente en el futuro.",
  };
  return <ServiceComponent serviceProps={serviceProps} />;
};

export const Component3 = () => {
  const serviceProps = {
    mainIcon: <FaCloud size="20em" color="#034ea2" />,
    mainTitle: "Cloud computing",
    mainSubTitle:
      "Con los servicios de Cloud Infrastructure le brindamos escalabilidad a su empresa.",
    firstCardIcon: <FcWorkflow size="5em" className="logoColor" />,
    firstCardTitle: "Desarrollo",
    firstCardSubTitle:
      "Diseñamos y desarrollamos una infraestructura robusta, combinando efectivamente las fortalezas de la nube privada, pública e híbrida para hacer que su futura solución sea segura, flexible y 100% confiable.",
    secondCardIcon: <FcUpload size="5em" className="logoColor" />,
    secondCardTitle: "Migración",
    secondCardSubTitle:
      "Deje que nuestros profesionales altamente calificados migren su sistema existente a la nube, para disfrutar de su incomparable escalabilidad, recursos y flexibilidad de infraestructura.",
    thirdCardIcon: <FcElectronics size="5em" className="logoColor" />,
    thirdCardTitle: "Integración",
    thirdCardSubTitle:
      "Integramos su software a servicios en la nube de primer nivel. Utilice recursos prácticamente ilimitados y aplicaciones potentes para realizar sus operaciones más exigentes rápidamente y a un costo menor.",
    competenciaIcon1: <DiMysql size="4em" color="#00758F" className="mx-auto" />,
    competenciaIcon2: <FaJenkins size="4em" color="#D33834" className="mx-auto" />,
    competenciaIcon3: <FaDocker size="4em" color="#2364ED" className="mx-auto" />,
    competenciaIcon4: <DiOnedrive size="4em" color="#80B0C4" className="mx-auto" />,
    competenciaIcon5: <DiFirebase size="4em" color="#FFA611" className="mx-auto" />,
    competenciaIcon6: <DiPostgresql size="4em" color="#80B0C4" className="mx-auto" />,
    competenciaIcon7: <DiScala size="4em" color="#000000" className="mx-auto" />,
    lastTitle: "Nuestros servicios basados en la nube",
    lastSubTitle: "Nuestro equipo está listo para brindarle una gama de servicios específicos de la nube.",
    firstImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Fnube1.svg?alt=media&token=2e747fd2-bb8f-459e-b037-56cfc4d8b632",
    firstImgTitle: "Consultoría de infraestructura en la nube",
    firstImgSubTitle:
      "El equipo de arquitectos certificados en la nube de EvoPoint lo ayudará a encontrar un enfoque adecuado para integrar una estrategia de nube en su estrategia comercial general. Ofrecemos servicios de consultoría profesional para migrar su negocio a la nube sin fallas y aumentar la cantidad de servicios en la nube utilizados en su organización para acelerar sus operaciones comerciales.",
    secondImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Fnube2.svg?alt=media&token=3846cf49-dfda-4909-a3bd-7a9b89816b1b",
    secondImgTitle: "Gestión de infraestructura en la nube",
    secondImgSubTitle:
      "Por lo general, se implementa un software de gestión de la nube en los entornos de nube actuales, como una máquina virtual (VM) que contiene una base de datos y un servidor. El servidor se comunica con las interfaces de programación de aplicaciones (API) para conectar la base de datos y los recursos virtuales que sustentan a la nube. La base de datos recopila información sobre el rendimiento de la infraestructura virtual y envía los análisis a una interfaz web en que los administradores de la nube pueden visualizar su rendimiento.",
    thirdImgSrc:
      "https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Fnube3.svg?alt=media&token=9cbbe77f-f86d-4c85-aedb-0e9c92456c81",
    thirdImgTitle: "Monitoreo de infraestructura en la nube",
    thirdImgSubTitle:
      "En caso de que no necesite externalizar todas las actividades de administración de su infraestructura en la nube, nuestro equipo está listo para brindar servicios de monitoreo continuo para garantizar la detección y priorización de los problemas operativos que ocurren dentro de su infraestructura y relacionados con la utilización de los recursos, el rendimiento de la red, etc.",
  };
  return <ServiceComponent serviceProps={serviceProps} />;
};
