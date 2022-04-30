import { useNavigate } from "react-router-dom";
import { FacebookShareButton, TwitterShareButton } from "react-share";
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
import { result } from "../result.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

const Wrapper = styled.div`
  width: 500px;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 50px 20px;
  @media ${(props) => props.theme.IphoneX} {
    width: 100vw;
  }
  @media ${(props) => props.theme.laptop} {
    width: 500px;
  }
`;

const ResultTitle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0px 12.5px;
  font-size: 28px;
  & span:nth-child(2) {
    font-size: 46px;
    font-family: "GmarketSansBold";
    background: linear-gradient(
      to bottom,
      #fdabd9,
      ${(props) => props.theme.color.purple}
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-top: 10px;
  }
  @media ${(props) => props.theme.IphoneX} {
    font-size: 25px;
    & span:nth-child(2) {
      font-size: 40px;
    }
  }
`;

const ResultImg = styled(motion.div)`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 auto 30px;
  width: 450px;
  height: 500px;
  @media ${(props) => props.theme.IphoneX} {
    width: 100%;
    height: 300px;
  }
`;

const ResultSub = styled.div`
  margin-top: 40px;
  padding: 10px 20px 40px;
  border-radius: 30% 30% 20px 20px;
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
  position: relative;
  padding-left: 30px;
  &::before {
    content: "🌱";
    position: absolute;
    left: 0;
  }
  @media ${(props) => props.theme.IphoneX} {
    font-size: 16px;
    line-height: 1.5;
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
  @media ${(props) => props.theme.IphoneX} {
    width: 100%;
  }
`;

const ShareBtnContainer = styled.div`
  width: 80%;
  padding: 10px 5px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  margin-bottom: 70px;
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

const TwIcon = styled.div`
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
  background-color: #34b0f4;
  &:hover {
    background-color: #add0ff;
  }
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
  &:hover {
    background-color: #4a95f7;
  }
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
  const urlBtnClick = () => {
    alert("URL이 복사되었습니다.");
  };
  return (
    <Wrapper>
      <ResultTitle>
        <span>나에게 딱 맞는 식물은?</span>
        <span>{result[finalResult]?.name || "Loading..."}</span>
      </ResultTitle>
      <ResultSub>
        <ResultContentBox>
          <ResultImg img={result[finalResult]?.imgUrl || null}></ResultImg>
          <ResultContent>{result[finalResult]?.feature1 || null}</ResultContent>
          <ResultContent>{result[finalResult]?.feature2 || null}</ResultContent>
          <ResultContent>{result[finalResult]?.feature3 || null}</ResultContent>
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
          <TwitterShareButton url={shareUrl}>
            <TwIcon>
              <FontAwesomeIcon icon={faTwitter} />
            </TwIcon>
          </TwitterShareButton>
          <CopyToClipboard text={shareUrl}>
            <UrlIcon onClick={urlBtnClick}>URL</UrlIcon>
          </CopyToClipboard>
        </ShareIconContainer>
      </ShareBtnContainer>
      <Footer />
    </Wrapper>
  );
}

export default Result;
