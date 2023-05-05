import { Container, Section, Nav, SearchContainer, Search, SearchIcon, SearchIconContainer } from "./NavbarStyles";
import { Span } from "../../styles/GlobalStyles";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Container>
      <Nav>
        <Section>
          <NavLink style={{ textDecoration: "none" }} to="/">
            <Span fontSize="26px" fontWeight="600">
              ROTORS
            </Span>
          </NavLink>
        </Section>
        <Section flex="2">
          <SearchContainer>
            <Search type="text" placeholder="Type to search..." />
            <SearchIconContainer>
              <SearchIcon src="/assets/search.svg" />
            </SearchIconContainer>
          </SearchContainer>
        </Section>
        <Section>
          <Span fontSize="26px" fontWeight="600">
            ROTORS
          </Span>
        </Section>
      </Nav>
    </Container>
  );
};

export default Navbar;
