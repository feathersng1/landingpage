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

export function AllInOneBookingExperience() {
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
            FRICTIONLESS BOOKING EXPERIENCE
          </motion.h2>

          {/* Body Text */}
          <div className="flex flex-col space-y-6 md:space-y-8 max-w-[900px]">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] font-normal leading-[24px] md:leading-[32px] text-[#525252]"
            >
              The "Book an Inspection" flow was optimized for speed and clarity. Bulky forms were replaced with a step-by-step approach, requesting only essential details upfront. Bold, straightforward headers guide users, while a clean layout eliminates distractions. Key access points—like the cost calculator—feed directly into scheduling, maintaining momentum from quote to confirmation. Every design choice minimizes cognitive load, helping users complete bookings in seconds, not minutes.
            </motion.p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
