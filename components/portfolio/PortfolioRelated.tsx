import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import imgCallToActionImage from "figma:asset/57da8f4f1e0d1d3bbbe9fb23a0449a94cbe96db9.png";
import imgCallToActionImage1 from "figma:asset/75a8e3d8c712e445239c8212f32add86dd38e5a5.png";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
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

export function PortfolioRelated() {
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
                  className="box-border content-stretch flex flex-row gap-6 md:gap-6 sm:gap-4 items-start justify-start p-0 relative shrink-0 w-full max-w-[1392px] mx-auto"
                  variants={containerVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                >
                  {/* Desktop & Tablet: Two Column Layout */}
                  <div className="hidden md:contents">
                    <motion.div
                      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
                      variants={cardVariants}
                    >
                      <motion.div
                        className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[640px] rounded-2xl shrink-0 w-full image-hover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ backgroundImage: `url('${imgCallToActionImage}')` }}
                      />
                      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative shadow-[4px_4px_24px_0px_rgba(224,224,224,0.24)] shrink-0 text-[#141414] text-left text-nowrap">
                        <div className="font-onest-medium relative shrink-0 text-[24px] tracking-[-0.96px]">
                          <p className="block leading-[32px] text-nowrap whitespace-pre">NEOCHILDCARE</p>
                        </div>
                        <div className="font-onest-regular relative shrink-0 text-[16px] tracking-[-0.64px]">
                          <p className="block leading-[24px] text-nowrap whitespace-pre">Transforming healthcare access for African families</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="basis-0 box-border content-stretch flex flex-col gap-4 grow items-start justify-start min-h-px min-w-px p-0 relative shrink-0"
                      variants={cardVariants}
                    >
                      <motion.div
                        className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[640px] rounded-2xl shrink-0 w-full image-hover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ backgroundImage: `url('${imgCallToActionImage1}')` }}
                      />
                      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start leading-[0] p-0 relative shadow-[4px_4px_24px_0px_rgba(224,224,224,0.24)] shrink-0 text-[#141414] text-left text-nowrap">
                        <div className="font-onest-medium relative shrink-0 text-[24px] tracking-[-0.96px]">
                          <p className="block leading-[32px] text-nowrap whitespace-pre">NEOCHILDCARE</p>
                        </div>
                        <div className="font-onest-regular relative shrink-0 text-[16px] tracking-[-0.64px]">
                          <p className="block leading-[24px] text-nowrap whitespace-pre">Transforming healthcare access for African families</p>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Mobile: Single Column Layout */}
                  <div className="flex flex-col gap-6 w-full md:hidden">
                    <motion.div
                      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
                      variants={cardVariants}
                    >
                      <motion.div
                        className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[320px] rounded-2xl shrink-0 w-full image-hover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ backgroundImage: `url('${imgCallToActionImage}')` }}
                      />
                      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 text-[#141414] text-left w-full">
                        <div className="font-onest-medium relative shrink-0 text-[20px] tracking-[-0.8px] w-full">
                          <p className="block leading-[28px]">NEOCHILDCARE</p>
                        </div>
                        <div className="font-onest-regular relative shrink-0 text-[14px] tracking-[-0.56px] w-full">
                          <p className="block leading-[20px]">Transforming healthcare access for African families</p>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 w-full"
                      variants={cardVariants}
                    >
                      <motion.div
                        className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[320px] rounded-2xl shrink-0 w-full image-hover"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        style={{ backgroundImage: `url('${imgCallToActionImage1}')` }}
                      />
                      <div className="box-border content-stretch flex flex-col gap-1 items-start justify-start p-0 relative shrink-0 text-[#141414] text-left w-full">
                        <div className="font-onest-medium relative shrink-0 text-[20px] tracking-[-0.8px] w-full">
                          <p className="block leading-[28px]">NEOCHILDCARE</p>
                        </div>
                        <div className="font-onest-regular relative shrink-0 text-[14px] tracking-[-0.56px] w-full">
                          <p className="block leading-[20px]">Transforming healthcare access for African families</p>
                        </div>
                      </div>
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