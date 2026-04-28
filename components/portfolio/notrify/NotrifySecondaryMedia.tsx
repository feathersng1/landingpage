import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const cardSpreadVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function NotrifySecondaryMedia() {
  return (
    <motion.section
      className="w-full bg-white pb-20 md:pb-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 px-0 md:px-6">
        
        {/* Row 1: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">
          
          {/* Card 1: Mobile App Preview */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-[#F5F5F5] rounded-[16px] aspect-square flex flex-col p-6 md:p-12 lg:p-20 pb-0 md:pb-0 lg:pb-0"
          >
            <div className="flex-1 flex items-end justify-center overflow-hidden">
              <img
                src="/notrify/mobile.svg"
                alt="Notrify Mobile App"
                className="max-w-full max-h-full object-contain object-bottom"
              />
            </div>
          </motion.div>

          {/* Card 2: Feature Cards (Splitting Animation) */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-gradient-to-b from-[#FAFAFA] to-[#D4D4D4] rounded-[16px] aspect-square flex items-center justify-center relative overflow-hidden px-14 md:px-12 lg:px-20"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Card 2 (Left) */}
              <motion.img
                src="/notrify/card2.svg"
                alt="Feature Card Left"
                className="absolute w-[60%] h-auto z-10"
                initial={{ x: 0, rotate: 0 }}
                whileInView={{ x: "-42%", rotate: -8 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              />
              {/* Card 3 (Right) */}
              <motion.img
                src="/notrify/card3.svg"
                alt="Feature Card Right"
                className="absolute w-[60%] h-auto z-10"
                initial={{ x: 0, rotate: 0 }}
                whileInView={{ x: "42%", rotate: 8 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              />
              {/* Card 1 (Center) */}
              <motion.img
                src="/notrify/card1.svg"
                alt="Feature Card Center"
                className="absolute w-[60%] h-auto z-20 rounded-[12px]"
                variants={cardSpreadVariants}
              />
            </div>
          </motion.div>
        </div>

        {/* Row 2: Desktop Hero with Cloud BG */}
        <motion.div
          variants={itemVariants}
          className="relative w-full overflow-hidden aspect-[16/9] md:aspect-[21/9] rounded-none md:rounded-[16px] flex items-center justify-center"
        >
          {/* Cloud Background - Subtle Parallax */}
          <motion.img
            src="/notrify/cloud.jpg"
            alt="Cloud Background"
            className="absolute inset-0 w-full h-[120%] object-cover"
            initial={{ y: "-10%" }}
            whileInView={{ y: "0%" }}
            transition={{ duration: 2, ease: "easeOut" }}
          />
          
          {/* Desktop Preview - Subtle Float and Entrance */}
          <motion.div 
            className="relative z-10 w-[85%] md:w-[75%] lg:w-[65%] h-full flex items-center justify-center"
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            <motion.img
              src="/notrify/desktop-hero.png"
              alt="Notrify Desktop Experience"
              className="w-full h-auto drop-shadow-2xl"
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
}
