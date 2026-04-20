import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.98, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

interface ColorStripProps {
  label: string;
  bgColor: string;
  textColor?: string;
  height: string;
  rounded: string;
  isCentered?: boolean;
}

const ColorStrip = ({ label, bgColor, textColor = "#FFFFFF", height, rounded, isCentered }: ColorStripProps) => (
  <motion.div
    variants={itemVariants}
    className={`w-full ${height} ${rounded} flex ${isCentered ? 'items-center justify-start' : 'items-start justify-start'} p-4 transition-transform hover:scale-[1.02] duration-500`}
    style={{ backgroundColor: bgColor }}
  >
    <span
      className="font-dmsans text-[14px] md:text-[19px] font-normal uppercase tracking-[4px]"
      style={{ color: textColor }}
    >
      {label}
    </span>
  </motion.div>
);

export function NeochildSecondaryMedia() {
  return (
    <motion.section
      className="w-full bg-white pb-20 md:pb-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 px-6">

        {/* Row 1: Logo Card - Synchronized height with All-In-One project */}
        <motion.div
          variants={itemVariants}
          className="relative w-full bg-[#F8FBEE] border-[2px] border-[#F2F2F3] rounded-[16px] flex items-center justify-center overflow-hidden md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]"
        >
          <img
            src="/neochild/neochildcare-logo.svg"
            alt="Neochildcare Logo"
            className="w-full max-w-[280px] md:max-w-[380px] lg:max-w-[480px] h-auto block drop-shadow-sm transition-transform hover:scale-105 duration-700"
          />
        </motion.div>

        {/* Row 2: Color Palette & Typography Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Column A: Color Strips */}
          <div className="flex flex-col gap-3">
            <ColorStrip
              label="TEAL"
              bgColor="#008387"
              height="h-[180px] md:h-[240px]"
              rounded="rounded-t-[16px] rounded-b-[4px]"
            />
            <ColorStrip
              label="PUMPKIN SPICE"
              bgColor="#F97513"
              height="h-[100px] md:h-[130px]"
              rounded="rounded-[4px]"
            />
            <ColorStrip
              label="YELLOW GREEN"
              bgColor="#9BC607"
              textColor="#000000"
              height="h-[60px] md:h-[70px]"
              rounded="rounded-[4px]"
              isCentered
            />
            <ColorStrip
              label="SLATE GREY"
              bgColor="#707880"
              height="h-[120px] md:h-[160px]"
              rounded="rounded-t-[4px] rounded-b-[16px]"
            />
          </div>

          {/* Column B: Inter Breakage Card - Final Top-Left Layout */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-[#008387] rounded-[16px] relative flex flex-col items-start justify-start min-h-[450px] md:min-h-full overflow-hidden p-6 md:p-4"
          >
            {/* Solid Main Header */}
            <h3
              className="font-inter font-black text-[130px] md:text-[220px] lg:text-[240px] leading-[0.7] tracking-tighter text-[#004E51] relative z-10"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Inter
            </h3>

            {/* Cascading Breakage Beneath */}
            <div className="flex flex-col items-start -mt-4 md:-mt-8">
              {[...Array(12)].map((_, i) => (
                <motion.h3
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: (1 - (i * 0.08)) * 0.7, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.04, duration: 0.6 }}
                  className="font-inter font-black text-[130px] md:text-[200px] lg:text-[260px] leading-[0.1] tracking-tighter text-[#004E51] pointer-events-none"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    maskImage: `linear-gradient(to bottom, transparent ${40 + i * 2}%, black ${40 + i * 2}% ${40 + i * 2 + 1}%, transparent ${40 + i * 2 + 1}%)`,
                    WebkitMaskImage: `linear-gradient(to bottom, transparent ${40 + i * 2}%, black ${40 + i * 2}% ${40 + i * 2 + 1}%, transparent ${40 + i * 2 + 1}%)`,
                  }}
                >
                  Inter
                </motion.h3>
              ))}
            </div>

            {/* Bottom Accent Decor - reinforced descending look */}
            <div className="absolute bottom-8 left-14 w-full flex flex-col items-start pointer-events-none opacity-10">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="h-[2px] bg-[#004E51] mb-4"
                  style={{ width: `${80 - i * 12}%` }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Row 3: Icons Row - Synchronized height with Row 1 */}
        <motion.div
          variants={itemVariants}
          className="relative w-full bg-[#F9F9F9] rounded-[16px] flex items-center justify-center overflow-hidden md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] px-6"
        >
          {/* Desktop Asset */}
          <img
            src="/neochild/neochild-icons.svg"
            alt="Neochildcare Icons"
            className="hidden md:block w-full max-w-[800px] lg:max-w-[1000px] h-auto transition-all duration-700 hover:opacity-80"
          />
          {/* Mobile Asset */}
          <img
            src="/neochild/neochild-icons-m.svg"
            alt="Neochildcare Icons Mobile"
            className="block md:hidden w-full max-w-[340px] h-auto"
          />
        </motion.div>

      </div>
    </motion.section>
  );
}
