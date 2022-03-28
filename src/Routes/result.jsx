import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import styled from "styled-components";
import {
  careAtom,
  envAtom,
  expAtom,
  questionIndexAtom,
  resultAtom,
} from "../atoms";
import Footer from "../Components/footer";
import tree from "../img/tree.png";
import { result } from "../result.js";

const Wrapper = styled.div`
  width: 500px;
  min-width: 400px;
  height: 145vh;
  min-height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 50px 20px;
  @media ${(props) => props.theme.IphoneX} {
    width: 100%;
    height: 1600px;
  }
  @media ${(props) => props.theme.laptop} {
    width: 500px;
    height: 1400px;
  }
`;

const ResultTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px 12.5px;
  font-size: 30px;
  margin-bottom: 50px;
  & span:nth-child(2) {
    font-size: 45px;
    font-weight: 800;
    color: ${(props) => props.theme.color.green};
    margin-top: 10px;
  }
  @media ${(props) => props.theme.IphoneX} {
    font-size: 25px;
    & span:nth-child(2) {
      font-size: 40px;
    }
  }
`;

const ResultImg = styled.div`
  background-image: url(${tree});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 auto;
  width: 450px;
  height: 450px;
  filter: brightness(1.3);
  @media ${(props) => props.theme.IphoneX} {
    width: 350px;
    height: 350px;
  }
`;

const ResultSub = styled.div`
  margin-top: 40px;
  padding: 40px 20px;
  border-radius: 20px;
  box-shadow: rgba(150, 98, 84, 0.15) 0px 0px 0px 1px;
  @media ${(props) => props.theme.IphoneX} {
    width: 100%;
  }
`;

const ResultSubTitle = styled.div`
  width: 100%;
  padding: 0px 25px;
  font-size: 30px;
  font-weight: 500;
  @media ${(props) => props.theme.IphoneX} {
    font-size: 25px;
  }
`;

const ResultContentBox = styled.ul`
  width: 100%;
  padding: 0px 25px;
  margin-top: 30px;
`;

const ResultContent = styled.li`
  width: 100%;
  margin-bottom: 20px;
  font-size: 18px;
  &::before {
    content: "🌱";
    margin-right: 8px;
  }
  @media ${(props) => props.theme.IphoneX} {
    font-size: 15px;
  }
`;

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 70px;
  @media ${(props) => props.theme.IphoneX} {
    margin-top: 50px;
  }
`;

const RestartBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  border-radius: 40px;
  font-size: 20px;
  font-weight: 600;
  background: linear-gradient(
    to right,
    #cee166,
    ${(props) => props.theme.color.green}
  );
  color: white;
  cursor: pointer;
`;

function Result() {
  const navigate = useNavigate();
  const setQuestionNum = useSetRecoilState(questionIndexAtom);
  const setCareNum = useSetRecoilState(careAtom);
  const setExpNum = useSetRecoilState(expAtom);
  const setEnvNum = useSetRecoilState(envAtom);
  const [finalResult, setFinalResult] = useRecoilState(resultAtom);
  const restartBtnClick = () => {
    setQuestionNum(1);
    setFinalResult("");
    setCareNum(0);
    setExpNum(0);
    setEnvNum(0);
    navigate("/");
  };
  console.log(finalResult);
  return (
    <Wrapper>
      <ResultTitle>
        <span>나에게 딱 맞는 식물은?</span>
        <span>{result[finalResult]?.name || "Loading..."}</span>
      </ResultTitle>
      <ResultImg></ResultImg>
      <ResultSub>
        <ResultSubTitle>
          특징<span>🪴</span>
        </ResultSubTitle>
        <ResultContentBox>
          <ResultContent>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </ResultContent>
          <ResultContent>A esse eveniet nihil quos quam sit?</ResultContent>
          <ResultContent>Fugiat delectus esse nesciunt tempora</ResultContent>
          <ResultContent>
            a velit placeat! Temporibus animi mollitia aut exercitationem magnam
            officiis.
          </ResultContent>
        </ResultContentBox>
      </ResultSub>
      <BtnBox>
        <RestartBtn onClick={restartBtnClick}>테스트 다시하기</RestartBtn>
      </BtnBox>
      <Footer />
    </Wrapper>
  );
}

export default Result;
