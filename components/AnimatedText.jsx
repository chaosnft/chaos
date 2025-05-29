import { motion } from 'framer-motion';

export default function AnimatedText({ text, className }) {
  return (
    <div className={`animate-text ${className}`}>
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: -50 }} // Giảm y để animation nhẹ hơn
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} // Chỉ chạy animation 1 lần
          transition={{ duration: 0.5, delay: index * 0.03 }} // Giảm thời gian và delay
          style={{ display: 'inline-block' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
}