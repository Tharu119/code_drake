import { motion } from "framer-motion";

const FadeInFlipEffect = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: 90 }}
      animate={{ opacity: 1, rotateY: 0 }}
      whileHover={{
        scale: 1.05,
        rotateY: 5, // Subtle 3D tilt on hover
        transition: { type: "spring", stiffness: 200 },
      }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative transform perspective-1000"
    >
      <div className="absolute inset-0 z-0 rounded-lg border-4 border-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 animate-gradient-rotate group-hover:animate-gradient-pulse"></div>
      {children}
    </motion.div>
  );
};

export default FadeInFlipEffect;
