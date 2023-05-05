import styled from "styled-components";
import { Arrow } from "../styles/GlobalStyles";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  min-width: 45px;
  position: relative;
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #adb5bd;
  border-radius: ${(props) => (props.open ? "8px 8px 0px 0px" : "8px")};
  cursor: pointer;
`;
const Value = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #212529;
`;

const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  width: calc(100% + 3px);
  position: absolute;
  top: 36px;
  left: -2px;
  background-color: #fff;
  border: 1px solid #adb5bd;
  border-radius: 0px 0px 8px 8px;
  user-select: none;
`;
const Option = styled.div`
  padding: 4px 8px;
  &:hover {
    background-color: #f5f6f7;
  }
  &:last-child {
    border-radius: 0px 0px 8px 8px;
  }
`;
const OptionName = styled.span`
  font-weight: 400;
  color: #212529;
`;

const DropdownMenu = ({ value = 1, setValue = function () {}, options = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handle = (e) => {
      if (!dropdownRef.current.contains(e.target)) setIsOpen(false);
    };

    window.addEventListener("click", handle);

    return () => {
      window.removeEventListener("click", handle);
    };
  }, []);

  return (
    <Container open={isOpen ? true : false} ref={dropdownRef} onClick={toggle}>
      <Value>{value}</Value>
      <ArrowContainer>
        <Arrow direction={isOpen ? "down" : "up"} />
      </ArrowContainer>
      {isOpen && (
        <Menu>
          {options.map((option, index) => {
            if (option?.link)
              return (
                <NavLink key={index} to={option.link}>
                  <Option onClick={() => setValue(option?.name)} key={index}>
                    <OptionName>{option.name}</OptionName>
                  </Option>
                </NavLink>
              );

            return (
              <Option onClick={() => setValue(option?.name)} key={index}>
                <OptionName>{option.name}</OptionName>
              </Option>
            );
          })}
        </Menu>
      )}
    </Container>
  );
};

export default DropdownMenu;
