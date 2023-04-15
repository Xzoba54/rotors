import styled from "styled-components";
import { Span } from "./GlobalStyles";

const Container = styled.div`
  position: absolute;
  margin: 0;
  padding: 0;
  z-index: 99;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  animation: open 0.5s;
  @keyframes open {
    0% {
      left: -100vw;
    }
    100% {
      left: 0;
    }
  }
`;
const ImageContainer = styled.div`
  background-color: white;
  flex: 2.5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Img = styled.img``;
const InformationContainer = styled.div`
  flex: 1;
  background-color: white;
  border-left: 1px solid #adb5bd;
`;

const ImageFooter = styled.div``;
const ImageFooterImgContainer = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  border: 1px solid #adb5bd;
  display: flex;
  cursor: pointer;
  &:hover {
    border: 1px solid #495057;
  }
`;
const ImageFooterImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Header = styled.div``;
const Row = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 4px;
`;

const CloseIcon = styled.img`
  width: 45px;
  padding: 4px;
  border-radius: 50%;
  transition: 0.1s;
  margin: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e8ebed;
  }
`;

const Nav = styled.nav`
  margin-top: 8px;
  padding: 0px 12px;
  display: flex;
  gap: 24px;
  box-shadow: 0px 0px 5px 0.5px #adb5bd;
`;

const Link = styled.div`
  padding: 12px 16px;
  cursor: pointer;
  transition: 0.1s;
  &.selected {
    border-bottom: 1px solid #212529;
  }
  &:hover {
    border-bottom: 1px solid #212529;
  }
`;

const LinkSpan = styled.span`
  color: #212529;
  font-weight: 400;
  font-size: 16px;
`;

const ImageViewer = ({ handleSetViewProduct, image, name, desc }) => {
  return (
    <Container>
      <ImageContainer>
        <Img src={image} />
        <ImageFooter>
          <ImageFooterImgContainer>
            <ImageFooterImg src={image} />
          </ImageFooterImgContainer>
        </ImageFooter>
      </ImageContainer>
      <InformationContainer>
        <Header>
          <Row>
            <CloseIcon onClick={handleSetViewProduct} src="/assets/close.svg" />
          </Row>
          <Col>
            <Span fontSize="26px" fontWeight="500">
              {name}
            </Span>
            <Span color="#6C757D" fontSize="14px">
              {desc}
            </Span>
          </Col>
        </Header>
        <Nav>
          <Link className="selected">
            <LinkSpan>Opinions (93)</LinkSpan>
          </Link>
          <Link>
            <Span color="#212529" fontWeight="400">
              Users photos
            </Span>
          </Link>
        </Nav>
      </InformationContainer>
    </Container>
  );
};

export default ImageViewer;
