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

export function NeochildGallery() {
  return (
    <motion.section
      className="w-full bg-white py-20 md:py-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 px-0 md:px-6">

        {/* Row 1: Logo Feature Card */}
        <motion.div
          variants={itemVariants}
          className="relative w-full bg-[#AADEE0] rounded-none md:rounded-[16px] py-12 md:py-24 px-16 md:px-32 flex items-center justify-center overflow-hidden"
        >
          <div className="relative w-full max-w-[1240px] transition-transform hover:scale-[1.01] duration-700">
            <img
              src="/neochild/neochildcare.svg"
              alt="Neochildcare Logo Feature"
              className="w-full h-auto block"
            />
          </div>
        </motion.div>

        {/* Row 2: Secondary Grid (Mum Photos) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">
          {/* Mum Hold Child */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-neutral-50 rounded-[16px] overflow-hidden aspect-square flex items-center justify-center relative"
          >
            {/* Desktop Image */}
            <img
              src="/neochild/mum-hold-child.svg"
              alt="Mother holding child"
              className="hidden md:block w-full h-full object-cover"
            />
            {/* Mobile Image */}
            <img
              src="/neochild/mum-hold-child-m.svg"
              alt="Mother holding child"
              className="block md:hidden w-full h-full object-cover"
            />
          </motion.div>

          {/* Mum Lift Child */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-neutral-50 rounded-[16px] overflow-hidden aspect-square flex items-center justify-center relative"
          >
            {/* Desktop Image */}
            <img
              src="/neochild/mum-lift-child.svg"
              alt="Mother lifting child"
              className="hidden md:block w-full h-full object-cover"
            />
            {/* Mobile Image */}
            <img
              src="/neochild/mum-lift-child-m.svg"
              alt="Mother lifting child"
              className="block md:hidden w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Row 3: Baby PhotosCard */}
        <motion.div
          variants={itemVariants}
          className="relative w-full bg-[#FEE3D0] rounded-none md:rounded-[16px] p-12 md:p-24 overflow-hidden"
        >
          {/* Unified Layout for Desktop and Mobile (Desktop shows 3 images now) */}
          <div className="hidden md:flex items-center justify-center gap-12 lg:gap-24">
            {/* Baby 3 */}
            <div className="w-full max-w-[320px]">
              <img
                src="/neochild/baby3.svg"
                alt="Baby 3"
                className="w-full h-auto block"
              />
            </div>
            {/* Baby 1 with Animated Circle */}
            <motion.div
              className="relative w-full max-w-[320px] overflow-visible"
              whileHover="animateCircle"
            >
              <img
                src="/neochild/baby1.svg"
                alt="Baby 1"
                className="w-full h-auto block"
              />
              {/* Orange Circle Overlay - Smooth 9-point contour loop */}
              <motion.div
                className="absolute w-[18%] aspect-square bg-[#FA8C3A] rounded-full z-10"
                style={{ x: "-50%", y: "-50%" }}
                initial={{ top: "10%", left: "81%" }}
                variants={{
                  animateCircle: {
                    left: ["81%", "100%", "85%", "52%", "15%", "0%", "10%", "46%", "81%"],
                    top:  ["10%", "45%", "85%", "100%", "88%", "45%", "10%", "0%", "10%"],
                    transition: {
                      duration: 5,
                      ease: "linear",
                      repeat: Infinity
                    }
                  }
                }}
              />
            </motion.div>

            {/* Baby 2 */}
            <div className="w-full max-w-[320px]">
              <img
                src="/neochild/baby2.svg"
                alt="Baby 2"
                className="w-full h-auto block"
              />
            </div>
          </div>

          {/* Mobile Layout: Scaled vertical stack */}
          <div className="flex md:hidden flex-col items-center gap-12">
            {/* Baby 3 */}
            <div className="w-[80%] max-w-[280px]">
              <img
                src="/neochild/baby3.svg"
                alt="Baby 3"
                className="w-full h-auto block"
              />
            </div>
            {/* Baby 1 (Mobile second, with circle) */}
            <motion.div
              className="relative w-[80%] max-w-[280px] overflow-visible"
              whileHover="animateCircle"
            >
              <img
                src="/neochild/baby1.svg"
                alt="Baby 1"
                className="w-full h-auto block"
              />
              {/* Orange Circle Overlay - Smooth 9-point contour loop */}
              <motion.div
                className="absolute w-[18%] aspect-square bg-[#FA8C3A] rounded-full z-10"
                style={{ x: "-50%", y: "-50%" }}
                initial={{ top: "10%", left: "81%" }}
                variants={{
                  animateCircle: {
                    left: ["81%", "100%", "85%", "52%", "15%", "0%", "10%", "46%", "81%"],
                    top:  ["10%", "45%", "85%", "100%", "88%", "45%", "10%", "0%", "10%"],
                    transition: {
                      duration: 5,
                      ease: "linear",
                      repeat: Infinity
                    }
                  }
                }}
              />
            </motion.div>
            {/* Baby 2 */}
            <div className="w-[80%] max-w-[280px]">
              <img
                src="/neochild/baby2.svg"
                alt="Baby 2"
                className="w-full h-auto block"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
