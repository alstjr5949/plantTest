import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { questionIndexAtom } from "../atoms";
import Footer from "../Components/footer";
import tree from "../img/tree.png";

const Wrapper = styled.div`
  width: 500px;
  height: 170vh;
  min-height: 1450px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 50px 20px;
  @media ${(props) => props.theme.IphoneX} {
    width: 100%;
    height: 180vh;
  }
`;

const ResultTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  font-size: 30px;
  margin-bottom: 50px;
  & span:nth-child(2) {
    font-size: 45px;
    font-weight: 500;
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
  width: 450px;
  height: 450px;
  filter: brightness(1.3);
  @media ${(props) => props.theme.IphoneX} {
    width: 350px;
    height: 350px;
  }
`;

const ResultSubTitle = styled.div`
  width: 100%;
  padding: 0px 25px;
  font-size: 30px;
  margin-top: 50px;
  font-weight: 500;
  & span {
    font-family: "Toss Face Font Mac", sans-serif;
  }
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
  margin-bottom: 20px;
  font-size: 18px;
  &::before {
    content: "🌱";
    font-family: "Toss Face Font Mac", sans-serif;
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
  font-weight: 500;
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
  const restartBtnClick = () => {
    setQuestionNum(1);
    navigate("/");
  };
  return (
    <Wrapper>
      <ResultTitle>
        <span>나에게 딱 맞는 식물은?</span>
        <span>'엄근진 나무'</span>
      </ResultTitle>
      <ResultImg></ResultImg>
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
      <ResultSubTitle>
        키우는 법<span>🪴</span>
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
      <BtnBox>
        <RestartBtn onClick={restartBtnClick}>테스트 다시하기</RestartBtn>
      </BtnBox>
      <Footer />
    </Wrapper>
  );
}

export default Result;
