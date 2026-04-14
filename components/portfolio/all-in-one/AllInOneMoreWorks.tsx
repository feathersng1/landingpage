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

export function AllInOneMoreWorks() {
  return (
    <motion.section
      className="w-full bg-white py-20 md:py-32 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        
        {/* Heading */}
        <motion.h2 
          variants={itemVariants}
          className="font-monarque text-[64px] md:text-[80px] leading-[64px] md:leading-[80px] font-normal text-[#141414] text-center mb-16 md:mb-24"
        >
          See <span className="italic">more works</span>
        </motion.h2>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 w-full">
          
          {/* Project 1 */}
          <motion.div variants={itemVariants} className="flex flex-col group cursor-pointer">
            <div className="relative w-full aspect-[4/3] bg-[#B80733] rounded-[16px] overflow-hidden mb-6 flex items-center justify-center p-6 sm:p-12 md:p-20">
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src="/aio/hand-holding-phone.svg" 
                  alt="Statement first; lifestyle always" 
                  className="max-w-full max-h-full object-contain rounded-[12px] shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className="font-onest text-[18px] md:text-[20px] font-medium text-[#141414]">Statement first; lifestyle always</h3>
              <p className="font-onest text-[12px] md:text-[14px] font-medium text-[#525252] uppercase tracking-wider">SUPREME</p>
            </div>
          </motion.div>

          {/* Project 2 (Placeholder) */}
          <motion.div variants={itemVariants} className="flex flex-col group cursor-pointer">
            <div className="relative w-full aspect-[4/3] bg-[#E5E5E5] rounded-[16px] overflow-hidden mb-6 flex items-center justify-center p-6 sm:p-12 md:p-20">
              <div className="relative w-full h-full bg-[#FAFAFA] rounded-[12px] overflow-hidden flex items-center justify-center border border-neutral-100">
                <div className="text-neutral-400 font-onest uppercase tracking-tighter text-[14px]">[ Project Preview ]</div>
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className="font-onest text-[18px] md:text-[20px] font-medium text-[#141414]">Statement first; lifestyle always</h3>
              <p className="font-onest text-[12px] md:text-[14px] font-medium text-[#525252] uppercase tracking-wider">SUPREME</p>
            </div>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
