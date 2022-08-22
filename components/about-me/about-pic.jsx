import { motion } from "framer-motion";

export const AboutPic = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    show: {
      scale: [1, 1.6],
      transition: {
        duration: 0.8,
        type: "tween",
        ease: "easeInOut",
        times: [0, 1],
        repeat: Infinity,
        repeatDelay: 1,
      },
    },
  };

  return (
    <div className="pt-2">
      <div className="relative h-60 w-60">
        <motion.div variants={container} animate="show">
          <svg
            width="300"
            height="300"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              contentVisibility: "visible",
              overflow: "visible",
              width: "100%",
              height: "100%",
            }}
          >
            <motion.circle
              cx="150"
              cy="150"
              r="90"
              stroke="#93C5FD"
              strokeWidth="4"
              variants={item}
            />

            <motion.circle
              cx="150"
              cy="150"
              r="104"
              stroke="rgba(147, 197, 253,.5)"
              strokeWidth="4"
              variants={item}
            />
          </svg>
        </motion.div>

        <picture>
          <img
            src="/robin-2.png"
            width={192}
            height={192}
            alt="profile pic of Robin"
            className="absolute top-0 left-0 h-48 w-48 overflow-hidden rounded-full bg-blue-200 object-cover"
            style={{
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </picture>
      </div>
    </div>
  );
};
