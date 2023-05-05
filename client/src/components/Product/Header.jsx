import styled from "styled-components";

const Container = styled.div`
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: 80px;
`;
const Title = styled.span`
  font-size: 26px;
  font-weight: 500;
  color: #212529;
`;
const Row = styled.div`
  display: flex;
  height: 25px;
  display: flex;
  align-items: center;
`;
const Star = styled.img`
  width: 25px;
`;
const Review = styled.span`
  font-size: 14px;
  color: #495057;
`;

const Header = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Row>
        <Star src="/assets/star.svg" />
        <Star src="/assets/star.svg" />
        <Star src="/assets/star.svg" />
        <Star src="/assets/star.svg" />
        <Star src="/assets/halfstar.svg" />
        <Review>(392) Reviews</Review>
      </Row>
    </Container>
  );
};

export default Header;
