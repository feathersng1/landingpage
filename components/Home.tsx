import { motion } from "framer-motion";
import { UnifiedHeader } from "./UnifiedHeader";
import { HomeHero } from "./home/HomeHero";
import { PortfolioSection } from "./home/PortfolioSection";
import { HomeServices } from "./home/HomeServices";
import { Footer } from "./Footer";

interface HomeProps {
  currentPage: 'home' | 'preview' | 'blog';
  onNavigateHome: () => void;
  onNavigatePreview: () => void;
  onNavigatePortfolio: () => void;
  onNavigateBlog: () => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function Home({ currentPage, onNavigateHome, onNavigatePreview, onNavigatePortfolio, onNavigateBlog }: HomeProps) {
  return (
    <div className="relative">
      {/* Fixed Footer - positioned at bottom with its natural height */}
      <Footer />
      
      {/* Main content that scrolls over the footer */}
      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* All content sections with solid white background */}
        <div className="bg-[#ffffff]">
          <motion.div variants={sectionVariants}>
            <UnifiedHeader 
              currentPage={currentPage}
              onNavigateHome={onNavigateHome}
              onNavigatePreview={onNavigatePreview}
              onNavigateBlog={onNavigateBlog}
            />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <HomeHero />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PortfolioSection onNavigatePortfolio={onNavigatePortfolio} />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <HomeServices />
          </motion.div>
        </div>
        
        {/* Spacer to reveal footer - matches footer height exactly */}
        <div className="h-[700px] bg-transparent"></div>
      </motion.div>
    </div>
  );
}