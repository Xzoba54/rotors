import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  margin: 1rem;
  gap: 12px;
  display: flex;
  flex-direction: column;
`;
const Body = styled.div`
  width: 1100;
  height: 720px;
  cursor: pointer;
`;
const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const Footer = styled.div`
  display: flex;
  justify-content: center;
`;
const Item = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  border: 1px solid #adb5bd;
  cursor: pointer;
  &:hover {
    border: 1px solid #495057;
  }
`;
const ItemImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Display = ({ handleSetViewProduct, items = [] }) => {
  return (
    <Container>
      <Body>
        <ProductImg onClick={handleSetViewProduct} src={items[0]?.image} />
      </Body>
      <Footer>
        {items.map((item, index) => (
          <Item key={index}>
            <ItemImg src={item.image} />
          </Item>
        ))}
      </Footer>
    </Container>
  );
};

export default Display;
