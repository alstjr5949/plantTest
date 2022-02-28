import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { question } from "../question";

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
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 40px;
  & span {
    margin-right: 10px;
  }
`;

const FourAnswer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FourAnswerBtn = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: white;
  border: 15px solid white;
  border-radius: 50%;
  box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
    0px 0px 15px rgba(0, 0, 0, 0.2), inset 3px 3px 5px rgba(0, 0, 0, 0.1),
    inset -1px -1px 5px rgba(255, 255, 255, 1);
  position: relative;
  transition: 0.2s all ease-in;
  cursor: pointer;
  &:hover {
    border: 15px solid rgba(28, 183, 130, 1);
  }
  & span {
    width: 100px;
    position: absolute;
    bottom: -50px;
    font-size: 14px;
    text-align: center;
    font-weight: 400;
  }
`;

const Answer = styled.div``;

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
  const [questionNum, setQuestionNum] = useState(1);
  const navigate = useNavigate();
  const backHomeBtnClick = () => {
    navigate("/");
  };
  const btnClick = () => {
    setQuestionNum((prev) => prev + 1);
  };
  return (
    <Wrapper
      key={questionNum}
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BackHomeBtn onClick={backHomeBtnClick}>&larr;</BackHomeBtn>
      <Question>
        <span>{questionNum}.</span> {["question.questionNum"]}
      </Question>
      <FourAnswer>
        <FourAnswerBtn onClick={btnClick}>
          <span>전혀 그렇지 않다</span>
        </FourAnswerBtn>
        <FourAnswerBtn onClick={btnClick}>
          <span>그렇지 않다</span>
        </FourAnswerBtn>
        <FourAnswerBtn onClick={btnClick}>
          <span>그렇다</span>
        </FourAnswerBtn>
        <FourAnswerBtn onClick={btnClick}>
          <span>매우 그렇다</span>
        </FourAnswerBtn>
      </FourAnswer>
    </Wrapper>
  );
}

export default Test;
