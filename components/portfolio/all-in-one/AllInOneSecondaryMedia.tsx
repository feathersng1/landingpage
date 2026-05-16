import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.2
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

// Sub-components

const CalculatorCard = () => {
  const [sqft, setSqft] = useState(2500);

  const handleSqftChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSqft(Number(e.target.value));
  };

  const estimatedCost = (sqft * 1.6 + 20).toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });

  return (
    <div className="w-full h-full bg-[#B80733] flex flex-col items-center justify-center xl:justify-evenly py-14 md:py-12 lg:py-6 xl:py-2 px-6 md:px-8 relative overflow-hidden rounded-[16px]">
      {/* Dotted Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      <div className="relative z-10 w-full max-w-[280px] md:max-w-[300px] xl:max-w-[360px] flex flex-col items-center gap-3 md:gap-4 xl:gap-10">
        <h2 className="text-[#F4E0E3] font-onest text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-medium text-center leading-tight">
          Get an instant <br /> inspection estimate
        </h2>

        <div
          className="w-full bg-white rounded-[16px] flex flex-col gap-4 md:gap-4 lg:gap-4 xl:gap-8 overflow-hidden p-[var(--padding-x)]"
          style={{
            '--padding-x': '1rem',
          } as any}
        >
          <style dangerouslySetInnerHTML={{
            __html: `
            @media (min-width: 768px) { .p-\\[var\\(--padding-x\\)\\] { --padding-x: 1.25rem; } }
            @media (min-width: 1024px) { .p-\\[var\\(--padding-x\\)\\] { --padding-x: 1.5rem; } }
            @media (min-width: 1280px) { .p-\\[var\\(--padding-x\\)\\] { --padding-x: 2.5rem; } }
          `}} />
          <div className="flex flex-col items-center gap-1 md:gap-2 lg:gap-3">
            <span className="text-[#40677A] text-[9px] md:text-[10px] font-bold tracking-widest uppercase">Get a Quote Now</span>

            <div className="w-full bg-[#FAF7F7] border border-[#F4E0E3] rounded-[8px] p-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                <span className="text-[11px] font-medium text-[#292929]">Home (or Residential) Inspection</span>
              </div>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#919191" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
            </div>
          </div>

          <div className="text-center flex flex-col gap-0">
            <p className="text-[#20333D] text-[14px] md:text-[16px] lg:text-[18px] font-bold leading-tight">Your estimated <br /> inspection fee is</p>
            <p className="text-[#B2893E] text-[24px] md:text-[28px] lg:text-[32px] font-bold">${estimatedCost}</p>
          </div>

          <div className="flex flex-col gap-3 md:gap-4">
            <div
              className="bg-[#F7F9FA] py-2 md:py-3 text-center border-y border-[#F0F0F0]"
              style={{
                marginLeft: 'calc(var(--padding-x, 1rem) * -1)',
                marginRight: 'calc(var(--padding-x, 1rem) * -1)',
                width: 'calc(100% + (var(--padding-x, 1rem) * 2))'
              }}
            >
              <span className="text-[#515151] text-[13px] md:text-[14px] font-medium tracking-tight">
                {sqft.toLocaleString()} sqft
              </span>
            </div>

            <div className="relative w-full h-8 flex items-center">
              <input
                type="range"
                min={50}
                max={10000}
                step={50}
                value={sqft}
                onChange={handleSqftChange}
                className="w-full h-[6px] bg-[#F4E0E3] rounded-full appearance-none cursor-pointer outline-none"
                style={{
                  background: `linear-gradient(to right, #B80733 0%, #B80733 ${((sqft - 50) / (9950)) * 100}%, #F4E0E3 ${((sqft - 50) / (9950)) * 100}%, #F4E0E3 100%)`
                }}
              />
              <style dangerouslySetInnerHTML={{
                __html: `
                input[type='range']::-webkit-slider-thumb {
                  -webkit-appearance: none;
                  appearance: none;
                  width: 24px;
                  height: 24px;
                  background: #CEDAE0;
                  border-radius: 50%;
                  cursor: pointer;
                  border: 2px solid white;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                input[type='range']::-moz-range-thumb {
                  width: 24px;
                  height: 24px;
                  background: #CEDAE0;
                  border-radius: 50%;
                  cursor: pointer;
                  border: 2px solid white;
                }
              `}} />
            </div>
          </div>

          <hr
            className="border-t border-[#F0F0F0]"
            style={{
              marginLeft: 'calc(var(--padding-x, 1rem) * -1)',
              marginRight: 'calc(var(--padding-x, 1rem) * -1)',
              width: 'calc(100% + (var(--padding-x, 1rem) * 2))'
            }}
          />

          <div className="flex items-center justify-center gap-2 pt-2 cursor-pointer hover:opacity-70 transition-opacity">
            <span className="text-[#515151] text-[14px] font-semibold">Click here to book now</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#515151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export function AllInOneSecondaryMedia() {
  return (
    <motion.section
      className="w-full bg-white py-20 md:py-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">

        {/* Row 1: Browser Preview (Edge-to-edge on mobile) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full md:px-6"
        >
          <div
            className="relative w-full md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] flex items-end justify-center overflow-hidden rounded-none md:rounded-[16px]"
            style={{
              backgroundImage: "url('/aio/homepage-win-bg.svg')",
              backgroundSize: '100% auto',
              backgroundPosition: 'top center'
            }}
          >
            <div className="w-full h-full px-6 sm:px-12 md:px-20 pt-6 sm:pt-12 md:pt-20 pb-0 flex items-end justify-center">
              <img
                src="/aio/homepage.png"
                alt="Homepage Preview"
                className="w-full h-auto max-w-[1100px] rounded-t-[16px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Row 2: Secondary Grid (Split into two pairs as requested) */}
        <div className="px-6 md:px-6 flex flex-col gap-6">

          {/* Pair 1: Calculator & Phone Visual */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <motion.div
              variants={itemVariants}
              className="w-full rounded-[16px] overflow-hidden flex items-center justify-center aspect-auto md:aspect-[3/4] lg:aspect-square"
            >
              <CalculatorCard />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-full rounded-[16px] overflow-hidden flex items-center justify-center aspect-auto md:aspect-[3/4] lg:aspect-square bg-[#CEDAE0]"
            >
              <img
                src="/aio/hand-holding-phone.svg"
                alt="Hand Holding Phone"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Pair 2: Menu & Animated Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            <motion.div
              variants={itemVariants}
              className="w-full rounded-[16px] overflow-hidden flex items-center justify-center aspect-square md:aspect-[3/4] lg:aspect-square bg-[#F7F9FA]"
            >
              <img
                src="/aio/menu.svg"
                alt="Menu Interface"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="w-full rounded-[16px] overflow-hidden flex items-center justify-center aspect-square md:aspect-[3/4] lg:aspect-square bg-[#FDF7F7]"
            >
              <img
                src="/aio/services.svg"
                alt="Services Section"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

        </div>

        {/* Row 3: Team Section (Edge-to-edge on mobile) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full md:px-6"
        >
          <div
            className="relative w-full bg-[#CEDAE0] rounded-none md:rounded-[16px] overflow-hidden px-6 sm:px-12 md:px-20 pt-6 sm:pt-12 md:pt-20 pb-0 flex items-end justify-center"
          >
            <motion.img
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              src="/aio/the-team.svg"
              alt="The AIO Team"
              className="w-full h-auto max-w-[1200px] block rounded-t-[16px]"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
