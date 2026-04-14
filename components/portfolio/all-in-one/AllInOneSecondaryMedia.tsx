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

export function AllInOneSecondaryMedia() {
  return (
    <motion.section
      className="w-full bg-white py-20 md:py-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6">

        {/* Row 1: Browser Preview (Edge-to-edge on mobile) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full md:px-6"
        >
          <div
            className="relative w-full md:min-h-[500px] lg:min-h-[600px] xl:min-h-[700px] flex items-end justify-center overflow-hidden rounded-none md:rounded-[16px]"
            style={{
              backgroundImage: "url('/aio/homepage-win-bg.svg')",
              backgroundSize: '100% auto',
              backgroundPosition: 'top center'
            }}
          >
            <div className="w-full h-full px-6 sm:px-12 md:px-20 pt-6 sm:pt-12 md:pt-20 pb-0 flex items-end justify-center">
              <img
                src="/aio/homepage.png"
                alt="Homepage Preview"
                className="w-full h-auto max-w-[1100px] rounded-t-[16px]"
              />
            </div>
          </div>
        </motion.div>

        {/* Row 2: Secondary Grid (2x2 on desktop, stack on mobile with radius) */}
        <div className="px-6 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { src: "/aio/inspection-calculator.svg", alt: "Inspection Calculator" },
              { src: "/aio/hand-holding-phone.svg", alt: "Hand Holding Phone" },
              { src: "/aio/menu.svg", alt: "Menu Interface" },
              { src: "/aio/services.svg", alt: "Services Section" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="w-full rounded-[16px] overflow-hidden flex items-center justify-center aspect-square md:aspect-[3/4] lg:aspect-square"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-[16px]"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Row 3: Team Section (Edge-to-edge on mobile) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full md:px-6"
        >
          <div
            className="relative w-full bg-[#CEDAE0] rounded-none md:rounded-[16px] overflow-hidden px-6 sm:px-12 md:px-20 pt-6 sm:pt-12 md:pt-20 pb-0 flex items-end justify-center"
          >
            <img
              src="/aio/the-team.svg"
              alt="The AIO Team"
              className="w-full h-auto max-w-[1200px] block rounded-t-[16px]"
            />
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
