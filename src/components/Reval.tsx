import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
  isClass?: string;
}

export const Reval = ({isClass, children, width = "fit-content" }: Props) => {
  const { ref, inView } = useInView({ triggerOnce: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (inView) {
      mainControls.start("visible");
    }
  }, [inView, mainControls]);

  return (
    <div  ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
      className={isClass}
        variants={{
          hidden: { opacity: 0, y: 15 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
