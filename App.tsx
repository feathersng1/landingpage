import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Home } from "./components/Home";
import { Preview } from "./components/Preview";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

const pageTransition = {
  type: "tween",
  ease: [0.16, 1, 0.3, 1],
  duration: 0.5
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'preview' | 'portfolio' | 'blog'>('home');

  return (
    <AnimatePresence mode="wait">
      {currentPage === 'preview' ? (
        <motion.div
          key="preview"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Preview 
            currentPage="preview"
            onNavigateHome={() => setCurrentPage('home')}
            onNavigatePreview={() => setCurrentPage('preview')}
            onNavigateBlog={() => setCurrentPage('blog')}
          />
        </motion.div>
      ) : currentPage === 'portfolio' ? (
        <motion.div
          key="portfolio"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Portfolio 
            onNavigateHome={() => setCurrentPage('home')}
            onNavigatePreview={() => setCurrentPage('preview')}
            onNavigateBlog={() => setCurrentPage('blog')}
          />
        </motion.div>
      ) : currentPage === 'blog' ? (
        <motion.div
          key="blog"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Blog 
            currentPage="blog"
            onNavigateHome={() => setCurrentPage('home')}
            onNavigatePreview={() => setCurrentPage('preview')}
            onNavigateBlog={() => setCurrentPage('blog')}
          />
        </motion.div>
      ) : (
        <motion.div
          key="home"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <Home 
            currentPage="home"
            onNavigateHome={() => setCurrentPage('home')}
            onNavigatePreview={() => setCurrentPage('preview')}
            onNavigatePortfolio={() => setCurrentPage('portfolio')}
            onNavigateBlog={() => setCurrentPage('blog')}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}