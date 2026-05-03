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
          className="relative w-full aspect-[16/11] md:aspect-[21/9] bg-[#E5E7EB] overflow-hidden flex flex-col items-center justify-center rounded-none md:rounded-[16px]"
        >
          {/* Background Image */}
          <img
            src="/notrify/groupsbg.jpg"
            alt="Groups Background"
            className="absolute inset-0 w-full h-full object-cover object-center rounded-none md:rounded-[16px]"
          />
          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-none md:rounded-[16px]" />

          {/* App Screens Overlay - Constrained width with justify-between for perfect gaps and symmetry */}
          <div className="relative z-10 w-full h-full flex items-center justify-center p-6 md:p-8 lg:p-24">
            <div className="flex flex-nowrap items-center justify-between w-full max-w-[1000px] md:max-w-[1150px] lg:max-w-[1300px] h-full overflow-x-auto no-scrollbar md:overflow-visible gap-4 md:gap-0">
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
                    className="h-full w-auto object-contain rounded-[8px] md:rounded-[12px] lg:rounded-[16px] drop-shadow-2xl"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Row 2: Permissions & Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">

          {/* Card 1: Members Management (Bleed to bottom-left with symmetrical top/right padding) */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-[#1B42E0] rounded-[16px] aspect-square relative overflow-hidden group"
          >
            <motion.div
              className="absolute top-8 md:top-12 lg:top-20 right-8 md:right-12 lg:right-20 bottom-0 left-0 flex items-end justify-start"
              whileHover={{ x: 15, y: -15 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/notrify/members.svg"
                alt="Member Management"
                className="w-full h-full object-contain object-left-bottom"
              />
            </motion.div>
          </motion.div>

          {/* Card 2: Admin Permissions (Bleed to left/top/bottom) */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-[#A6B6F5] rounded-[16px] aspect-square relative overflow-hidden group"
          >
            <motion.div 
              className="absolute inset-y-0 left-0 right-8 md:right-12 lg:right-20 flex items-center justify-start"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <img 
                src="/notrify/admin.svg" 
                alt="Admin Permissions" 
                className="h-full w-auto object-contain object-left"
                style={{ borderRadius: 0 }}
              />
            </motion.div>
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
}
