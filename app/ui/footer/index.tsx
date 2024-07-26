import Link from "next/link"
import { gilroy, inter } from "@/app/fonts"
import { DiscordIcon, JoinIcon, LinkedinIcon, TelegramIcon, TwitterIcon } from "@/app/assets/svg"

export const Footer = () => {

    const icons = [
        {
            title: "Telegram",
            url: "https://t.me/",
            icon: <TelegramIcon />,
        },
        {
            title: "Discord",
            url: "https://discord.gg/",
            icon: <DiscordIcon />,
        },
        {
            title: "Twitter",
            url: "https://twitter.com/",
            icon: <TwitterIcon />,
        },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/",
            icon: <LinkedinIcon />
        }
    ]

    return (
        <footer className={`w-[calc(100%_-_64px)] md:w-[calc(100%_-_100px)] xl:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex justify-between items-center mt-[100px] py-[49px] text-[#ffffff8a] ${inter.className}`}>
            <div>
                <Link href="/">
                    <JoinIcon className="w-[112px] h-[112px]" />
                </Link>
                <h4 className={`mt-8 mb-12 w-full max-w-[18ch] ${gilroy.className}`}>With Join, every dream
                is a possibility</h4>
                <p className="w-full max-w-[42ch]">
                For investment inquiries, please <a href="mailto:investment@thejoin.io" className="underline">reach out</a> to us. For
                community requests, please reach out to us <a href="mailto:community@thejoin.io" className="underline">here</a>.
                </p>
            </div>
            <div className="space-y-9 flex flex-col self-end">
                <Link href="/" className="underline flex justify-end">Privacy Policy</Link>
                <ul className="flex space-x-10">
                    {icons.map((icon, idx) =>(
                        <li key={idx} className="flex h-9 w-9 items-center justify-center">
                            <a href={icon.url} title={icon.title} target="_blank" className="hover:scale-105 active:100 transition duration-200">{icon.icon}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    )
}