import { motion } from "framer-motion";
import { useScrollReveal } from "../hooks/useScrollReveal";
import imgGalleryImage8 from "figma:asset/feecd0164f1eee7a52985c06337fa6927b18288b.png";

export function PortfolioGallery2() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <motion.div 
      ref={ref}
      className="relative shrink-0 w-full"
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex flex-row items-center justify-center relative size-full">
        <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center px-6 py-0 relative w-full">
          <div className="basis-0 grow max-w-[1440px] min-h-px min-w-px relative shrink-0">
            <div className="flex flex-row items-center max-w-inherit relative size-full">
              <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-start max-w-inherit px-0 py-20 relative w-full">
                <div
                  className="[background-size:cover,_auto] bg-[position:50%_50%,_0%_0%] bg-neutral-100 rounded-2xl w-full h-[400px]"
                  style={{ backgroundImage: `url('${imgGalleryImage8}')` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}