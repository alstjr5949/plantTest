import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import leaves from "../img/leaveFrame.png";

const Wrapper = styled(motion.div)`
  width: 500px;
  min-width: 500px;
  height: 90vh;
  min-height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 20px;
`;

const Title = styled(motion.div)`
  width: 300px;
  min-width: 300px;
  height: 300px;
  min-height: 300px;
  position: absolute;
  top: 80px;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 20px;
  font-size: 35px;
  text-align: center;
  margin-bottom: 40px;
  & span {
    margin: 10px 0px;
    font-weight: 400;
    &:nth-child(2) {
      font-size: 45px;
      font-weight: 700;
      color: #9ed5a2;
    }
  }
`;

const MainImg = styled.div`
  width: 500px;
  min-width: 400px;
  height: 450px;
  background-image: url(${leaves});
  background-position: center center;
  background-size: cover;
  position: relative;
  margin-bottom: 40px;
`;

const StartBtn = styled.div`
  width: 300px;
  height: 70px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9ed5a2;
  color: white;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 60px;
  cursor: pointer;
`;

const ShareBtnContainer = styled.div`
  width: 450px;
  height: 55px;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-bottom: 20px;
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

const titleVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

function Home() {
  return (
    <AnimatePresence>
      <Wrapper
        variants={wrapperVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <MainImg>
          <Title variants={titleVariants} initial="initial" animate="animate">
            <span>나와 어울리는</span> <span>식물찾기</span> <span>테스트</span>
          </Title>
        </MainImg>
        <Link to="/test">
          <StartBtn>테스트 시작하기 &rarr;</StartBtn>
        </Link>
        <ShareBtnContainer>
          <ShareText>테스트 공유하기</ShareText>
          <ShareIconContainer>
            <ShareIcon></ShareIcon>
            <ShareIcon></ShareIcon>
            <ShareIcon></ShareIcon>
          </ShareIconContainer>
        </ShareBtnContainer>
      </Wrapper>
    </AnimatePresence>
  );
}

export default Home;
