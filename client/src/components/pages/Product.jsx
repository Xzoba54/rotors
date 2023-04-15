import { useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "../../auth/axios";
import { useState } from "react";
import { ImgContainer, ImgSelect, ProductImgFooter, SummarySectionIcon, NavigateSpanSlash, NavigateSpan, ProductContainer, ProductHeader, DropdownButton, SummarySection, SummaryButton, SummarySelect, Dropdown, InformationContainer, ContainerButtonsRow, SectionMenuButton, SummaryRow, SummaryHeader, RowButton, Arrow, SectionMenu, ButtonsRow, Li, Ul, DetailsSection, SummaryContainer, DetailsContainer, InformationRow, InformationHeaderReview, InformationHeader, ProductImgContainer, Wrapper, Container, SummaryHeaderIcon } from "./ProductStyles";
import { Span, Img } from "../GlobalStyles";
import ProductNav from "./ProductNav";
import ImageViewer from "../ImageViewer";

const Product = () => {
  const { id } = useParams();
  const [viewProduct, setViewProduct] = useState(false);
  const [product, setProduct] = useState({});
  const [sections, setSections] = useState([
    {
      name: "Size",
      type: "row",
      buttons: [
        {
          name: "16 GB",
          selected: true,
        },
        {
          name: "32 GB",
          selected: false,
        },
      ],
    },
    {
      name: "Clock speed",
      type: "dropdown",
      buttons: [
        {
          name: "3360 MHz",
          selected: false,
        },
        {
          name: "4100 MHz",
          selected: true,
        },
        {
          name: "7200 MHz",
          selected: false,
        },
      ],
    },
  ]);

  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`/product/${id}`);

        document.title = res.data.name;
        setProduct(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, [id]);

  const handleSwitchOpen = () => {
    setOpen(!open);
  };

  const SectionRow = ({ name, buttons }) => {
    return (
      <DetailsSection>
        <ContainerButtonsRow>
          <Span color="#212529" fontSize="17px">
            {name}
          </Span>
          <ButtonsRow>
            {buttons.map((button, index) => (
              <RowButton key={index} selected={button.selected}>
                {button.name}
              </RowButton>
            ))}
          </ButtonsRow>
        </ContainerButtonsRow>
      </DetailsSection>
    );
  };

  const SectionDropdown = ({ name, buttons }) => {
    return (
      <DetailsSection>
        <SectionMenu>
          <Span color="#212529" fontSize="17px">
            {name}
          </Span>
          {buttons.map((button, index) => {
            if (button.selected)
              return (
                <SectionMenuButton key={index} onClick={handleSwitchOpen}>
                  <Span>{button.name}</Span>
                  <Arrow />
                </SectionMenuButton>
              );
          })}
          {open && (
            <Dropdown>
              {buttons.map((button, index) => (
                <DropdownButton key={index} selected={button.selected}>
                  <Span>{button.name}</Span>
                </DropdownButton>
              ))}
            </Dropdown>
          )}
        </SectionMenu>
      </DetailsSection>
    );
  };

  const ContainerProperties = () => {
    return product.properties.map((property, index) => {
      if (index >= 4) return null;

      return (
        <Li key={index}>
          <Span marginRight="6px" color="#212529" fontSize="17px">
            {property.property}:
          </Span>
          <Span fontWeight="400" color="#495057">
            {property.value}
          </Span>
        </Li>
      );
    });
  };

  const handleSetViewProduct = () => {
    setViewProduct(!viewProduct);
  };

  return (
    <Container>
      {product?._id && (
        <>
          {viewProduct ? (
            <ImageViewer handleSetViewProduct={handleSetViewProduct} image={product.image} name={product.name} desc={product.desc} />
          ) : (
            <>
              <Wrapper>
                <ProductHeader>
                  <NavLink to="/">
                    <NavigateSpan>Home</NavigateSpan>
                  </NavLink>
                  <NavigateSpanSlash>/</NavigateSpanSlash>
                  <NavLink to="/category/keyboards">
                    <NavigateSpan>Keyboards</NavigateSpan>
                  </NavLink>
                  <NavigateSpanSlash>/</NavigateSpanSlash>
                  <NavLink to={`/product/${id}`}>
                    <NavigateSpan>{product.name}</NavigateSpan>
                  </NavLink>
                </ProductHeader>
                <ProductContainer>
                  <ProductImgContainer>
                    <ImgContainer>
                      <Img onClick={handleSetViewProduct} src={product.image} />
                    </ImgContainer>
                    <ProductImgFooter>
                      <ImgSelect>
                        <Img src={product.image} />
                      </ImgSelect>
                    </ProductImgFooter>
                  </ProductImgContainer>
                  <InformationContainer>
                    <InformationHeader>
                      <Span fontSize="26px" fontWeight="500">
                        {product.name}
                      </Span>
                      <InformationHeaderReview>
                        <Img width="25px" src="/assets/star.svg" />
                        <Img width="25px" src="/assets/star.svg" />
                        <Img width="25px" src="/assets/star.svg" />
                        <Img width="25px" src="/assets/star.svg" />
                        <Img width="25px" src="/assets/halfstar.svg" />
                        <Span fontSize="14px" color="#495057">
                          (342) Reviews
                        </Span>
                      </InformationHeaderReview>
                    </InformationHeader>
                    <InformationRow>
                      <DetailsContainer>
                        <DetailsSection>
                          <Ul>
                            <ContainerProperties />
                          </Ul>
                        </DetailsSection>
                        {sections.map((section, index) => {
                          if (section.type === "row") {
                            return <SectionRow key={index} name={section.name} buttons={section.buttons} />;
                          }

                          if (section.type === "dropdown") {
                            return <SectionDropdown key={index} name={section.name} buttons={section.buttons} />;
                          }
                        })}
                      </DetailsContainer>
                      <SummaryContainer>
                        <SummaryHeader>
                          <SummaryRow>
                            <Span color="#343A40" fontSize="32px">
                              ${product.price}
                            </Span>
                            <SummaryRow>
                              <SummaryHeaderIcon src="/assets/print.svg" />
                              <SummaryHeaderIcon src="/assets/heart.svg" />
                            </SummaryRow>
                          </SummaryRow>
                          <Span color="#6C757D" fontSize="14px" textDecoration="line-through">
                            ${product.price}
                          </Span>
                          <SummaryRow style={{ marginTop: "12px" }}>
                            <SummarySelect>
                              <Span>1</Span>
                              <Arrow />
                            </SummarySelect>
                            <SummaryButton>
                              <SummarySectionIcon src="/assets/cart.svg" />
                              <Span color="#F8F9FA" fontWeight="400" fontSize="18px">
                                Add To Cart
                              </Span>
                            </SummaryButton>
                          </SummaryRow>
                        </SummaryHeader>
                        <SummarySection>
                          <SummarySectionIcon src="/assets/checkmark.svg" />
                          <Span fontWeight="400" color="#495057">
                            Available
                          </Span>
                        </SummarySection>
                        <SummarySection>
                          <SummarySectionIcon src="/assets/delivery.svg" />
                          <Span fontWeight="400" color="#495057">
                            Free delivery
                          </Span>
                        </SummarySection>
                        <SummarySection>
                          <SummarySectionIcon src="/assets/wallet.svg" />
                          <Span fontWeight="400" color="#495057">
                            Lowest price in the last 30 days: ${product.price}
                          </Span>
                        </SummarySection>
                      </SummaryContainer>
                    </InformationRow>
                  </InformationContainer>
                </ProductContainer>
              </Wrapper>
              <ProductNav />
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Product;
