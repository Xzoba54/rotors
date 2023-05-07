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
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
const Path = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const UserLocation = ({ location }) => {
  const SlashComponent = () => {
    return <Slash>/</Slash>;
  };

  return (
    <Container>
      <Path>
        <Name>{location[0]}</Name>
      </Path>
      {location.map((element, index) => {
        if (index === 0) return null;

        return (
          <Path key={index}>
            <SlashComponent />
            <Name>{element}</Name>
          </Path>
        );
      })}
    </Container>
  );
};

export default UserLocation;
