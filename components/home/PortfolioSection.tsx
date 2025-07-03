import { motion } from "framer-motion";
import { useFeaturedPortfolio } from '../../hooks/useSupabase';
import { ImageWithFallback } from '../figma/ImageWithFallback';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.25, 0.46, 0.45, 0.94], // Gentler easing
      staggerChildren: 0.2, // Slightly longer stagger for relaxed feel
      delayChildren: 0.65 // Ultra-smooth seamless flow with hero animation
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 20, // Reduced from 40px for subtlety
    scale: 0.98 // Much subtler scale effect
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2, // Extended duration for relaxed feel
      ease: [0.25, 0.46, 0.45, 0.94] // Gentler easing curve
    }
  }
};

function ProjectCard({ 
  image, 
  title, 
  brand, 
  gridArea,
  index,
  onClick
}: { 
  image: string; 
  title: string; 
  brand: string; 
  gridArea: string;
  index: number;
  onClick?: () => void;
}) {
  return (
    <motion.div
      className={`${gridArea} box-border content-stretch flex flex-col gap-4 items-start justify-start p-0 relative shrink-0 cursor-pointer`}
      variants={cardVariants}
      onClick={onClick}
    >
      <motion.div
        className="[background-size:cover,_auto] basis-0 bg-[position:50%_50%,_0%_0%] bg-neutral-100 grow min-h-px min-w-px overflow-hidden relative rounded-2xl shrink-0 w-full cursor-pointer group"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Background image with zoom effect */}
        <ImageWithFallback
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </motion.div>
      <motion.div 
        className="box-border content-stretch flex flex-col font-onest gap-1 items-start justify-start p-0 relative shadow-[4px_4px_24px_0px_rgba(224,224,224,0.24)] shrink-0 text-[#141414] text-left w-full"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="relative shrink-0 text-[24px] tracking-[-0.96px] w-full">
          <p className="block leading-[32px]">
            {title}
          </p>
        </div>
        <div className="relative shrink-0 text-[16px] tracking-[-0.64px] w-full">
          <p className="block leading-[24px]">{brand}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function MobileProjectCard({ 
  image, 
  title, 
  brand, 
  index,
  onClick
}: { 
  image: string; 
  title: string; 
  brand: string; 
  index: number;
  onClick?: () => void;
}) {
  return (
    <motion.div
      className="flex flex-col gap-4 w-full cursor-pointer"
      variants={cardVariants}
      onClick={onClick}
    >
      <motion.div
        className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 h-[280px] overflow-hidden relative rounded-2xl w-full cursor-pointer group"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        {/* Background image with zoom effect */}
        <ImageWithFallback
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </motion.div>
      <motion.div 
        className="flex flex-col font-onest gap-1 text-[#141414] text-left w-full"
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
      >
        <div className="text-[20px] tracking-[-0.8px] w-full">
          <p className="block leading-[28px]">
            {title}
          </p>
        </div>
        <div className="text-[14px] tracking-[-0.56px] w-full">
          <p className="block leading-[20px]">{brand}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PortfolioSkeleton() {
  return (
    <>
      {/* Desktop skeleton */}
      <div className="aspect-[1440/2088] basis-0 box-border gap-6 grid grid-cols-[repeat(12,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] grow min-h-px min-w-px overflow-visible p-0 relative shrink-0 hidden md:grid">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`${
              i === 0 ? '[grid-area:1_/_1_/_auto_/_span_12]' :
              i === 1 ? '[grid-area:2_/_1_/_auto_/_span_7]' :
              i === 2 ? '[grid-area:2_/_8_/_auto_/_span_5]' :
              i === 3 ? '[grid-area:3_/_1_/_auto_/_span_5]' :
              '[grid-area:3_/_6_/_auto_/_span_7]'
            } flex flex-col gap-4 animate-pulse`}
          >
            <div className="bg-neutral-200 rounded-2xl flex-1 min-h-[200px]" />
            <div className="flex flex-col gap-2">
              <div className="h-8 bg-neutral-200 rounded w-3/4" />
              <div className="h-6 bg-neutral-200 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile skeleton */}
      <div className="flex flex-col gap-6 w-full md:hidden">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col gap-4 animate-pulse">
            <div className="h-[280px] bg-neutral-200 rounded-2xl" />
            <div className="flex flex-col gap-2">
              <div className="h-7 bg-neutral-200 rounded w-3/4" />
              <div className="h-5 bg-neutral-200 rounded w-1/2" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

interface PortfolioSectionProps {
  onNavigatePortfolio: () => void;
}

export function PortfolioSection({ onNavigatePortfolio }: PortfolioSectionProps) {
  const { portfolio, loading, error } = useFeaturedPortfolio(5);

  if (error) {
    console.error('Error loading portfolio:', error);
  }

  // Grid areas for bento layout
  const gridAreas = [
    '[grid-area:1_/_1_/_auto_/_span_12]', // Full width hero
    '[grid-area:2_/_1_/_auto_/_span_7]',  // Large left
    '[grid-area:2_/_8_/_auto_/_span_5]',  // Medium right
    '[grid-area:3_/_1_/_auto_/_span_5]',  // Medium left
    '[grid-area:3_/_6_/_auto_/_span_7]'   // Large right
  ];

  return (
    <motion.div 
      className="relative shrink-0 w-full bg-white"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-6 md:px-6 sm:px-4 py-0 relative w-full">
          <div className="basis-0 grow max-w-[1440px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center max-w-inherit relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start max-w-inherit px-0 py-20 md:py-20 sm:py-12 relative w-full">
                
                {loading ? (
                  <PortfolioSkeleton />
                ) : portfolio && portfolio.length > 0 ? (
                  <>
                    {/* Desktop & Tablet: Bento Layout Container - 12-column grid system */}
                    <div className="aspect-[1440/2088] basis-0 box-border gap-6 grid grid-cols-[repeat(12,_minmax(0px,_1fr))] grid-rows-[repeat(3,_minmax(0px,_1fr))] grow min-h-px min-w-px overflow-visible p-0 relative shrink-0 hidden md:grid">
                      {portfolio.slice(0, 5).map((item, index) => (
                        <ProjectCard
                          key={item.id}
                          image={item.image_url}
                          title={item.title}
                          brand={item.client_name}
                          gridArea={gridAreas[index]}
                          index={index}
                          onClick={onNavigatePortfolio}
                        />
                      ))}
                    </div>

                    {/* Mobile: Single Column Stack Layout */}
                    <div className="flex flex-col gap-6 w-full md:hidden">
                      {portfolio.slice(0, 5).map((item, index) => (
                        <MobileProjectCard
                          key={item.id}
                          image={item.image_url}
                          title={item.title}
                          brand={item.client_name}
                          index={index}
                          onClick={onNavigatePortfolio}
                        />
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12 w-full">
                    <p className="text-neutral-500">No portfolio items found.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}