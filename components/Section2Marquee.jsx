import { motion } from 'framer-motion';
import AnimatedText from './AnimatedText';

export default function Section2Marquee() {
  return (
    <section id="section2-marquee" className="h-fit bg-white m-0 p-0">
      <div className="w-full overflow-hidden bg-rainbow border-t-4 border-b-4 border-dark-brown m-0 p-0">
        <motion.div
          initial={{ x: '-50%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
          className="whitespace-nowrap"
        >
          <AnimatedText
            text={"NON-FUNGIBLE TOKEN ON ETHEREUM !!     ".repeat(6)}
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white inline-block mt-2"
          />
        </motion.div>
      </div>
    </section>
  );
}