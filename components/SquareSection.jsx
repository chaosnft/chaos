import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

export default function SquareSection() {
  return (
    <section
      id="squares"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-11/12 sm:w-5/5 h-[100vh] sm:h-[100vh] md:h-[85vh] bg-navy-black border-4 border-black rounded-3xl flex flex-col items-center justify-center shadow-cartoon p-4 sm:p-6 md:p-8 mt-10 mb-10"
      >
        <AnimatedText
          text="What is chaos.?"
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-ivory mb-4 uppercase"
        />
        <p className="text-base sm:text-lg md:text-xl text-ivory text-center max-w-full overflow-wrap-break-word whitespace-normal mb-5 mt-5">
          Welcome to the world of Chaos, a unique NFT brand inspired by the five natural elements: Fire, Ice, Tree, Wind, and Earth, that inspires creativity, freedom, and community.
          Chaos offers exclusive NFT collections, apparel, accessories, and digital experiences. We believe that the power of nature can inspire imagination, and we are committed to helping you explore the magic of the elements through art and style.
          Whether it's a blazing fire or a free-flowing breeze, let our elemental family bring warmth and personality to your journey!
          <br></br>
          <br></br>
          The power of CHAOS lies in its community – a cohesive force that can overcome any challenge, no matter how harsh, through the union of the elements.
        </p>
        {/* <motion.button
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative px-6 py-3 sm:px-8 sm:py-4 bg-white text-dark-brown text-lg sm:text-xl md:text-2xl lg:text-3xl border-4 border-dark-brown rounded-2xl hover-scan hover:translate-x-1 hover:translate-y-1 hover:brightness-90 transition-all duration-300 shadow-cartoon font-comic-art"
        >
          Join Now
        </motion.button> */}
      </motion.div>
    </section>
  );
}