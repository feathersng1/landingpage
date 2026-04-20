import { motion } from "framer-motion";
import { UnifiedHeader } from "../UnifiedHeader";
import { Footer } from "../Footer";
import { NeochildHero } from "./neochild/NeochildHero";
import { NeochildProjectDetails } from "./neochild/NeochildProjectDetails";
import { NeochildGallery } from "./neochild/NeochildGallery";
import { NeochildDesignApproach } from "./neochild/NeochildDesignApproach";

interface PortfolioNeochildProps {
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
    scale: 1
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

export function PortfolioNeochild({ onNavigateHome, onNavigatePreview, onNavigateBlog }: PortfolioNeochildProps) {
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
        <div className="bg-[#ffffff] rounded-none shadow-none" style={{ borderRadius: 0 }}>
          <motion.div variants={sectionVariants}>
            <UnifiedHeader
              currentPage="home"
              onNavigateHome={onNavigateHome}
              onNavigatePreview={onNavigatePreview}
              onNavigateBlog={onNavigateBlog}
            />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NeochildHero />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NeochildProjectDetails />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NeochildGallery />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NeochildDesignApproach />
          </motion.div>

        </div>

        {/* Spacer to reveal footer - matches footer height exactly */}
        <div className="h-[700px] bg-transparent"></div>
      </motion.div>
    </div>
  );
}
