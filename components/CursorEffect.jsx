import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CursorEffect() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return; 

    let lastX = 0;
    let lastY = 0;

    const handleMouseMove = (e) => {
      const isBlueBackground = e.target.closest('.bg-blue') !== null;
      const color = isBlueBackground ? '#FFFFFF' : '#1976D2';

      if (Math.random() < 0.5) {
        const angles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
        const newParticles = Array.from({ length: 1 }, () => ({
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          color,
          vx: (Math.random() - 0.5) * 8,
          vy: (Math.random() - 0.5) * 8,
          size: window.innerWidth < 768 ? 15 : 20, 
          rotate: angles[Math.floor(Math.random() * angles.length)],
        }));

        setParticles((prev) => [...prev, ...newParticles].slice(-40)); 

        setTimeout(() => {
          setParticles((prev) => prev.filter((p) => !newParticles.some((np) => np.id === p.id)));
        }, 1500); 
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-50">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute"
          initial={{ x: particle.x, y: particle.y, scale: 1, opacity: 0.8 }}
          animate={{
            x: particle.x + particle.vx * 20,
            y: particle.y + particle.vy * 20 + 10,
            scale: 0.2,
            opacity: 0,
            rotate: particle.rotate,
          }}
          transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          style={{
            width: particle.size,
            height: particle.size,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Image
            src="/images/particle.webp"
            alt="Particle"
            width={particle.size}
            height={particle.size}
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  );
}