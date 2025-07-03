import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import imgGalleryImage from "figma:asset/6c87d7e5bdb6057c73c39f1c76ff757a9695a983.png";
import imgGalleryImage1 from "figma:asset/b0f99158261eacc93621b3fb44782f4456700dc3.png";
import imgGalleryImage2 from "figma:asset/2e5307383a2af6434433209c7cddfe2e55642d24.png";
import imgGalleryImage3 from "figma:asset/dd82c381553c1a98d5786b8cdcb2b8ce3ae83f92.png";
import imgGalleryImage4 from "figma:asset/2c90cbf7424b73d79e9d12834f1c68a323760bad.png";
import imgGalleryImage5 from "figma:asset/bc2bbac83e9cd45128a49c13c32c197b90b52c30.png";
import imgGalleryImage7 from "figma:asset/760589e28cb8ff5e8d20e509379aae53081ec9ee.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
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

export function PortfolioGallery1() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-6 md:px-6 sm:px-4 py-0 relative w-full">
          <div className="basis-0 grow max-w-[1440px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center max-w-inherit relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start max-w-inherit px-0 py-20 md:py-20 sm:py-12 relative w-full">
                <motion.div
                  ref={ref}
                  className="box-border content-stretch flex flex-row gap-6 items-start justify-start p-0 relative shrink-0 w-full max-w-[1392px] mx-auto"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                >
                  
                  {/* Desktop & Tablet: Bento Grid Layout */}
                  <div className="aspect-[1392/4023] basis-0 box-border gap-6 grid grid-cols-[repeat(12,_minmax(0px,_1fr))] grid-rows-[repeat(5,_minmax(0px,_1fr))] grow min-h-px min-w-px overflow-clip p-0 relative shrink-0 hidden md:grid">
                    
                    <motion.div
                      className="[background-size:cover,_auto] [grid-area:5_/_1_/_auto_/_span_12] bg-[position:50%_50%,_0%_0%] bg-neutral-100 rounded-2xl shrink-0"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage}')` }}
                    />
                    
                    <motion.div
                      className="[background-size:cover,_auto] [grid-area:1_/_1_/_auto_/_span_12] bg-[position:50%_50%,_0%_0%] bg-neutral-100 rounded-2xl shrink-0"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage1}')` }}
                    />
                    
                    <motion.div
                      className="[background-size:cover,_cover,_cover,_auto] [grid-area:2_/_1_/_auto_/_span_12] bg-[position:50%_50%,_50%_50%,_50%_50%,_0%_0%] bg-neutral-100 rounded-2xl shrink-0"
                      variants={itemVariants}
                      style={{
                        backgroundImage: `url('${imgGalleryImage2}'), url('${imgGalleryImage3}'), url('${imgGalleryImage4}')`,
                      }}
                    />
                    
                    <motion.div
                      className="[background-size:cover,_auto] [grid-area:3_/_1_/_auto_/_span_6] bg-[position:50%_50%,_0%_0%] bg-neutral-100 rounded-2xl shrink-0"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage5}')` }}
                    />
                    
                    <motion.div
                      className="[background-size:cover,_auto] [grid-area:3_/_7_/_auto_/_span_6] bg-[position:50%_50%,_0%_0%] bg-neutral-100 rounded-2xl shrink-0"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage}')` }}
                    />
                    
                    <motion.div
                      className="[background-size:cover,_auto] [grid-area:4_/_1_/_auto_/_span_12] bg-[position:50%_50%,_0%_0%] bg-neutral-100 rounded-2xl shrink-0"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage7}')` }}
                    />
                  </div>

                  {/* Mobile: Single Column Stack Layout */}
                  <div className="flex flex-col gap-6 w-full md:hidden">
                    
                    <motion.div
                      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[280px] rounded-2xl shrink-0 w-full"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage1}')` }}
                    />
                    
                    <motion.div
                      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[280px] rounded-2xl shrink-0 w-full"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage2}')` }}
                    />
                    
                    <motion.div
                      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[280px] rounded-2xl shrink-0 w-full"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage5}')` }}
                    />
                    
                    <motion.div
                      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[280px] rounded-2xl shrink-0 w-full"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage}')` }}
                    />
                    
                    <motion.div
                      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[280px] rounded-2xl shrink-0 w-full"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage7}')` }}
                    />

                    <motion.div
                      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[280px] rounded-2xl shrink-0 w-full"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage3}')` }}
                    />

                    <motion.div
                      className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[280px] rounded-2xl shrink-0 w-full"
                      variants={itemVariants}
                      style={{ backgroundImage: `url('${imgGalleryImage4}')` }}
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}