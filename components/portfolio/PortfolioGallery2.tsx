import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export function PortfolioGallery2() {
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
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="max-w-[1440px] relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-12 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">

                {/* Section text */}
                <motion.div
                  className="box-border content-stretch flex flex-col gap-6 items-center justify-start leading-[0] max-w-[920px] p-0 relative shrink-0 text-[#141414] text-center w-full"
                  variants={itemVariants}
                >
                  <div className="font-['Onest:Medium',_sans-serif] font-medium relative shrink-0 text-[32px] tracking-[-1.28px] w-full">
                    <p className="block leading-[40px]">FRICTIONLESS BOOKING EXPERIENCE</p>
                  </div>
                  <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] tracking-[-0.96px] w-full">
                    <p className="block mb-0">
                      The booking flow was engineered to remove every possible point of hesitation. From the initial estimate calculator to the confirmation screen, each step was designed to feel guided and effortless—reducing drop-off and building confidence in the service before an inspector ever arrives at the door.
                    </p>
                  </div>
                </motion.div>

                {/* Booking images: 3-col desktop, stacked mobile */}
                <div className="flex flex-col md:flex-row gap-6 w-full">
                  <motion.div className="flex-1 rounded-2xl overflow-hidden bg-neutral-100" variants={itemVariants}>
                    <img
                      src={`${base}order-summary.png`}
                      alt="Order summary screen"
                      className="w-full h-[300px] md:h-[420px] object-cover"
                    />
                  </motion.div>
                  <motion.div className="flex-1 rounded-2xl overflow-hidden bg-neutral-100" variants={itemVariants}>
                    <img
                      src={`${base}order-request-sent.png`}
                      alt="Order request sent confirmation"
                      className="w-full h-[300px] md:h-[420px] object-cover"
                    />
                  </motion.div>
                  <motion.div className="flex-1 rounded-2xl overflow-hidden bg-neutral-100" variants={itemVariants}>
                    <img
                      src={`${base}end-of-flow.png`}
                      alt="End of booking flow"
                      className="w-full h-[300px] md:h-[420px] object-cover"
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
