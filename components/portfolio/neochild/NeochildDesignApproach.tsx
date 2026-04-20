import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.2,
      delayChildren: 0.1
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

export function NeochildDesignApproach() {
  return (
    <motion.section 
      className="relative w-full bg-white px-6 py-20 md:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="max-w-[1000px] w-full flex flex-col items-center text-center">
          
          {/* Main Heading */}
          <motion.h2 
            variants={itemVariants}
            className="font-onest text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[40px] tracking-tight text-[#141414] uppercase mb-6 md:mb-[24px]"
          >
            VISUAL IDENTITY: PURPOSEFUL AND WARM
          </motion.h2>

          {/* Body Text */}
          <div className="flex flex-col space-y-6 md:space-y-8 max-w-[900px]">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] font-normal leading-[24px] md:leading-[32px] text-[#525252]"
            >
              Neo childcare's style guidelines reflected its dual role as both healthcare provider and community ally. The primary blue (#2A5C99) conveyed reliability, while accents of sunflower yellow (#FFD700) highlighted interactive elements. Typography paired the clean, modern Inter (headers) with Lato (body text), ensuring readability across devices.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] font-normal leading-[24px] md:leading-[32px] text-[#525252]"
            >
              Photography avoided sterile hospital scenes, instead showcasing Nigerian mothers actively using the platform with their children. Illustrations were sparingly used as decorative flourishes, keeping focus on functionality. The overall aesthetic was warm but uncluttered—mirroring Neo's promise to make healthcare feel simple, not overwhelming.
            </motion.p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
