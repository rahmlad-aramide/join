import React from 'react';
import { JoinIcon } from '@/app/assets/svg';

export const Preloader: React.FC = () => {
  return (
    <main className={`bg-background fixed left-0 top-0 z-[99999] w-full h-full flex justify-center items-center`}>
      <div><JoinIcon className="animate-bounce w-28 h-28" /></div>
    </main>
  );
};

