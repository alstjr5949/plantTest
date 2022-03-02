import styled from "styled-components";
import tree from "../img/tree.png";

const Wrapper = styled.div`
  width: 500px;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  padding: 50px 20px;
`;

const ResultTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 25px;
  font-size: 30px;
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
  margin-bottom: 100px;
  filter: brightness(1.3);
`;

const RestartBtn = styled.div``;

function Result() {
  return (
    <Wrapper>
      <ResultTitle>
        <span>나에게 딱 맞는 식물은?</span>
        <span>'엄근진 나무'</span>
      </ResultTitle>
      <ResultImg></ResultImg>
    </Wrapper>
  );
}

export default Result;
