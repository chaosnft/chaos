import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

export default function Marquee() {
  const singleText = 'WHITELIST IS OPEN !     ';
  const text = singleText.repeat(10); 

  return (
    <div className="w-full overflow-hidden bg-navy-black border-t-4 border-b-4 border-dark-brown">
      <div className="relative">
        <motion.div
          initial={{ x: '-50%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 50, ease: 'linear' }} 
          className="whitespace-nowrap"
        >
          <AnimatedText
            text={text}
            className="text-2xl sm:text-3xl md:text-4xl mt-2 font-bold text-ivory inline-block "
          />
        </motion.div>
      </div>
    </div>
  );
}