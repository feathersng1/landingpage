import { useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

function ServiceCard({ 
  title, 
  description, 
  services, 
  index, 
  isHovered,
  onHover,
  onLeave
}: { 
  title: string; 
  description: string; 
  services: string[]; 
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <motion.div 
      ref={ref}
      className="basis-0 grow max-w-[380px] min-h-px min-w-[250px] relative shrink-0"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1
      }}
    >
      <div className="flex flex-col justify-center max-w-inherit min-w-inherit relative size-full">
        <motion.div 
          className="box-border content-stretch flex flex-col gap-4 items-start justify-center max-w-inherit min-w-inherit pb-9 pt-0 px-0 relative w-full cursor-pointer"
          animate={{ 
            opacity: isHovered ? 1 : 0.4,
          }}
          transition={{ 
            duration: 0.3, 
            ease: [0.16, 1, 0.3, 1]
          }}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
        >
          <div className="font-['Onest:Medium',_sans-serif] relative shrink-0 text-[#141414] text-[24px] tracking-[-0.96px] w-full">
            <p className="block leading-[32px]" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <div className="font-['Onest:Regular',_sans-serif] relative shrink-0 text-neutral-600 text-[16px] tracking-[-0.64px] w-full">
            <p className="block leading-[24px]">{description}</p>
          </div>
          <div className="box-border content-stretch flex flex-col font-['Onest:Regular',_sans-serif] gap-2 items-start justify-start p-0 relative shrink-0 text-[#141414] text-[16px] tracking-[-0.64px] w-full">
            {services.map((service, serviceIndex) => (
              <motion.div 
                key={serviceIndex} 
                className="relative shrink-0 w-full"
                initial={{ opacity: 0, x: -10 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ 
                  duration: 0.4, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: (index * 0.1) + (serviceIndex * 0.05)
                }}
              >
                <p className="block leading-[24px]">{service}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function HomeServices() {
  const { ref, isVisible } = useScrollReveal(0.1);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleCardHover = (index: number) => {
    setHoveredCard(index);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <motion.div 
      ref={ref}
      className="relative shrink-0 w-full bg-white"
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="max-w-[1440px] relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
                <div className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full">
                  
                  {/* Header */}
                  <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative shrink-0 w-full">
                    <motion.div 
                      className="relative rounded-lg shrink-0"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-lg" />
                      <div className="flex flex-row items-center justify-center relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
                          <div className="font-['Onest:Medium',_sans-serif] relative shrink-0 text-[#141414] text-[16px] tracking-[-0.64px] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">our services</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div 
                      className="font-['Monarque:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#141414] text-[0px] text-left tracking-[-3.2px]"
                      initial={{ opacity: 0, y: 30 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    >
                      <p className="leading-[80px] text-[80px] md:text-[80px] sm:text-[64px]">
                        <span className="font-monarque-regular tracking-[-3.2px]">{`We turn ideas into `}</span>
                        <span>
                          <br />
                        </span>
                        <span className="font-monarque-italic">
                          scalable{` `}
                        </span>
                        <span className="font-monarque-regular tracking-[-3.2px]">
                          experiences
                        </span>
                      </p>
                    </motion.div>
                  </div>

                  {/* Service Cards */}
                  <div className="[flex-flow:wrap] box-border content-start flex gap-6 items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="[flex-flow:wrap] basis-0 box-border content-start flex gap-6 grow items-start justify-start min-h-px min-w-[500px] p-0 relative shrink-0">
                      <ServiceCard
                        title="Brand Audit<br />& Market Research"
                        description="We assess your current brand and study the market to uncover insights, gaps, and opportunities for clarity and differentiation."
                        services={[
                          "Brand Performance Assessment",
                          "Competitive Analysis",
                          "Market Trend Analysis",
                          "Stakeholder Interviews",
                          "Perception Audit"
                        ]}
                        index={0}
                        isHovered={hoveredCard === null || hoveredCard === 0}
                        onHover={() => handleCardHover(0)}
                        onLeave={handleCardLeave}
                      />
                      
                      <ServiceCard
                        title="Brand Strategy<br />& Positioning"
                        description="We define your brand's voice, values, and audience — building a focused strategy that helps you stand out and scale with purpose."
                        services={[
                          "Big Idea Development",
                          "Positioning Strategy",
                          "Brand Story & Strategic Narrative",
                          "Tone & Voice",
                          "Brand Personality",
                          "Brand Tagline"
                        ]}
                        index={1}
                        isHovered={hoveredCard === null || hoveredCard === 1}
                        onHover={() => handleCardHover(1)}
                        onLeave={handleCardLeave}
                      />
                    </div>
                    
                    <div className="[flex-flow:wrap] basis-0 box-border content-start flex gap-6 grow items-start justify-start min-h-px min-w-[500px] p-0 relative shrink-0">
                      <ServiceCard
                        title="Brand Identity<br />& Design"
                        description="From naming to logo, typography to visuals, we design cohesive brand systems that express who you are and what you stand for."
                        services={[
                          "Visual Identity Design",
                          "Verbal Identity & Messaging",
                          "Brand & Product Naming",
                          "Motion System Development",
                          "Brand Architecture"
                        ]}
                        index={2}
                        isHovered={hoveredCard === null || hoveredCard === 2}
                        onHover={() => handleCardHover(2)}
                        onLeave={handleCardLeave}
                      />
                      
                      <ServiceCard
                        title="Web & Product<br />Development"
                        description="We design and build functional, user-centered websites and digital products that reflect your brand and drive engagement."
                        services={[
                          "UI/UX Design",
                          "Website Design & Development",
                          "Mobile App Design",
                          "Product Prototyping",
                          "Digital Experience Design",
                          "Content Management Systems"
                        ]}
                        index={3}
                        isHovered={hoveredCard === null || hoveredCard === 3}
                        onHover={() => handleCardHover(3)}
                        onLeave={handleCardLeave}
                      />
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