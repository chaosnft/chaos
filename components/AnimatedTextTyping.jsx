import { motion, useInView } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

export default function AnimatedTextTyping({ text, className = '' }) {
    // Kiểm tra text để tránh lỗi undefined
    if (!text || typeof text !== 'string') {
        console.warn('AnimatedTextTyping: Invalid text prop', text);
        return <span className={className}>Invalid text</span>;
    }

    const [displayedText, setDisplayedText] = useState('');
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 }); // Chạy 1 lần khi 30% component vào view

    useEffect(() => {
        if (!isInView) return; // Không chạy nếu không trong viewport

        setDisplayedText('');
        setIsTypingComplete(false);
        let index = 0;

        const typingInterval = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.substring(0, index + 1));
                index++;
            } else {
                setIsTypingComplete(true);
                clearInterval(typingInterval);
            }
        }, 200); // Tốc độ đánh chữ: 100ms mỗi ký tự

        return () => clearInterval(typingInterval);
    }, [isInView, text]);

    return (
  <div ref={ref} className={`flex flex-col items-center ${className}`}>
    {displayedText.split('\n').map((line, lineIndex) => (
      <div key={`line-${lineIndex}`} className="inline-flex items-center">
        {line.split('').map((char, charIndex) => (
          <motion.span
            key={`${char}-${lineIndex}-${charIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            style={{ display: 'inline-block' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
        {lineIndex === displayedText.split('\n').length - 1 && (
          <motion.span
            className="ml-1 text-dark-brown"
            initial={{ opacity: 0 }}
            animate={{ opacity: isTypingComplete ? [1, 0, 1] : 1 }}
            transition={{
              opacity: { repeat: Infinity, duration: 0.8 },
            }}
            style={{ display: 'inline-block', verticalAlign: 'middle' }}
          >
            |
          </motion.span>
        )}
      </div>
    ))}
  </div>
);
}