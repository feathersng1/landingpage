export function Hero() {
  return (
    <div className="relative shrink-0 w-full bg-white">
      <style>{`
        .hero-bg-image {
          background-image: url('/neochild/peoplemobile.svg');
        }
        @media (min-width: 640px) {
          .hero-bg-image {
            background-image: url('/neochild/peopletab.svg');
          }
        }
        @media (min-width: 1024px) {
          .hero-bg-image {
            background-image: url('/neochild/people.svg');
          }
        }
      `}</style>
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="max-w-[1440px] relative shrink-0 w-full">
            <div className="max-w-inherit overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-2.5 items-start justify-start max-w-inherit pb-20 pt-0 px-0 relative w-full">
                <div className="box-border content-stretch flex flex-col gap-16 items-start justify-start p-0 relative shrink-0 w-full">
                  {/* Hero Image */}
                  <div
                    className="hero-bg-image [background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[640px] md:h-[640px] sm:h-[400px] rounded-2xl shrink-0 w-full"
                  />
                  
                  {/* Hero Text */}
                  <div className="font-['Monarque:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#141414] text-[0px] text-left tracking-[-3.2px] w-full">
                    <p className="leading-[80px] text-[80px] md:text-[80px] sm:text-[48px] xs:text-[36px]">
                      <span className="font-monarque-regular tracking-[-3.2px]">
                        Feathers is a clarity-led brand and digital agency helping startups
                        and SMEs grow
                      </span>
                      <span className="font-monarque-italic">
                        &nbsp;through strategy and design.
                      </span>
                    </p>
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