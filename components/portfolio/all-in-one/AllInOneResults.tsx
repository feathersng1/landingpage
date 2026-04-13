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

export function AllInOneResults() {
  return (
    <motion.section 
      className="relative w-full bg-white px-6 py-20 md:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Text Block */}
        <div className="max-w-[1000px] w-full flex flex-col items-center text-center mb-16 md:mb-24">
          
          <motion.span 
            variants={itemVariants}
            className="font-onest text-[14px] md:text-[16px] font-medium tracking-[0.1em] text-[#525252] uppercase mb-4"
          >
            THE RESULTS
          </motion.span>

          <motion.h2 
            variants={itemVariants}
            className="font-onest text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[40px] tracking-tight text-[#141414] mb-6"
          >
            From a Fragmented Experience <br className="hidden md:block" /> to a Seamless One
          </motion.h2>

          <div className="flex flex-col space-y-6 max-w-[900px]">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] font-normal leading-[24px] md:leading-[32px] text-[#525252]"
            >
              The redesign unified the All-In-One experience across all platforms. By stripping away visual clutter and prioritizing the customer's immediate needs—services, audience, and scheduling—we created a frictionless path to conversion.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] font-normal leading-[24px] md:leading-[32px] text-[#525252]"
            >
              Every design choice, from the methodical typography to the intuitive cost calculator, was engineered to turn casual interest into actionable leads.
            </motion.p>
          </div>
        </div>

        {/* Large Visual Mockup */}
        <motion.div 
          variants={itemVariants}
          className="w-full flex justify-center"
        >
          <img 
            src="/landingpage/aio/aio-mainhero.png" 
            alt="All-In-One Laptop Mockup" 
            className="w-full h-auto max-w-[1280px]"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}
