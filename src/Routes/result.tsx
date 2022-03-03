import styled from "styled-components";
import tree from "../img/tree.png";

const Wrapper = styled.div`
  width: 500px;
  height: 170vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  padding: 50px 20px;
`;

const ResultTitle = styled.div`
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
`;

const ResultImg = styled.div`
  background-image: url(${tree});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 450px;
  height: 450px;
  filter: brightness(1.3);
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
    margin-right: 5px;
  }
`;

const BtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;

const RestartBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 80px;
  border-radius: 40px;
  font-size: 25px;
  font-weight: 500;
  background-color: ${(props) => props.theme.color.green};
  color: white;
  cursor: pointer;
`;

function Result() {
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
        <RestartBtn>테스트 다시하기</RestartBtn>
      </BtnBox>
    </Wrapper>
  );
}

export default Result;
