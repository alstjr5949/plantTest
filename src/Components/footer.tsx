import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 500px;
`;

const FooterBox = styled.div`
  width: 500px;
  height: 100px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  position: fixed;
  bottom: 0;
`;

function Footer() {
  return (
    <Wrapper>
      <FooterBox>&copy; 2022 Mingcoding</FooterBox>
    </Wrapper>
  );
}

export default Footer;
