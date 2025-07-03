import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";

interface BlogPostProps {
  image: string;
  category: string;
  title: string;
  description: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

export function BlogPost({ image, category, title, description }: BlogPostProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div 
      ref={ref}
      className="relative shrink-0 w-full"
      variants={containerVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="flex flex-col items-center justify-center overflow-clip relative size-full">
        <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="max-w-[960px] relative shrink-0 w-full">
            <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
              <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center max-w-inherit px-0 py-[60px] relative w-full">
                <motion.div 
                  className="box-border content-stretch flex flex-col gap-6 items-start justify-start p-0 relative shrink-0 w-full"
                  variants={itemVariants}
                >
                  {/* Blog Image */}
                  <motion.div
                    className="bg-center bg-cover bg-no-repeat rounded-2xl shrink-0 w-full h-[320px] sm:h-[400px] md:h-[480px] image-hover group overflow-hidden cursor-pointer"
                    style={{ backgroundImage: `url('${image}')` }}
                    variants={itemVariants}
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="relative size-full">
                      {/* Overlay effect on hover */}
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                  
                  {/* Blog Content */}
                  <motion.div 
                    className="box-border content-stretch flex flex-col gap-4 items-center justify-start p-0 relative shrink-0 w-full"
                    variants={itemVariants}
                  >
                    {/* Category Badge */}
                    <motion.div 
                      className="relative rounded-lg shrink-0"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <div className="absolute border border-neutral-100 border-solid inset-0 pointer-events-none rounded-lg" />
                      <div className="flex flex-row items-center justify-center relative size-full">
                        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-3 py-1 relative">
                          <div className="font-['Onest:Medium',_sans-serif] font-medium leading-[0] relative shrink-0 text-[#141414] text-[16px] text-left text-nowrap tracking-[-0.64px]">
                            <p className="block leading-[24px] whitespace-pre lowercase">
                              {category}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Title */}
                    <motion.div 
                      className="font-['Monarque:Regular',_sans-serif] leading-[0] not-italic relative shrink-0 text-[#141414] text-center tracking-[-2.56px] w-full"
                      variants={itemVariants}
                    >
                      <p className="block leading-[48px] text-3xl sm:text-4xl md:text-5xl lg:text-[64px] lg:leading-[64px]">
                        {title}
                      </p>
                    </motion.div>
                    
                    {/* Description */}
                    <motion.div 
                      className="font-['Onest:Regular',_sans-serif] font-normal leading-[0] relative shrink-0 text-center text-neutral-600 tracking-[-0.96px] w-full max-w-2xl"
                      variants={itemVariants}
                    >
                      <p className="block leading-[28px] text-base sm:text-lg md:text-xl lg:text-[24px] lg:leading-[32px]">
                        {description}
                      </p>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}