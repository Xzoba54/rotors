import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 8px 19px;
  gap: 8px;
  margin-top: 50px;
  border-bottom: 1px solid #adb5bd;
`;
const Slash = styled.span`
  color: #495057;
  font-weight: 500;
`;
const Name = styled.span`
  color: #495057;
  font-weight: 600;
  cursor: default;
  &:hover {
    text-decoration: underline;
  }
`;

const UserLocation = ({ location }) => {
  const SlashComponent = () => {
    return <Slash>/</Slash>;
  };

  return (
    <Container>
      <Name>{location[0]}</Name>
      {location.map((element, index) => {
        if (index === 0) return;

        return (
          <div key={index}>
            <SlashComponent />
            <Name>{element}</Name>
          </div>
        );
      })}
    </Container>
  );
};

export default UserLocation;
