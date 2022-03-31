import { useNavigate } from "react-router-dom";
import { FacebookShareButton } from "react-share";
import { CopyToClipboard } from "react-copy-to-clipboard";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  width: 500px;
  min-width: 400px;
  height: 145vh;
  min-height: 110vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
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
  border-radius: 50% 50% 20px 20px;
  box-shadow: rgba(150, 98, 84, 0.15) 0px 0px 0px 1px;
  @media ${(props) => props.theme.IphoneX} {
    width: 100%;
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
  width: 80%;
  height: 60px;
  border-radius: 40px;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 30px;
  background: linear-gradient(
    to right,
    #cee166,
    ${(props) => props.theme.color.green}
  );
  color: white;
  cursor: pointer;
`;

const ShareBtnContainer = styled.div`
  width: 80%;
  height: 55px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  margin-bottom: 60px;
  @media ${(props) => props.theme.IphoneX} {
    width: 100%;
    font-size: 15px;
  }
`;

const ShareText = styled.div`
  display: flex;
  width: 40%;
  justify-content: center;
  align-items: center;
  height: 40px;
  font-weight: 500;
  border-right: 1px solid rgba(0, 0, 0, 0.3);
`;

const ShareIconContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const ShareIcon = styled.div`
  width: 40px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const UrlIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  border: 0px;
  font-weight: 800;
  font-size: 12px;
  cursor: pointer;
  background-color: #7362ff;
  &:hover {
    background-color: #a99fee;
  }
`;

const FbIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: white;
  border-radius: 50%;
  border: 0px;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  background-color: #1672e7;
`;

function Result() {
  const shareUrl = "https://alstjr5949.github.io/plantTest/";
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
      <ResultSub>
        <ResultContentBox>
          <ResultImg></ResultImg>
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
      <ShareBtnContainer>
        <ShareText>테스트 공유하기</ShareText>
        <ShareIconContainer>
          <FacebookShareButton url={shareUrl}>
            <FbIcon>
              <FontAwesomeIcon icon={faFacebookF} />
            </FbIcon>
          </FacebookShareButton>
          <CopyToClipboard text={shareUrl}>
            <UrlIcon>URL</UrlIcon>
          </CopyToClipboard>
          <ShareIcon></ShareIcon>
        </ShareIconContainer>
      </ShareBtnContainer>
      <Footer />
    </Wrapper>
  );
}

export default Result;
