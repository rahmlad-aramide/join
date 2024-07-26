"use client";
import Image from "next/image";
import Carousel, { ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import joinda1 from "@/app/assets/images/joinda-app-1.png";
import joinda2 from "@/app/assets/images/joinda-app-2.png";

interface CarouselProps {
  carouselState?: {
    currentSlide: number;
  };
}

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
          src={joinda1}
          width={359}
          height={429}
          alt="Joinda app splash screen shot"
          className="flex w-full h-auto"
        />
      </div>
      <div className="mt-auto overflow-hidden">
        <Image
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
  // const { carouselState: { currentSlide } } = rest;
  const currentSlide = rest.carouselState?.currentSlide ?? 0;

  return (
    <div className="carousel-button-group absolute"> 
      {/* remember to give it position:absolute */}
      <button disabled={!previous} className={currentSlide === 0 ? 'disable bg-blue-500 w-[20px] h-1' : ''} onClick={() => previous && previous()} />
      <button disabled={!next} onClick={() => next && next()} />
    </div>
  );
};
// const ButtonGroup: React.FC<{next?: ()=>void, previous?: ()=>void} & CarouselProps> = ({ next, previous, ...rest }) => {
//   // const { carouselState: { currentSlide } } = rest;
//   const currentSlide = rest.carouselState?.currentSlide ?? 0;

//   return (
//     <div className="carousel-button-group"> 
//       {/* remember to give it position:absolute */}
//       <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
//       <button onClick={() => next()} />
//     </div>
//   );
// };