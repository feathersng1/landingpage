function ServiceCard({ title, description, services }: { title: string; description: string; services: string[] }) {
  return (
    <div className="basis-0 grow max-w-[380px] min-h-px min-w-[250px] relative shrink-0">
      <div className="flex flex-col justify-center max-w-inherit min-w-inherit relative size-full">
        <div className="box-border content-stretch flex flex-col gap-4 items-start justify-center max-w-inherit min-w-inherit pb-9 pt-0 px-0 relative w-full">
          <div className="font-['Onest:Medium',_sans-serif] relative shrink-0 text-[#141414] w-full">
            <p className="leading-[32px]" dangerouslySetInnerHTML={{ __html: title }} />
          </div>
          <div className="font-['Onest:Regular',_sans-serif] relative shrink-0 text-neutral-600 w-full">
            <p className="leading-[24px]">{description}</p>
          </div>
          <div className="box-border content-stretch flex flex-col font-['Onest:Regular',_sans-serif] gap-2 items-start justify-start p-0 relative shrink-0 text-[#141414] w-full">
            {services.map((service, index) => (
              <div key={index} className="relative shrink-0 w-full">
                <p className="leading-[24px]">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <div className="relative shrink-0 w-full bg-white">
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="max-w-[1440px] relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
                <div className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full">
                  
                  {/* Header */}
                  <div className="box-border content-stretch flex flex-col gap-10 items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="relative rounded-lg shrink-0">
                      <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-lg" />
                      <div className="flex flex-row items-center justify-center relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
                          <div className="font-['Onest:Medium',_sans-serif] relative shrink-0 text-[#141414] text-nowrap">
                            <p className="leading-[24px] whitespace-pre">our services</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="font-['Monarque:Regular',_sans-serif] leading-[0] min-w-full not-italic relative shrink-0 text-[#141414] text-[0px] text-left tracking-[-3.2px]">
                      <p className="leading-[80px] text-[64px] md:text-[80px]">
                        <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
                          We turn ideas into<br />
                        </span>
                        <span className="font-['Monarque:Italic',_sans-serif] not-italic">
                          scalable&nbsp;
                        </span>
                        <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
                          experiences
                        </span>
                      </p>
                    </div>
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
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}