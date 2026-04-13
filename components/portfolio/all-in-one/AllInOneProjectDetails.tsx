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

export function AllInOneProjectDetails() {
  return (
    <motion.section 
      className="relative w-full bg-white px-6 md:px-0 py-20 md:py-32"
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
              ALL IN ONE, LLC
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            variants={itemVariants}
            className="font-monarque text-[48px] md:text-[64px] leading-[56px] md:leading-[64px] tracking-[-0.04em] text-[#141414]"
          >
            Precision in Perception: A<br className="hidden md:block" /> Strategic Rebrand
          </motion.h2>

          {/* Body Text */}
          <div className="flex flex-col space-y-6 md:space-y-8 max-w-[900px]">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] leading-relaxed md:leading-[1.5] text-[#525252]"
            >
              All-In-One removes friction from home buying by consolidating inspections—residential, commercial, rural, and septic—under one service. Their model hinges on efficiency: skilled inspectors, scheduling software, and a support team handling logistics.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] leading-relaxed md:leading-[1.5] text-[#525252]"
            >
              Our partnership is to help strip away visual noise, implement a structured identity system and purposeful web architecture. Typography and interface elements now mirror the company’s methodical inspection process, while strategic emphasis on septic services addresses a recurring customer need. The result isn’t just aesthetic—it’s a functional framework that accelerates lead conversion.
            </motion.p>
          </div>

          {/* Partnership Section */}
          <div className="flex flex-col items-center space-y-6 md:space-y-8 mt-4">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] font-medium text-[#141414]"
            >
              Partnered with All-In-One on:
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 md:gap-[12px]"
            >
              {["Brand strategy", "Identity refresh", "Website design & development"].map((service) => (
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
