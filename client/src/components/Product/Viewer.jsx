import styled from "styled-components";
import Display from "./Display";

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  animation: open 0.5s;
  background-color: white;
  display: flex;
  justify-content: space-between;
  @keyframes open {
    0% {
      left: -100vw;
    }
    100% {
      left: 0;
    }
  }
`;
const Body = styled.div`
  box-shadow: -5px 0px 10px 1px rgba(0, 0, 0, 0.1);
  width: 500px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  gap: 4px;
`;
const Navigation = styled.div`
  display: flex;
  padding: 0px 0.5rem;
  width: 100%;
  box-shadow: 0px 0px 5px 1px #adb5bd;
`;
const NavigationSection = styled.div`
  padding: 12px;
  border-bottom: 1px solid ${(props) => (props.selected ? "#212529" : "transparent")};
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #212529;
  }
`;
const NavigationName = styled.span`
  color: #212529;
  font-weight: 400;
`;
const ProductName = styled.span`
  font-weight: 500;
  font-size: 26px;
  color: #343a40;
`;
const ProductDesc = styled.span`
  font-size: 15px;
  font-weight: 400;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CloseIcon = styled.img`
  width: 32px;
  padding: 4px;
  border-radius: 50%;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    background-color: #e8ebed;
  }
`;

const ImageViewer = ({ handleSetViewProduct, image, name, desc }) => {
  return (
    <Container>
      <Display items={[{ image: image }]} />
      <Body>
        <Header>
          <Row style={{ justifyContent: "flex-end" }}>
            <CloseIcon onClick={() => handleSetViewProduct(false)} src="/assets/close.svg" />
          </Row>
          <Row>
            <ProductName>{name}</ProductName>
          </Row>
          <Row>
            <ProductDesc>{desc}</ProductDesc>
          </Row>
        </Header>
        <Navigation>
          <NavigationSection>
            <NavigationName>Opinions (93)</NavigationName>
          </NavigationSection>
          <NavigationSection>
            <NavigationName>Users photos</NavigationName>
          </NavigationSection>
        </Navigation>
      </Body>
    </Container>
  );
};

export default ImageViewer;
