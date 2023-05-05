import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 5px 1px #adb5bd;
`;
export const Wrapper = styled.div`
  width: 1300px;
`;
export const Nav = styled.div`
  display: flex;
  gap: 12px;
`;
export const NavSection = styled.div`
  padding: 12px;
  cursor: pointer;
  border-bottom: 1px solid ${(props) => (props.selected ? "#212529" : "transparent")};
  transition: 0.1s;
  &:hover {
    border-bottom: 1px solid #212529;
  }
`;
export const Section = styled.div`
  border-top: 1px solid #adb5bd;
  width: 1300px;
  margin: 40px 0px;
  padding: 8px 20px;
`;

export const SectionHeader = styled.div`
  margin-bottom: 20px;
`;

export const SectionBody = styled.div``;

export const SectionRow = styled.div`
  display: flex;
  padding: 8px;
  gap: 20px;
  background-color: ${(props) => props.background || "#fff"};
  &:hover {
    background-color: #e8ebed;
  }
`;

export const SectionRowElement = styled.div`
  display: flex;
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  flex: ${(props) => props.flex || "1"};
`;
