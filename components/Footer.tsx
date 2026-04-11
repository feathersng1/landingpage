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
      <div className="flex flex-col items-center justify-center relative overflow-hidden">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          {/* Background SVG decorative element */}
          <motion.div
            className="absolute bottom-[-10%] h-[30%] opacity-20 pointer-events-none w-full"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg
              className="w-full h-full object-cover"
              fill="none"
              viewBox="0 0 1531 311"
            >
              <g id="feathers-scape">
                <path d={svgPaths.p938b080} fill="#525252" />
                <path d={svgPaths.p1341bb00} fill="#525252" />
                <path d={svgPaths.p7671080} fill="#525252" />
                <path d={svgPaths.p324f8f00} fill="#525252" />
                <path d={svgPaths.p1607be00} fill="#525252" />
                <path d={svgPaths.p2bfe3880} fill="#525252" />
                <path d={svgPaths.p4816b80} fill="#525252" />
                <path d={svgPaths.p28b00900} fill="#525252" />
              </g>
            </svg>
          </motion.div>

          <div className="max-w-[1440px] relative shrink-0 w-full z-10">
            <div className="flex flex-col items-center max-w-inherit relative size-full">
              <div className="box-border content-stretch flex flex-col gap-[32px] md:gap-[46px] items-center justify-start max-w-inherit pb-[100px] md:pb-[297px] pt-12 md:pt-20 px-0 relative w-full">

                {/* Main Heading Text */}
                <div className="box-border content-stretch flex flex-row gap-4 md:gap-20 items-center justify-center p-0 relative shrink-0">
                  <motion.div
                    className="flex items-center gap-4 md:gap-12"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <p className="leading-tight text-[32px] sm:text-[48px] md:text-[80px] text-white font-['Monarque:Regular',_sans-serif] tracking-tight">
                      Let's <span className="font-['Monarque:Italic',_sans-serif] italic">work</span> together
                    </p>
                    <StarIcon />
                  </motion.div>
                </div>

                {/* Contact Information & Links Container */}
                <div className="box-border content-stretch flex flex-col gap-10 md:gap-14 items-center justify-start p-0 relative shrink-0 w-full">
                  <div className="box-border content-stretch flex flex-col font-onest gap-3 items-center justify-start p-0 relative shrink-0 text-center w-full">
                    <motion.a
                      href="mailto:hello@feathers.com.co"
                      className="text-neutral-300 hover:text-white transition-colors text-[16px] md:text-[18px] underline underline-offset-4"
                      whileHover={{ y: -2 }}
                    >
                      hello@feathers.com.co
                    </motion.a>
                    <div className="max-w-[320px] md:max-w-[400px] relative shrink-0">
                      <p className="leading-[24px] text-[14px] md:text-[16px] text-neutral-400">
                        Suite 691 37 Westminster Buildings, Theatre Square, Nottingham, NG1 6LG
                      </p>
                    </div>
                  </div>

                  {/* Social Links & Copyright */}
                  <div className="box-border content-stretch flex flex-col gap-6 items-center justify-start p-0 relative shrink-0 w-full">
                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-neutral-500 font-onest text-[14px] md:text-[16px]">
                      {["TWITTER (X)", "INSTAGRAM", "LINKEDIN"].map((social) => (
                        <motion.a
                          key={social}
                          href="#"
                          className="hover:text-white transition-colors tracking-widest"
                          whileHover={{ y: -2 }}
                        >
                          {social}
                        </motion.a>
                      ))}
                    </div>

                    <div className="flex flex-col items-center gap-2">
                      <p className="text-neutral-600 text-[12px] md:text-[14px] font-onest">
                        ©2020-2026 Feathers Creative Ltd.
                      </p>
                      <span
                        className="opacity-20 hover:opacity-100 cursor-pointer text-[10px] text-neutral-600 transition-opacity"
                        onClick={() => (window as any).navigateToAdmin?.()}
                      >
                        Admin
                      </span>
                    </div>
                  </div>

                  {/* Call to Action Button */}
                  <motion.div
                    className="group bg-white hover:bg-[#85ffd7] text-[#141414] rounded-full px-6 py-2 md:px-8 md:py-3 cursor-pointer overflow-hidden relative shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <div className="flex flex-row items-center gap-3 relative z-10 transition-colors">
                      <span className="font-onest font-medium text-[16px] md:text-[18px]">start project</span>
                      <div className="transition-transform group-hover:translate-x-1">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M1 11L11 1M11 1H3M11 1V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
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