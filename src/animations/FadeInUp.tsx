import { motion } from "framer-motion";

const FadeInUp = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, type: "spring" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUp;
