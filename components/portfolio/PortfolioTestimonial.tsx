import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

export function PortfolioTestimonial() {
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
                <div className="box-border content-stretch flex flex-col gap-8 items-center justify-start max-w-[920px] p-0 relative shrink-0 w-full">
                  <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#141414] text-[24px] md:text-[32px] text-center tracking-[-1.28px] w-full">
                    <p className="block leading-[36px] md:leading-[40px]">
                      "When we first partnered with Feathers, we thought we were just getting a good website. What we got instead was a complete rebranding and visual language that our whole audience couldn't stop appreciating. It's more than the aesthetics, it's in our experience. Even how our team speaks about the brand seems to have changed."
                    </p>
                  </div>
                  <div className="box-border content-stretch flex flex-col font-['Onest:Regular',_sans-serif] font-normal gap-1 items-start justify-start leading-[0] p-0 relative shrink-0 text-[24px] text-center tracking-[-0.96px] w-full">
                    <div className="relative shrink-0 text-[#141414] w-full">
                      <p className="block leading-[32px]">JASON DAVIS</p>
                    </div>
                    <div className="relative shrink-0 text-neutral-600 w-full">
                      <p className="block leading-[32px]">Founder, All In One Home Inspection</p>
                    </div>
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
