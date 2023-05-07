import { useState } from "react";
import styled from "styled-components";
import Comment from "./Comment";
import DropwodnMenu from "../../DropdownMenu";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  /* box-shadow: 0px 0px 18px 1px rgba(0, 0, 0, 0.1); */
  /* background-color: #f8f9fa; */
  padding: 1rem 0.5rem;
  width: 100%;
`;
const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: calc(150px + 2rem);
  gap: 30px;
`;
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const Footer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
const Button = styled.button`
  background-color: #fff;
  border-radius: 8px;
  padding: 1rem 2rem;
  cursor: pointer;
  color: #343a40;
  border: 1px solid #adb5bd;
  font-weight: 500;
  font-size: 14px;
  transition: 0.5s;
  &:hover {
    border: 1px solid #212529;
  }
`;
const FilterText = styled.span`
  font-weight: 400;
  color: #495057;
  font-size: 16px;
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Comments = () => {
  const [rating, setRating] = useState("All");
  const [sort, setSort] = useState("Most popular");

  return (
    <Container>
      <Header>
        <Filter>
          <FilterText>Rating: </FilterText>
          <DropwodnMenu withoutborder padding="4px 6px" width="125px" value={rating} setValue={setRating} options={[{ name: "All" }, { name: "6 Start" }, { name: "5 Start" }, { name: "4 Start" }, { name: "3 Start" }, { name: "2 Start" }, { name: "1 Start" }]} />
        </Filter>
        <Filter>
          <FilterText>Sort by: </FilterText>
          <DropwodnMenu withoutborder padding="4px 6px" width="155px" value={sort} setValue={setSort} options={[{ name: "Most popoular" }, { name: "Recent" }]} />
        </Filter>
      </Header>
      <Body>
        <Comment />
        <Comment />
        <Comment />
      </Body>
      <Footer>
        <Button>Load more comments</Button>
      </Footer>
    </Container>
  );
};

export default Comments;
