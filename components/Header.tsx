import { motion } from "framer-motion";

interface HeaderProps {
  onNavigateHome?: () => void;
  onNavigatePortfolio?: () => void;
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

export function Header({ onNavigateHome, onNavigatePortfolio }: HeaderProps) {
  return (
    <motion.div 
      className="relative shrink-0 w-full"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="basis-0 grow max-w-[1440px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center max-w-inherit relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center max-w-inherit px-0 py-6 relative w-full">
                <div className="aspect-[1440/84] basis-0 box-border content-stretch flex flex-row gap-2.5 grow items-center justify-between min-h-px min-w-px p-0 relative shrink-0">
                  <motion.div 
                    className="basis-0 grow min-h-px min-w-px relative shrink-0"
                    variants={itemVariants}
                  >
                    <div className="flex flex-row items-center relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start px-0 py-0 relative w-full">
                        <div className="font-['Onest:Regular',_sans-serif] relative shrink-0 text-[24px] tracking-[-0.96px] text-[#141414]">
                          <p className="block leading-[32px]">Feathers</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                  
                  <motion.div 
                    className="box-border content-stretch flex flex-row gap-8 items-center justify-end px-0 py-0 relative shrink-0"
                    variants={itemVariants}
                  >
                    {onNavigateHome && (
                      <motion.div 
                        className="font-['Onest:Regular',_sans-serif] relative shrink-0 text-[16px] tracking-[-0.64px] text-[#141414] cursor-pointer"
                        whileHover={{ y: -1 }}
                        whileTap={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        onClick={onNavigateHome}
                      >
                        <p className="block leading-[24px]">Home</p>
                      </motion.div>
                    )}
                    
                    {onNavigatePortfolio && (
                      <motion.div 
                        className="font-['Onest:Regular',_sans-serif] relative shrink-0 text-[16px] tracking-[-0.64px] text-[#141414] cursor-pointer"
                        whileHover={{ y: -1 }}
                        whileTap={{ y: 0 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        onClick={onNavigatePortfolio}
                      >
                        <p className="block leading-[24px]">Work</p>
                      </motion.div>
                    )}
                    
                    <motion.div 
                      className="font-['Onest:Regular',_sans-serif] relative shrink-0 text-[16px] tracking-[-0.64px] text-[#141414] cursor-pointer"
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <p className="block leading-[24px]">About</p>
                    </motion.div>
                    
                    <motion.div 
                      className="font-['Onest:Regular',_sans-serif] relative shrink-0 text-[16px] tracking-[-0.64px] text-[#141414] cursor-pointer"
                      whileHover={{ y: -1 }}
                      whileTap={{ y: 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <p className="block leading-[24px]">Contact</p>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}