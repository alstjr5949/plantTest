import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { question } from "../question";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/footer";
import { useRecoilState } from "recoil";
import { questionIndexAtom } from "../atoms";

const Wrapper = styled(motion.div)`
  width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 50px 20px;
  @media ${(props) => props.theme.IphoneX} {
    width: 100vw;
  }
`;

const BackHomeBtn = styled.div`
  color: rgba(0, 0, 0, 0.8);
  position: absolute;
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  margin-top: 30px;
  cursor: pointer;
  @media ${(props) => props.theme.IphoneX} {
    font-size: 25px;
  }
`;

const Question = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 25px;
  font-weight: 600;
  margin-bottom: 50px;
  & span {
    margin-right: 10px;
  }
  @media ${(props) => props.theme.IphoneX} {
    width: 100%;
    font-size: 20px;
  }
`;

const FourAnswer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 100px;
`;

const FourAnswerBtn = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 60px;
  background: white;
  border: 15px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  position: relative;
  transition: 0.2s all ease-in;
  cursor: pointer;
  &:hover {
    border: 15px solid ${(props) => props.theme.color.purple};
  }
  & span {
    width: 120px;
    position: absolute;
    bottom: -50px;
    font-size: 16px;
    text-align: center;
    font-weight: 300;
    color: rgba(0, 0, 0, 0.8);
  }
  @media ${(props) => props.theme.IphoneX} {
    width: 50px;
    height: 50px;
    border: 15px solid rgba(0, 0, 0, 0.1);
    & span {
      font-size: 11px;
    }
  }
`;

const TwoAnswer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 100px;
`;

const ProgressNum = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 30px;
  & span:first-child {
    padding-right: 5px;
    font-size: 25px;
    font-weight: 500;
    color: ${(props) => props.theme.color.green};
  }
  & span:last-child {
    color: rgba(0, 0, 0, 0.5);
    padding-bottom: 1px;
  }
`;

const wrapperVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
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
  const [questionNum, setQuestionNum] = useRecoilState(questionIndexAtom);
  const navigate = useNavigate();
  const backBtnClick = () => {
    questionNum === 1 ? navigate("/") : setQuestionNum((prev) => prev - 1);
  };
  const btnClick = () => {
    questionNum === 26
      ? navigate("/result")
      : setQuestionNum((prev) => prev + 1);
  };
  return (
    <Wrapper
      key={questionNum}
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <BackHomeBtn onClick={backBtnClick}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </BackHomeBtn>
      <ProgressNum>
        <span>{String(questionNum).padStart(2, "0")}</span>
        <span>/ 26</span>
      </ProgressNum>
      <Question>
        <span>{questionNum}.</span> {question[questionNum - 1]}
      </Question>
      {questionNum < 17 ? (
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
      ) : (
        <TwoAnswer>
          <FourAnswerBtn onClick={btnClick}>
            <span>그렇다</span>
          </FourAnswerBtn>
          <FourAnswerBtn onClick={btnClick}>
            <span>그렇지 않다</span>
          </FourAnswerBtn>
        </TwoAnswer>
      )}
      <Footer />
    </Wrapper>
  );
}

export default Test;
