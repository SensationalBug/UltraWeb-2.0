import { React, useState } from "react";
import { Cards } from "./Cards";
import {
  FaJsSquare,
  FaWordpress,
  FaReact,
  FaBootstrap,
  FaSass,
  FaServer,
} from "react-icons/fa";

export const Technologies = () => {
  const [displayJs, setDisplayJs] = useState(1);
  const [displayRt, setDisplayRt] = useState(1);
  const [displayWp, setDisplayWp] = useState(1);
  const [displayBs, setDisplayBs] = useState(1);
  const [displaySc, setDisplaySc] = useState(1);
  const [displaySv, setDisplaySv] = useState(1);

  const changeOpacity = (displayIn, displayOut) =>
    displayIn ? displayOut(0) : displayOut(1);

  return (
    <>
      <Cards
        title={"Javascript"}
        logo={<FaJsSquare size="4em" color="#F0DB4F" />}
        in={() => changeOpacity(displayJs, setDisplayJs)}
        out={() => changeOpacity(displayJs, setDisplayJs)}
        opacity={displayJs}
        content="Javascript es un lenguaje de programación interpretado, 
        dialecto del estándar ECMAScript. Se define como orientado 
        a objetos,​ basado en prototipos, imperativo, débilmente tipado 
        y dinámico. Con este lenguaje de programación es que en UltraWeb 
        manejamos la lógica detrás de nuestros sitios Web."
      />
      <Cards
        title={"React"}
        logo={<FaReact size="4em" color="#61DBFB" />}
        in={() => changeOpacity(displayRt, setDisplayRt)}
        out={() => changeOpacity(displayRt, setDisplayRt)}
        opacity={displayRt}
        content="React es una librería Javascript focalizada en el desarrollo
         de interfaces de usuario. Así se define la propia librería y evidentemente, 
         esa es su principal área de trabajo. En UltraWeb nos apoyamos de esta
         libreria para la creación de interfaces de usuario más detalladas y con mucho
         mejor acabado de si no se usara una librería."
      />
      <Cards
        title={"Wordpress"}
        logo={<FaWordpress size="4em" />}
        in={() => changeOpacity(displayWp, setDisplayWp)}
        out={() => changeOpacity(displayWp, setDisplayWp)}
        opacity={displayWp}
        content="WordPress es un sistema de gestión de contenidos (CMS) que permite crear 
        y mantener un blog u otro tipo de web. Wordpress es una excelente opción a la hora 
        la creació de sitios web con implementació de  menor tiempo y con una plataforma de 
        gestión con un alto grado de usabilidad."
      />
      <Cards
        title={"Bootstrap"}
        logo={<FaBootstrap size="4em" color="#602C50" />}
        in={() => changeOpacity(displayBs, setDisplayBs)}
        out={() => changeOpacity(displayBs, setDisplayBs)}
        opacity={displayBs}
        content="Bootstrap es un framework front-end utilizado para desarrollar aplicaciones 
        web y sitios mobile first, o sea, con un layout que se adapta a la pantalla del 
        dispositivo utilizado por el usuario. Para la parte de estilos utilizamos Bootstrap
        ya que facilita el proceso de estilizado de una Web además de que provee plantillas
        personalizables para todos los gustos."
      />
      <Cards
        title={"Sass"}
        logo={<FaSass size="4em" color="#CD6799" />}
        in={() => changeOpacity(displaySc, setDisplaySc)}
        out={() => changeOpacity(displaySc, setDisplaySc)}
        opacity={displaySc}
        content="Sass Es un lenguaje de hoja de estilos inicialmente diseñado por Hampton Catlin y 
        desarrollado por Natalie Weizenbaum. Es un metalenguaje de Hojas de Estilo en Cascada (CSS).
        el cual usamos tambien como parte de Bootstrap ya que nos ayuda a customizar las clases y 
        pseudoclases por defecto de Bootstrap."
      />
      <Cards
        title={"Firebase"}
        logo={<FaServer size="4em" color="#CC2336" />}
        in={() => changeOpacity(displaySv, setDisplaySv)}
        out={() => changeOpacity(displaySv, setDisplaySv)}
        opacity={displaySv}
        content="Firebase se trata de una plataforma móvil creada por Google, cuya principal función 
        es desarrollar y facilitar la creación de apps de elevada calidad de una forma rápida, con el 
        fin de que se pueda aumentar la base de usuarios. Utilizamos Firebase para la administración 
        del backend algunos de nuestros sitios (los mas simples) ya que facilita muchas cosas y es 
        muy rápido en torno a respuesta."
      />
    </>
  );
};
