import { Divider, LogoGradient } from "@/app/assets/svg"
import { PossibilitiesCarousel } from "./carousel"

export const Possibilities = () => {
    return (
        <section>
            <div className="text-5xl font-bold text-white mt-[100px] w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto ">
                <h2>Endless Possibilities</h2>
                <h3 className="inline-flex mt-2">Do it all on<LogoGradient className="ml-3 -translate-y-1" /> </h3>
            </div>
            <PossibilitiesCarousel />
            <div className="flex w-full mt-24"><Divider /> </div>
        </section>
    )
}