import Image from "next/image";
import React from "react";
import { Zoom } from "react-slideshow-image";

const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true,
};

const Slideshow = ({ images, bg }) => {
  return (
    <div
      className={
        "slide-container max-w-[800px] max-h-[1200px] rounded-3xl overflow-hidden items-center " +
        bg
      }
    >
      <Zoom {...zoomOutProperties} className="">
        {images.map((each, index) => (
          <div
            key={index}
            className="flex items-center justify-center content-center h-full"
          >
            <Image alt={index} width={800} height={600} src={each} />
          </div>
        ))}
      </Zoom>
    </div>
  );
};

export default Slideshow;
