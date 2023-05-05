import styled from "styled-components";

const Container = styled.div`
  border-top: 1px solid #adb5bd;
  width: 1300px;
  margin: 40px 0px;
  padding: 8px 20px;
`;
const Header = styled.div`
  margin-bottom: 20px;
`;
const SectionName = styled.span`
  color: #3b3e42;
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
  background-color: ${(props) => (props.darker ? "#e2e2e2" : "#fff")};
  &:hover {
    background-color: #cccccc;
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
`;
const TableValue = styled.span`
  font-weight: 400;
`;

const Specification = ({ properties = [] }) => {
  return (
    <Container>
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
