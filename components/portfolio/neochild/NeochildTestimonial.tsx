import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function NeochildTestimonial() {
  return (
    <motion.section 
      className="w-full bg-white py-20 md:py-32 px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="max-w-[1100px] w-full flex flex-col items-center text-center space-y-12 md:space-y-16">
          
          {/* Quote */}
          <motion.p 
            variants={itemVariants}
            className="font-onest text-[16px] md:text-[24px] leading-[24px] md:leading-[32px] text-[#141414] font-normal"
          >
            &ldquo;Our mission is to provide compassionate, accessible care. The Feathers team translated that mission into a digital experience with remarkable clarity and empathy. Their design choices guide, reassure, and empower our users, while their robust development work ensures this critical platform is reliable for the families who depend on it. They built more than an interface; they built a gateway to better health.&rdquo;
          </motion.p>

          {/* Author  */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col items-center space-y-1"
          >
            <span className="font-onest text-[16px] md:text-[24px] font-normal text-[#525252] uppercase">
              DR. TUNDE OKEKE
            </span>
            <span className="font-onest text-[16px] md:text-[24px] font-normal text-[#A3A3A3]">
              Chief Executive Officer, NeoChildcare
            </span>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
