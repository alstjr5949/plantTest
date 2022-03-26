import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { question } from "../question";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Components/footer";
import { useRecoilState } from "recoil";
import {
  careAtom,
  envAtom,
  expAtom,
  questionIndexAtom,
  resultAtom,
} from "../atoms";

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

const ThreeAnswer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
`;

const ThreeAnswerBtn = styled(motion.div)`
  width: 100%;
  height: 60px;
  display: flex;
  border: 1px solid black;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    background-color: ${(props) => props.theme.color.purple};
    color: white;
    border: 1px solid ${(props) => props.theme.color.purple};
  }
  @media ${(props) => props.theme.IphoneX} {
    width: 350px;
    font-size: 16px;
  }
`;

const TwoAnswerBtn = styled(motion.div)`
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
    span {
      color: black;
    }
  }
  & span {
    width: 120px;
    position: absolute;
    bottom: -50px;
    font-size: 17px;
    text-align: center;
    font-weight: 400;
    color: rgba(0, 0, 0, 0.5);
    &:hover {
      color: black;
    }
  }
  @media ${(props) => props.theme.IphoneX} {
    width: 60px;
    height: 60px;
    border: 15px solid rgba(0, 0, 0, 0.1);
    & span {
      font-size: 15px;
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
  const [result, setResult] = useRecoilState(resultAtom);
  const [careNum, setCareNum] = useRecoilState(careAtom);
  const [expNum, setExpNum] = useRecoilState(expAtom);
  const [envNum, setEnvNum] = useRecoilState(envAtom);
  const navigate = useNavigate();
  const backBtnClick = () => {
    questionNum === 1 ? navigate("/") : setQuestionNum((prev) => prev - 1);
  };
  // 목적 버튼 함수
  const purposeAnswer1Click = () => {
    setResult((prev) => (prev += "T"));
    setQuestionNum((prev) => prev + 1);
  };
  const purposeAnswer2Click = () => {
    setResult((prev) => (prev += "H"));
    setQuestionNum((prev) => prev + 1);
  };
  const purposeAnswer3Click = () => {
    setResult((prev) => (prev += "E"));
    setQuestionNum((prev) => prev + 1);
  };
  // 2지선다 버튼 함수
  const twoBtn1Click = () => {
    if (questionNum < 4) {
      setCareNum((prev) => prev);
    } else if (questionNum < 10 && questionNum >= 4) {
      setExpNum((prev) => prev);
    }
    setQuestionNum((prev) => prev + 1);
  };
  const twoBtn2Click = () => {
    if (questionNum < 4) {
      setCareNum((prev) => prev + 1);
    } else if (questionNum < 10 && questionNum >= 4) {
      setExpNum((prev) => prev + 1);
    }
    setQuestionNum((prev) => prev + 1);
  };
  // 4지선다 버튼 함수
  const fousrBtn1Click = () => {
    if (questionNum === 15) {
      careNum > 0
        ? setResult((prev) => prev + "C")
        : setResult((prev) => prev + "D");
      expNum > 3
        ? setResult((prev) => prev + "P")
        : setResult((prev) => prev + "N");
      envNum > 9
        ? setResult((prev) => prev + "G")
        : setResult((prev) => prev + "B");
      navigate("/result");
    } else {
      setEnvNum((prev) => prev);
      setQuestionNum((prev) => prev + 1);
    }
  };
  const fousrBtn2Click = () => {
    if (questionNum === 15) {
      careNum > 0
        ? setResult((prev) => prev + "C")
        : setResult((prev) => prev + "D");
      expNum > 3
        ? setResult((prev) => prev + "P")
        : setResult((prev) => prev + "N");
      envNum > 9
        ? setResult((prev) => prev + "G")
        : setResult((prev) => prev + "B");
      navigate("/result");
    } else {
      setEnvNum((prev) => prev + 1);
      setQuestionNum((prev) => prev + 1);
    }
  };
  const fousrBtn3Click = () => {
    if (questionNum === 15) {
      careNum > 0
        ? setResult((prev) => prev + "C")
        : setResult((prev) => prev + "D");
      expNum > 3
        ? setResult((prev) => prev + "P")
        : setResult((prev) => prev + "N");
      envNum > 9
        ? setResult((prev) => prev + "G")
        : setResult((prev) => prev + "B");
      navigate("/result");
    } else {
      setEnvNum((prev) => prev + 2);
      setQuestionNum((prev) => prev + 1);
    }
  };
  const fousrBtn4Click = () => {
    if (questionNum === 15) {
      careNum > 0
        ? setResult((prev) => prev + "C")
        : setResult((prev) => prev + "D");
      expNum > 3
        ? setResult((prev) => prev + "P")
        : setResult((prev) => prev + "N");
      envNum > 9
        ? setResult((prev) => prev + "G")
        : setResult((prev) => prev + "B");
      navigate("/result");
    } else {
      setEnvNum((prev) => prev + 3);
      setQuestionNum((prev) => prev + 1);
    }
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
        <span>/ 15</span>
      </ProgressNum>
      <Question>
        <span>{questionNum}.</span> {question[questionNum - 1]}
      </Question>
      {questionNum === 1 && (
        <ThreeAnswer>
          <ThreeAnswerBtn onClick={purposeAnswer1Click}>
            플랜테리어
          </ThreeAnswerBtn>
          <ThreeAnswerBtn onClick={purposeAnswer2Click}>
            쾌적한 환경 (공기정화, 미세먼지 해소 등)
          </ThreeAnswerBtn>
          <ThreeAnswerBtn onClick={purposeAnswer3Click}>
            정서적 교감
          </ThreeAnswerBtn>
        </ThreeAnswer>
      )}
      {questionNum < 10 && questionNum > 1 && (
        <TwoAnswer>
          <TwoAnswerBtn onClick={twoBtn1Click}>
            <span>아니다</span>
          </TwoAnswerBtn>
          <TwoAnswerBtn onClick={twoBtn2Click}>
            <span>그렇다</span>
          </TwoAnswerBtn>
        </TwoAnswer>
      )}
      {questionNum < 16 && questionNum >= 10 && (
        <TwoAnswer>
          <TwoAnswerBtn onClick={fousrBtn1Click}>
            <span>전혀 아니다</span>
          </TwoAnswerBtn>
          <TwoAnswerBtn onClick={fousrBtn2Click}>
            <span>아니다</span>
          </TwoAnswerBtn>
          <TwoAnswerBtn onClick={fousrBtn3Click}>
            <span>그렇다</span>
          </TwoAnswerBtn>
          <TwoAnswerBtn onClick={fousrBtn4Click}>
            <span>매우 그렇다</span>
          </TwoAnswerBtn>
        </TwoAnswer>
      )}
      <Footer />
    </Wrapper>
  );
}

export default Test;
