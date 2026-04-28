import { motion } from "framer-motion";

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function NotrifyAppDesign() {
  return (
    <motion.section 
      className="relative w-full bg-white px-6 py-20 md:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="max-w-[1000px] w-full flex flex-col items-center text-center">
          
          {/* Section Heading */}
          <motion.h2 
            variants={itemVariants}
            className="font-onest text-[20px] md:text-[24px] font-semibold text-[#141414] uppercase tracking-tight mb-8 md:mb-10"
          >
            APP DESIGN: ONE INTERFACE, ALL SCREENS
          </motion.h2>

          {/* Description Paragraphs */}
          <div className="flex flex-col space-y-6 md:space-y-8 max-w-[900px]">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[20px] leading-relaxed md:leading-[1.6] text-[#525252]"
            >
              The Notrify mobile app is built on a fully responsive, mobile-first design system that ensures a seamless and intuitive experience across every device. The interface employs a flexible grid and adaptive components that scale gracefully from the compact screen of a smartphone to the expansive view of a desktop, maintaining perfect readability and touch-target accessibility on tablets and mobiles while elegantly utilizing the additional space on larger screens. This fluid scalability guarantees that users have a consistent, familiar, and efficient interface whether they are checking a medication alert on their phone or reviewing a family member's full health history on a desktop.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[20px] leading-relaxed md:leading-[1.6] text-[#525252]"
            >
              The user journey begins with a quick, guided onboarding process that minimizes setup time and allows users to immediately sync their existing health records from connected providers or manually input critical information. The core dashboard provides a centralized overview, from which users can effortlessly view and create appointments, manage ongoing treatments, and track hospital visits or procedures. Advanced communication features are integrated directly into the relevant contexts, enabling users to initiate a chat with an AI assistant for general queries or connect via live chat with verified health practitioners for personalized, immediate advice.
            </motion.p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
