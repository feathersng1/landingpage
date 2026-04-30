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

export function NotrifyCareCoordination() {
  return (
    <motion.section
      className="relative w-full bg-white px-6 py-20 md:py-32"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col items-center">
        <div className="max-w-[1000px] w-full flex flex-col items-center text-center">

          {/* Description Paragraph */}
          <div className="flex flex-col space-y-6 md:space-y-8 max-w-[900px]">
            <motion.p
              variants={itemVariants}
              className="font-onest text-[16px] md:text-[20px] lg:text-[24px] leading-relaxed md:leading-[1.6] text-[#525252]"
            >
              Beyond individual management, the app is designed for multi-user care coordination. Users can securely add and manage health profiles for up to five family members, with a granular permissions system that controls exactly what information each member can view or edit. This allows a primary caregiver to oversee medications and appointments for dependents, while granting appropriate access to other trusted adults. Every feature, from family record management to AI-driven insights, is crafted within this responsive framework, ensuring that comprehensive health management is always organized, accessible, and actionable on any screen.
            </motion.p>
          </div>

        </div>
      </div>
    </motion.section>
  );
}
