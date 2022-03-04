import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const FooterBox = styled.div`
  width: 100%;
  height: 100px;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  display: flex;
  position: absolute;
  bottom: 0;
  color: rgba(0, 0, 0, 0.5);
  @media ${(props) => props.theme.IphoneX} {
    width: 100%;
    font-size: 14px;
  }
`;

function Footer() {
  return (
    <Wrapper>
      <FooterBox>&copy; 2022 Mingcoding</FooterBox>
    </Wrapper>
  );
}

export default Footer;
