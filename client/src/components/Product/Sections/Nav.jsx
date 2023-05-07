import styled from "styled-components";

const Container = styled.div`
  position: ${(props) => (props?.fixed ? "fixed" : "static")};
  top: 65px;
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 5px 1px #adb5bd;
`;
const Wrapper = styled.div`
  width: 1300px;
`;
const Navigation = styled.div`
  display: flex;
  gap: 12px;
`;
const Section = styled.div`
  padding: 12px;
  border-bottom: 1px solid ${(props) => (props.selected ? "#212529" : "transparent")};
  transition: 0.1s;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid #212529;
  }
`;
const Name = styled.span`
  color: #212529;
  font-weight: 400;
`;

const ProductNav = ({ fixed, scrollTo }) => {
  return (
    <Container fixed={fixed}>
      <Wrapper>
        <Navigation>
          <Section selected>
            <Name>Promotion</Name>
          </Section>
          <Section onClick={() => scrollTo("specification")}>
            <Name>Specification</Name>
          </Section>
          <Section onClick={() => scrollTo("opinions")}>
            <Name>Opinions (43)</Name>
          </Section>
        </Navigation>
      </Wrapper>
    </Container>
  );
};

export default ProductNav;
