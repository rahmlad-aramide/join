"use client";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import kites from "@/app/assets/images/possibilities/kites.png";
import pay from "@/app/assets/images/possibilities/pay.png";
import purchases from "@/app/assets/images/possibilities/purchases.png";
import rewards from "@/app/assets/images/possibilities/rewards.png";
import lotteries from "@/app/assets/images/possibilities/lotteries.png";
import funds from "@/app/assets/images/possibilities/funds.png";
import React from "react";

const responsive = {
  monitor: {
    breakpoint: { max: 3000, min: 1408 },
    items: 4,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 1408, min: 1056 },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 50
  },
  laptop: {
    breakpoint: { max: 1056, min: 704 },
    items: 2,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 704, min: 352 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 352, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};
export const PossibilitiesCarousel: React.FC = () => {
  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      partialVisible={true}
      ssr={false}
      infinite={false}
      autoPlay={false}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={[
        "monitor",
        "desktop",
        "laptop",
        "tablet",
        "mobile",
      ]}
      itemClass="carousel-item-padding-40-px"
      className="py-6 px-10 w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto"
    >
      <div className="ml-0 mx-4 py-8 overflow-hidden">
        <div className="flex flex-col bg-[#7F5CE2] bg-slide-primary w-full max-w-[352px] h-[522px] rounded-3xl bg-cover">
          <p className="text-lg text-white p-7">
            Use <span className="font-bold">JOIN</span> as a secure and
            transparent{" "}
            <span className="font-bold text-[#89DAD0]">means of exchange</span>{" "}
            within the ecosystem
          </p>
          <div className="flex h-[350px] w-full object-scale-down">
            <Image
              src={kites}
              width={352}
              height={352}
              alt="Two flying kites around Join token"
              className="flex w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden">
        <div className="bg-white max-w-[352px] w-full h-[522px] rounded-3xl p-7 pt-0">
          <div className="h-[380px] flex items-center">
            <Image
              src={pay}
              width={274}
              height={408}
              alt="Join payment successful screen shot"
              className="flex mx-auto w-auto h-full object-contain"
            />
          </div>
          <p className="text-lg text-[#121010] pt-7">
            <span className="font-bold text-[#89DAD0]">Pay </span>for a wide
            range of products and services using
            <span className="font-semibold text-[#403D3D]"> JOIN </span> tokens
          </p>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden">
        <div className="bg-[#778692] w-full max-w-[352px] h-[522px] rounded-3xl">
          <p className="text-lg text-white p-7">
            <span className="font-bold text-[#89DAD0]">
              In-Game Purchases:{" "}
            </span>
            Spend <span className="font-bold">JOIN</span> on various in-game
            items and features.
          </p>
          <div className="h-[380px] flex items-center">
            <Image
              src={purchases}
              width={352}
              height={522}
              alt="Join in-game purchase screen shot"
              className="flex mx-auto h-full w-auto translate-y-0.5 object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden">
        <div className="bg-white max-w-[352px] w-full h-[522px] rounded-3xl p-7 pt-0">
          <div className="h-[380px] flex items-center">
            <Image
              src={rewards}
              width={274}
              height={408}
              alt="Join rewards screen shot"
              className="flex mx-auto h-full w-auto object-contain"
            />
          </div>
          <p className="text-lg text-[#121010] pt-7">
            <span className="font-bold text-[#89DAD0]">Earn Rewards </span>in
            <span className="font-semibold text-[#403D3D]"> JOIN </span>
            for high engagement and content creation
          </p>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden">
        <div className="bg-[#0089FF] w-full max-w-[352px] h-[522px] rounded-3xl">
          <p className="text-lg text-white p-7">
            <span className="font-bold">Participate in lotteries </span>
            that ensure fairness through blockchain technology.
          </p>
          <div className="h-[380px] flex items-center">
            <Image
              src={lotteries}
              width={352}
              height={522}
              alt="Join lotteries screen shot"
              className="flex mx-auto h-full translate-y-0.5 w-auto object-contain"
            />
          </div>
        </div>
      </div>
      <div className="mx-4 py-8 overflow-hidden">
        <div className="bg-[#1E2337] w-full max-w-[352px] h-[522px] rounded-3xl">
          <p className="text-lg text-white p-7">
            <span className="font-bold text-[#89DAD0]">Raise Funds </span>
            by launching crowdfunding campaigns for your projects.
          </p>
          <div className="h-[380px] flex items-center">
            <Image
              src={funds}
              width={352}
              height={522}
              alt="Join fundraising screen shot"
              className="flex mx-auto h-full w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </Carousel>
  );
};
