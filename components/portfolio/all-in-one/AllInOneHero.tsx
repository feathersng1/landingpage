import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2
    }
  }
};

export function AllInOneHero() {
  return (
    <motion.div
      className="relative shrink-0 w-full px-0 md:px-6 py-0 md:py-6"
      style={{ borderRadius: 0 }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="max-w-[1440px] mx-auto">
        <div
          className="relative w-full rounded-none lg:rounded-[16px] overflow-hidden shadow-none"
          style={{ borderRadius: 0 }}
        >
          {/* Mobile Hero Image - optimized dedicated asset */}
          <img
            src="/aio/aio-mobile-hero.svg"
            alt="All In One Hero Mobile"
            className="w-full h-auto block md:hidden"
            style={{ borderRadius: 0 }}
          />
          {/* Desktop Hero Image */}
          <img
            src="/aio/aio-hero.svg"
            alt="All In One Hero"
            className="w-full h-auto hidden md:block"
            style={{ borderRadius: 'inherit' }}
          />
        </div>
      </div>
    </motion.div>
  );
}
