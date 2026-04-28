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

export function NotrifyDesignApproach() {
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
            WEB: THE PATH FROM BENEFIT TO DOWNLOAD
          </motion.h2>

          {/* Description Paragraphs */}
          <div className="flex flex-col space-y-6 md:space-y-8 max-w-[900px]">
            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[20px] leading-relaxed md:leading-[1.6] text-[#525252]"
            >
              The Notrify one-page website is designed to immediately highlight the app's core benefits and drive user action. It opens with a clear value proposition, followed by prominent &ldquo;Get started&rdquo; and &ldquo;Download app&rdquo; buttons to capture interest. The layout maintains this focus throughout, with concise sections dedicated to key features like appointment management and medication tracking.
            </motion.p>

            <motion.p 
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[20px] leading-relaxed md:leading-[1.6] text-[#525252]"
            >
              Each feature is paired with supportive visuals to reinforce its utility. Strategic &ldquo;Contact us&rdquo; buttons are placed at logical points, ensuring clear pathways for both individual users and healthcare providers to engage further.
            </motion.p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
