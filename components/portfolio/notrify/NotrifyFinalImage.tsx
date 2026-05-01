import { motion } from "framer-motion";

const containerVariants = {
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

export function NotrifyFinalImage() {
  return (
    <motion.section 
      className="relative w-full bg-white px-0 md:px-6 py-10 md:py-20 lg:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto overflow-hidden rounded-none md:rounded-[24px]">
        <img 
          src="/notrify/final.svg" 
          alt="Notrify Branding" 
          className="w-full h-auto object-cover"
        />
      </div>
    </motion.section>
  );
}
