import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1,
      delayChildren: 0.3
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

export function NotrifyProjectDetails() {
  return (
    <motion.section 
      className="relative w-full bg-white px-6 py-20 md:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="max-w-[1000px] w-full flex flex-col items-center text-center space-y-8 md:space-y-12">
          
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="px-4 py-1.5 border border-neutral-100 rounded-lg"
          >
            <span 
              className="font-onest text-[16px] font-medium tracking-[-0.04em] text-[#525252] uppercase"
            >
              NOTRIFY
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            variants={itemVariants}
            className="font-monarque text-[48px] md:text-[64px] leading-[56px] md:leading-[64px] tracking-[-0.04em] text-[#141414]"
          >
            One Place for Medical Care
          </motion.h2>

          {/* Body Text */}
          <div className="flex flex-col space-y-10 md:space-y-16 max-w-[900px]">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] leading-relaxed md:leading-[1.5] text-[#525252]"
            >
              Founded in 2023, NOTRIFY is a revolutionary health management platform designed to end the fragmentation of American healthcare. This case study explores the strategic identity, web, and app UI design that transformed NOTRIFY into an intuitive command center, empowering users to seamlessly schedule appointments, manage medications, and control their unified, shareable health records.
            </motion.p>

            <div className="flex flex-col space-y-6">
               <motion.h3
                variants={itemVariants}
                className="font-onest text-[20px] md:text-[24px] font-semibold text-[#141414] uppercase tracking-tight"
               >
                 IDENTITY: CLEAN, CENTRALIZED VISUAL LANGUAGE
               </motion.h3>
               <motion.p 
                variants={itemVariants}
                className="font-onest text-[16px] md:text-[20px] leading-relaxed md:leading-[1.6] text-[#525252]"
              >
                The Notrify logo masterfully combines a custom logomark depicting a sprouting seed—symbolizing nurtured growth and centralized care—with a modern, approachable logotype in Manrope, forging an identity that is both human-centric and digitally reliable. The color palette is purposefully simple and functional: a primary deep blue establishes reliability, supported by accessible secondary tones and clear status colors for alerts and updates. This minimalist approach ensures visual calm and clear communication.
              </motion.p>
              <motion.p 
                variants={itemVariants}
                className="font-onest text-[16px] md:text-[20px] leading-relaxed md:leading-[1.6] text-[#525252]"
              >
                This foundation extends across all touch points. The Manrope typeface was selected for its geometric clarity and excellent readability on screens, supporting the brand’s informational nature. A complementary suite of custom icons provides intuitive visual guidance for key app functions—managing appointments, medications, and records—creating a cohesive and instantly understandable system that reduces cognitive load and enhances the user experience.
              </motion.p>
            </div>
          </div>

          {/* Partnership Section */}
          <div className="flex flex-col items-center space-y-6 md:space-y-8 mt-4">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] font-medium text-[#141414]"
            >
              Partnered with Notrify on:
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 md:gap-[12px]"
            >
              {["Brand identity", "Product strategy", "Website design", "User interface design"].map((service) => (
                <div 
                  key={service}
                  className="bg-[#F5F5F5] rounded-[8px] px-[12px] py-[4px]"
                >
                  <span className="font-onest text-[16px] text-[#525252]">
                    {service}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
