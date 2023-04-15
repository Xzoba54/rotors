import { Container, Wrapper, Nav, NavSection } from "./ProductNavStyles";
import { Span } from "../GlobalStyles";
import Specification from "./Specification";
import { NavLink } from "react-router-dom";

const ProductNav = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Nav>
            <NavSection selected>
              <a href="#promotion">
                <Span color="#212529" fontWeight="400">
                  Promotion
                </Span>
              </a>
            </NavSection>
            <NavSection>
              <a href="#specification">
                <Span color="#212529" fontWeight="400">
                  Specification
                </Span>
              </a>
            </NavSection>
            <NavSection>
              <NavLink to="#opinions">
                <a href="#opinions">
                  <Span color="#212529" fontWeight="400">
                    Opinions (43)
                  </Span>
                </a>
              </NavLink>
            </NavSection>
          </Nav>
        </Wrapper>
      </Container>
      <Specification />
    </>
  );
};

export default ProductNav;
