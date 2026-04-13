import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.2,
      delayChildren: 0.1
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

export function AllInOneDesignApproach() {
  return (
    <motion.section 
      className="relative w-full bg-white px-6 md:px-0 py-20 md:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="max-w-[1000px] w-full flex flex-col items-center text-center">
          
          {/* Main Heading */}
          <motion.h2 
            variants={itemVariants}
            className="font-onest text-[24px] md:text-[32px] font-medium leading-[32px] md:leading-[40px] tracking-tight text-[#141414] uppercase mb-6 md:mb-[24px]"
          >
            A WEBSITE DESIGNED FOR CLARITY AND ACTION
          </motion.h2>

          {/* Body Text */}
          <div className="flex flex-col space-y-6 md:space-y-8 max-w-[900px]">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] font-normal leading-[24px] md:leading-[32px] text-[#525252]"
            >
              The website redesign centered on eliminating friction in the user journey. Research revealed that visitors needed immediate clarity on three key points: services offered, audience served, and how to book. The structure was optimized to guide users—primarily homebuyers, agents, and homeowners in the DMV—toward conversion with minimal steps. A prominent inspection cost calculator was integrated into the homepage, reducing barriers to scheduling while setting clear expectations.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[24px] font-normal leading-[24px] md:leading-[32px] text-[#525252]"
            >
              Strategic visual hierarchy directs attention to core services and CTAs, with a bold "Book Inspection" button consistently accessible. The calculator serves as a primary entry point, while service pages distill information into scannable sections. Simplified navigation and intentional white space ensure focus remains on conversion, turning passive browsing into actionable engagement. Every design choice reinforces the goal: making trust and efficiency visible.
            </motion.p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
