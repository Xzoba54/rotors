import styled from "styled-components";
import Rating from "./Rating";
import Comments from "./Comments";
import Photos from "./Photos";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.span`
  color: #495057;
  font-size: 32px;
  font-weight: 600;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;

const Opinions = () => {
  return (
    <Container id="opinions">
      <Header>
        <Title>Opinions</Title>
        <Row>
          <Rating />
          <Photos />
        </Row>
      </Header>
      <Comments />
    </Container>
  );
};

export default Opinions;
