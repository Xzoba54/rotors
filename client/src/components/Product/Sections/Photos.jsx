import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 1rem 2rem;
  border-left: 1px solid #adb5bd;
  /* border-radius: 8px; */
  /* box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.1); */
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Name = styled.div`
  color: #212529;
  font-weight: 500;
  font-size: 21px;
`;
const Button = styled.button`
  background-color: #fff;
  outline: none;
  border: none;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
`;
const Body = styled.div`
  display: flex;
  gap: 6px;
`;
const Item = styled.div`
  width: 80px;
  height: 80px;
`;
const Photo = styled.img`
  height: 100%;
  width: 100%;
  border: 1px solid #212529;
  object-fit: cover;
  border-radius: 8px;
  cursor: pointer;
`;

const Photos = () => {
  return (
    <Container>
      <Header>
        <Name>User photos</Name>
        <Button>Show All</Button>
      </Header>
      <Body>
        <Item>
          <Photo src="https://cdn.discordapp.com/attachments/753648968751120443/1104510021863219300/render.png" />
        </Item>
        <Item>
          <Photo src="https://cdn.discordapp.com/attachments/753648968751120443/1104510021863219300/render.png" />
        </Item>
        <Item>
          <Photo src="https://cdn.discordapp.com/attachments/753648968751120443/1104510021863219300/render.png" />
        </Item>
        <Item>
          <Photo src="https://cdn.discordapp.com/attachments/753648968751120443/1104510021863219300/render.png" />
        </Item>
        <Item>
          <Photo src="https://cdn.discordapp.com/attachments/753648968751120443/1104510021863219300/render.png" />
        </Item>
        <Item>
          <Photo src="https://cdn.discordapp.com/attachments/753648968751120443/1104510021863219300/render.png" />
        </Item>
        <Item>
          <Photo src="https://cdn.discordapp.com/attachments/753648968751120443/1104510021863219300/render.png" />
        </Item>
        <Item>
          <Photo src="https://cdn.discordapp.com/attachments/753648968751120443/1104510021863219300/render.png" />
        </Item>
      </Body>
    </Container>
  );
};

export default Photos;
