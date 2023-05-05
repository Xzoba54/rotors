import styled from "styled-components";
import DropdownMenu from "../DropdownMenu";
import { useState } from "react";

const Container = styled.div`
  margin: 0px 20px;
  width: 340px;
`;
const Header = styled.div`
  padding: 0px 8px;
  margin-bottom: 12px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;
const Price = styled.span`
  color: #343a40;
  font-size: 32px;
  font-weight: 500;
`;
const PreviousPrice = styled.span`
  color: #6c757d;
  font-size: 14px;
  text-decoration: line-through;
`;
const HeaderIcon = styled.img`
  width: 32px;
  padding: 4px;
  border-radius: 50%;
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    background-color: #e8ebed;
  }
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: #fff;
  border: none;
  background-color: #0074e9;
  width: 100%;
  padding: 12px 0px;
  border-radius: 8px;
  &:hover {
    background-color: #0063c6;
  }
`;

const ButtonIcon = styled.img`
  width: 26px;
`;
const ButtonText = styled.span`
  font-size: 17px;
  color: #fff;
  font-weight: 500;
  letter-spacing: 1px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  padding: 14px 8px;
  border-bottom: 1px solid #adb5bd;
  gap: 8px;
`;
const SectionIcon = styled.img`
  width: 25px;
`;
const SectionText = styled.span`
  font-weight: 400;
  color: #495057;
`;
const SectionTextBold = styled.span`
  font-weight: 500;
`;

const Summary = ({ price }) => {
  const [quanity, setQuanity] = useState(1);

  return (
    <Container>
      <Header>
        <Row>
          <Price>${price}</Price>
          <Row>
            <HeaderIcon src="/assets/print.svg" />
            <HeaderIcon src="/assets/heart.svg" />
          </Row>
        </Row>
        <PreviousPrice>${price}</PreviousPrice>
        <Row style={{ marginTop: "12px" }}>
          <DropdownMenu value={quanity} setValue={setQuanity} options={[{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }]} />
          <Button>
            <ButtonIcon src="/assets/cart.svg" />
            <ButtonText>Add To Cart</ButtonText>
          </Button>
        </Row>
      </Header>
      <Section>
        <SectionIcon src="/assets/checkmark.svg" />
        <SectionText>Available</SectionText>
      </Section>
      <Section>
        <SectionIcon src="/assets/delivery.svg" />
        <SectionText>Free delivery</SectionText>
      </Section>
      <Section>
        <SectionIcon src="/assets/wallet.svg" />
        <SectionText>
          Lowest price in the last 30 days: <SectionTextBold>${price}</SectionTextBold>
        </SectionText>
      </Section>
    </Container>
  );
};

export default Summary;
