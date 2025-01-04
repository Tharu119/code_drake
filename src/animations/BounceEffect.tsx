import { motion } from "framer-motion";

const BounceEffect = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      whileHover={{
        scale: 1.1,
        transition: { type: "spring", stiffness: 300 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default BounceEffect;
