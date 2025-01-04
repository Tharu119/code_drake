import { motion } from "framer-motion";

const FlipEffect = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ rotateY: 0, scale: 0.9 }}
      whileHover={{
        rotateY: 180, // 3D flip effect
        scale: 1.05, // Slight scaling
        transition: { duration: 0.6, type: "spring", stiffness: 200 },
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative transform perspective-1000"
    >
      {children}
    </motion.div>
  );
};

export default FlipEffect;
