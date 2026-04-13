import { motion } from "framer-motion";
import { UnifiedHeader } from "../UnifiedHeader";
import { Footer } from "../Footer";
import { AllInOneHero } from "./all-in-one/AllInOneHero";
import { AllInOneProjectDetails } from "./all-in-one/AllInOneProjectDetails";
import { AllInOneGallery } from "./all-in-one/AllInOneGallery";
import { AllInOneDesignApproach } from "./all-in-one/AllInOneDesignApproach";
import { AllInOneSecondaryMedia } from "./all-in-one/AllInOneSecondaryMedia";
import { AllInOneBookingExperience } from "./all-in-one/AllInOneBookingExperience";
import { AllInOneResults } from "./all-in-one/AllInOneResults";

interface PortfolioAllInOneProps {
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

export function PortfolioAllInOne({ onNavigateHome, onNavigatePreview, onNavigateBlog }: PortfolioAllInOneProps) {
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
            <AllInOneHero />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <AllInOneProjectDetails />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <AllInOneGallery />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <AllInOneDesignApproach />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <AllInOneSecondaryMedia />
          </motion.div>

          <motion.div variants={sectionVariants}>
            <AllInOneBookingExperience />
          </motion.div>

          {/* <motion.div variants={sectionVariants}>
            <AllInOneResults />
          </motion.div> */}

          {/* Further sections will be added here one by one */}

        </div>

        {/* Spacer to reveal footer - matches footer height exactly */}
        <div className="h-[700px] bg-transparent"></div>
      </motion.div>
    </div>
  );
}
