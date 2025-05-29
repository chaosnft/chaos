import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AnimatedBear() {
  const groups = [
    {
      image: '/images/bear1.webp',
      title: 'Bear Group 1',
      description: 'Discover the first bear in our Web3 adventure!',
    },
    {
      image: '/images/bear2.webp',
      title: 'Bear Group 2',
      description: 'Join this bear for a decentralized journey!',
    },
    {
      image: '/images/bear3.webp',
      title: 'Bear Group 3',
      description: 'Explore new horizons with this bear!',
    },
    {
      image: '/images/bear4.webp',
      title: 'Bear Group 4',
      description: 'This bear leads the Web3 revolution!',
    },
    {
      image: '/images/bear5.webp',
      title: 'Bear Group 5',
      description: 'Connect with the bear community!',
    },
    {
      image: '/images/bear6.webp',
      title: 'Bear Group 6',
      description: 'The final bear in our epic saga!',
    },
  ];

  return (
    <section
      id="bear"
      className="min-h-screen flex  items-center justify-center px-4 sm:px-6 md:px-8 z-10"
    >
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
        {groups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center p-4 sm:p-6  transition-all duration-300"
          >
            <Image
              src={group.image}
              alt={group.title}
              width={160}
              height={160}
              className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-cover rounded-2xl mb-4"
              loading="lazy"
            />
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-dark-brown text-center font-comic-art mb-2">
              {group.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-dark-brown text-center font-comic-art">
              {group.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}