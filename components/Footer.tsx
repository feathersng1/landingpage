import { motion } from "framer-motion";
import svgPaths from "../imports/svg-eus4x8k8pd";

function ArrowIcon() {
  return (
    <motion.div 
      className="relative shrink-0 size-3"
      whileHover={{ x: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 12 12"
      >
        <g id="Component">
          <path
            clipRule="evenodd"
            d={svgPaths.p2eb0b280}
            fill="var(--fill-0, white)"
            fillRule="evenodd"
            id="Icon"
          />
        </g>
      </svg>
    </motion.div>
  );
}

function StarIcon() {
  return (
    <motion.div 
      className="relative shrink-0 size-12"
      animate={{ rotate: 360 }}
      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 48 48"
      >
        <path
          clipRule="evenodd"
          d={svgPaths.p2e33b700}
          fill="var(--fill-0, #F5FFFC)"
          fillOpacity="0.96"
          fillRule="evenodd"
          id="Vector"
          opacity="0.12"
        />
      </svg>
    </motion.div>
  );
}

export function Footer() {
  return (
    <div className="bg-[#141414] fixed bottom-0 left-0 right-0 z-0">
      <div className="flex flex-col items-center justify-center relative">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          {/* Background SVG */}
          <motion.div
            className="absolute bottom-[-82.016px] h-[310.515px] translate-x-[-50%] w-[1530.71px] opacity-32"
            style={{ left: "calc(50% + 28.7699px)" }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 1531 311"
            >
              <g id="feathers-scape" opacity="0.32">
                <path d={svgPaths.p938b080} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p1341bb00} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p7671080} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p324f8f00} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p1607be00} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p2bfe3880} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p4816b80} fill="var(--fill-0, #525252)" />
                <path d={svgPaths.p28b00900} fill="var(--fill-0, #525252)" />
              </g>
            </svg>
          </motion.div>
          
          <div className="max-w-[1440px] relative shrink-0 w-full">
            <div className="flex flex-col items-center max-w-inherit relative size-full">
              <div className="box-border content-stretch flex flex-col gap-[46px] items-center justify-start max-w-inherit pb-[297px] pt-20 px-0 relative w-full">
                
                {/* Scrolling text */}
                <div className="box-border content-stretch flex flex-row gap-20 items-center justify-start p-0 relative shrink-0">
                  <motion.div 
                    className="font-['Monarque:Italic',_sans-serif] not-italic relative shrink-0 text-[#ffffff] text-center text-nowrap"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <p className="leading-[80px] text-[48px] md:text-[80px] whitespace-pre">
                      <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
                        Let's
                      </span>
                      <span> work </span>
                      <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
                        together
                      </span>
                    </p>
                  </motion.div>
                  <StarIcon />
                  <motion.div 
                    className="font-['Monarque:Italic',_sans-serif] not-italic relative shrink-0 text-[#ffffff] text-center text-nowrap"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <p className="leading-[80px] text-[48px] md:text-[80px] whitespace-pre">
                      <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
                        Let's
                      </span>
                      <span> work </span>
                      <span className="font-['Monarque:Regular',_sans-serif] not-italic tracking-[-3.2px]">
                        together
                      </span>
                    </p>
                  </motion.div>
                </div>

                {/* Contact Information */}
                <div className="box-border content-stretch flex flex-col gap-14 items-center justify-start p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col font-['Onest:Regular',_sans-serif] gap-2 items-center justify-start p-0 relative shrink-0 text-center text-neutral-400 w-full">
                    <motion.div 
                      className="relative shrink-0 text-nowrap"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <p className="[text-decoration-line:underline] leading-[24px] text-[16px] whitespace-pre">
                        hello@feathers.com.co
                      </p>
                    </motion.div>
                    <div className="max-w-[400px] min-w-full relative shrink-0">
                      <p className="leading-[24px] text-[16px]">
                        Suite 691 37 Westminster Buildings, Theatre Square, Nottingham, NG1 6LG
                      </p>
                    </div>
                  </div>

                  {/* Social Links and Copyright */}
                  <div className="box-border content-stretch flex flex-col gap-3 items-start justify-start p-0 relative shrink-0 w-full">
                    <div className="box-border content-stretch flex flex-row font-['Onest:Regular',_sans-serif] gap-6 items-start justify-center p-0 relative shrink-0 text-center text-neutral-400 text-nowrap w-full">
                      {["TWITTER (X)", "INSTAGRAM", "LINKEDIN"].map((social, index) => (
                        <motion.div 
                          key={social}
                          className="relative shrink-0"
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        >
                          <p className="[text-decoration-line:underline] leading-[24px] text-[16px] text-neutral-400 text-nowrap whitespace-pre">
                            {social}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                    <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center p-0 relative shrink-0 w-full">
                      <div className="basis-0 font-['Onest:Regular',_sans-serif] grow min-h-px min-w-px relative shrink-0 text-center text-neutral-600">
                        <p className="leading-[24px] text-[16px]">
                          ©2020-2025 Feathers Creative Ltd.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <motion.div 
                    className="bg-[#141414] relative rounded-lg shrink-0 premium-button cursor-pointer"
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="flex flex-row items-center justify-center relative size-full">
                      <div className="box-border content-stretch flex flex-row gap-2 items-center justify-center px-3 py-1 relative">
                        <div className="font-['Onest:Regular',_sans-serif] relative shrink-0 text-[#ffffff] text-nowrap">
                          <p className="leading-[24px] text-[16px] whitespace-pre">start project</p>
                        </div>
                        <ArrowIcon />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}