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

export function NotrifyCollaborationMedia() {
  return (
    <motion.section
      className="w-full bg-white pb-20 md:pb-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 px-0 md:px-6">

        {/* Row 1: Groups Flow */}
        <motion.div
          variants={itemVariants}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#E5E7EB] overflow-hidden flex flex-col items-center justify-center rounded-none md:rounded-[16px]"
        >
          {/* Background Image */}
          <img 
            src="/notrify/groupsbg.jpg" 
            alt="Groups Background" 
            className="absolute inset-0 w-full h-full object-cover object-center rounded-none md:rounded-[16px]"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-none md:rounded-[16px]" />
          
          {/* App Screens Overlay - Horizontal scroll on mobile, flex on desktop */}
          <div className="relative z-10 w-full h-full flex items-center justify-center p-6 md:p-12 lg:p-20">
            <div className="flex flex-nowrap items-center justify-center gap-4 md:gap-8 lg:gap-12 w-full h-full overflow-x-auto no-scrollbar md:overflow-visible">
              {[
                "/notrify/groups1.svg",
                "/notrify/groups2.svg",
                "/notrify/groups3.svg",
                "/notrify/groups4.svg"
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="h-full w-auto shrink-0"
                >
                  <img
                    src={img}
                    alt={`Group screen ${idx + 1}`}
                    className="h-full w-auto object-contain rounded-[8px] md:rounded-[12px] lg:rounded-[16px]"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Row 2: Permissions & Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">

          {/* Card 1: Members Management */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-[#1B42E0] rounded-[16px] aspect-square flex flex-col items-center justify-center overflow-hidden group p-8 md:p-12 lg:p-20"
          >
            <motion.div
              className="w-full h-full flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/notrify/members.svg"
                alt="Member Management"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>

          {/* Card 2: Admin Permissions */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-[#A6B6F5] rounded-[16px] aspect-square flex flex-col items-end justify-center overflow-hidden group pr-8 md:pr-12 lg:pr-20"
          >
            <motion.div
              className="w-full h-full flex items-center justify-end"
              whileHover={{ x: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/notrify/admin.svg"
                alt="Admin Permissions"
                className="h-full w-auto object-contain object-right"
                style={{ borderRadius: 0 }}
              />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
