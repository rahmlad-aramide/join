import { inter } from "@/app/fonts";
import AnimatedText from "../aimated-text";
import { VideoBackground } from "./video";
import { Button } from "../button";
import { Divider } from "@/app/assets/svg";

export const Hero = () => {
  return (
    <VideoBackground height="screen">
      <div className="w-full max-w-8xl mx-auto flex flex-col items-center pt-20">
        <h1 className="bg-[rgba(92,78,222,0.1)] rounded-[25px] border border-[rgba(255,255,255,0.10)] inline-flex px-5 py-3 text-[#9891E1] text-lg font-semibold mb-[55px]">
          Join: One For All
        </h1>
        <h2 className="relative z-10 text-[21px] sm:text-3xl md:text-[55px] font-bold tracking-wider text-center text-white md:leading-[70px] mb-10">
          Experience JOIN where <br />
          <span className="relative inline-flex items-center transition-all duration-500">
            <AnimatedText />
            <span className="py-2 inline-flex items-center leading-tight mr-2 ml-2">
              meet Blockchain
            </span>
          </span>
        </h2>
        <p className={`flex w-full max-w-[850px] mx-auto text-center font-medium text-xl text-white mb-[55px] ${inter.className}`}>
          Unite and Play: Connect with Others, Transform Gaming into Rewards,
          and Earn Every Step of the Way with Blockchain-Powered Security and
          Innovation!
        </p>
        <Button variant="shaped-gradient-outline">Join Whitelisting</Button>
      </div>
      <div className="flex w-full mt-20"><Divider /> </div>
    </VideoBackground>
  );
};
