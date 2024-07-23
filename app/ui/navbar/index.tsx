"use client";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import { Button } from "@/app/ui/button";
import { Logo } from "@/app/assets/svg";
import { useRouter } from "next/navigation";
import { NavUnderline } from "@/app/assets/svg";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Span } from "next/dist/trace";

interface NavLink {
  label: string;
  path?: string;
  type: "dropdown" | "text" | "button";
  buttonType?: "shaped-disabled" | "outlined" | "shaped" | "text";
  disabled?: boolean;
  subLinks?: {
    path: string;
    icon?: JSX.Element;
    title: string;
    subtitle: string;
  }[];
}

const navLinksLeft: NavLink[] = [
  {
    label: "Community",
    path: "/community",
    type: "text",
  },
  {
    label: "Whitepaper",
    path: "/whitepaper",
    type: "button",
    buttonType: "text"
  },
  {
    label: "Products",
    type: "dropdown",
    subLinks: [
      {
        title: "Link 1",
        subtitle: "Link 1 subtitle",
        path: "/",
      },
    ],
  },
];
const navLinksRight: NavLink[] = [
  {
    label: "Join Whitelisting",
    path: "/whitelisting",
    type: "button",
    buttonType: "shaped",
  },
  {
    label: "Join Presale",
    path: "/",
    type: "button",
    buttonType: "shaped-disabled",
    disabled: true,
  },
];
export const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;
    const handleScroll = () => {
        const windowHeight = window.innerHeight;

      if (scrollTop > windowHeight-150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (scrollTop > lastScrollTop) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
        window.removeEventListener("scroll", handleScroll)
    };
  }, [lastScrollTop]);

  return (
    <>
      <nav
        className={clsx("transition-all duration-300 ease-in-out w-full fixed top-0 z-50", {
          "backdrop-blur-lg bg-transparent bg-opacity-70": scrolled,
          "-translate-y-full": hidden,
          "translate-y-0": !hidden,
        })}
      >
        <div className="h-20 w-full flex flex-col items-center justify-center">
          <nav className="w-[calc(100%_-_64px)] md:w-[calc(100%_-_160px)] max-w-8xl mx-auto flex justify-between items-center">
            <ul className="hidden lg:flex gap-5 items-center w-2/5">
              {navLinksLeft.map((navLink, idx) =>
                navLink.type === "dropdown" ? (
                  <NavigationMenu key={`${navLink} ${idx}`}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger
                          className={`${
                            pathname === navLink.path ||
                            pathname ===
                              (navLink.subLinks && navLink?.subLinks[idx]?.path)
                              ? "text-[#F2E6E0]"
                              : "hover:text-hoverPrimary"
                          } text-[#F2E6E0] hover:text-hoverPrimary flex items-center text-[15px] p-0 uppercase font-semibold`}
                        >
                          {navLink.label}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent className="min-w-[180px] p-2">
                          {navLink.subLinks &&
                            navLink.subLinks.map((subLink, idx) => (
                              <NavigationMenuLink
                                key={idx}
                                className="transition duration-200 group"
                              >
                                <Link
                                  href={subLink.path}
                                  className="flex space-x-3 w-full group-hover:bg-primary-50 rounded p-2 transition duration-200"
                                >
                                  <div className="text-base mb-1">
                                    {subLink.title}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                ) : navLink.type === "button" ? (
                  <Button
                    variant={navLink.buttonType}
                    className="font-semibold !uppercase text-[15px] transition-colors min-h-10 !h-fit"
                    disabled={(navLink?.disabled && navLink.disabled)? true: false}
                    onClick={() => {
                      router.push(`${navLink.path}`);
                    }}
                  >{(navLink?.disabled && navLink.disabled) ? <span className="opacity-50 !text-[#ffffff1a]">{navLink.disabled}</span>:
                    navLink.label
                  }
                  </Button>
                ) : (
                  <Link
                    key={idx}
                    href={navLink.path ? navLink.path : "/"}
                    className={`${
                      pathname === navLink.path
                        ? "text-[#F2E6E0] hover:text-hoverPrimary"
                        : ""
                    } flex items-center text-[#F2E6E0] hover:text-hoverPrimary font-semibold transition-colors uppercase text-[15px]`}
                  >
                    {navLink.label}
                  </Link>
                )
              )}
            </ul>
            <Link
              href="/"
              className="flex translate-y-4"
            >
              <Logo className="h-6 md:h-full" />
            </Link>
            <ul className="hidden lg:flex justify-end gap-5 items-center w-2/5">
              {navLinksRight.map((navLink, idx) => (
                <Button
                  key={idx}
                  variant={navLink.buttonType}
                  className="font-semibold"
                  onClick={() => {
                    router.push(`${navLink.path}`);
                  }}
                >
                  {navLink.label}
                </Button>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex justify-center items-center overflow-hidden z-50">
          <NavUnderline />
        </div>
      </nav>
    </>
  );
};
