import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
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

export function NotrifyTestimonial() {
  return (
    <motion.section 
      className="relative w-full bg-white px-6 py-20 md:py-32 lg:py-40"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="max-w-[1000px] w-full flex flex-col items-center text-center space-y-10 md:space-y-12">
          
          {/* Testimonial Quote */}
          <motion.div variants={itemVariants} className="max-w-[850px]">
            <p className="font-onest text-[18px] md:text-[24px] lg:text-[28px] leading-relaxed md:leading-[1.5] text-[#141414]">
              &ldquo;Feathers took our complex health platform and made it feel simple. Their execution across mobile, tablet, and desktop is seamless, intuitive, and ready to scale.&rdquo;
            </p>
          </motion.div>

          {/* Author Details */}
          <motion.div variants={itemVariants} className="flex flex-col items-center space-y-2">
            <h4 className="font-onest font-medium text-[14px] md:text-[16px] tracking-[0.1em] uppercase text-[#141414]">
              Tobi Suleman
            </h4>
            <p className="font-onest text-[14px] md:text-[16px] text-[#525252]">
              Chief Executive Officer, NOTRIFY
            </p>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
