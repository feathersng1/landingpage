import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export function PortfolioGallery1() {
  const { ref, isVisible } = useScrollReveal();
  const base = import.meta.env.BASE_URL;

  const images = [
    { src: `${base}homepage.png`, alt: "All In One homepage" },
    { src: `${base}homepage-tilt.png`, alt: "All In One homepage tilted mockup" },
    { src: `${base}homepage-win-bg.png`, alt: "All In One homepage window mockup" },
    { src: `${base}team-page.png`, alt: "All In One team page" },
    { src: `${base}Frame.png`, alt: "All In One additional mockup" },
  ];

  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-6 md:px-6 sm:px-4 py-0 relative w-full">
          <div className="basis-0 grow max-w-[1440px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center max-w-inherit relative size-full">
              <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-start max-w-inherit px-0 py-20 md:py-20 sm:py-12 relative w-full">
                <motion.div
                  ref={ref}
                  className="flex flex-col gap-6 w-full"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                >
                  {/* Row 1: full width */}
                  <motion.div className="w-full rounded-2xl overflow-hidden" variants={itemVariants}>
                    <img
                      src={images[0].src}
                      alt={images[0].alt}
                      className="w-full h-[280px] md:h-[500px] object-cover"
                    />
                  </motion.div>

                  {/* Row 2: two columns */}
                  <div className="flex flex-col md:flex-row gap-6 w-full">
                    <motion.div className="flex-1 rounded-2xl overflow-hidden" variants={itemVariants}>
                      <img
                        src={images[1].src}
                        alt={images[1].alt}
                        className="w-full h-[280px] md:h-[400px] object-cover"
                      />
                    </motion.div>
                    <motion.div className="flex-1 rounded-2xl overflow-hidden" variants={itemVariants}>
                      <img
                        src={images[2].src}
                        alt={images[2].alt}
                        className="w-full h-[280px] md:h-[400px] object-cover"
                      />
                    </motion.div>
                  </div>

                  {/* Row 3: two columns */}
                  <div className="flex flex-col md:flex-row gap-6 w-full">
                    <motion.div className="flex-1 rounded-2xl overflow-hidden" variants={itemVariants}>
                      <img
                        src={images[3].src}
                        alt={images[3].alt}
                        className="w-full h-[280px] md:h-[500px] object-cover"
                      />
                    </motion.div>
                    <motion.div className="flex-1 rounded-2xl overflow-hidden" variants={itemVariants}>
                      <img
                        src={images[4].src}
                        alt={images[4].alt}
                        className="w-full h-[280px] md:h-[500px] object-cover"
                      />
                    </motion.div>
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
