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

export function AllInOneThirdMedia() {
  return (
    <motion.section
      className="w-full bg-white py-20 md:py-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">

        {/* Row 1: Booking Flow (Edge-to-edge on mobile) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full md:px-6"
        >
          <div
            className="relative w-full bg-[#B80733] min-h-[300px] md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] flex items-end justify-center overflow-hidden rounded-none md:rounded-[16px]"
          >
            <div className="w-full h-full px-6 sm:px-12 md:px-20 pt-6 sm:pt-12 md:pt-20 pb-0 flex items-end justify-center">
              <img
                src="/aio/booking.svg"
                alt="Booking Flow Preview"
                className="w-full h-auto max-w-[1000px] block"
              />
            </div>
          </div>
        </motion.div>

        {/* Row 2: Secondary Grid (1x1 on mobile, 1x2 on tablet/desktop) */}
        <div className="px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Card 1: Order Summary */}
            <motion.div
              variants={itemVariants}
              className="w-full bg-[#20333D] rounded-[16px] overflow-hidden flex items-center justify-center p-6 sm:p-12 mb-0 md:mb-0 aspect-square md:aspect-[3/4] lg:aspect-square"
            >
              <img
                src="/aio/summary.svg"
                alt="Order Summary Mockup"
                className="max-w-full max-h-full object-contain block shadow-2xl"
              />
            </motion.div>

            {/* Card 2: Success Screen (Full Bleed Image) */}
            <motion.div
              variants={itemVariants}
              className="w-full rounded-[16px] overflow-hidden flex items-center justify-center aspect-square md:aspect-[3/4] lg:aspect-square"
            >
              <img
                src="/aio/success.svg"
                alt="Success Screen"
                className="w-full h-full object-cover rounded-[16px]"
              />
            </motion.div>

          </div>
        </div>

      </div>
    </motion.section>
  );
}
