import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 500px;
  height: 100vh;
`;

const wrapperVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

function Test() {
  return (
    <AnimatePresence exitBeforeEnter>
      <Wrapper
        variants={wrapperVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        Hi
      </Wrapper>
    </AnimatePresence>
  );
}

export default Test;
