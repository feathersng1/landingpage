import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const floatVariants = {
  animate: (i: number) => ({
    y: [0, -12, 0],
    transition: {
      duration: 4 + i,
      repeat: Infinity,
      ease: "easeInOut"
    }
  })
};

// --- Sub-components ---

const ImpactBubble = ({ label, sublabel, bgColor, size, position, zIndex, delay }: { label: string, sublabel: string, bgColor: string, size: string, position: string, zIndex: string, delay: number }) => (
  <motion.div
    className={`absolute rounded-full flex flex-col items-center justify-center text-center px-2 md:px-4 shadow-none ${size} ${position} ${zIndex} font-inter`}
    style={{ backgroundColor: bgColor }}
    initial={{ scale: 0, opacity: 0 }}
    whileInView={{ scale: 1, opacity: 1 }}
    transition={{ delay, duration: 0.6, type: "spring", stiffness: 100 }}
    viewport={{ once: true }}
  >
    <span className="font-bold text-white text-[18px] md:text-3xl lg:text-4xl leading-none tracking-tight">{label}</span>
    <span className="font-normal text-white text-[8px] md:text-[12px] lg:text-[16px] leading-tight mt-0.5 md:mt-1 opacity-95">{sublabel}</span>
  </motion.div>
);

const FloatingShape = ({ color, size, position, type, index }: { color: string, size: string, position: string, type: 'circle' | 'star', index: number }) => (
  <motion.div
    className={`absolute ${size} ${position}`}
    custom={index}
    variants={floatVariants}
    animate="animate"
  >
    {type === 'circle' ? (
      <div className="w-full h-full rounded-full" style={{ backgroundColor: color }} />
    ) : (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill={color}>
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </svg>
    )}
  </motion.div>
);

export function NeochildSolution() {
  const [activeCard, setActiveCard] = useState(0);

  const movies = [
    "/neochild/movie1.png",
    "/neochild/movie2.svg",
    "/neochild/movie3.png",
    "/neochild/movie4.png",
    "/neochild/movie5.png",
    "/neochild/movie6.png",
    "/neochild/movie7.png",
    "/neochild/movie8.png",
  ];

  const cards = [
    "/neochild/card1.svg",
    "/neochild/card2.svg",
    "/neochild/card3.svg",
    "/neochild/card4.svg",
    "/neochild/card5.svg",
  ];

  return (
    <div className="w-full overflow-hidden flex flex-col pt-10 md:pt-16 bg-white">

      {/* 1. PC View Section */}
      <motion.section
        className="w-full px-0 md:px-6 mb-10 md:mb-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <div className="max-w-[1440px] mx-auto overflow-hidden rounded-none md:rounded-[16px]">
          <img
            src="/neochild/pc-view.svg"
            alt="Neochildcare Desktop View"
            className="w-full h-auto block"
          />
        </div>
      </motion.section>

      {/* 2. Interactive Grid: Join & App Slider */}
      <section className="w-full px-6 max-w-[1440px] mx-auto mb-10 md:mb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Community Card - Fixed height & hover animation */}
          <motion.div
            className="bg-[#FDF7F2] rounded-[16px] flex items-center justify-center relative h-[436px] md:h-[406px] lg:h-[636px] group cursor-pointer overflow-hidden p-8"
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            variants={itemVariants}
          >
            <div className="relative flex items-center h-full w-full justify-center">
              {/* The high-fidelity stretching circle */}
              <motion.div
                className="absolute left-[50%] top-[50%] -translate-x-[115px] md:-translate-x-[125px] lg:-translate-x-[135px] -translate-y-1/2 bg-[#FDD1B0] rounded-full z-0 pointer-events-none"
                style={{ height: 48, width: 48 }}
                variants={{
                  hover: {
                    width: 280,
                    borderRadius: "24px",
                    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
                  }
                }}
              />

              <div className="relative z-10 flex items-center gap-3">
                <span className="font-onest font-medium text-[20px] md:text-[24px] text-[#020303] select-none">
                  Join the community
                </span>
                <motion.svg
                  width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#020303" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </motion.svg>
              </div>
            </div>
          </motion.div>

          {/* App Slider Card - 30% Peek */}
          <motion.div
            className="bg-[#F97513] rounded-[16px] overflow-hidden flex flex-col justify-center h-[436px] md:h-[406px] lg:h-[636px] relative p-6 md:p-10 lg:p-12"
            variants={itemVariants}
          >
            <div className="flex h-full items-center relative overflow-hidden">
              <motion.div
                className="flex shrink-0 h-[85%] w-full"
                animate={{ x: `-${activeCard * 70}%` }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                {cards.map((src, i) => (
                  <div key={i} className="w-[70%] h-full shrink-0 flex items-center justify-center px-4 lg:px-0">
                    <img src={src} alt={`App Screen ${i + 1}`} className="h-full w-auto object-contain shadow-none" />
                  </div>
                ))}
              </motion.div>
            </div>
            <AutoCycle count={5} onCycle={setActiveCard} activeIndex={activeCard} />
          </motion.div>
        </div>
      </section>

      {/* 3. Impact / Balloons Section - Responsive Edge-to-Edge */}
      <section className="w-full px-0 lg:px-6 mb-10 md:mb-6 overflow-visible">
        <div className="max-w-[1440px] rounded-none lg:rounded-[16px] mx-auto bg-transparent lg:bg-[#F2F2F3] px-0 lg:px-20 py-0 lg:py-2 relative overflow-hidden">
          <div className="bg-white rounded-none w-full min-h-[550px] md:min-h-[700px] lg:min-h-[900px] relative flex items-center justify-center overflow-visible">
            {/* Ropes/Lines Overlay - Originating from bottom-right as per design */}

            {/* Background Floating Shapes - Exactly as per design */}
            <FloatingShape color="#F97513" size="w-3 h-3 md:w-4 md:h-4" position="top-[15%] left-[15%]" type="circle" index={0} />
            <FloatingShape color="#FEE3D0" size="w-5 h-5 md:w-6 md:h-6" position="top-[10%] left-[45%]" type="circle" index={1} />
            <FloatingShape color="#F0FCFD" size="w-16 h-16 md:w-24 md:h-24" position="top-[55%] left-[5%] md:left-[10%]" type="circle" index={2} />
            <FloatingShape color="#F0FCFD" size="w-4 h-4 md:w-5 md:h-5" position="bottom-[15%] left-[35%]" type="circle" index={3} />

            <FloatingShape color="#009DA2" size="w-10 h-10 md:w-12 md:h-12" position="top-[8%] right-[8%]" type="star" index={4} />
            <FloatingShape color="#CCEBEC" size="w-5 h-5 md:w-6 md:h-6" position="bottom-[20%] left-[20%]" type="star" index={5} />
            <FloatingShape color="#AADEE0" size="w-4 h-4 md:w-5 md:h-5" position="bottom-[25%] right-[20%]" type="star" index={6} />
            <FloatingShape color="#CCEBEC" size="w-3 h-3 md:w-4 md:h-4" position="top-[20%] right-[40%]" type="star" index={7} />

            {/* Central Visuals */}
            <div className="relative w-full max-w-[800px] aspect-square flex items-center justify-center">
              {/* Ropes/Lines Overlay - Desktop (1024px+) */}
              <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
                <motion.line x1="100%" y1="105%" x2="98%" y2="56%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                <motion.line x1="100%" y1="105%" x2="88%" y2="30%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                <motion.line x1="100%" y1="105%" x2="82%" y2="80%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                <motion.line x1="100%" y1="105%" x2="65%" y2="92%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                <motion.line x1="100%" y1="105%" x2="50%" y2="50%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                <motion.line x1="100%" y1="105%" x2="10%" y2="55%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
              </svg>

              {/* Ropes/Lines Overlay - Tablet/Mobile (<1024px) */}
              <svg className="block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
                <motion.line x1="102%" y1="102%" x2="62%" y2="35%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                <motion.line x1="101%" y1="102%" x2="72%" y2="58%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                <motion.line x1="100%" y1="102%" x2="65%" y2="80%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                <motion.line x1="99%" y1="102%" x2="50%" y2="88%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                <motion.line x1="98%" y1="102%" x2="50%" y2="50%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                <motion.line x1="97%" y1="102%" x2="10%" y2="55%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
              </svg>

              {/* Main Images Container */}
              <div className="relative z-10 flex items-center justify-center">
                <img src="/neochild/mum-child.svg" alt="Mother and Child" className="w-[280px] md:w-[400px] lg:w-[580px] h-auto rounded-full object-cover" />
                <img src="/neochild/babymedia.svg" alt="Baby Media" className="absolute bottom-[-10%] left-[22%] md:left-[25%] w-[120px] md:w-[180px] lg:w-[240px] h-auto z-20" />
              </div>


              {/* Overlapping Stat Bubbles - Refined for Mobile */}
              {/* 1. 1000+ (Caregivers) */}
              <ImpactBubble
                label="1000+"
                sublabel="Caregivers Engaged Online"
                bgColor="#F97513"
                size="w-32 h-32 md:w-56 md:h-56 lg:w-80 lg:h-80"
                position="top-[10%] right-[0%] md:right-[12%] md:top-[30%] lg:right-[0%]"
                zIndex="z-10"
                delay={0.3}
              />

              {/* 2. 88 */}
              <ImpactBubble
                label="88"
                sublabel="Children Vaccinated"
                bgColor="#FA8C3A"
                size="w-20 h-20 md:w-36 md:h-36 lg:w-48 lg:h-48"
                position="top-[45%] right-[0%] md:right-[15%] lg:right-[-5%]"
                zIndex="z-30"
                delay={0.5}
              />

              {/* 3. 434 */}
              <ImpactBubble
                label="434"
                sublabel="Children Reached"
                bgColor="#F97513"
                size="w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64"
                position="bottom-[15%] right-[5%] md:right-[20%] md:bottom-[20%] lg:right-[5%]"
                zIndex="z-10"
                delay={0.4}
              />

              {/* 4. 11 */}
              <ImpactBubble
                label="11"
                sublabel="Schools"
                bgColor="#2AADB1"
                size="w-20 h-20 md:w-28 md:h-28 lg:w-40 lg:h-40"
                position="bottom-[2%] left-[60%] md:left-[60%] md:bottom-[12%] lg:left-[65%] -translate-x-1/2"
                zIndex="z-20"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Continuous Flowing Marquee - Seamless & Rounded */}
      <section className="w-full px-0 md:px-6">
        <div className="w-full bg-[#F8FBEE] mx-auto border-y md:border-[2px] border-[#DEECAC] px-12 md:px-20 py-2 overflow-visible rounded-none md:rounded-[16px]">
          <div className="flex gap-6 h-[500px] md:h-[750px] lg:h-[900px] justify-center max-w-[1440px] mx-auto px-6">
            <VerticalMarquee items={[movies[0], movies[1]]} direction="up" speed={22} />
            <VerticalMarquee items={[movies[2], movies[3]]} direction="down" speed={28} />
            <VerticalMarquee items={[movies[4], movies[5]]} direction="up" speed={19} />
            <VerticalMarquee items={[movies[6], movies[7]]} direction="down" speed={32} />
          </div>
        </div>
      </section>

    </div>
  );
}

// --- Helpers ---

function AutoCycle({ count, onCycle, activeIndex }: { count: number, onCycle: (i: number) => void, activeIndex: number }) {
  useEffect(() => {
    const timer = setInterval(() => {
      onCycle((activeIndex + 1) % count);
    }, 4500);
    return () => clearInterval(timer);
  }, [activeIndex, count, onCycle]);
  return null;
}

function VerticalMarquee({ items, direction, speed }: { items: string[], direction: 'up' | 'down', speed: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex flex-col gap-6 overflow-hidden flex-1 bg-transparent">
      <motion.div
        className="flex flex-col gap-6 shrink-0 w-full"
        animate={{ y: direction === 'up' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        {doubled.map((src, i) => (
          <div key={i} className="w-full aspect-[3/4] bg-white rounded-[16px] md:rounded-[24px] overflow-hidden shrink-0 border border-[#DEECAC]/30 flex items-center justify-center p-0">
            <img src={src} alt="Project Clip" className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
