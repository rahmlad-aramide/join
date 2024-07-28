"use client";
import { useState } from "react";
import Image from "next/image";
import Carousel, { ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import joinda1 from "@/app/assets/images/joinda-app-1.webp";
import joinda2 from "@/app/assets/images/joinda-app-2.webp";


const responsive = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
export const EcosystemCarousel = () => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      partialVisible={true}
      ssr={false}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      transitionDuration={500}
      customButtonGroup={<ButtonGroup />}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["all"]}
      itemClass="carousel-item-padding-40-px"
      className="!pb-0 relative"
    >
      <div className="mt-auto overflow-hidden">
        <Image
        draggable={false}
          src={joinda1}
          width={359}
          height={429}
          alt="Joinda app splash screen shot"
          className="flex w-full h-auto"
        />
      </div>
      <div className="mt-auto overflow-hidden">
        <Image
        draggable={false}
          src={joinda2}
          width={359}
          height={429}
          alt="Joinda app home screen shot"
          className="flex w-full h-auto"
        />
      </div>
    </Carousel>
  );
};

const ButtonGroup: React.FC<ButtonGroupProps> = ({ next, previous, ...rest }) => {
  const currentSlide = rest.carouselState?.currentSlide ?? 0;
  const [toggleButton, setToggleButton] = useState(false);

  const handleClick = () => {

    if (next && currentSlide !== 0) {
      next();
      setToggleButton(!toggleButton);
    } else if (previous && currentSlide === 0) {
      previous();
      setToggleButton(!toggleButton);
    }
  };


  return (
    <div className="carousel-button-group absolute w-full h-[3px] bottom-0 bg-[#5E5E5E] rounded-[2.286px]"> 
      <button
        className={`${toggleButton || currentSlide % 2 === 0? 'translate-x-0': 'translate-x-full'} w-1/2 h-[3px] bg-[#02A8FB] absolute bottom-0 animated-button transition-transform duration-500 rounded-[2.286px]`}
        onClick={handleClick}
        disabled={(!next && currentSlide !== 0) || (!previous && currentSlide === 0)}
      />
    </div>
  );
};
