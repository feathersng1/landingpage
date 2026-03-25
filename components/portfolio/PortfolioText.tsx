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
                    <p className="block leading-[40px]">A WEBSITE DESIGNED FOR CLARITY AND ACTION</p>
                  </div>
                  <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[32px] relative shrink-0 text-[24px] tracking-[-0.96px] w-full">
                    <p className="block mb-0">
                      Our website designs are built around a single principle: every element should either inform or convert. For All In One, we created a homepage that immediately communicates trust—featuring their core value proposition, social proof, and a direct path to booking, all above the fold on both mobile and desktop.
                    </p>
                    <p className="block mb-0">&nbsp;</p>
                    <p className="block">
                      Typography, spacing, and colour were all tuned to reinforce the brand's promise of thoroughness and care. The result is a site that feels professional without feeling cold, and approachable without sacrificing authority.
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