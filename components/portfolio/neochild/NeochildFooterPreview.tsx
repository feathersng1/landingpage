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

export function NeochildFooterPreview() {
  return (
    <motion.section 
      className="w-full bg-white pb-20 md:pb-32 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div 
        variants={itemVariants}
        className="max-w-[1440px] mx-auto bg-[#CCEBEC] rounded-[16px] border-[4px] border-[#F5F5F5] overflow-hidden flex flex-col items-center pt-0 px-6 md:px-12 lg:px-20 pb-6 md:pb-12 lg:pb-20"
      >
        <div className="w-full relative">
          <img 
            src="/neochild/neochild-footer.svg" 
            alt="Neochildcare Footer Design" 
            className="w-full h-auto block shadow-none rounded-b-[8px] md:rounded-b-[12px]"
          />
        </div>
      </motion.div>
    </motion.section>
  );
}
