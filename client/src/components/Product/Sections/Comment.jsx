import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  padding: 0.5rem;
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-right: 1px solid #adb5bd;
  padding: 1rem;
  min-width: 150px;
`;
const Avatar = styled.img`
  width: 45px;
  height: 45px;
  object-fit: cover;
  border-radius: 12px;
`;
const Username = styled.span`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #495057;
  font-size: 14px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: capitalize;
`;
const Body = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Star = styled.img`
  width: 18px;
`;
const Date = styled.span`
  margin: 0 14px;
  font-size: 14px;
  color: #495057;
  letter-spacing: 0.5px;
`;
const Message = styled.span`
  white-space: pre-wrap;
  color: #343a40;
  font-weight: 500;
`;
const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  margin-right: 8px;
`;
const RatingText = styled.span`
  color: #6c757d;
  font-weight: 400;
`;

const Comment = () => {
  const [likes, setLikes] = useState(9);
  const [dislikes, setDislikes] = useState(1);

  const handleSetLikes = () => {
    setLikes((prev) => prev + 1);
  };

  const handleSetDislikes = () => {
    setDislikes((prev) => prev + 1);
  };

  return (
    <Container>
      <Header>
        <Avatar src="https://cdn.discordapp.com/attachments/753648968751120443/1104521171409567885/smile.png" />
        <Username>Przemek</Username>
      </Header>
      <Body>
        <Row>
          <Star src="/assets/star.svg" />
          <Star src="/assets/star.svg" />
          <Star src="/assets/star.svg" />
          <Star src="/assets/star.svg" />
          <Star src="/assets/star.svg" />
          <Star src="/assets/halfstar.svg" />
          <Date>26/03/2023</Date>
          <Rating>
            <Icon onClick={handleSetLikes} src="/assets/like.svg" />
            <RatingText>{likes}</RatingText>
          </Rating>
          <Rating>
            <Icon onClick={handleSetDislikes} src="/assets/dislike.svg" />
            <RatingText>{dislikes}</RatingText>
          </Rating>
        </Row>
        <Message>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, saepe. Alias voluptate autem quidem fuga. Totam at quae, sint nulla fuga sed ducimus possimus sapiente minima architecto culpa recusandae iure? Corrupti, alias. Odio est accusantium deserunt, blanditiis ducimus cumque minus adipisci doloremque porro praesentium fugit velit commodi, corrupti quaerat corporis facilis saepe
          a enim, vero quasi voluptatibus non recusandae asperiores?
        </Message>
      </Body>
    </Container>
  );
};

export default Comment;
