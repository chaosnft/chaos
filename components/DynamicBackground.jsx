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
    const section4 = document.querySelector('#section4');
    if (section4) {
      section4.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      className="fixed top-0 right-0 w-1/4 h-1/6 sm:h-1/4 bg-transparent pointer-events-auto overflow-hidden z-20"
    >
      <motion.img
        src="/images/logo-right.webp"
        className="absolute right-0 top-10 sm:top-20 h-1/2 sm:h-1/2 w-auto cursor-pointer z-20"
        initial={{ x: '100%' }}
        animate={{ x: scrollY > 100 ? 0 : '100%' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        onClick={handleLogoClick}
      />
    </motion.div>
  );
}