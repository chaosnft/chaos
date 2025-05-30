import { motion } from 'framer-motion';

export default function Footer() {
  const handleLinkClick = (e, href) => {
    e.preventDefault();
    console.log('Footer link clicked:', href);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    { platform: 'x', url: 'https://x.com/chaosnft_xyz', icon: '/icons/x.png' },
    { platform: 'discord', url: '', icon: '/icons/discord.png' },
  ];

  return (
    <footer className="py-6 sm:py-8 flex flex-col items-center px-4 sm:px-6 md:px-8 bg-navy-black rounded-t-[6rem] border-4 border-black shadow-cartoon mt-10 z-20 pointer-events-auto">
      <div className="flex flex-col md:flex-row justify-between items-start w-full mb-5 pr-4 sm:pr-6 md:pr-8 text-left">
        <div className="w-1/3 flex flex-col space-y-4 mt-5 ml-10">
          {[
            { text: 'About Us', href: '#squares', isExternal: false },
            { text: 'Contact', href: 'https://form.typeform.com/to/rY6T3FRq', isExternal: true },
          ].map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              {...(item.isExternal
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : { onClick: (e) => handleLinkClick(e, item.href) })}
              className="text-1xl sm:text-2xl md:text-3xl transition-all duration-300 p-2 text-left text-ivory hover:text-light-blue z-10 cursor-pointer"
              style={{ transformOrigin: 'left' }}
              whileHover={{ scale: 1 }}
            >
              <span className="text-1xl sm:text-2xl md:text-4xl uppercase z-10">{item.text}</span>
            </motion.a>
          ))}
        </div>
        <div className="w-full flex justify-center md:justify-end mt-12 md:mt-6 md:mr-10">
          <div className="flex space-x-1 sm:space-x-1 text-white">
            {socialLinks.map(({ platform, url, icon }) => (
              <motion.a
                key={platform}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.3 }}
                className={`flex justify-center items-center relative min-w-[40px] min-h-[40px] sm:min-w-[48px] sm:min-h-[48px] md:min-w-[56px] md:min-h-[56px] group ${
                  platform === 'discord' ? 'cursor-default' : ''
                }`} 
              >
                {platform === 'discord' ? (
                  <>
                    <img
                      src={icon}
                      alt={platform}
                      className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 z-10 transition-opacity duration-300 group-hover:opacity-0"
                    />
                    <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-sm sm:text-base md:text-lg font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                      SOON
                    </span>
                  </>
                ) : (
                  <img
                    src={icon}
                    alt={platform}
                    className="w-4 h-4 sm:w-6 sm:h-6 md:w-8 md:h-8 z-10"
                  />
                )}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
      <hr className="w-3/4 sm:w-[70%] border-t-2 border-white my-4 z-10" />
      <p className="text-base sm:text-base md:text-lg text-ivory text-center z-10">
        © Copyright 2025 - CHAOS. All rights reserved.
      </p>
    </footer>
  );
}