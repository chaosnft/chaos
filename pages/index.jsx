import Head from 'next/head';
import { useState, useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import Marquee from '../components/Marquee';
import SquareSection from '../components/SquareSection';
import Menu from '../components/Menu';
import CursorEffect from '../components/CursorEffect';
import DynamicBackground from '../components/DynamicBackground';
import NewSection from '../components/NewSection';
import Section2Marquee from '../components/Section2Marquee';
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';
import Section4 from '../components/Section4';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    const handleScroll = (e) => {
      if (window.innerWidth > 768) {
        e.preventDefault();
        const scrollSpeed = 0.5;
        window.scrollBy({
          top: e.deltaY * scrollSpeed,
          behavior: 'smooth',
        });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  const [currentFrame, setCurrentFrame] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isShopHovered, setIsShopHovered] = useState(false);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentFrame((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentFrame((prev) => (prev === 3 ? 0 : prev + 1));
  };

  const images = [
    '/images/nftshadow.webp',
    '/images/nftshadow1.webp',
    '/images/nftshadow2.webp',
    '/images/nftshadow3.webp',
    '/images/nftshadow.webp',
    '/images/nftshadow1.webp',
    '/images/nftshadow2.webp',
    '/images/nftshadow3.webp',
    '/images/nftshadow.webp',
    '/images/nftshadow1.webp',
    '/images/nftshadow2.webp',
    '/images/nftshadow3.webp',
    '/images/nftshadow.webp',
    '/images/nftshadow1.webp',
    '/images/nftshadow2.webp',
    '/images/nftshadow3.webp',
    '/images/nftshadow.webp',
    '/images/nftshadow1.webp',
    '/images/nftshadow2.webp',
    '/images/nftshadow3.webp',
    '/images/nftshadow.webp',
    '/images/nftshadow1.webp',
    '/images/nftshadow2.webp',
    '/images/nftshadow3.webp',
    '/images/nftshadow.webp',
    '/images/nftshadow1.webp',
    '/images/nftshadow2.webp',
    '/images/nftshadow3.webp',
    '/images/nftshadow.webp',
    '/images/nftshadow1.webp',
    '/images/nftshadow2.webp',
    '/images/nftshadow3.webp',
  ];

  const [imageOrder1, setImageOrder1] = useState([...Array(images.length).keys()]);
  const [imageOrder2, setImageOrder2] = useState([...Array(images.length).keys()]);

  useEffect(() => {
    const frameWidth = 160 + 16;
    const duration = images.length * 10;
    const durationPerFrame = duration / images.length;

    const interval1 = setInterval(() => {
      setImageOrder1((prev) => {
        const newOrder = [...prev];
        newOrder.push(newOrder.shift());
        return newOrder;
      });
    }, durationPerFrame * 1000);

    const interval2 = setInterval(() => {
      setImageOrder2((prev) => {
        const newOrder = [...prev];
        newOrder.unshift(newOrder.pop());
        return newOrder;
      });
    }, durationPerFrame * 1000);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
    };
  }, [images.length]);

  const rowVariants = {
    animateRight: {
      x: ['0%', '-100%'],
      transition: {
        x: { repeat: Infinity, repeatType: 'loop', duration: images.length * 10, ease: 'linear' },
      },
    },
    animateLeft: {
      x: ['0%', '100%'],
      transition: {
        x: { repeat: Infinity, repeatType: 'loop', duration: images.length * 10, ease: 'linear' },
      },
    },
  };

  return (
    <div className="relative">
      <Head>
        <title>CHAOS.</title>
        <meta name="description" content="Web3 Landing Page" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DynamicBackground />
      <CursorEffect />
      <Menu />
      <HeroSection />
      <Marquee />
      <NewSection />
      <div className="flex flex-col m-0 p-0">
        <Section2Marquee />
        <Section2 />
      </div>
      <SquareSection />
      <Section3
        currentFrame={currentFrame}
        direction={direction}
        handlePrev={handlePrev}
        handleNext={handleNext}
        isShopHovered={isShopHovered}
        setIsShopHovered={setIsShopHovered}
      />
      <Section4 images={images} imageOrder1={imageOrder1} imageOrder2={imageOrder2} rowVariants={rowVariants} />
      <Footer />
    </div>
  );
}