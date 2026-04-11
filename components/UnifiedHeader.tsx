import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import svgPaths from "../imports/svg-ojio9iwcmh";

interface UnifiedHeaderProps {
  currentPage: 'home' | 'preview' | 'blog';
  onNavigateHome: () => void;
  onNavigatePreview: () => void;
  onNavigateBlog: () => void;
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

const menuVariants = {
  closed: { 
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.3,
      ease: [0.16, 1, 0.3, 1]
    }
  },
  open: { 
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

function FeathersLogo() {
  return (
    <div className="h-8 relative shrink-0 w-[118.095px]">
      <div className="absolute bottom-0 left-0 right-[-0.001%] top-0">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 119 32"
        >
          <g id="Group 47860">
            <path
              clipRule="evenodd"
              d={svgPaths.p1bace600}
              fill="#A3A3A3"
              fillRule="evenodd"
              id="Subtract"
            />
            <g id="feathers">
              <path d={svgPaths.p374c1c00} fill="#525252" />
              <path d={svgPaths.p280e7080} fill="#525252" />
              <path d={svgPaths.p21a1f900} fill="#525252" />
              <path d={svgPaths.p21c62d40} fill="#525252" />
              <path d={svgPaths.p25a4d080} fill="#525252" />
              <path d={svgPaths.p1ebd1e90} fill="#525252" />
              <path d={svgPaths.p3549cf0} fill="#525252" />
              <path d={svgPaths.p26db2900} fill="#525252" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavigationButton({ 
  children, 
  isActive = false, 
  onClick 
}: { 
  children: React.ReactNode; 
  isActive?: boolean;
  onClick?: () => void;
}) {
  return (
    <motion.div 
      className={`relative rounded-lg shrink-0 cursor-pointer ${isActive ? 'bg-[#85ffd7]' : ''}`}
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      onClick={onClick}
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
          <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="block leading-[24px] whitespace-pre">
              {children}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function MobileMenuButton({ isOpen, onClick }: { isOpen: boolean, onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="md:hidden p-2 text-[#525252] hover:bg-neutral-100 rounded-lg transition-colors border border-transparent active:border-neutral-200"
    >
       <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
         {isOpen ? (
           <path d="M18 6L6 18M6 6l12 12" />
         ) : (
           <>
             <line x1="4" y1="12" x2="20" y2="12" />
             <line x1="4" y1="6" x2="20" y2="6" />
             <line x1="4" y1="18" x2="20" y2="18" />
           </>
         )}
       </svg>
    </button>
  );
}

function StartProjectButton() {
  return (
    <motion.div
      className="bg-[#141414] relative rounded-lg shrink-0 cursor-pointer"
      whileHover={{ y: -1 }}
      whileTap={{ y: 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-1 relative">
          <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#ffffff] text-[16px] text-left text-nowrap tracking-[-0.64px]">
            <p className="block leading-[24px] whitespace-pre">start a project</p>
          </div>
          <div className="relative shrink-0 size-3">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 12 12"
            >
              <path
                clipRule="evenodd"
                d={svgPaths.p2eb0b280}
                fill="white"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function UnifiedHeader({ currentPage, onNavigateHome, onNavigatePreview, onNavigateBlog }: UnifiedHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigate = (navFn: () => void) => {
    navFn();
    setIsMenuOpen(false);
  };

  return (
    <motion.div 
      className="bg-[#ffffff] relative shrink-0 w-full z-50 border-b border-neutral-50 md:border-none rounded-none"
      style={{ borderRadius: 0 }}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start px-6 py-4 md:p-6 relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
            <motion.div 
              className="cursor-pointer"
              variants={itemVariants}
              onClick={() => handleNavigate(onNavigateHome)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FeathersLogo />
            </motion.div>
            
            {/* Desktop Navigation */}
            <motion.div 
              className="hidden md:flex box-border content-stretch flex-row gap-8 items-center justify-start p-0 relative shrink-0"
              variants={itemVariants}
            >
              <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
                <NavigationButton 
                  isActive={currentPage === 'preview'}
                  onClick={() => handleNavigate(onNavigatePreview)}
                >
                  the people
                </NavigationButton>
                
                <NavigationButton 
                  isActive={currentPage === 'blog'}
                  onClick={() => handleNavigate(onNavigateBlog)}
                >
                  our blogs
                </NavigationButton>
              </div>
              
              <StartProjectButton />
            </motion.div>

            {/* Mobile Menu Toggle */}
            <MobileMenuButton isOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                className="md:hidden w-full overflow-hidden"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                <div className="flex flex-col gap-4 pt-8 pb-4">
                  <NavigationButton 
                    isActive={currentPage === 'preview'}
                    onClick={() => handleNavigate(onNavigatePreview)}
                  >
                    the people
                  </NavigationButton>
                  
                  <NavigationButton 
                    isActive={currentPage === 'blog'}
                    onClick={() => handleNavigate(onNavigateBlog)}
                  >
                    our blogs
                  </NavigationButton>
                  
                  <div className="pt-2">
                    <StartProjectButton />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}