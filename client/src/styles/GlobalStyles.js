import styled from "styled-components";

export const Img = styled.img`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};
  object-fit: contain;
`;

export const Span = styled.span`
  color: ${(props) => props.color || "#212529"};
  font-size: ${(props) => props.fontSize || "16px"};
  font-weight: ${(props) => props.fontWeight || "500"};
  margin-right: ${(props) => props.marginRight || "0px"};
  text-decoration: ${(props) => props.textDecoration || "none"};
`;

const rotateMap = {
  up: "-135deg",
  right: "-45deg",
  down: "45deg",
  left: "135deg",
};

export const Arrow = styled.i`
  border: solid #495057;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(${(props) => (props.direction ? rotateMap[props.direction] : rotateMap.up)});
`;
