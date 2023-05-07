import styled from "styled-components";

import Nav from "./Nav";
import Specification from "./Specification";
import Opinions from "./Opinions";
import { useRef, useEffect, useState } from "react";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 1300px;
`;
const Section = styled.div`
  border-top: 1px solid #adb5bd;
  width: 1300px;
  margin: 40px 0px;
  padding: 1rem 1.5rem;
`;
const Header = styled.div`
  height: 45px;
  width: 100%;
  display: flex;
  align-items: center;
`;

const Sections = ({ properties }) => {
  const scrollTo = (section) => {
    const element = document.getElementById(section);

    element.scrollIntoView({ behavior: "smooth" });
  };

  const [fixed, setFixed] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handle = (e) => {
      if (navRef.current) {
        const pos = navRef.current.getBoundingClientRect().top;
        setFixed(pos <= 0);
      }
    };

    window.addEventListener("scroll", handle);

    return () => {
      window.removeEventListener("scroll", handle);
    };
  }, []);

  return (
    <Container>
      <Header ref={navRef}>
        <Nav fixed={fixed} scrollTo={scrollTo} />
      </Header>
      <Wrapper>
        <Section>
          <Specification properties={properties} />
        </Section>
        <Section>
          <Opinions />
        </Section>
      </Wrapper>
    </Container>
  );
};

export default Sections;
