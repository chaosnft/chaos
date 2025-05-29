import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Section4({ images, imageOrder1, imageOrder2, rowVariants }) {
  return (
    <section id="section4" className="min-h-screen flex flex-col items-center justify-center bg-white m-0 p-0 overflow-x-hidden">
      <div className="w-full flex flex-col gap-6 sm:gap-8 px-4 sm:px-8 md:px-12 lg:px-16">
        <h2 className="text-5xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-navy-black text-center mb-10">
          NFT Collection
        </h2>
        <div className="flex">
          <motion.div
            className="flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16"
            variants={rowVariants}
            animate="animateRight"
            style={{ width: `calc(210px * ${images.length} + 16px * ${images.length - 1})` }}
          >
            {imageOrder1.map((index) => (
              <div
                key={`row1-${index}`}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-light-yellow border-4 border-black rounded-2xl shadow-cartoon overflow-hidden"
                style={{ aspectRatio: '1 / 1' }}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={images[index]}
                    alt={`Image ${index + 1}`}
                    width={160}
                    height={160}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }}
                    loading="lazy"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex justify-end">
          <motion.div
            className="flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16"
            variants={rowVariants}
            animate="animateLeft"
            style={{ width: `calc(210px * ${images.length} + 16px * ${images.length - 1})` }}
          >
            {imageOrder2.map((index, i) => (
              <div
                key={`row2-${index}`}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-light-yellow border-4 border-black rounded-2xl shadow-cartoon overflow-hidden"
                style={{ aspectRatio: '1 / 1', marginRight: i === 0 ? '16px' : '0' }}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={images[index]}
                    alt={`Image ${index + 1}`}
                    width={160}
                    height={160}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }}
                    loading="lazy"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="flex">
          <motion.div
            className="flex space-x-4 sm:space-x-8 md:space-x-12 lg:space-x-16"
            variants={rowVariants}
            animate="animateRight"
            style={{ width: `calc(210px * ${images.length} + 16px * ${images.length - 1})` }}
          >
            {imageOrder1.map((index) => (
              <div
                key={`row3-${index}`}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 bg-light-yellow border-4 border-black rounded-2xl shadow-cartoon overflow-hidden"
                style={{ aspectRatio: '1 / 1' }}
              >
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
                  <Image
                    src={images[index]}
                    alt={`Image ${index + 1}`}
                    width={160}
                    height={160}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', aspectRatio: '1 / 1' }}
                    loading="lazy"
                  />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}