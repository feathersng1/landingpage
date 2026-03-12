import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import { Home } from "./components/Home";
import { Preview } from "./components/Preview";
import { Portfolio } from "./components/Portfolio";
import { Blog } from "./components/Blog";
import { AdminPortfolio } from "./components/admin/AdminPortfolio";

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
  const [currentPage, setCurrentPage] = useState<'home' | 'preview' | 'portfolio' | 'blog' | 'admin'>('home');

  // Expose for hidden footer link
  useEffect(() => {
    (window as any).navigateToAdmin = () => setCurrentPage('admin');
    return () => { delete (window as any).navigateToAdmin; };
  }, []);

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
      ) : currentPage === 'admin' ? (
        <motion.div
          key="admin"
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={pageTransition}
        >
          <div className="min-h-screen bg-white">
            <div className="p-4 border-b flex justify-between items-center">
              <button
                onClick={() => setCurrentPage('home')}
                className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
              >
                ← Back to Site
              </button>
              <span className="text-sm font-bold tracking-tighter">FEATHERS ADMIN</span>
            </div>
            <AdminPortfolio />
          </div>
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
      <Toaster position="top-center" />
    </AnimatePresence>
  );
}