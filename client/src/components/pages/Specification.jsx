import { Span } from "../GlobalStyles";
import { Section, SectionHeader, SectionBody, SectionRow, SectionRowElement } from "./ProductNavStyles";

const Specification = ({ specs }) => {
  return (
    <Section id="specification">
      <SectionHeader>
        <Span color="#3b3e42" fontSize="32px" fontWeight="600">
          Specification
        </Span>
      </SectionHeader>
      <SectionBody>
        <SectionRow>
          <SectionRowElement justifyContent="flex-end">
            <Span>Brand:</Span>
          </SectionRowElement>
          <SectionRowElement flex="3">
            <Span>Logitech</Span>
          </SectionRowElement>
        </SectionRow>
        <SectionRow background="#e8ebed">
          <SectionRowElement justifyContent="flex-end">
            <Span>Color:</Span>
          </SectionRowElement>
          <SectionRowElement flex="3">
            <Span>White</Span>
          </SectionRowElement>
        </SectionRow>
      </SectionBody>
    </Section>
  );
};

export default Specification;
