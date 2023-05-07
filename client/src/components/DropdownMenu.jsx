import styled from "styled-components";
import { Arrow } from "../styles/GlobalStyles";
import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Container = styled.div`
  min-width: 45px;
  width: ${(props) => props.width};
  position: relative;
  padding: ${(props) => props.padding};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: ${(props) => (props.withoutborder ? "0px solid #fff" : "1px solid #ced4da")};
  border-left: ${(props) => (props.withoutborder ? "0px solid #fff" : "1px solid #ced4da")};
  border-right: ${(props) => (props.withoutborder ? "0px solid #fff" : "1px solid #ced4da")};
  border-bottom: 1px solid #ced4da;
  border-radius: ${(props) => (props.open ? "8px 8px 0px 0px" : props.withoutborder ? "0px" : "8px")};
  cursor: pointer;
`;
const Value = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #212529;
`;

const ArrowContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Menu = styled.div`
  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.1);
  width: calc(100% + 3px);
  position: absolute;
  top: 100%;
  left: -2px;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0px 0px 8px 8px;
  user-select: none;
`;
const Option = styled.div`
  padding: 6px 8px;
  display: flex;
  align-items: center;
  &:hover {
    background-color: #f5f6f7;
  }
  &:last-child {
    border-radius: 0px 0px 8px 8px;
  }
`;
const OptionName = styled.span`
  font-weight: 400;
  color: #343a40;
`;

const DropdownMenu = ({ withoutborder = false, padding = "8px 10px", width = 45, value = 1, setValue = function () {}, options = [] }) => {
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
    <Container withoutborder={withoutborder} padding={padding} width={width} open={isOpen ? true : false} ref={dropdownRef} onClick={toggle}>
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
