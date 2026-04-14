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

export function AllInOneDevicePreview() {
  return (
    <motion.section
      className="w-full bg-white py-20 md:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center px-0 md:px-6">

        <motion.div
          variants={itemVariants}
          className="relative w-full bg-[#B80733] rounded-none md:rounded-[16px] p-8 sm:p-12 md:p-20 lg:p-24 pb-0 sm:pb-0 md:pb-0 lg:pb-0 flex items-center justify-center mb-10 sm:mb-16 md:mb-24 lg:mb-36 xl:mb-44"
        >
          <div className="relative w-full max-w-[1200px] flex justify-center translate-y-10 sm:translate-y-16 md:translate-y-20 lg:translate-y-26 xl:translate-y-40">
            <img
              src="/aio/pc-view.svg"
              alt="All In One MacBook Preview"
              className="w-full h-auto block transform hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
