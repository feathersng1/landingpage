import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster } from "sonner";
import { Home } from "./components/Home";
import { Preview } from "./components/Preview";
import { PortfolioAllInOne } from "./components/portfolio/PortfolioAllInOne";
import { PortfolioNeochild } from "./components/portfolio/PortfolioNeochild";
import { PortfolioNotrify } from "./components/portfolio/PortfolioNotrify";
import { Blog } from "./components/Blog";
import { AdminDashboard } from "./components/admin/AdminDashboard";

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

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Home
              currentPage="home"
              onNavigateHome={() => navigate('/')}
              onNavigatePreview={() => navigate('/the-people')}
              onNavigatePortfolio={(project) => navigate(`/portfolio/${project}`)}
              onNavigateBlog={() => navigate('/blog')}
            />
          </motion.div>
        } />
        <Route path="/the-people" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Preview
              currentPage="preview"
              onNavigateHome={() => navigate('/')}
              onNavigatePreview={() => navigate('/the-people')}
              onNavigateBlog={() => navigate('/blog')}
            />
          </motion.div>
        } />
        <Route path="/portfolio/all-in-one" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <PortfolioAllInOne
              onNavigateHome={() => navigate('/')}
              onNavigatePreview={() => navigate('/the-people')}
              onNavigateBlog={() => navigate('/blog')}
              onNavigatePortfolio={(project) => navigate(`/portfolio/${project}`)}
            />
          </motion.div>
        } />
        <Route path="/portfolio/neochildcare" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <PortfolioNeochild
              onNavigateHome={() => navigate('/')}
              onNavigatePreview={() => navigate('/the-people')}
              onNavigateBlog={() => navigate('/blog')}
              onNavigatePortfolio={(project) => navigate(`/portfolio/${project}`)}
            />
          </motion.div>
        } />
        <Route path="/portfolio/notrify" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <PortfolioNotrify
              onNavigateHome={() => navigate('/')}
              onNavigatePreview={() => navigate('/the-people')}
              onNavigateBlog={() => navigate('/blog')}
              onNavigatePortfolio={(project) => navigate(`/portfolio/${project}`)}
            />
          </motion.div>
        } />
        <Route path="/blog" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <Blog
              currentPage="blog"
              onNavigateHome={() => navigate('/')}
              onNavigatePreview={() => navigate('/preview')}
              onNavigateBlog={() => navigate('/blog')}
            />
          </motion.div>
        } />
        <Route path="/admin" element={
          <motion.div initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}>
            <div className="min-h-screen bg-white">
              <div className="p-4 border-b flex justify-between items-center">
                <button
                  onClick={() => navigate('/')}
                  className="text-sm font-medium text-neutral-600 hover:text-black transition-colors"
                >
                  ← Back to Site
                </button>
                <span className="text-sm font-bold tracking-tighter">FEATHERS ADMIN</span>
              </div>
              <AdminDashboard />
            </div>
          </motion.div>
        } />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}