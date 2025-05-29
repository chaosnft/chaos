import { motion } from 'framer-motion';

export default function Section2() {
  return (
    <section id="section2" className="min-h-screen flex items-center justify-center m-0 p-0">
      <div className="flex flex-col md:flex-row w-full min-h-screen border-b-2 border-dark-brown">
        <div className="w-full md:w-1/2 bg-light-yellow min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold text-navy-black mb-4">
            Register Whitelist
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-navy-black mb-6">
            We strive to build a passionate community where elemental stories are told through unique NFT art and fashion.
          </p>
          <a
            href="https://form.typeform.com/to/Neuhoy24" // Thay bằng URL thực tế của bạn
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="relative px-6 py-3 sm:px-8 sm:py-4 bg-navy-black text-ivory text-lg sm:text-2xl md:text-3xl lg:text-4xl border-4 border-black rounded-2xl hover-scan hover:translate-x-1 hover:translate-y-1 hover:brightness-90 transition-all duration-300 shadow-cartoon z-10"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Whitelist
            </motion.button>
          </a>
        </div>
        <div className="w-full md:w-1 bg-dark-brown md:block hidden"></div>
        <div className="w-full md:w-1/2 bg-pink min-h-[50vh] md:min-h-screen flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 z-15">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase font-bold text-ivory mb-4">
            Join the Community
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-ivory mb-6 max-w-full overflow-wrap-break-word whitespace-normal text-center z-20">
            Follow the main{' '}
            <a
              href="https://x.com/chaosnft_xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-black !important hover:underline z-20"
            >
              Twitter page
            </a>{' '}
            and the{' '}
            <a
              href="https://x.com/legionof_chaos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-black !important hover:underline z-20"
            >
              Results page
            </a>{' '}
            to check your luck.
          </p>
          <a
            href="https://x.com/chaosnft_xyz" // Liên kết đến trang Twitter chính
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="relative px-6 py-3 sm:px-8 sm:py-4 bg-navy-black text-ivory text-lg sm:text-2xl md:text-3xl lg:text-4xl border-4 border-black rounded-2xl hover-scan hover:translate-x-1 hover:translate-y-1 hover:brightness-90 transition-all duration-300 shadow-cartoon z-30"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              Follow
            </motion.button>
          </a>
        </div>
      </div>
    </section>
  );
}