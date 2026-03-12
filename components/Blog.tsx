import { motion } from "framer-motion";
import { UnifiedHeader } from "./UnifiedHeader";
import { BlogHero } from "./blog/BlogHero";
import { BlogPost } from "./blog/BlogPost";
import { Footer } from "./Footer";
import { useBlog } from "../hooks/useSupabase";
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

export function Blog({ currentPage, onNavigateHome, onNavigatePreview, onNavigateBlog }: BlogProps) {
  const { posts, loading, error } = useBlog();

  if (error) {
    console.error('Error loading blog posts:', error);
  }

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
                    {loading ? (
                      <div className="py-20 text-center w-full">
                        <p className="text-neutral-500 animate-pulse">Loading posts...</p>
                      </div>
                    ) : posts && posts.length > 0 ? (
                      posts.map((post) => (
                        <motion.div
                          key={post.id}
                          variants={sectionVariants}
                        >
                          <BlogPost
                            image={post.featured_image}
                            category={post.category}
                            title={post.title}
                            description={post.excerpt}
                          />
                        </motion.div>
                      ))
                    ) : (
                      <div className="py-20 text-center w-full">
                        <p className="text-neutral-500">No blog posts found.</p>
                      </div>
                    )}
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