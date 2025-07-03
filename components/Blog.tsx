import { motion } from "framer-motion";
import { UnifiedHeader } from "./UnifiedHeader";
import { BlogHero } from "./blog/BlogHero";
import { BlogPost } from "./blog/BlogPost";
import { Footer } from "./Footer";
import imgBlogImage from "figma:asset/073942923964aeb6f24c219317ffe9268dd288eb.png";
import imgBlogImage1 from "figma:asset/28678cbf959186ceeeb5a85ee09a72a1519f96f5.png";
import imgBlogImage2 from "figma:asset/d223ca7cc66495a3d4f34b9514c77380077e0e70.png";
import imgBlogImage3 from "figma:asset/55ce54ee95d8893681ecdd2fb248c610f65fdf6c.png";

interface BlogProps {
  currentPage: 'home' | 'preview' | 'blog';
  onNavigateHome: () => void;
  onNavigatePreview: () => void;
  onNavigateBlog: () => void;
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

const sectionVariants = {
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

const blogPosts = [
  {
    image: imgBlogImage,
    category: "news",
    title: "We turn ideas into scalable experiences",
    description: "We define your brand's voice, values, and audience — building a focused strategy that helps you stand out and scale with purpose."
  },
  {
    image: imgBlogImage1,
    category: "opinion",
    title: "We turn ideas into scalable experiences",
    description: "We define your brand's voice, values, and audience — building a focused strategy that helps you stand out and scale with purpose."
  },
  {
    image: imgBlogImage2,
    category: "news",
    title: "We turn ideas into scalable experiences",
    description: "We define your brand's voice, values, and audience — building a focused strategy that helps you stand out and scale with purpose."
  },
  {
    image: imgBlogImage3,
    category: "press",
    title: "We turn ideas into scalable experiences",
    description: "We define your brand's voice, values, and audience — building a focused strategy that helps you stand out and scale with purpose."
  }
];

export function Blog({ currentPage, onNavigateHome, onNavigatePreview, onNavigateBlog }: BlogProps) {
  return (
    <div className="relative">
      {/* Fixed Footer - positioned at bottom with its natural height */}
      <Footer />
      
      {/* Main content that scrolls over the footer */}
      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* All content sections with solid white background */}
        <div className="bg-[#ffffff]">
          <motion.div variants={sectionVariants}>
            <UnifiedHeader 
              currentPage={currentPage}
              onNavigateHome={onNavigateHome}
              onNavigatePreview={onNavigatePreview}
              onNavigateBlog={onNavigateBlog}
            />
          </motion.div>
          
          <motion.div variants={sectionVariants}>
            <BlogHero />
          </motion.div>
          
          {/* Blog Posts Grid */}
          <div className="flex flex-col items-center justify-center overflow-clip relative w-full">
            <div className="box-border content-stretch flex flex-col gap-2.5 items-center justify-center px-6 py-0 relative w-full">
              <div className="max-w-[1440px] relative shrink-0 w-full">
                <div className="flex flex-col items-center justify-center max-w-inherit overflow-clip relative size-full">
                  <div className="box-border content-stretch flex flex-col gap-0 items-center justify-center max-w-inherit px-0 py-0 relative w-full">
                    {blogPosts.map((post, index) => (
                      <motion.div
                        key={index}
                        variants={sectionVariants}
                      >
                        <BlogPost
                          image={post.image}
                          category={post.category}
                          title={post.title}
                          description={post.description}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Spacer to reveal footer - matches footer height exactly */}
        <div className="h-[700px] bg-transparent"></div>
      </motion.div>
    </div>
  );
}