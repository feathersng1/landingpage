import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

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

export function NotrifyGallery() {
  return (
    <motion.section
      className="w-full bg-white pb-20 md:pb-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 px-0 md:px-6">

        {/* Row 1: Featured Image */}
        <motion.div
          variants={itemVariants}
          className="relative w-full rounded-none md:rounded-[16px] overflow-hidden aspect-[16/9] md:aspect-[21/9]"
        >
          <img
            src="/notrify/notrifybg.svg"
            alt="Notrify Vision"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Row 2: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">
          {/* Card 1: All in one place (Glistening text) */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-[#E1E5F5] rounded-[16px] aspect-square flex items-center justify-center relative p-8 md:p-12"
          >
            <GlisteningText text="All in one place." />
          </motion.div>

          {/* Card 2: Favicon / App Identity */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-neutral-50 rounded-[16px] overflow-hidden aspect-square flex items-center justify-center relative"
          >
            <img
              src="/notrify/notrify-favicon.png"
              alt="Notrify Iconography"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Row 3: Search Experience */}
        <motion.div
          variants={itemVariants}
          className="relative w-full bg-[#F6F6F6] rounded-none md:rounded-[16px] px-6 flex items-center justify-center aspect-[16/9] md:aspect-[21/9]"
        >
          <div className="w-full max-w-[580px] bg-white border-2 border-[#F0F0F0] rounded-full h-[64px] md:h-[80px] flex items-center px-6 md:px-8 gap-4 shadow-sm">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#A6B6F5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <div className="font-onest text-[16px] md:text-[20px] text-[#525252] overflow-hidden whitespace-nowrap">
              <TypewriterText text="play.google.com/store/notrify-app" />
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

function GlisteningText({ text }: { text: string }) {
  return (
    <div className="relative overflow-hidden w-full flex justify-center">
      <h2 className="font-onest text-[32px] md:text-[32px] lg:text-[64px] font-bold text-[#1430A3] leading-tight text-center relative z-10 whitespace-nowrap">
        {text}
      </h2>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg] pointer-events-none z-20"
        animate={{
          x: ["-100%", "200%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatDelay: 3.5, // Total 5s cycle
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const fullText = text;
      setDisplayText(
        isDeleting
          ? fullText.substring(0, displayText.length - 1)
          : fullText.substring(0, displayText.length + 1)
      );

      if (!isDeleting && displayText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setSpeed(100);
      } else {
        setSpeed(isDeleting ? 50 : 100);
      }
    };

    timer = setTimeout(handleType, speed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, speed, text]);

  return (
    <span className="relative">
      {displayText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[2px] h-[1em] bg-[#A6B6F5] ml-1 align-middle"
      />
    </span>
  );
}
