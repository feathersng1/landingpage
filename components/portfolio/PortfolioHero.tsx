import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 0.95,
    y: 20
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.4
    }
  }
};

export function PortfolioHero() {
  const base = import.meta.env.BASE_URL;

  return (
    <motion.div
      className="relative shrink-0 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="max-w-[1440px] relative shrink-0 w-full">
            <div className="max-w-inherit overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start max-w-inherit pb-[70px] pt-[48px] px-0 relative w-full">
                <div className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full">
                  <motion.div
                    className="rounded-2xl shrink-0 w-full overflow-hidden"
                    variants={imageVariants}
                  >
                    <img
                      src={`${base}hand-holding-phone.png`}
                      alt="All In One — strategic rebrand hero"
                      className="w-full h-[400px] md:h-[640px] object-cover"
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