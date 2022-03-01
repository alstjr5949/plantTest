import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import leaves from "../img/leaf.png";

const Wrapper = styled(motion.div)`
  width: 500px;
  height: 90vh;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
`;

const Title = styled(motion.div)`
  width: 80%;
  min-width: 300px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
  font-size: 35px;
  text-align: center;
  margin-bottom: 20px;
  & span {
    margin: 10px 0px;
    font-weight: 400;
    &:nth-child(2) {
      font-size: 45px;
      font-weight: 700;
      color: #a8c0a0;
    }
  }
`;

const MainImg = styled.div`
  background-image: url(${leaves});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  width: 200px;
  height: 200px;
  margin-bottom: 100px;
`;

const StartBtn = styled.div`
  width: 60%;
  height: 60px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #a8c0a0;
  color: white;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 60px;
  cursor: pointer;
`;

const ShareBtnContainer = styled.div`
  width: 80%;
  height: 55px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
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
`;

const wrapperVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1,
    },
  },
};

const titleVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
};

function Home() {
  const navigate = useNavigate();
  const startBtnClick = () => {
    navigate("/test");
  };
  return (
    <Wrapper
      variants={wrapperVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Title variants={titleVariants} initial="initial" animate="animate">
        <span>나와 어울리는</span> <span>식물찾기 테스트</span>
      </Title>
      <MainImg />
      <StartBtn onClick={startBtnClick}>테스트 시작하기</StartBtn>
      <ShareBtnContainer>
        <ShareText>테스트 공유하기</ShareText>
        <ShareIconContainer>
          <ShareIcon></ShareIcon>
          <ShareIcon></ShareIcon>
          <ShareIcon></ShareIcon>
        </ShareIconContainer>
      </ShareBtnContainer>
    </Wrapper>
  );
}

export default Home;
