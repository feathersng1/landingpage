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
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start max-w-inherit pb-20 pt-[120px] px-0 relative w-full">
                <div className="basis-0 font-['Monarque:Regular',_sans-serif] grow min-h-px min-w-px not-italic relative shrink-0 text-[#141414] text-left tracking-[-4.8px]">
                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <h1 className="leading-[120px] text-[120px] md:text-[120px] sm:text-[80px] xs:text-[60px]">
                      <motion.span
                        variants={textVariants}
                        className="font-monarque-regular tracking-[-4.8px] inline-block"
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
                    </h1>
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