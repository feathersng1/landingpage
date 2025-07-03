import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function PortfolioMore() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div 
      ref={ref}
      className="relative shrink-0 w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="max-w-[1440px] relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
                <div className="font-['Monarque:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#141414] text-[0px] text-center tracking-[-3.2px] w-[920px]">
                  <p className="leading-[80px] text-[80px]">
                    <span>See </span>
                    <span className="font-['Monarque:Italic',_sans-serif] not-italic">more works</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}