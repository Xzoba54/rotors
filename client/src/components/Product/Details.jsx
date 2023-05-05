import styled from "styled-components";
import DropdownMenu from "../DropdownMenu";

const Container = styled.div`
  width: 280px;
`;
const Section = styled.div`
  border-top: 1px solid #adb5bd;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Ul = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Li = styled.li``;
const Key = styled.span`
  margin-right: 6px;
  color: #212529;
  font-size: 17px;
  font-weight: 500;
`;
const Value = styled.span`
  font-weight: 400;
  color: #495057;
`;
const SectionTitle = styled.span`
  font-weight: 500;
`;

const Details = ({ properties = [] }) => {
  return (
    <Container>
      <Section>
        <Ul>
          {properties.map((property, index) => (
            <Li key={index}>
              <Key>{property.key}:</Key>
              <Value>{property.value}</Value>
            </Li>
          ))}
        </Ul>
      </Section>
      <Section>
        <SectionTitle>Speed</SectionTitle>
        <DropdownMenu
          value="2400 MHz"
          options={[
            { name: "2400 MHz", link: "/" },
            { name: "2880 MHz", link: "/" },
          ]}
        />
      </Section>
    </Container>
  );
};

export default Details;
