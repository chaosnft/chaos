import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';
import Image from 'next/image';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isShopHovered, setIsShopHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Định nghĩa các liên kết mạng xã hội
  const socialLinks = [
    { platform: 'x', url: 'https://x.com/chaosnft_xyz', icon: '/icons/x.png' },
    { platform: 'discord', url: '', icon: '/icons/discord.png' },
  ];

  return (
    <>
      <div
        className={`fixed top-4 left-4 sm:left-6 md:left-10 z-50 flex items-center space-x-3 sm:space-x-4 transition-opacity duration-300 ${
          isScrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onClick={() => setIsOpen(!isOpen)}
          className={`relative flex items-center justify-center space-x-2 px-4 py-2 w-40 sm:w-48 md:w-36 h-12 sm:h-14 border-navy-black border-4 rounded-2xl hover-scan hover:translate-x-1 hover:translate-y-1 hover:brightness-90 transition-all duration-300 shadow-cartoon ${
            isOpen ? 'bg-red-600 text-ivory' : 'bg-white text-dark-brown'
          }`}
        >
          <AnimatedText
            text={isOpen ? 'Close' : 'Menu'}
            className={`text-navy-black sm:text-lg md:text-xl font-bold uppercase`}
            style={{ color: 'inherit' }}
          />
          <svg
            className={`w-5 h-5 sm:w-6 sm:h-6 ${isOpen ? 'stroke-black' : 'stroke-dark-brown'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </>
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </motion.button>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen && !isScrolled ? '60vh' : 0,
          opacity: isOpen && !isScrolled ? 1 : 0,
        }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className="fixed top-0 left-0 w-screen bg-navy-black text-ivory overflow-y-auto h-1/3 z-40"
      >
        <div className="relative h-full flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 md:px-8 py-4">
          <div className="flex flex-col justify-between h-full w-full md:w-1/2">
            <div className="flex flex-col space-y-4">
              {/* Nội dung nếu cần */}
            </div>
            <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 flex space-x-2 sm:space-x-2 text-dark-brown z-50">
              {socialLinks.map(({ platform, url, icon }) => (
                <motion.a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  className={`flex justify-center items-center relative min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px] md:min-w-[56px] md:min-h-[56px] group ${
                    platform === 'discord' ? 'cursor-default' : ''
                  }`}
                >
                  {platform === 'discord' ? (
                    <>
                      <Image
                        src={icon}
                        alt={platform}
                        width={24}
                        height={24}
                        className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 z-10 transition-opacity duration-300 group-hover:opacity-0"
                      />
                      <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm sm:text-base md:text-lg font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                        SOON
                      </span>
                    </>
                  ) : (
                    <Image
                      src={icon}
                      alt={platform}
                      width={24}
                      height={24}
                      className="w-6 h-6 sm:w-6 sm:h-6 md:w-8 md:h-8 z-10"
                    />
                  )}
                </motion.a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2 md:mt-0 w-full md:w-1/2 uppercase pr-4 sm:pr-6 md:pr-8">
            {[
              { href: '#section3', text: 'Apparel' },
              { href: '#shop', text: 'Shop' },
              { href: '#squares', text: 'About Us' },
            ].map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector(item.href);
                  if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }
                }}
                onMouseEnter={() => item.text === 'Shop' && setIsShopHovered(true)}
                onMouseLeave={() => item.text === 'Shop' && setIsShopHovered(false)}
                className="text-xl sm:text-3xl md:text-4xl transition-all duration-300 text-right text-ivory hover:text-light-blue"
                style={{ transformOrigin: 'right' }}
              >
                <AnimatedText
                  text={item.text === 'Shop' ? (isShopHovered ? 'Soon.' : 'Shop') : item.text}
                  className="text-3xl sm:text-4xl md:text-5xl inline-block"
                />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
}