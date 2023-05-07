import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Header = styled.div`
  margin-bottom: 20px;
`;
const SectionName = styled.span`
  color: #495057;
  font-size: 32px;
  font-weight: 600;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => (props.darker ? "#f0f0f0" : "#fff")};
  &:hover {
    background-color: #cecece;
  }
`;
const TableKeyContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  padding: 8px 22px;
  cursor: default;
`;
const TableValueContainer = styled.div`
  flex: 3;
  padding: 8px 22px;
`;
const TableKey = styled.span`
  font-weight: 500;
  color: #212529;
  text-transform: capitalize;
`;
const TableValue = styled.span`
  font-weight: 400;
  text-transform: capitalize;
`;

const Specification = ({ properties = [] }) => {
  return (
    <Container id="specification">
      <Header>
        <SectionName>Specification</SectionName>
      </Header>
      <Table>
        {properties.map((property, index) => (
          <Row darker={index % 2 === 0 ? true : false} key={index}>
            <TableKeyContainer>
              <TableKey>{property.key}</TableKey>
            </TableKeyContainer>
            <TableValueContainer>
              <TableValue>{property.value}</TableValue>
            </TableValueContainer>
          </Row>
        ))}
      </Table>
    </Container>
  );
};

export default Specification;
