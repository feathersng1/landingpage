import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.15
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

export function NotrifyMainMedia() {
  return (
    <motion.section
      className="w-full bg-white pb-20 md:pb-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 px-0 md:px-6">

        {/* Row 1: App Home Preview (Responsive) */}
        <motion.div
          variants={itemVariants}
          className="relative w-full aspect-[16/11] md:aspect-[16/10] lg:aspect-[21/9] bg-[#BCC0E1] overflow-hidden flex flex-col items-center justify-center rounded-none md:rounded-[16px]"
        >
          {/* Background Image - Object cover focusing right on mobile for ribbon visibility */}
          <img
            src="/notrify/mediabg.jpg"
            alt="Healthcare Background"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center rounded-none md:rounded-[16px]"
          />

          {/* App Preview - Shifting left and using explicit height to prevent cropping */}
          <div className="relative z-10 w-full h-full flex items-center justify-center -translate-x-[12%] md:-translate-x-[15%] lg:-translate-x-[10%] px-6">
            <div className="h-[80%] md:h-[85%] w-auto flex items-center justify-center">
              <picture className="h-full w-auto">
                {/* Using tab image for 1024px screen as requested */}
                <source media="(min-width: 1280px)" srcSet="/notrify/apphome-desktop.svg" />
                <source media="(min-width: 768px)" srcSet="/notrify/apphome-tab.svg" />
                <img
                  src="/notrify/apphome-mobile.svg"
                  alt="Notrify App Home"
                  className="h-full w-auto object-contain drop-shadow-2xl"
                />
              </picture>
            </div>
          </div>
        </motion.div>

        {/* Row 2: Onboarding Flow */}
        <motion.div
          variants={itemVariants}
          className="w-full bg-[#0A1852] py-16 md:py-24 px-0 md:px-12 lg:px-20 overflow-hidden rounded-none md:rounded-[16px]"
        >
          {/* Fixed scrollbar issue with global hiding style and isolation */}
          <div className="overflow-x-auto no-scrollbar scrollbar-hide pb-8 md:pb-0 px-6 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style dangerouslySetInnerHTML={{
              __html: `
              .no-scrollbar::-webkit-scrollbar { display: none; }
            `}} />
            <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-6 min-w-max md:min-w-0">
              {[
                "/notrify/onboarding.svg",
                "/notrify/onboarding1.svg",
                "/notrify/onboarding2.svg",
                "/notrify/onboarding3.svg"
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="min-w-[280px] md:min-w-0 will-change-transform"
                >
                  <img
                    src={img}
                    alt={`Onboarding step ${idx + 1}`}
                    className="w-full h-auto rounded-[12px] shadow-lg"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Row 3: Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">
          {/* Card 1: Profile/Onboarding Form (Increased side padding, full height) */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-[#F5F5F5] rounded-[16px] aspect-square flex flex-col px-8 md:px-16 lg:px-24 py-8 md:py-12 lg:py-18 overflow-hidden group"
          >
            <motion.div
              className="flex-1 flex items-center justify-center overflow-hidden"
              whileHover={{ y: -20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/notrify/profile.svg"
                alt="Profile Setup"
                className="max-w-full h-full object-contain rounded-[16px]"
              />
            </motion.div>
          </motion.div>

          {/* Card 2: Appointments & Treatments */}
          <motion.div
            variants={itemVariants}
            className="w-full bg-[#E1EEF5] rounded-[16px] aspect-square flex flex-row items-center justify-center gap-4 p-4 md:p-8 overflow-hidden group"
          >
            <motion.div
              className="flex-1 h-full"
              whileHover={{ y: -20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/notrify/appointments.svg"
                alt="Appointments"
                className="w-full h-full object-contain"
              />
            </motion.div>
            <motion.div
              className="flex-1 h-full"
              whileHover={{ y: 20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/notrify/treatment.svg"
                alt="Treatments"
                className="w-full h-full object-contain"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Row 4: Chat Interface */}
        <motion.div
          variants={itemVariants}
          className="w-full bg-[#E1E5F5] py-16 md:py-24 px-0 md:px-12 lg:px-20 overflow-hidden rounded-none md:rounded-[16px]"
        >
          <div className="overflow-x-auto no-scrollbar scrollbar-hide pb-8 md:pb-0 px-6 md:px-0" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex flex-nowrap md:grid md:grid-cols-4 gap-6 min-w-max md:min-w-0">
              {[
                "/notrify/chat1.svg",
                "/notrify/chat2.svg",
                "/notrify/chat3.svg",
                "/notrify/chat4.png"
              ].map((img, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="min-w-[280px] md:min-w-0 will-change-transform"
                >
                  <img
                    src={img}
                    alt={`Chat screen ${idx + 1}`}
                    className="w-full h-auto rounded-[12px] shadow-md"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}
