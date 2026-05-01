import { motion } from "framer-motion";
import { UnifiedHeader } from "../UnifiedHeader";
import { Footer } from "../Footer";
import { NotrifyHero } from "./notrify/NotrifyHero";
import { NotrifyProjectDetails } from "./notrify/NotrifyProjectDetails";
import { NotrifyGallery } from "./notrify/NotrifyGallery";
import { NotrifyDesignApproach } from "./notrify/NotrifyDesignApproach";
import { NotrifySecondaryMedia } from "./notrify/NotrifySecondaryMedia";
import { NotrifyAppDesign } from "./notrify/NotrifyAppDesign";
import { NotrifyMainMedia } from "./notrify/NotrifyMainMedia";
import { NotrifyCareCoordination } from "./notrify/NotrifyCareCoordination";
import { NotrifyCollaborationMedia } from "./notrify/NotrifyCollaborationMedia";
import { NotrifyTestimonial } from "./notrify/NotrifyTestimonial";
import { NotrifyFinalImage } from "./notrify/NotrifyFinalImage";
import { NotrifyMoreWorks } from "./notrify/NotrifyMoreWorks";

interface PortfolioNotrifyProps {
  onNavigateHome: () => void;
  onNavigatePreview: () => void;
  onNavigateBlog: () => void;
  onNavigatePortfolio: (project: 'all-in-one' | 'neochildcare' | 'notrify') => void;
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

export function PortfolioNotrify({ onNavigateHome, onNavigatePreview, onNavigateBlog, onNavigatePortfolio }: PortfolioNotrifyProps) {
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
            <NotrifyHero />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NotrifyProjectDetails />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NotrifyGallery />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NotrifyDesignApproach />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NotrifySecondaryMedia />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NotrifyAppDesign />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NotrifyMainMedia />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NotrifyCareCoordination />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NotrifyCollaborationMedia />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NotrifyTestimonial />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NotrifyFinalImage />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <NotrifyMoreWorks onNavigatePortfolio={onNavigatePortfolio} />
          </motion.div>

          {/* Further sections will be added here one by one */}

        </div>

        {/* Spacer to reveal footer - matches footer height exactly */}
        <div className="h-[700px] bg-transparent"></div>
      </motion.div>
    </div>
  );
}
