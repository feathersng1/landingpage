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
}

const ColorStrip = ({ label, bgColor, textColor = "#FFFFFF", height, rounded }: ColorStripProps) => (
  <motion.div
    variants={itemVariants}
    className={`w-full ${height} ${rounded} flex items-start p-4 transition-transform hover:scale-[1.02] duration-500`}
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

        {/* Row 1: Logo Card */}
        <motion.div
          variants={itemVariants}
          className="relative w-full bg-[#F8FBEE] border-[2px] border-[#F2F2F3] rounded-[16px] py-20 flex items-center justify-center overflow-hidden"
        >
          <img
            src="/neochild/neochildcare-logo.svg"
            alt="Neochildcare Logo"
            className="w-full max-w-[280px] md:max-w-[380px] h-auto block drop-shadow-sm transition-transform hover:scale-105 duration-700"
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
            />
            <ColorStrip 
              label="SLATE GREY" 
              bgColor="#707880" 
              height="h-[120px] md:h-[160px]" 
              rounded="rounded-t-[4px] rounded-b-[16px]" 
            />
          </div>

          {/* Column B: Inter Breakage Card */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-[#008387] rounded-[16px] relative flex flex-col items-center justify-center min-h-[400px] md:min-h-full overflow-hidden"
          >
            {/* Breakage Typography Container */}
            <div className="relative w-full h-full flex flex-col items-center justify-center py-12">
              <h3 
                className="font-inter font-black text-[120px] md:text-[180px] lg:text-[220px] leading-[0.8] tracking-tighter text-[#004E51]"
                style={{ 
                  fontFamily: 'Inter, sans-serif',
                  maskImage: 'linear-gradient(to bottom, black 50%, transparent 50%), repeating-linear-gradient(to bottom, black 0 4px, transparent 4px 12px)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 45%, transparent 45%), repeating-linear-gradient(to bottom, black 0 4px, transparent 4px 15px)',
                }}
              >
                Inter
              </h3>
              
              {/* Additional "bars" to reinforce the breakage at the bottom */}
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                    className="w-[80%] h-[2px] md:h-[3px] bg-[#004E51]/30 mt-[8px] md:mt-[12px]"
                    style={{ width: `${80 - i * 8}%` }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 3: Icons Row */}
        <motion.div
          variants={itemVariants}
          className="relative w-full bg-[#F9F9F9] rounded-[16px] py-20 px-6 overflow-hidden flex items-center justify-center"
        >
          {/* Desktop Asset */}
          <img
            src="/neochild/neochild-icons.svg"
            alt="Neochildcare Icons"
            className="hidden md:block w-full max-w-[1000px] h-auto transition-all duration-700 hover:opacity-80"
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
