import { motion } from "framer-motion";
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

interface PortfolioSectionProps {
  onNavigatePortfolio: (project: 'all-in-one' | 'neochildcare' | 'notrify') => void;
}

const STATIC_PROJECTS = [
  {
    id: 'all-in-one',
    title: 'Your home inspection, done right',
    client_name: 'ALL-IN-ONE',
    image_url: '/aio/aio-hero.svg',
    projectKey: 'all-in-one'
  },
  {
    id: 'neochildcare',
    title: 'Digital Health for the Next Generation',
    client_name: 'NEOCHILDCARE',
    image_url: '/neochild/neochild-hero2.svg',
    projectKey: 'neochildcare'
  },
  {
    id: 'notrify',
    title: 'One Place for Medical Care',
    client_name: 'NOTRIFY',
    image_url: '/notrify/notrify-hero.svg',
    projectKey: 'notrify'
  }
];

export function PortfolioSection({ onNavigatePortfolio }: PortfolioSectionProps) {
  // Merge static projects with dynamic ones, ensuring static ones come first
  const displayPortfolio = STATIC_PROJECTS;

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

                {/* Desktop & Tablet: Bento Layout Container - 12-column grid system */}
                <div className="aspect-[1440/1200] basis-0 box-border gap-6 grid grid-cols-[repeat(12,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] grow min-h-px min-w-px overflow-visible p-0 relative shrink-0 hidden md:grid">
                  {displayPortfolio.map((item, index) => {
                    const projectKey = (item as any).projectKey || 'all-in-one';
                    return (
                      <ProjectCard
                        key={item.id}
                        image={item.image_url}
                        title={item.title}
                        brand={item.client_name}
                        gridArea={gridAreas[index]}
                        index={index}
                        onClick={() => onNavigatePortfolio(projectKey as any)}
                      />
                    );
                  })}
                </div>

                {/* Mobile: Single Column Stack Layout */}
                <div className="flex flex-col gap-6 w-full md:hidden">
                  {displayPortfolio.map((item, index) => {
                    const projectKey = (item as any).projectKey || 'all-in-one';
                    return (
                      <MobileProjectCard
                        key={item.id}
                        image={item.image_url}
                        title={item.title}
                        brand={item.client_name}
                        index={index}
                        onClick={() => onNavigatePortfolio(projectKey as any)}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}