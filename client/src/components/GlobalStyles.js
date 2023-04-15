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
