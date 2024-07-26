import Link from "next/link";
import Image from "next/image";
import {
  AppIcon,
  ControllerIcon,
  Divider,
  JoinEcoToken,
  OutlineSend,
} from "@/app/assets/svg";
import { VideoBackground } from "@/app/ui/bg-video";
import { Button } from "../button";
import joint from "@/app/assets/images/joint-app.png";
import { EcosystemCarousel } from "./carousel";

export const Ecosystem: React.FC<{ type: "joint" | "joinda" }> = ({ type }) => {
  return (
    <VideoBackground as="section" height="screen">
      <div
        id={type}
        className="w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex flex-col items-center pt-20"
      >
        <h1 className="text-5xl font-semibold inline-flex items-center mt-[45px] mb-6">
          The <JoinEcoToken className="mx-2 translate-y-1" /> Ecosystem
        </h1>
        <div className="bg-[rgba(4,20,29,0.70)] rounded-3xl py-14 pr-7 w-full flex">
          <div className="w-1/4 space-y-2">
            <Link
              href={"/#joinda"}
              className={`flex h-[60px] items-center font-semibold text-xl px-10 py-[14px] transition duration-200 hover:bg-[rgba(255,255,255,0.10)] ${
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
                  <span className="font-medium">
                  Diverse Game Library:{" "}
                  </span>
                  Enjoy a wide range of games across various genres, all integrated.
                </li>
              </ul>
            )}
            <Button
              variant="shaped-gradient"
              className="-translate-x-4 flex justify-center items-center mt-5"
            >
              <span className="px-2">View More</span> <OutlineSend />{" "}
            </Button>
          </div>
          {type === "joinda" ? (
            <div className="w-2/5 bg-[#020C11] rounded-[20px] pt-9 px-12">
              <EcosystemCarousel />
            </div>
          ) : (
            <div className="w-2/5 bg-[#020C11] rounded-[20px] pt-9 px-12">
              <Image
                src={joint}
                width={360}
                height={430}
                alt="Two flying kites around Join token"
                className="flex w-full h-auto"
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex w-full mt-[60px]">
        <Divider />{" "}
      </div>
    </VideoBackground>
  );
};
