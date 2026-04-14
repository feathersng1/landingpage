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

export function AllInOneTestimonial() {
  return (
    <motion.section
      className="w-full bg-white py-20 md:py-32 px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
        
        {/* Quote Block */}
        <motion.p
          variants={itemVariants}
          className="font-onest text-[16px] md:text-[24px] font-normal leading-[24px] md:leading-[32px] text-[#141414] mb-10 md:mb-12"
        >
          “We rebuilt the site to convert, not just impress. The numbers prove it: 40% more online bookings, 25% fewer abandoned forms, and 30% more engagement with our septic services—all in the first 3 weeks. The inspection calculator alone cut booking time by 15%. When you make the process this simple, people act.”
        </motion.p>

        {/* Author Block */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-1"
        >
          <span
            className="font-onest text-[16px] md:text-[24px] font-normal text-[#525252] uppercase"
          >
            DELTA NAPOLITANO
          </span>
          <span
            className="font-onest text-[16px] md:text-[24px] font-normal text-[#A3A3A3]"
          >
            Director of Marketing, All-In-One
          </span>
        </motion.div>

      </div>
    </motion.section>
  );
}
