import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export function HomeHero() {
  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="basis-0 grow max-w-[1440px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center max-w-inherit relative size-full">
              <div className="flex flex-col items-start justify-start pb-20 pt-[80px] md:pt-[120px] px-0 relative w-full">
                <div className="w-full relative text-[#141414] text-left">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <div className="font-['Monarque:Regular',_sans-serif] text-[72px] leading-[0.85] sm:text-[90px] md:text-[120px] md:leading-[100px] tracking-[-2px] md:tracking-[-4.8px]">
                      <motion.span
                        variants={textVariants}
                        className="font-monarque-regular inline-block"
                      >
                        Where brands
                      </motion.span>
                      <br />
                      <motion.span
                        variants={textVariants}
                        className="font-monarque-italic inline-block"
                      >
                        become sharp, loud,
                      </motion.span>
                      <br />
                      <motion.span
                        variants={textVariants}
                        className="font-monarque-italic inline-block"
                      >
                        & unforgettable
                      </motion.span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}