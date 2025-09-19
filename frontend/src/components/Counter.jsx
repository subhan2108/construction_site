import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

function Counter({ target, duration = 2 }) {
  const count = useMotionValue(0); // start from 0
  const rounded = useTransform(count, (latest) => Math.floor(latest)); // round numbers

  useEffect(() => {
    const controls = animate(count, target, {
      duration,
      ease: "easeOut",
    });
    return controls.stop;
  }, [target, duration, count]);

  return <motion.span>{rounded}</motion.span>;
}

export default Counter;
