import { motion } from "framer-motion";
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
  return (
    <motion.div 
      className="bg-[#ffffff] relative shrink-0 w-full"
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start p-[24px] relative size-full">
          <div className="box-border content-stretch flex flex-row items-center justify-between p-0 relative shrink-0 w-full">
            <motion.div 
              className="cursor-pointer"
              variants={itemVariants}
              onClick={onNavigateHome}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FeathersLogo />
            </motion.div>
            
            <motion.div 
              className="box-border content-stretch flex flex-row gap-8 items-center justify-start p-0 relative shrink-0"
              variants={itemVariants}
            >
              <div className="box-border content-stretch flex flex-row gap-4 items-center justify-start p-0 relative shrink-0">
                <NavigationButton 
                  isActive={currentPage === 'preview'}
                  onClick={onNavigatePreview}
                >
                  the people
                </NavigationButton>
                
                <NavigationButton 
                  isActive={currentPage === 'blog'}
                  onClick={onNavigateBlog}
                >
                  our blogs
                </NavigationButton>
              </div>
              
              <StartProjectButton />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}