'use client'
import { inter } from "@/app/fonts";
import {AnimatedText} from "../aimated-text";
import { VideoBackground } from "@/app/ui/bg-video"
import { Button } from "../button";
import { Divider } from "@/app/assets/svg";
import { Preloader } from "../preloader";

export const Hero = () => {
  return (
    <VideoBackground as="section" height="screen" variant="hero">
      <div className="w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex flex-col items-center pt-20">
        <h1 className="bg-[rgba(92,78,222,0.1)] rounded-[25px] border border-[rgba(255,255,255,0.10)] md:inline-flex px-5 py-3 text-[#9891E1] text-lg font-semibold mb-[55px]">
          Join: One For All
        </h1>
        <h2 className="relative z-10 text-3xl sm:text-4xl md:text-[55px] font-bold tracking-wider text-center text-white md:leading-[70px] mb-10">
          <span className="inline-flex max-w-[18ch] md:max-w-full">
          Experience JOIN where 
          </span>
          <br />
          <span className="sm:hidden md:flex relative items-center transition-all duration-300 pt-2">
            <AnimatedText /> <br className="flex md:hidden" />
            <span className="py-2 inline-flex items-center leading-tight mr-2 ml-2">
              meets Blockchain
            </span>
          </span>
        </h2>
        <p className={`flex w-full max-w-[850px] mx-auto text-center font-medium text-sm md:text-xl md:leading-[35px] text-white mb-[55px] ${inter.className}`}>
          Unite and Play: Connect with Others, Transform Gaming into Rewards,
          and Earn Every Step of the Way with Blockchain-Powered Security and
          Innovation!
        </p>
        <Button variant="shaped-gradient-outline">Join Whitelisting</Button>
      </div>
      <div className="flex w-full mt-20 overflow-hidden"><Divider className="w-screen" /> </div>
    </VideoBackground>
  );
};
