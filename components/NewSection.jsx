import { motion } from 'framer-motion';
import { useState } from 'react';
import AnimatedTextTyping from './AnimatedTextTyping';
import Image from 'next/image';
import ChapterModal from './ChapterModal';

export default function NewSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="new-section"
      className="min-h-screen border-t-2 border-dark-brown flex items-center justify-center px-4 sm:px-6 md:px-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative w-[85vw] h-[95vh] border-4 border-white rounded-3xl flex flex-col items-center justify-start shadow-cartoon p-4 sm:p-6 md:p-8 mt-10 mb-10 overflow-hidden"
      >
        <Image
          src="/images/background.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0 z-0"
        />
        <div className="relative z-10 w-full flex flex-col items-end">
          <motion.a
            onClick={() => setIsModalOpen(true)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="cursor-pointer"
          >
            <AnimatedTextTyping
              text="Chapter 1 :"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-black mt-4 self-end mr-4 uppercase drop-shadow-md"
            />
          </motion.a>
          <AnimatedTextTyping
            text="Join the CHAOS."
            className="text-sm sm:text-lg md:text-2xl text-navy-black text-right max-w-[90%] px-2 overflow-wrap-break-word whitespace-normal mt-4 drop-shadow-md"
          />
        </div>
      </motion.div>
      <ChapterModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}