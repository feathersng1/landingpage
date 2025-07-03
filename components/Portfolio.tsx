import { motion } from "framer-motion";
import { UnifiedHeader } from "./UnifiedHeader";
import { PortfolioHero } from "./portfolio/PortfolioHero";
import { PortfolioIntro } from "./portfolio/PortfolioIntro";
import { PortfolioGallery1 } from "./portfolio/PortfolioGallery1";
import { PortfolioText } from "./portfolio/PortfolioText";
import { PortfolioGallery2 } from "./portfolio/PortfolioGallery2";
import { PortfolioGallery3 } from "./portfolio/PortfolioGallery3";
import { PortfolioTestimonial } from "./portfolio/PortfolioTestimonial";
import { PortfolioMore } from "./portfolio/PortfolioMore";
import { PortfolioRelated } from "./portfolio/PortfolioRelated";
import { Footer } from "./Footer";

interface PortfolioProps {
  onNavigateHome: () => void;
  onNavigatePreview: () => void;
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

export function Portfolio({ onNavigateHome, onNavigatePreview, onNavigateBlog }: PortfolioProps) {
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
              currentPage="home" // Portfolio doesn't show active state in nav
              onNavigateHome={onNavigateHome}
              onNavigatePreview={onNavigatePreview}
              onNavigateBlog={onNavigateBlog}
            />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PortfolioHero />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PortfolioIntro />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PortfolioGallery1 />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PortfolioText />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PortfolioGallery2 />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PortfolioGallery3 />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PortfolioTestimonial />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PortfolioMore />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PortfolioRelated />
          </motion.div>
        </div>
        
        {/* Spacer to reveal footer - matches footer height exactly */}
        <div className="h-[700px] bg-transparent"></div>
      </motion.div>
    </div>
  );
}