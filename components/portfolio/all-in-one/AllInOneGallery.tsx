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

export function AllInOneGallery() {
  return (
    <motion.section
      className="w-full bg-white py-20 md:py-32 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-[1440px] mx-auto flex flex-col gap-6 px-0 md:px-6">
        
        {/* Top Feature Card */}
        <motion.div 
          variants={itemVariants}
          className="relative w-full bg-[#FAFAFA] rounded-none md:rounded-[16px] p-6 sm:p-12 md:p-20 flex items-center justify-center overflow-hidden"
          style={{ borderRadius: typeof window !== 'undefined' && window.innerWidth < 768 ? 0 : undefined }}
        >
          <div 
            className="relative w-full max-w-[1000px] transition-transform hover:scale-[1.01] duration-700"
            style={{ 
              transform: 'rotate(-3.65deg)',
              borderRadius: '12px',
              overflow: 'hidden'
            }}
          >
            <img 
              src="/landingpage/aio/aio-mainhero.png" 
              alt="All In One Main Hero Preview" 
              className="w-full h-auto block"
            />
          </div>
        </motion.div>

        {/* Secondary Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 md:px-0">
          
          {/* Logo Card */}
          <motion.div 
            variants={itemVariants}
            className="w-full bg-[#F7F9FA] rounded-[16px] aspect-square flex items-center justify-center p-12 overflow-hidden"
          >
            <img 
              src="/landingpage/aio/aio-logo.svg" 
              alt="All In One Logo" 
              className="w-full h-auto max-w-[300px] block"
            />
          </motion.div>

          {/* Icon/Brand Card */}
          <motion.div 
            variants={itemVariants}
            className="w-full bg-[#B80733] rounded-[16px] aspect-square flex items-center justify-center p-12 overflow-hidden"
          >
            <img 
              src="/landingpage/aio/home-inspection.svg" 
              alt="Home Inspection Icon" 
              className="w-full h-auto max-w-[200px] block"
            />
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}
