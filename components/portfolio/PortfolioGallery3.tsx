import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.15, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export function PortfolioGallery3() {
  const { ref, isVisible } = useScrollReveal();
  const base = import.meta.env.BASE_URL;

  return (
    <motion.div
      ref={ref}
      className="relative shrink-0 w-full"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="basis-0 grow max-w-[1440px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center max-w-inherit relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start max-w-inherit px-0 py-16 relative w-full">
                {/* Desktop: side by side | Mobile: stacked */}
                <div className="flex flex-col md:flex-row gap-6 w-full">
                  <motion.div
                    className="flex-1 bg-neutral-100 rounded-2xl overflow-hidden flex items-center justify-center p-10"
                    variants={itemVariants}
                  >
                    <img
                      src={`${base}allinonelogo.png`}
                      alt="All In One logo"
                      className="w-full max-w-[320px] h-[200px] md:h-[280px] object-contain"
                    />
                  </motion.div>
                  <motion.div
                    className="flex-1 bg-neutral-100 rounded-2xl overflow-hidden flex items-center justify-center p-10"
                    variants={itemVariants}
                  >
                    <img
                      src={`${base}aio-icon.png`}
                      alt="All In One brand icon"
                      className="w-full max-w-[280px] h-[200px] md:h-[280px] object-contain"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
