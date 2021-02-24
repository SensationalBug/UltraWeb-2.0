import { React } from "react";
import { Col } from "reactstrap";
import AliceCarousel from "react-alice-carousel";

export const Carrusel = () => {
  return (
    <Col>
      <AliceCarousel
        autoPlay={true}
        autoPlayInterval="3000"
        disableButtonsControls={true}
        disableDotsControls={true}
        infinite={true}
        stopAutoPlayOnHover={true}
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/CarruselItems%2Fbuscador.png?alt=media&token=3c221531-4ac6-46c8-92e9-54d5b8f8fc95"
          alt="1"
          className="carouselImg border"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/CarruselItems%2Fshowme.png?alt=media&token=412b5ad9-1522-4f56-bce2-47b616608408"
          alt="2"
          className="carouselImg border"
        />
        <img
          src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/CarruselItems%2Fusername.png?alt=media&token=ae9e5dbd-e6fa-4a05-9d58-cf5b632dde53"
          alt="3"
          className="carouselImg border"
        />
         <img
          src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/CarruselItems%2Famortizar.png?alt=media&token=d0e9b7c2-9927-4bb2-a247-04674b7562e0"
          alt="3"
          className="carouselImg border"
        />
      </AliceCarousel>
    </Col>
  );
};
