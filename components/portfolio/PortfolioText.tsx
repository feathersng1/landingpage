import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function PortfolioText() {
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
                <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start leading-[0] max-w-[920px] p-0 relative shrink-0 text-[#141414] text-center w-full">
                  <div className="font-['Onest:Medium',_sans-serif] font-medium relative shrink-0 text-[32px] tracking-[-1.28px] w-full">
                    <p className="block leading-[40px]">THE EMOTION IN EVERY HUE</p>
                  </div>
                  <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] tracking-[-0.96px] w-full">
                    <p className="block mb-0">
                      Color was the emotional cornerstone of the visual identity. The primary tone, a deep and saturated red (#B80733), evokes passion, urgency, and high energy—a visual heartbeat of the brand. It demands attention without shouting, and when paired with charcoal black and warm ivory tones, it grounds the brand in sophistication and clarity.
                    </p>
                    <p className="block mb-0">&nbsp;</p>
                    <p className="block">
                      Design elements were stripped to their essence. We opted for a bold, custom sans-serif logotype that commands attention, clean iconography that translates seamlessly across devices, and a layout system that prioritizes negative space. Every detail—from grid structure to motion behaviors—was crafted to feel premium yet raw, timeless yet distinctly modern.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}