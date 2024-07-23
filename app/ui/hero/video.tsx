import React from 'react';

  export const VideoBackground: React.FC<{children: React.ReactNode, height: string}> = ({ children, height}) => {
    return (
        <div className={`relative w-full ${height === 'screen'? 'pt-32 h-full min-h-screen': 'h-fit'}`}>
          <video
            className="absolute top-0 left-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
          >
            <source src="/bg-video.mp4" type="video/mp4" />
            Your browser does not support the background video.
          </video>
          <div className={`relative flex flex-col items-center justify-center w-full h-full ${height === 'screen'? 'z-20': 'z-50'}`}>
            {children}
          </div>
        </div>
    );
  };

