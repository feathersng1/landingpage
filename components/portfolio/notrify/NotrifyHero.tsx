import { motion } from "framer-motion";

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

export function NotrifyHero() {
  return (
    <section className="w-full bg-white pt-10 md:pt-16 px-6">
      <motion.div 
        className="max-w-[1440px] mx-auto overflow-hidden rounded-[16px] md:rounded-[24px]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={itemVariants}
      >
        <img 
          src="/notrify/notrify-hero.svg" 
          alt="Notrify Hero" 
          className="w-full h-auto block"
        />
      </motion.div>
    </section>
  );
}
