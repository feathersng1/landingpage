import { motion } from "framer-motion";
import { UnifiedHeader } from "./UnifiedHeader";
import { Hero } from "./Hero";
import { ClientLogos } from "./ClientLogos";
import { PreviewServices } from "./preview/PreviewServices";
import { Values } from "./Values";
import { Story } from "./Story";
import { Team } from "./Team";
import { Footer } from "./Footer";

interface PreviewProps {
  currentPage: 'home' | 'preview' | 'blog';
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

export function Preview({ currentPage, onNavigateHome, onNavigatePreview, onNavigateBlog }: PreviewProps) {
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
            <Hero />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <ClientLogos />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <PreviewServices />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <Values />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <Story />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <Team />
          </motion.div>
        </div>
        
        {/* Spacer to reveal footer - matches footer height exactly */}
        <div className="h-[700px] bg-transparent"></div>
      </motion.div>
    </div>
  );
}