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
      "/neochild/movie2.png",
      "/neochild/movie3.png",
      "/neochild/movie4.png",
      "/neochild/movie5.png",
      "/neochild/movie6.png",
      "/neochild/movie7.png",
      "/neochild/movie8.png",
      "/neochild/movie9.png",
      "/neochild/movie10.png",
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
                  className="absolute left-[50%] top-[50%] -translate-x-[125px] md:-translate-x-[135px] lg:-translate-x-[145px] -translate-y-1/2 bg-[#FDD1B0] z-0 pointer-events-none"
                  style={{ height: 64, width: 64, borderRadius: 32 }}
                  variants={{
                    hover: {
                      width: 310,
                      borderRadius: 32,
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

              {/* Background Floating Shapes */}
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

                {/* ─── Ropes — 6 lines, one per target (4 bubbles + 2 images) ─── */}
                {/* Desktop (1024px+)
                    Origin: (100%, 105%) — bottom-right corner
                    Rope 1 → "1000+" bubble:  center at ~(76%, 20%) — bubble is upper-right, partially overlapping image
                    Rope 2 → "88" bubble:     center at ~(97%, 45%)
                    Rope 3 → "434" bubble:    center at ~(79%, 72%)
                    Rope 4 → "11" bubble:     center at ~(65%, 93%)
                    Rope 5 → mum-child img:   center of image ~(40%, 45%)
                    Rope 6 → babymedia img:   small circle bottom-center ~(42%, 88%)
                */}
                <svg className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
                  {/* Rope 1 → 1000+ bubble (upper-right) */}
                  <motion.line x1="100%" y1="105%" x2="76%" y2="45%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 2 → 88 bubble (mid-right) */}
                  <motion.line x1="100%" y1="105%" x2="97%" y2="45%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 3 → 434 bubble (lower-right) */}
                  <motion.line x1="100%" y1="105%" x2="79%" y2="72%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 4 → 11 Schools bubble (bottom-center-left) */}
                  <motion.line x1="100%" y1="105%" x2="50%" y2="93%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 5 → mum-child main image (image center ~left of center) */}
                  <motion.line x1="100%" y1="105%" x2="40%" y2="45%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 6 → babymedia image (small circle, bottom-center) */}
                  <motion.line x1="100%" y1="105%" x2="42%" y2="68%" stroke="#777F88" strokeWidth="1" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                </svg>

                {/* Mobile only (<768px)
                    Origin: (100%, 102%) — bottom-right
                    Rope 1 → "1000+" bubble:  top-[10%] right-[0%], w-32 → center at ~(92%, 22%)
                    Rope 2 → "88" bubble:     top-[45%] right-[0%], w-20 → center at ~(97%, 45%)
                    Rope 3 → "434" bubble:    bottom-[15%] right-[5%], w-24 → center at ~(90%, 79%)
                    Rope 4 → "11" bubble:     bottom-[2%] left-[60%], w-20 → center at ~(63%, 94%)
                    Rope 5 → mum-child img:   w-280px centered at (50%, 50%)
                    Rope 6 → babymedia img:   bottom-[-10%] left-[22%], w-120px → center at ~(28%, 96%)
                */}
                <svg className="block md:hidden lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
                  {/* Rope 1 → 1000+ bubble — shortened, bubble sits at ~(92%, 22%) on mobile */}
                  <motion.line x1="100%" y1="102%" x2="92%" y2="45%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 2 → 88 bubble */}
                  <motion.line x1="100%" y1="102%" x2="85%" y2="25%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 3 → 434 bubble */}
                  <motion.line x1="100%" y1="102%" x2="90%" y2="79%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 4 → 11 Schools bubble */}
                  <motion.line x1="100%" y1="102%" x2="63%" y2="94%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 5 → mum-child main image (center) */}
                  <motion.line x1="100%" y1="102%" x2="50%" y2="50%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 6 → babymedia small circle image, left-[22%] bottom-[-10%] */}
                  <motion.line x1="100%" y1="102%" x2="28%" y2="66%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                </svg>

                {/* Tablet only (768px–1023px)
                    Origin: (100%, 102%) — bottom-right
                    Rope 1 → "1000+" bubble:  md:top-[30%] md:right-[12%], w-56 → center at ~(78%, 18%)
                    Rope 2 → "88" bubble:     md:right-[15%] md:top-[45%], w-36 → center at ~(88%, 38%)
                    Rope 3 → "434" bubble:    md:bottom-[20%] md:right-[20%], w-48 → center at ~(74%, 70%)
                    Rope 4 → "11" bubble:     md:bottom-[12%] md:left-[60%], w-28 → center at ~(63%, 87%)
                    Rope 5 → mum-child img:   w-400px centered at (50%, 50%)
                    Rope 6 → babymedia img:   md:left-[25%] bottom-[-10%], w-180px → center at ~(36%, 96%)
                */}
                <svg className="hidden md:block lg:hidden absolute inset-0 w-full h-full pointer-events-none z-0" overflow="visible">
                  {/* Rope 1 → 1000+ bubble — shortened to ~(78%, 18%) */}
                  <motion.line x1="100%" y1="102%" x2="78%" y2="48%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 2 → 88 bubble — corrected to ~(88%, 38%) */}
                  <motion.line x1="100%" y1="102%" x2="80%" y2="65%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 3 → 434 bubble */}
                  <motion.line x1="100%" y1="102%" x2="74%" y2="70%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 4 → 11 Schools bubble */}
                  <motion.line x1="100%" y1="102%" x2="63%" y2="87%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 5 → mum-child main image (center) */}
                  <motion.line x1="100%" y1="102%" x2="50%" y2="60%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                  {/* Rope 6 → babymedia image — y pulled up into frame */}
                  <motion.line x1="100%" y1="102%" x2="60%" y2="80%" stroke="#777F88" strokeWidth="0.8" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} transition={{ duration: 1 }} viewport={{ once: true }} />
                </svg>

                {/* Main Images Container */}
                <div className="relative z-10 flex items-center justify-center">
                  <img src="/neochild/mum-child.svg" alt="Mother and Child" className="w-[280px] md:w-[400px] lg:w-[580px] h-auto rounded-full object-cover" />
                  <img src="/neochild/babymedia.svg" alt="Baby Media" className="absolute bottom-[-10%] left-[22%] md:left-[25%] w-[120px] md:w-[180px] lg:w-[240px] h-auto z-20" />
                </div>

                {/* Overlapping Stat Bubbles */}
                <ImpactBubble
                  label="1000+"
                  sublabel="Caregivers Engaged Online"
                  bgColor="#F97513"
                  size="w-32 h-32 md:w-56 md:h-56 lg:w-80 lg:h-80"
                  position="top-[10%] right-[0%] md:right-[12%] md:top-[30%] lg:right-[0%]"
                  zIndex="z-10"
                  delay={0.3}
                />
                <ImpactBubble
                  label="88"
                  sublabel="Children Vaccinated"
                  bgColor="#FA8C3A"
                  size="w-20 h-20 md:w-36 md:h-36 lg:w-48 lg:h-48"
                  position="top-[45%] right-[0%] md:right-[12%] md:top-[50%] lg:right-[-12%] lg:top-[50%]"
                  zIndex="z-30"
                  delay={0.5}
                />
                <ImpactBubble
                  label="434"
                  sublabel="Children Reached"
                  bgColor="#F97513"
                  size="w-24 h-24 md:w-48 md:h-48 lg:w-64 lg:h-64"
                  position="bottom-[15%] right-[5%] md:right-[20%] md:bottom-[20%] lg:right-[5%]"
                  zIndex="z-10"
                  delay={0.4}
                />
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

        {/*
          4. Continuous Flowing Marquee — FIX 3 + FIX 4
          FIX 3: Cards go edge-to-edge on mobile (remove horizontal padding on small screens),
                and are full-width/responsive (remove fixed column count, use min-width instead).
          FIX 4: Seamless loop — VerticalMarquee now uses CSS keyframes via a style tag
                so the loop is pixel-perfect with no jump. The trick: animate translateY(0)
                to translateY(-50%) over the doubled list, then instantly reset — CSS handles
                this invisibly. We achieve this with a `useEffect` + inline style approach.
        -->*/}
      <section className="w-full px-0 md:px-6">
        <div className="w-full max-w-[1440px] mx-auto bg-[#F8FBEE] border-y md:border-[2px] border-[#DEECAC] px-0 overflow-hidden rounded-none md:rounded-[16px]">
          <div className="flex gap-[4px] h-[500px] md:h-[750px] lg:h-[900px] w-full mx-auto py-0">
            <VerticalMarquee items={[movies[0], movies[1], movies[2]]} direction="up" speed={25} index={0} />
            <VerticalMarquee items={[movies[3], movies[4], movies[5]]} direction="down" speed={30} index={1} />
            <VerticalMarquee items={[movies[6], movies[7], movies[8]]} direction="up" speed={22} index={2} />
            <VerticalMarquee items={[movies[9], movies[0], movies[1]]} direction="down" speed={35} index={3} className="hidden md:block" />
            <VerticalMarquee items={[movies[2], movies[3], movies[4]]} direction="up" speed={28} index={4} className="hidden md:block" />
            <VerticalMarquee items={[movies[5], movies[6], movies[7]]} direction="down" speed={31} index={5} className="hidden lg:block" />
            <VerticalMarquee items={[movies[8], movies[9], movies[0]]} direction="up" speed={26} index={6} className="hidden lg:block" />
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

  /*
    FIX 4: Seamless marquee — no skip, no jump.

    The original bug: Framer Motion's `repeat: Infinity` on a `y: ["0%", "-50%"]`
    animation has a tiny gap/jump at the loop point because it eases into and out of
    each keyframe. With `ease: "linear"` it *should* be seamless, but Framer can
    still introduce a one-frame hitch at the repeat boundary.

    The bulletproof fix: use a pure CSS animation with `@keyframes` and
    `animation-iteration-count: infinite`. CSS animations loop with zero gap —
    the browser handles the reset internally without re-rendering.

    We inject a `<style>` tag with a unique keyframe name per instance, computed
    from the direction and speed, and apply it via inline style.
  */
 // Put this outside NeochildSolution, alongside AutoCycle
function VerticalMarquee({
  items,
  direction,
  speed,
  index,
  className = "",
}: {
  items: string[];
  direction: "up" | "down";
  speed: number;
  index: number;
  className?: string;
}) {
  const colRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const id = `kf-${index}`;
  const GAP = 4;
  const CARD_H = typeof window !== "undefined"
    ? (window.innerWidth >= 1024 ? 450 : window.innerWidth >= 768 ? 320 : 240)
    : 450;

  // Stagger offsets per column index
  const offsets = [0, -150, -60, -220, -100, -180, -30];
  const startOffset = offsets[index % offsets.length];

  const doubled = [...items, ...items];
  const halfH = CARD_H * 3 + GAP * 3;

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const existing = document.getElementById(id);
    if (existing) existing.remove();

    const style = document.createElement("style");
    style.id = id;
    style.textContent =
      direction === "up"
        ? `@keyframes ${id}{from{transform:translateY(${startOffset}px)}to{transform:translateY(${startOffset - halfH}px)}}`
        : `@keyframes ${id}{from{transform:translateY(${startOffset - halfH}px)}to{transform:translateY(${startOffset}px)}}`;
    document.head.appendChild(style);

    track.style.animationName = "none";
    void track.offsetWidth;
    track.style.animationName = id;
    track.style.animationDuration = `${speed}s`;
    track.style.animationTimingFunction = "linear";
    track.style.animationIterationCount = "infinite";

    return () => { document.getElementById(id)?.remove(); };
  }, [CARD_H]);

  return (
    <div
      ref={colRef}
      className={className}
      style={{ flex: "1 1 0", minWidth: 0, overflow: "hidden", height: "100%", position: "relative" }}
    >
      <div
        ref={trackRef}
        style={{
          position: "absolute",
          top: 0, left: 0, right: 0,
          display: "flex",
          flexDirection: "column",
          gap: `${GAP}px`,
          willChange: "transform",
        }}
      >
        {doubled.map((src, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              height: `${CARD_H}px`,
              borderRadius: "24px",
              overflow: "hidden",
              flexShrink: 0,
              backgroundImage: `url(${src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
      </div>
    </div>
  );
}