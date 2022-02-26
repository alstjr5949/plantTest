import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled(motion.div)`
  width: 500px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;
`;

const BackHomeBtn = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  margin-top: 30px;
  cursor: pointer;
`;

const Question = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const Answer = styled.div`
  width: 70%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  border: 1px solid black;
  border-radius: 40px;
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
  const navigate = useNavigate();
  const backHomeBtnClick = () => {
    navigate("/");
  };
  return (
    <Wrapper
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BackHomeBtn onClick={backHomeBtnClick}>&larr;</BackHomeBtn>
      <Question>1. 질문을 길게 길게 길게 길게</Question>
      <Answer>답변1</Answer>
      <Answer>답변2</Answer>
    </Wrapper>
  );
}

export default Test;
