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

interface AllInOneMoreWorksProps {
  onNavigatePortfolio: (project: 'all-in-one' | 'neochildcare' | 'notrify') => void;
}

export function AllInOneMoreWorks({ onNavigatePortfolio }: AllInOneMoreWorksProps) {
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
          
          {/* Project 1: Neochild */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col group cursor-pointer"
            onClick={() => onNavigatePortfolio('neochildcare')}
          >
            <div className="relative w-full aspect-[4/3] bg-[#F97513] rounded-[16px] overflow-hidden mb-6 flex items-center justify-center p-6 sm:p-12 md:p-20">
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src="/neochild/neochild-hero1.png" 
                  alt="Neochild Healthcare" 
                  className="max-w-full max-h-full object-contain rounded-[12px] shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className="font-onest text-[18px] md:text-[20px] font-medium text-[#141414]">Redesigning Healthcare Access for African Mothers</h3>
              <p className="font-onest text-[12px] md:text-[14px] font-medium text-[#525252] uppercase tracking-wider">NEOCHILDCARE</p>
            </div>
          </motion.div>

          {/* Project 2: Notrify */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col group cursor-pointer"
            onClick={() => onNavigatePortfolio('notrify')}
          >
            <div className="relative w-full aspect-[4/3] bg-[#0047FF] rounded-[16px] overflow-hidden mb-6 flex items-center justify-center p-6 sm:p-12 md:p-20">
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src="/notrify/notrify-hero.svg" 
                  alt="Notrify Medical Care" 
                  className="max-w-full max-h-full object-contain rounded-[12px] shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              <h3 className="font-onest text-[18px] md:text-[20px] font-medium text-[#141414]">One Place for Medical Care</h3>
              <p className="font-onest text-[12px] md:text-[14px] font-medium text-[#525252] uppercase tracking-wider">NOTRIFY</p>
            </div>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
