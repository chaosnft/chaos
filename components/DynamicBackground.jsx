import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function DynamicBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    const section4 = document.querySelector('#section2');
    if (section4) {
      section4.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="fixed top-0 right-0 w-1/4 h-1/6 sm:h-1/4 bg-transparent pointer-events-auto z-20"
    >
      <motion.img
        src="/images/logo-right.webp"
        className="absolute right-0 top-10 sm:top-20 h-1/2 sm:h-1/2 w-auto cursor-pointer z-20"
        initial={{ x: '100%' }}
        animate={{ x: scrollY > 100 ? 0 : '100%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        onClick={handleLogoClick}
      />
      <motion.p
        src="/images/logo-right.webp"
        className="absolute right-0 top-[calc(60%+1.8rem)] sm:top-[calc(60%+4rem)] text-xs sm:text-xs text-white text-center drop-shadow-md bg-dark-brown px-2 py-1 rounded cursor-pointer z-30"
        initial={{ x: '100%' }}
        animate={{ x: scrollY > 100 ? 0 : '100%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        onMouseEnter={() => console.log('Hovering over text')}
        onClick={handleLogoClick}
      >
        Whitelist is open!
      </motion.p>
    </motion.div>
  );
}