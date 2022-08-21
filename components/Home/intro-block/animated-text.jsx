import { motion } from "framer-motion";

export const AnimatedTextContainer = ({ children }) => {
  const delay = 0;
  const duration = 0.5;

  const container = {
    hidden: {
      opacity: 0,
    },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  return (
    <motion.div variants={container} initial="hidden" animate={"visible"}>
      {children}
    </motion.div>
  );
};

const AnimatedTitle = ({ text, ...rest }) => {
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <motion.h1 variants={child} {...rest}>
      {text}
    </motion.h1>
  );
};

AnimatedTextContainer.Title = AnimatedTitle;
