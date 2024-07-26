import React from 'react';
import { JoinIcon } from '@/app/assets/svg';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "JOIN - One For All",
  description:
    "Unite and Play: Connect with Others, Transform Gaming into Rewards, and Earn Every Step of the Way with Blockchain-Powered Security and Innovation!",
};

export default function Loading () {
  return (
    <main className={`bg-background fixed left-0 top-0 z-[9999] w-full h-full flex justify-center items-center`}>
      <div><JoinIcon className="animate-bounce w-28 h-28" /></div>
    </main>
  );
};

