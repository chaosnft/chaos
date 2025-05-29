import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AnimatedText from './AnimatedText';

export default function Section3({ currentFrame, direction, handlePrev, handleNext, isShopHovered, setIsShopHovered }) {
  const frames = [
    { id: 1, title: 'Style', content: 'NFT-inspired designs are incorporated into our products', image: '/images/frame1.webp' },
    { id: 2, title: 'NFT', content: 'We build a community that loves art, nature and NFTs', image: '/images/frame2.webp' },
    { id: 3, title: 'Utility', content: 'Our community will get early access to new product launches, or community events.', image: '/images/frame3.webp' },
    { id: 4, title: 'Fashion', content: 'Our community will get early access to new product launches, or community events.', image: '/images/frame4.webp' },
];

  return (
    <section id="section3" className="min-h-screen flex flex-col items-center justify-center bg-light-blue m-0 p-0 border-t-4 border-b-4 border-dark-brown overflow-x-hidden z-20">
      <div className="w-full text-center mb-6 sm:mb-8 md:mb-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-black uppercase mt-5 z-10">
          Our apparel collection
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-8 mb-10">
        <div className="flex md:hidden space-x-2 mb-4">
          <motion.button
            onClick={handlePrev}
            className="relative w-16 h-12 sm:w-20 sm:h-14 bg-navy-black text-white text-lg border-4 border-black rounded-full shadow-cartoon hover-scan hover:translate-x-1 hover:translate-y-1 hover:brightness-90 transition-transform duration-300 z-20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xl sm:text-2xl font-bold">&lt;</span>
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="relative w-16 h-12 sm:w-20 sm:h-14 bg-dark-brown text-white text-lg border-4 border-black rounded-full shadow-cartoon hover-scan hover:translate-x-1 hover:translate-y-1 hover:brightness-90 transition-transform duration-300 z-20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-xl sm:text-2xl font-bold">&gt;</span>
          </motion.button>
        </div>

        <div className="flex items-center justify-center w-full space-x-0 md:space-x-8">
          <motion.button
            onClick={handlePrev}
            className="hidden md:block relative w-16 h-16 md:w-16 md:h-20 lg:w-16 lg:h-24 bg-navy-black text-white text-lg border-4 border-black rounded-full shadow-cartoon hover-scan hover:translate-x-1 hover:translate-y-1 hover:brightness-90 transition-transform duration-300 z-20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl md:text-3xl font-bold">&lt;</span>
          </motion.button>

          <div className="w-11/12 sm:w-3/4 h-[80vh] md:min-h-[60vh] md:h-auto flex flex-col md:flex-row items-center justify-between bg-white border-4 border-black rounded-2xl shadow-cartoon p-4 sm:p-6 md:p-8 box-border z-20">
            <div className="w-full md:w-1/2 flex items-center justify-center mt-4 md:mt-0 order-1 md:order-0">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentFrame}
                  initial={{ x: direction === 1 ? '-100%' : '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction === 1 ? '100%' : '-100%', opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                >
                  <Image
                    src={frames[currentFrame].image}
                    alt={frames[currentFrame].title}
                    width={300}
                    height={300}
                    className="w-full h-auto object-cover rounded-2xl max-h-[40vh] md:max-h-full"
                    loading="lazy"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left max-w-full h-auto order-0 md:order-1 px-4">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={currentFrame}
                  initial={{ x: direction === 1 ? '-100%' : '100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: direction === 1 ? '100%' : '-100%', opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="w-full flex flex-col"
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-navy-black mb-4 uppercase">
                    {frames[currentFrame].title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-navy-black max-w-full overflow-wrap-break-word whitespace-normal max-h-[20vh] overflow-y-auto mb-4">
                    {frames[currentFrame].content}
                  </p>
                  <motion.button
                    onMouseEnter={() => setIsShopHovered(true)}
                    onMouseLeave={() => setIsShopHovered(false)}
                    className="relative w-3/4 px-6 py-3 sm:px-8 sm:py-4 sm:w-1/3 bg-navy-black text-white text-lg sm:text-xl md:text-2xl border-4 border-black rounded-2xl self-center md:self-start hover-scan hover:translate-x-1 hover:translate-y-1 hover:brightness-90 transition-transform duration-300 z-20 shadow-cartoon mt-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AnimatedText
                      text={isShopHovered ? 'Soon !' : 'Shop'}
                      className="text-lg sm:text-xl md:text-2xl text-ivory"
                      style={{ color: 'inherit' }}
                    />
                  </motion.button>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.button
            onClick={handleNext}
            className="hidden md:block relative w-16 h-16 md:w-16 md:h-20 lg:w-16 lg:h-24 bg-navy-black text-white text-lg border-4 border-black rounded-full shadow-cartoon hover-scan hover:translate-x-1 hover:translate-y-1 hover:brightness-90 transition-transform duration-300 z-20"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl md:text-3xl font-bold">&gt;</span>
          </motion.button>
        </div>
      </div>
    </section>
  );
}