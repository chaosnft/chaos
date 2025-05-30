import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import AnimatedTextTyping from './AnimatedTextTyping';

export default function Loading({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let step = 0;
    const stages = [
      { target: 5, duration: 200 },
      { target: 10, duration: 300 },
      { target: 50, duration: 800 },
      { target: 70, duration: 1200 },
      { target: 100, duration: 500 },
    ];

    const updateProgress = () => {
      if (step >= stages.length) {
        setProgress(100);
        setTimeout(() => onComplete(), 1500);
        return;
      }

      const { target, duration } = stages[step];
      const start = step === 0 ? 0 : stages[step - 1].target;
      const increment = (target - start) / (duration / 50);

      const interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + increment;
          if (next >= target) {
            clearInterval(interval);
            step++;
            setTimeout(updateProgress, 800);
            return target;
          }
          return next;
        });
      }, 50);
    };

    updateProgress();

    return () => clearInterval();
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-ivory flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-9">
        <div className="mb-6">
          <Image
            src="/images/chaos.gif"
            alt="Web3 Logo"
            width={400}
            height={400}
            className="w-64 sm:w-80 md:w-96 lg:w-[448px] h-auto mx-auto"
          />
        </div>
        <AnimatedTextTyping
          text="Loading..."
          className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-navy-black text-center"
        />
        <div className="w-2/3 sm:w-2/3 md:w-2/3 lg:w-7/12 h-7 sm:h-7.5 md:h-9 bg-dark-brown rounded-full relative border-4 border-black">
          <motion.div
            className="h-full bg-blue rounded-full text-ivory"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
          />
          <motion.div
            className="absolute top-1/2 z-10"
            style={{ left: `${Math.min(progress, 98)}%`, transform: 'translateX(-50%) translateY(-50%)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <span className="text-[13px] sm:text-[15px] md:text-[18px] font-bold text-ivory">
              {Math.round(progress)}%
            </span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}