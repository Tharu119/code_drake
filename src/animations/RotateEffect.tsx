import { motion } from "framer-motion";

const RotateEffect = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  return (
    <motion.div
      initial={{ rotate: 0, opacity: 0 }}
      animate={{ rotate: 360, opacity: 1 }}
      transition={{ duration: 1, delay }}
    >
      {children}
    </motion.div>
  );
};

export default RotateEffect;
