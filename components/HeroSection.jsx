import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedText from './AnimatedText';
import Image from 'next/image';
import AnimatedTextTyping from './AnimatedTextTyping';

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center bg-ivory px-4 sm:px-6 md:px-8 text-center"
    >
      <div className="mb-6">
        <Image
          src="/images/logo.png"
          alt="Web3 Logo"
          width={500}
          height={500}
          className="w-84 sm:w-90 md:w-120 lg:w-[548px] h-auto mx-auto"
        />
      </div>
      <div className="max-w-3xl mx-auto mb-6 sm:mb-8">
        <AnimatedTextTyping
        text="THE POWER OF ELEMENTS"
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-navy-black mb-4 uppercase"
      />
        <AnimatedText
          text="THE FOUNDATIONS OF CONNECTION"
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-navy-black whitespace-normal overflow-wrap break-word"
        />
        <AnimatedText
          text="CREATIVITY AND ART."
          className="text-sm sm:text-lg md:text-xl lg:text-2xl text-navy-black whitespace-normal overflow-wrap break-word"
        />
      </div>
      
      <Link href="https://form.typeform.com/to/Neuhoy24" target="_blank">
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 w-48 sm:w-56 md:w-64 lg:w-72 h-12 sm:h-14 md:h-16 lg:h-18 bg-navy-black text-ivory text-lg sm:text-xl md:text-2xl lg:text-3xl border-4 border-black rounded-full shadow-cartoon hover:translate-x-1 hover:translate-y-1 hover:brightness-90 transition-all duration-300 uppercase"
        >
          Whitelist
        </motion.button>
      </Link>
    </motion.section>
  );
}