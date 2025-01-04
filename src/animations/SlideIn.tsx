import { motion } from "framer-motion";

const SlideIn = ({ children, direction = "left", delay = 0 }: { children: React.ReactNode; direction?: string; delay?: number }) => {
  const variants = {
    hidden: {
      x: direction === "left" ? -100 : 100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, delay },
    },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={variants}>
      {children}
    </motion.div>
  );
};

export default SlideIn;
