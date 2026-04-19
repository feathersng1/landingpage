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

export function NeochildProjectDetails() {
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
              NEOCHILDCARE
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2 
            variants={itemVariants}
            className="font-monarque text-[48px] md:text-[64px] leading-[56px] md:leading-[64px] tracking-[-0.04em] text-[#141414]"
          >
            Redesigning Healthcare<br className="hidden md:block" /> Access for African Mothers
          </motion.h2>

          {/* Body Text */}
          <div className="flex flex-col space-y-6 md:space-y-8 max-w-[900px]">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] leading-relaxed md:leading-[1.5] text-[#525252]"
            >
              Neo Childcare is revolutionizing how mothers across Africa—starting with Nigeria—access pediatric healthcare. In a region where child health services are often fragmented or inaccessible, Neo provides a streamlined digital solution. The platform connects parents to vital care, from telemedicine consultations to vaccination reminders, all through one intuitive interface. This redesign focused on transforming their landing page into a clearer gateway—one that immediately communicates their mission while driving action.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] leading-relaxed md:leading-[1.5] text-[#525252]"
            >
              The project had clear objectives: strengthen brand perception, grow the subscriber base, attract partners and investors, and simplify access to Neo’s services. Every design choice was intentional, ensuring the page not only informed but inspired engagement. For a company bridging critical healthcare gaps, first impressions matter—this redesign ensured theirs was both trustworthy and actionable.
            </motion.p>
          </div>

          {/* Partnership Section */}
          <div className="flex flex-col items-center space-y-6 md:space-y-8 mt-4">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] font-medium text-[#141414]"
            >
              Partnered with Neochildcare on:
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 md:gap-[12px]"
            >
              {["Brand strategy", "Brand identity", "Website design & development"].map((service) => (
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
