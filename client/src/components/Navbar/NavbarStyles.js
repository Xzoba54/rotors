import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: fixed;
  background-color: #fff;
  z-index: 5;
`;
export const Nav = styled.nav`
  box-shadow: 0px 0px 3px 1px #dee2e6;
  display: flex;
  align-items: center;
`;
export const Section = styled.div`
  padding: 12px;
  display: flex;
  justify-content: center;
  flex: ${(props) => props.flex || "1"};
`;

export const SearchContainer = styled.div`
  display: flex;
`;
export const Search = styled.input`
  border: 1px solid #dee2e6;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 10px 14px;
  font-weight: 500;
  width: 400px;
  outline: none;
  font-size: 15px;
  transition: 0.1s;
  &:focus {
    box-shadow: 0px 0px 4px 1px #dee2e6;
  }
`;

export const SearchIconContainer = styled.div`
  display: flex;
  padding: 0px 14px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background-color: #46494d;
  cursor: pointer;
  &:hover {
    background-color: #383a3d;
  }
`;

export const SearchIcon = styled.img`
  width: 25px;
`;
