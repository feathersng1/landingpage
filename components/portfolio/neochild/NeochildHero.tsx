import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2
    }
  }
};

export function NeochildHero() {
  return (
    <motion.div
      className="relative shrink-0 w-full px-0 md:px-6 py-0 md:py-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-[1440px] mx-auto">
        <div
          className="relative w-full overflow-hidden shadow-none rounded-none md:rounded-[16px] lg:rounded-[16px]"
        >
          {/* Mobile Hero Image - Edge to edge */}
          <div className="block md:hidden relative w-full overflow-hidden">
            <img
              src="/neochild/neochild-hero2mobile.svg"
              alt="Neochild Healthcare Mobile"
              className="w-full h-auto block"
            />
            {/* Mobile Hero 1 Overlay (Phone Mockup) */}
            <motion.div
              className="absolute left-[-28%] bottom-0 w-[90%]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            >
              <img
                src="/neochild/neochild-hero1.png"
                alt="Neochild App Mockup"
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Desktop Hero Image - Rounded corners on md+ */}
          <div className="hidden md:block relative w-full overflow-hidden">
            <img
              src="/neochild/neochild-hero2.svg"
              alt="Neochild Healthcare Background"
              className="w-full h-auto block"
            />
            {/* Hero 1 Overlay (Phone Mockup) */}
            <motion.div
              className="absolute right-[-1%] bottom-0 w-[50%] lg:w-[48%]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            >
              <img
                src="/neochild/neochild-hero1.png"
                alt="Neochild App Mockup"
                className="w-full h-auto drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
