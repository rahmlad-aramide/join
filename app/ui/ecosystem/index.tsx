'use client'
import Link from "next/link";
import {
  AppIcon,
  AppStoreIcon,
  ControllerIcon,
  Divider,
  JoinEcoToken,
  JoinEcoTokenSm,
  OutlineSend,
  PlayStoreIcon,
} from "@/app/assets/svg";
import { VideoBackground } from "@/app/ui/bg-video";
import { Button } from "../button";
import { EcosystemCarousel } from "./carousel";
import { useState } from "react";
// import playstore from '/playstore.svg'
// import appstore from '/appstore.svg'
// import appstore from '/appstore.png'
import Image from "next/image";
import appstore from '@/app/assets/appstore.png'
import playtore from '@/app/assets/playstore.png'

export const Ecosystem: React.FC<{ type: "joint" | "joinda" }> = ({ type }) => {
  const [activeTab, setActiveTab] = useState<"joint" | "joinda">(type);
  return (
    <VideoBackground as="section">
      <div
        id={type}
        className="w-[calc(100%_-_32px)] sm:w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex flex-col items-center pt-2 lg:pt-20"
      >
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold inline-flex items-center mt-[45px] mb-16 lg:mb-6">
          The{" "}
          <JoinEcoTokenSm className="inline-flex md:hidden mx-2 translate-y-0.5 sm:translate-y-1 w-[100px] sm:w-full" />{" "}
          <JoinEcoToken className="hidden md:inline-flex w-full mx-2 translate-y-1" />{" "}
          Ecosystem
        </h1>
        <div className="bg-[rgba(20,29,34,0.80)] rounded-2xl w-full flex flex-col justify-center items-center lg:hidden py-[35px] px-4">
          {/* Tabs for mobile view */}
          <div className="flex space-x-2 mb-10">
            <button
              onClick={() => setActiveTab("joinda")}
              className={`font-medium sm:font-semibold text-base sm:text-xl rounded-[40px] border transition duration-200 flex items-center px-3 sm:px-5 py-[10px] whitespace-nowrap ${activeTab === "joinda" ? "bg-[rgba(255,255,255,0.10)] border-[#02A8FB]" : "bg-transparent border-[#545666]"}`}
            >
              <AppIcon className="w-5 sm:w-full mr-1 sm:mr-2" /> Joinda App
            </button>
            <button
              onClick={() => setActiveTab("joint")}
              className={`font-medium sm:font-semibold text-base sm:text-xl rounded-[40px] border transition duration-200 flex items-center px-3 sm:px-5 py-[10px] whitespace-nowrap ${activeTab === "joint" ? "bg-[rgba(255,255,255,0.10)] border-[#02A8FB]" : "bg-transparent border-[#545666]"}`}
            >
              <ControllerIcon className="w-5 sm:w-full mr-1 sm:mr-2" /> Joint App
            </button>
          </div>

          {/* Content for mobile view */}
          <div className="w-full">
            {activeTab === "joinda" ? (
              <div className="flex flex-col justify-center items-center">
                <ul className="text-white text-lg space-y-5 text-center">
                  <li>
                    <span className="font-medium">Instant Messaging: </span>
                    Communicate seamlessly with friends, family, and colleagues in
                    real-time.
                  </li>
                  <li>
                    <span className="font-medium">News Feed: </span>Stay updated
                    with the latest happenings within your network and beyond.
                  </li>
                  <li>
                    <span className="font-medium">Fundraising for Projects: </span>
                    Easily raise funds for personal or professional projects and
                    social issues within the community.
                  </li>
                </ul>
                <Button
                  variant="shaped-gradient"
                  className="flex justify-center items-center mt-5 mb-[30px]"
                >
                  <span className="px-2">Visit Website</span> <OutlineSend />{" "}
                </Button>
                <div className="flex gap-5 mb-10">
                  <Button variant="ordinary"><PlayStoreIcon /></Button>
                  <Button variant="ordinary"><AppStoreIcon /></Button>
                </div>
                <div className="w-full max-w-[600px] mx-auto bg-[#020C11] rounded-[20px] pt-9 px-12 mt-5">
                  <EcosystemCarousel type={activeTab} />
                </div>
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center">
                <ul className="text-white text-lg space-y-5 text-center">
                  <li>
                    <span className="font-medium">Blockchain-Powered Lottery: </span>
                    Experience the next generation of lotteries with complete
                    transparency and security, powered by blockchain technology.
                  </li>
                  <li>
                    <span className="font-medium">Monetization Opportunities: </span>
                    Turn your gaming skills into earnings by competing in global
                    tournaments and lotteries.
                  </li>
                  <li>
                    <span className="font-medium">Diverse Game Library: </span>
                    Enjoy a wide range of games across various genres, all
                    integrated.
                  </li>
                </ul>
                <Button
                  variant="shaped-gradient"
                  className="flex justify-center items-center mt-5 mb-[30px]"
                >
                  <span className="px-2">Visit Website</span> <OutlineSend />{" "}
                </Button>
                <div className="flex gap-5 mb-10">
                  <Button variant="ordinary"><span><PlayStoreIcon /></span></Button>
                  <Button variant="ordinary"><AppStoreIcon /></Button>
                </div>
                <div className="w-full max-w-[600px] mx-auto bg-[#020C11] rounded-[20px] pt-9 px-12 mt-5">
                  <EcosystemCarousel type={activeTab} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Full section layout for larger screens */}
        <div className="bg-[rgba(4,20,29,0.70)] rounded-3xl py-14 pr-7 w-full hidden lg:flex">
          <div className="w-1/4 space-y-2">
            <Link
              href={"/#joinda"}
              className={`flex h-[60px] items-center font-semibold text-xl px-10 py-[14px] transition duration-200 whitespace-nowrap hover:bg-[rgba(255,255,255,0.10)] ${
                type === "joinda"
                  ? "bg-[rgba(255,255,255,0.10)]"
                  : "bg-transparent"
              }`}
            >
              {" "}
              <AppIcon className="mr-[18px]" /> Joinda App
            </Link>
            <Link
              href={"/#joint"}
              className={`flex h-[60px] items-center font-semibold text-xl px-10 py-[14px] transition duration-200 hover:bg-[rgba(255,255,255,0.10)] ${
                type === "joint"
                  ? "bg-[rgba(255,255,255,0.10)]"
                  : "bg-transparent"
              }`}
            >
              {" "}
              <ControllerIcon className="mr-[18px]" /> Joint App
            </Link>
          </div>
          <div className="relative block">
            <div className="absolute w-[2.286px] h-full bg-[#2C3043] rounded-[2.286px] top-0"></div>
            <div
              className={`absolute w-[2.286px] h-[60px] rounded-[2.286px] bg-[#02A8FB] ${
                type === "joinda" ? "top-0" : "top-[68px]"
              }`}
            ></div>
          </div>
          <div className="w-[calc(35%_-_2.286px)] pr-9 pl-11">
            {type === "joinda" ? (
              <ul className="text-white text-lg space-y-5">
                <li>
                  <span className="font-medium">Instant Messaging: </span>
                  Communicate seamlessly with friends, family, and colleagues in
                  real-time.
                </li>
                <li>
                  <span className="font-medium">News Feed: </span>Stay updated
                  with the latest happenings within your network and beyond.
                </li>
                <li>
                  <span className="font-medium">
                    Fundraising for Projects:{" "}
                  </span>
                  Easily raise funds for personal or professional projects and
                  social issues within the community.
                </li>
              </ul>
            ) : (
              <ul className="text-white text-lg space-y-5">
                <li>
                  <span className="font-medium">
                    Blockchain-Powered Lottery:{" "}
                  </span>
                  Experience the next generation of lotteries with complete
                  transparency and security, powered by blockchain technology.
                </li>
                <li>
                  <span className="font-medium">
                    Monetization Opportunities:{" "}
                  </span>
                  Turn your gaming skills into earnings by competing in global
                  tournaments and lotteries.
                </li>
                <li>
                  <span className="font-medium">Diverse Game Library: </span>
                  Enjoy a wide range of games across various genres, all
                  integrated.
                </li>
              </ul>
            )}
            <Button
              variant="shaped-gradient"
              className="-translate-x-4 flex justify-center items-center mt-5"
            >
              <span className="px-2">Visit Website</span> <OutlineSend />{" "}
            </Button>
            <div className="flex w-full gap-5">
            <Button variant="ordinary"><PlayStoreIcon /></Button>
            <Button variant="ordinary"><AppStoreIcon /></Button>
            </div>
          </div>
            <div className="w-2/5 bg-[#020C11] rounded-[20px] pt-9 px-12">
              <EcosystemCarousel type={type} />
            </div>
        </div>
      </div>
      <div className="flex w-full mt-[60px]">
        <Divider />{" "}
      </div>
    </VideoBackground>
  );
};
