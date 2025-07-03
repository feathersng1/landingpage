import { motion } from "framer-motion";

interface PortfolioHeaderProps {
  onNavigateHome: () => void;
  onNavigatePreview: () => void;
}

const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function PortfolioHeader({ onNavigateHome, onNavigatePreview }: PortfolioHeaderProps) {
  return (
    <motion.div 
      className="bg-[#ffffff] h-20 relative shrink-0 w-full"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 h-20 items-start justify-start p-[24px] relative w-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
            <motion.div 
              className="h-8 relative shrink-0 w-[118.095px]"
              variants={itemVariants}
            >
              <div className="font-['Onest:Regular',_sans-serif] relative shrink-0 text-[24px] tracking-[-0.96px] text-[#141414]">
                <p className="block leading-[32px]">Feathers</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="box-border content-stretch flex flex-row gap-8 items-center justify-start p-0 relative shrink-0"
              variants={itemVariants}
            >
              <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
                <motion.div 
                  className="relative rounded-lg shrink-0 cursor-pointer"
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
                      <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
                        <p className="block leading-[24px] whitespace-pre">the people</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative rounded-lg shrink-0 cursor-pointer"
                  whileHover={{ y: -1 }}
                  whileTap={{ y: 0 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  onClick={onNavigatePreview}
                >
                  <div className="flex flex-row items-center justify-center relative size-full">
                    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
                      <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
                        <p className="block leading-[24px] whitespace-pre">our blogs</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div
                className="bg-[#141414] relative rounded-lg shrink-0 cursor-pointer"
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                onClick={onNavigateHome}
              >
                <div className="flex flex-row items-center justify-center relative size-full">
                  <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-1 relative">
                    <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap tracking-[-0.64px]">
                      <p className="block leading-[24px] whitespace-pre">start a project</p>
                    </div>
                    <div className="relative shrink-0 size-3">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                        <path
                          clipRule="evenodd"
                          d="M6.17574 1.97574C6.41005 1.74142 6.78995 1.74142 7.02426 1.97574L10.6243 5.57574C10.8586 5.81005 10.8586 6.18995 10.6243 6.42426L7.02426 10.0243C6.78995 10.2586 6.41005 10.2586 6.17574 10.0243C5.94142 9.78995 5.94142 9.41005 6.17574 9.17574L8.75147 6.6L1.8 6.6C1.46863 6.6 1.2 6.33137 1.2 6C1.2 5.66863 1.46863 5.4 1.8 5.4H8.75147L6.17574 2.82426C5.94142 2.58995 5.94142 2.21005 6.17574 1.97574Z"
                          fill="white"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}