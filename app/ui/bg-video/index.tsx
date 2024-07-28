import React from 'react';

interface VideoBackgroundProps {
  children: React.ReactNode;
  height: string;
  variant?: 'hero'| 'others'
  as?: keyof JSX.IntrinsicElements;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({ 
  children, 
  height, 
  variant='others',
  as: Component = 'div' 
}) => {
  return (
    <Component className={`relative w-full ${height === 'screen' ? 'h-full min-h-fit justify-center items-center' : 'h-fit'} ${variant === 'hero'? 'pt-32': ''}`}>
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the background video.
      </video>
      <div className={`relative flex flex-col items-center justify-center w-full h-full ${height === 'screen' ? 'z-20' : 'z-50'}`}>
        {children}
      </div>
    </Component>
  );
};

