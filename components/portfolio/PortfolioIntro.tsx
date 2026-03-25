import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.98
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

export function PortfolioIntro() {
  const { ref, isVisible } = useScrollReveal();

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
              <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
                <div className="box-border content-stretch flex flex-col gap-12 items-start justify-start max-w-[920px] p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative shrink-0 w-full">
                    <motion.div 
                      className="relative rounded-lg shrink-0"
                      variants={itemVariants}
                    >
                      <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-lg" />
                      <div className="flex flex-row items-center justify-center relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center pb-1 pt-1.5 px-3 relative">
                          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
                            <p className="block leading-[24px] whitespace-pre">HOME INSPECTION</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative shrink-0 w-full"
                      variants={itemVariants}
                    >
                      <div className="font-['Monarque:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#141414] text-[64px] text-center tracking-[-2.56px] w-full">
                        <p className="block leading-[64px] text-[40px] md:text-[64px]">Precision in Perception: A Strategic Rebrand</p>
                      </div>
                      
                      <div className="box-border content-stretch flex flex-col gap-16 items-center justify-start p-0 relative shrink-0 w-full">
                        <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[32px] min-w-full relative shrink-0 text-[#141414] text-[24px] text-center tracking-[-0.96px]" style={{ width: "min-content" }}>
                          <p className="block mb-0">
                            All In One Home Inspection came to us with a clear goal: transform a technically trusted service into a brand homeowners could immediately connect with. Their existing identity felt fragmented—competent, but not compelling. What they needed wasn't just a new logo; they needed a complete strategic rebrand that would communicate reliability, professionalism, and ease across every digital and physical touchpoint.
                          </p>
                          <p className="block mb-0">&nbsp;</p>
                          <p className="block">
                            Our approach started with deep discovery—understanding their customers, their competitive landscape, and the emotional journey of a homeowner navigating one of the biggest purchases of their lives. From there, we developed a visual language and digital experience that turned complexity into clarity, and first impressions into lasting trust.
                          </p>
                        </div>
                        
                        <motion.div 
                          className="box-border content-stretch flex flex-col gap-2 items-center justify-start p-0 relative shrink-0"
                          variants={itemVariants}
                        >
                          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
                            <p className="block leading-[24px] whitespace-pre">Partnered with All In One on:</p>
                          </div>
                          
                          <div className="box-border content-stretch flex flex-row gap-3 items-center justify-start p-0 relative shrink-0">
                            <div className="bg-neutral-100 relative rounded-lg shrink-0">
                              <div className="flex flex-row items-center justify-center relative size-full">
                                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
                                  <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
                                    <p className="block leading-[24px] whitespace-pre">Brand strategy</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-neutral-100 relative rounded-lg shrink-0">
                              <div className="flex flex-row items-center justify-center relative size-full">
                                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
                                  <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
                                    <p className="block leading-[24px] whitespace-pre">Brand identity</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="bg-neutral-100 relative rounded-lg shrink-0">
                              <div className="flex flex-row items-center justify-center relative size-full">
                                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
                                  <div className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
                                    <p className="block leading-[24px] whitespace-pre">Website design &amp; development</p>
                                  </div>
                                </div>
                              </div>
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
      </div>
    </motion.div>
  );
}