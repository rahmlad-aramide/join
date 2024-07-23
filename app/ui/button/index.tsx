import React from "react";
import { LoadingIndicator } from "@/app/assets/svg";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: "submit" | "button";
  disabled?: boolean;
  variant?: "text" |"outlined" | "shaped" | "shaped-disabled" | "shaped-white" | "shaped-gradient" | "shaped-gradient-outline";
  size?: "small" | "medium" | "large";
  icon?: React.ReactNode;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  disabled,
  variant = 'shaped',
  type = "button",
  onClick,
  loading,
}) => {
  const variantStyles = {
    outlined: "bg-transparent border border-grey-200 text-cuneutral-700",
    shaped: "bg-transparent text-cuneutral-700 hover:scale-95 active:scale-100 transition duration-200 h-10",
    "shaped-disabled": "bg-[rgba(92,78,222,0.10)] text-cuneutral-700 cursor-not-allowed h-10 min-w-[170px]",
    "shaped-gradient": "bg-transparent text-cuneutral-700 hover:scale-95 active:scale-100 transition duration-200",
    "shaped-gradient-outline": "bg-transparent text-cuneutral-700 hover:scale-95 active:scale-100 transition duration-200",
    "shaped-white": "bg-white text-cuneutral-700 hover:scale-95 active:scale-100 transition duration-200",
    primary: "bg-primary-500 text-white",
    text: "bg-transparent border-none text-[#F2E6E0] hover:text-hoverPrimary"
  };

  const variantSpecificStyles = variant === 'shaped' ? {
    backgroundImage: "url('data:image/svg+xml,%3Csvg width=%22156%22 height=%2240%22 viewBox=%220 0 156 40%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath id=%22Vector%22 d=%22M24.7946 1.25H131.233C133.212 1.25 135.141 1.86798 136.752 3.01765L150.868 13.0932C156.332 16.9934 156.137 25.1766 150.493 28.812L136.638 37.7365C135.104 38.7246 133.318 39.25 131.494 39.25H24.7946C22.8917 39.25 21.0326 38.6785 19.4583 37.6096L5.4662 28.1096C-0.085371 24.3404 -0.085371 16.1596 5.4662 12.3904L19.4583 2.89038C21.0326 1.82147 22.8917 1.25 24.7946 1.25Z%22 stroke=%22%23FCFCFC%22/%3E%3C/svg%3E')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  } : variant === 'shaped-disabled' ? {
    backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22152%22 height=%2240%22 viewBox=%220 0 152 40%22 fill=%22none%22%3E%3Cg filter=%22url(%23filter0_dd_359_1258)%22%3E%3Cpath d=%22M124.584 0H27.2828C25.1502 0 23.0736 0.681721 21.3559 1.94562L8.44569 11.4456C3.01477 15.442 3.01477 23.558 8.44569 27.5544L21.3559 37.0544C23.0736 38.3183 25.1502 39 27.2828 39H124.855C126.902 39 128.9 38.3716 130.579 37.1996L143.347 28.2863C148.879 24.4244 149.077 16.3051 143.741 12.1771L130.702 2.09043C128.95 0.735264 126.798 0 124.584 0Z%22 fill=%22%235C4EDE%22 fill-opacity=%220.1%22 shape-rendering=%22crispEdges%22/%3E%3Cpath d=%22M27.2828 0.5H124.584C126.688 0.5 128.732 1.1985 130.396 2.48591L143.435 12.5726C148.505 16.4942 148.316 24.2075 143.06 27.8763L130.293 36.7896C128.698 37.903 126.8 38.5 124.855 38.5H27.2828C25.2569 38.5 23.284 37.8524 21.6523 36.6517L8.74203 27.1517C3.58265 23.3551 3.58265 15.6449 8.74203 11.8483L21.6523 2.34834C23.284 1.14763 25.2569 0.5 27.2828 0.5Z%22 stroke=%22url(%23paint0_linear_359_1258)%22 shape-rendering=%22crispEdges%22/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id=%22filter0_dd_359_1258%22 x=%220.372498%22 y=%220%22 width=%22151.25%22 height=%2247%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22/%3E%3CfeColorMatrix in=%22SourceAlpha%22 type=%22matrix%22 values=%220 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0%22 result=%22hardAlpha%22/%3E%3CfeOffset dy=%224%22/%3E%3CfeGaussianBlur stdDeviation=%222%22/%3E%3CfeComposite in2=%22hardAlpha%22 operator=%22out%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%220 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0%22/%3E%3CfeBlend mode=%22normal%22 in2=%22BackgroundImageFix%22 result=%22effect1_dropShadow_359_1258%22/%3E%3CfeColorMatrix in=%22SourceAlpha%22 type=%22matrix%22 values=%220 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0%22 result=%22hardAlpha%22/%3E%3CfeOffset dy=%224%22/%3E%3CfeGaussianBlur stdDeviation=%222%22/%3E%3CfeComposite in2=%22hardAlpha%22 operator=%22out%22/%3E%3CfeColorMatrix type=%22matrix%22 values=%220 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0%22/%3E%3CfeBlend mode=%22normal%22 in2=%22effect1_dropShadow_359_1258%22 result=%22effect2_dropShadow_359_1258%22/%3E%3CfeBlend mode=%22normal%22 in=%22SourceGraphic%22 in2=%22effect2_dropShadow_359_1258%22 result=%22shape%22/%3E%3C/filter%3E%3ClinearGradient id=%22paint0_linear_359_1258%22 x1=%22-2.5%22 y1=%2238.9321%22 x2=%22156.039%22 y2=%2230.1441%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop stop-color=%22%23666666%22 stop-opacity=%220.8%22/%3E%3Cstop offset=%221%22 stop-color=%22white%22 stop-opacity=%220.1%22/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  } : variant === 'shaped-gradient' ? {
    backgroundImage: "url('data:image/svg+xml,%3Csvg width=%22144%22 height=%2241%22 viewBox=%220 0 144 41%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M31.6714 40.8571C29.2379 40.8571 26.9803 40.2899 25.7149 39.3605L11.5748 28.8951C6.17345 24.8975 6.17345 16.8167 11.5748 12.8192L25.7149 2.35382C26.9803 1.42439 29.2379 0.857147 31.6714 0.857147V40.8571Z%22 fill=%22%231D1D1D%22 fill-opacity=%220.05%22/%3E%3Cpath d=%22M31.6714 40.8571C29.2379 40.8571 26.9803 40.2899 25.7149 39.3605L11.5748 28.8951C6.17345 24.8975 6.17345 16.8167 11.5748 12.8192L25.7149 2.35382C26.9803 1.42439 29.2379 0.857147 31.6714 0.857147V40.8571Z%22 fill=%22url(%23paint0_linear_398_1590)%22 fill-opacity=%220.2%22/%3E%3Crect width=%2288%22 height=%2240%22 transform=%22translate(31.6714 0.857147)%22 fill=%22%231D1D1D%22 fill-opacity=%220.05%22/%3E%3Crect width=%2288%22 height=%2240%22 transform=%22translate(31.6714 0.857147)%22 fill=%22url(%23paint1_linear_398_1590)%22 fill-opacity=%220.2%22/%3E%3Cpath d=%22M119.671 40.8571C122.105 40.8571 124.362 40.2899 125.628 39.3605L139.768 28.8951C145.169 24.8975 145.169 16.8167 139.768 12.8192L125.628 2.35382C124.362 1.42439 122.105 0.857147 119.671 0.857147V40.8571Z%22 fill=%22%231D1D1D%22 fill-opacity=%220.05%22/%3E%3Cpath d=%22M119.671 40.8571C122.105 40.8571 124.362 40.2899 125.628 39.3605L139.768 28.8951C145.169 24.8975 145.169 16.8167 139.768 12.8192L125.628 2.35382C124.362 1.42439 122.105 0.857147 119.671 0.857147V40.8571Z%22 fill=%22url(%23paint2_linear_398_1590)%22 fill-opacity=%220.2%22/%3E%3Cdefs%3E%3ClinearGradient id=%22paint0_linear_398_1590%22 x1=%222.00417%22 y1=%228.85715%22 x2=%2236.008%22 y2=%2212.5122%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop stop-color=%22%238940FF%22/%3E%3Cstop offset=%221%22 stop-color=%22%2366FECB%22/%3E%3C/linearGradient%3E%3ClinearGradient id=%22paint1_linear_398_1590%22 x1=%223.66667%22 y1=%228%22 x2=%2293.095%22 y2=%2235.3253%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop stop-color=%22%2366FECB%22/%3E%3Cstop offset=%221%22 stop-color=%238940FF%22/%3E%3C/linearGradient%3E%3ClinearGradient id=%22paint2_linear_398_1590%22 x1=%22142.813%22 y1=%228.85715%22 x2=%22116.169%22 y2=%2211.0911%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop stop-color=%22%2366FECB%22/%3E%3Cstop offset=%221%22 stop-color=%238940FF%22/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  } : variant === 'shaped-gradient-outline' ? {
    backgroundImage: "url('data:image/svg+xml,%3Csvg width=%22248%22 height=%2262%22 viewBox=%220 0 248 62%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M35.8053 60.4442C32.872 60.2405 30.4077 59.4716 29.0568 58.477L29.0543 58.4752L7.18637 42.231C-0.333021 36.6454 -0.333021 25.3546 7.18637 19.769L29.0543 3.52486L29.0562 3.52344C30.407 2.52864 32.8715 1.75958 35.8053 1.5558V0C32.649 0.205091 29.8244 1.03078 28.1386 2.27363L6.26616 18.5211C-2.08872 24.7273 -2.08872 37.2727 6.26616 43.4789L28.1386 59.7264C29.8244 60.9693 32.649 61.7949 35.8053 62V60.4442Z%22 fill=%22url(%23paint0_linear_398_1304)%22/%3E%3Cmask id=%22path-2-inside-1_398_1304%22 fill=%22white%22%3E%3Cpath d=%22M35.8054 0H211.805V62H35.8054V0Z%22/%3E%3C/mask%3E%3Cpath d=%22M35.8054 1.54683H211.805V-1.54683H35.8054V1.54683ZM211.805 60.4532H35.8054V63.5468H211.805V60.4532Z%22 fill=%22url(%23paint1_linear_398_1304)%22 mask=%22url(%23path-2-inside-1_398_1304)%22/%3E%3Cpath d=%22M211.805 60.4442C214.739 60.2405 217.203 59.4716 218.554 58.477L218.556 58.4752L240.424 42.231C247.944 36.6454 247.944 25.3546 240.424 19.769L218.556 3.52486L218.554 3.52344C217.204 2.52864 214.739 1.75958 211.805 1.5558V0C214.962 0.205091 217.786 1.03078 219.472 2.27363L241.344 18.5211C249.699 24.7273 249.699 37.2727 241.344 43.4789L219.472 59.7264C217.786 60.9693 214.962 61.7949 211.805 62V60.4442Z%22 fill=%22url(%23paint2_linear_398_1304)%22/%3E%3Cdefs%3E%3ClinearGradient id=%22paint0_linear_398_1304%22 x1=%221.49189%22 y1=%2212.4%22 x2=%2241.0213%22 y2=%2215.5706%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop stop-color=%22%238AE6CF%22/%3E%3Cstop offset=%221%22 stop-color=%22%237C3AE7%22/%3E%3C/linearGradient%3E%3ClinearGradient id=%22paint1_linear_398_1304%22 x1=%2243.3483%22 y1=%2231.492%22 x2=%22207.405%22 y2=%2231.492%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop stop-color=%22%237D46E5%22/%3E%3Cstop offset=%220.51%22 stop-color=%22%2389DFD0%22 stop-opacity=%220%22/%3E%3Cstop offset=%220.985%22 stop-color=%22%237D46E5%22/%3E%3C/linearGradient%3E%3ClinearGradient id=%22paint2_linear_398_1304%22 x1=%22246.119%22 y1=%2212.4%22 x2=%22206.589%22 y2=%2215.5706%22 gradientUnits=%22userSpaceOnUse%22%3E%3Cstop stop-color=%22%238AE6CF%22/%3E%3Cstop offset=%221%22 stop-color=%22%237C3AE7%22/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  } : variant === 'shaped-white' ? {
    backgroundImage: "url('data:image/svg+xml,%3Csvg width=%22248%22 height=%2263%22 viewBox=%220 0 248 63%22 fill=%22none%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M36 62.5C33.185 62.5 30.5735 61.6208 29.1098 60.1802L7.34976 38.6004C3.40521 34.6886 3.40521 28.3114 7.34976 24.3996L29.1098 2.81984C30.5735 1.37923 33.185 0.5 36 0.5V62.5Z%22 fill=%22%231D1D1D%22 fill-opacity=%220.05%22/%3E%3Cpath d=%22M36 62.5C33.185 62.5 30.5735 61.6208 29.1098 60.1802L7.34976 38.6004C3.40521 34.6886 3.40521 28.3114 7.34976 24.3996L29.1098 2.81984C30.5735 1.37923 33.185 0.5 36 0.5V62.5Z%22 fill=%22white%22/%3E%3Crect width=%22176%22 height=%2262%22 transform=%22translate(36 0.5)%22 fill=%22%231D1D1D%22 fill-opacity=%220.05%22/%3E%3Crect width=%22176%22 height=%2262%22 transform=%22translate(36 0.5)%22 fill=%22white%22/%3E%3Cpath d=%22M212 62.5C215.609 62.5 218.957 61.6208 220.833 60.1802L241.803 43.9589C249.812 37.7626 249.812 25.2374 241.803 19.0411L220.833 2.81984C218.957 1.37923 215.609 0.5 212 0.5V62.5Z%22 fill=%22%231D1D1D%22 fill-opacity=%220.05%22/%3E%3Cpath d=%22M212 62.5C215.609 62.5 218.957 61.6208 220.833 60.1802L241.803 43.9589C249.812 37.7626 249.812 25.2374 241.803 19.0411L220.833 2.81984C218.957 1.37923 215.609 0.5 212 0.5V62.5Z%22 fill=%22white%22/%3E%3C/svg%3E')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  } : {};

  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={`${className} ${variantStyles[variant]} h-10 md:h-[56px] text-sm md:text-base px-[14px] md:px-6 items-center justify-center flex font-medium rounded-[32px] disabled:cursor-not-allowed relative overflow-hidden`}
      style={variantSpecificStyles}
    >
      {loading ? <LoadingIndicator /> : children}
    </button>
  );
};
