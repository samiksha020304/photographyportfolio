import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Desc = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto p-10">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 rounded-full blur-3xl w-80 h-80 md:w-[500px] md:h-[500px] -z-10" />

      {/* Left Side - Image with Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-lg border-4 border-white"
      >
        <img src="/greg.png" alt="Gregory Ross" className="w-full h-full object-cover" />
        {/* Soft Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-black/40" />
      </motion.div>

      {/* Right Side - Text Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="max-w-md md:max-w-lg text-center md:text-left space-y-4 mt-6 md:mt-0 md:ml-10"
      >
        <motion.h1 custom={0} variants={textVariants} className="text-3xl md:text-4xl font-bold text-white">
          Hey, I'm <span className="text-blue-300">Gregory Ross.</span>
        </motion.h1>

        <motion.p custom={1} variants={textVariants} className="text-lg text-gray-300">
          A passionate visual storyteller, capturing emotions through the lens. I blend creativity with precision to create
          timeless memories.
        </motion.p>

        <motion.p custom={2} variants={textVariants} className="text-lg italic text-gray-400">
          Driven by art, powered by adventure, inspired by love.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all"
        >
          Explore My Work
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Desc;
