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
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">
        
        {/* Row 1: Logo Card - Edge-to-edge on mobile */}
        <motion.div
          variants={itemVariants}
          className="relative w-full md:px-6"
        >
          <div className="w-full bg-[#F8FBEE] border-y md:border-[2px] border-[#F2F2F3] rounded-none md:rounded-[16px] flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px]">
            <img
              src="/neochild/neochildcare-logo.svg"
              alt="Neochildcare Logo"
              className="w-full max-w-[200px] md:max-w-[380px] lg:max-w-[480px] h-auto block drop-shadow-sm transition-transform hover:scale-105 duration-700"
            />
          </div>
        </motion.div>

        {/* Row 2: Color Palette & Typography Grid - Inside padding for grid consistency */}
        <div className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Column A: Color Strips */}
            <div className="flex flex-col gap-3">
              <ColorStrip
                label="TEAL"
                bgColor="#008387"
                height="h-[160px] md:h-[150px] lg:h-[240px]"
                rounded="rounded-t-[16px] rounded-b-[4px]"
              />
              <ColorStrip
                label="PUMPKIN SPICE"
                bgColor="#F97513"
                height="h-[90px] md:h-[80px] lg:h-[130px]"
                rounded="rounded-[4px]"
              />
              <ColorStrip
                label="YELLOW GREEN"
                bgColor="#9BC607"
                textColor="#000000"
                height="h-[50px] md:h-[40px] lg:h-[70px]"
                rounded="rounded-[4px]"
                isCentered
              />
              <ColorStrip
                label="SLATE GREY"
                bgColor="#707880"
                height="h-[100px] md:h-[100px] lg:h-[160px]"
                rounded="rounded-t-[4px] rounded-b-[16px]"
              />
            </div>

            {/* Column B: Inter Breakage Card - High-Fidelity SVG Implementation */}
            <motion.div
              variants={itemVariants}
              className="w-full bg-[#008387] rounded-[16px] relative flex flex-col items-start justify-between min-h-[400px] md:h-full overflow-hidden p-6 md:p-8"
            >
              {/* Main Typography SVG - Pinned to top padding */}
              <motion.img
                src="/neochild/inter-main.svg"
                alt="Inter Main"
                variants={itemVariants}
                className="w-full h-auto max-w-full"
              />

              {/* Cascading Breakage SVGs - Distributed to hit bottom padding */}
              {[1, 2, 3, 4, 5, 6, 7, 8].map((num, i) => (
                <motion.img
                  key={num}
                  src={`/neochild/inter${num}.svg`}
                  alt={`Inter Piece ${num}`}
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: {
                      delay: 0.1 + i * 0.05,
                      duration: 0.6,
                      ease: "easeOut"
                    }
                  }}
                  viewport={{ once: true }}
                  className="w-[90.5%] h-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Row 3: Icons Row - Edge-to-edge on mobile */}
        <motion.div
          variants={itemVariants}
          className="relative w-full md:px-6"
        >
          <div className="w-full bg-[#F9F9F9] rounded-none md:rounded-[16px] flex items-center justify-center overflow-hidden min-h-[300px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] px-6">
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
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
