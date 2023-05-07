import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "../auth/axios";

import ImageViewer from "../components/Product/Viewer";
import UserLocation from "../components/UserLocation";
import Display from "../components/Product/Display";
import Header from "../components/Product/Header";
import Details from "../components/Product/Details";
import Summary from "../components/Product/Summary";
import Sections from "../components/Product/Sections/Sections";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const ProductContainer = styled.div`
  display: flex;
`;
const DetailsContainer = styled.div`
  flex: 1;
`;
const Row = styled.div`
  display: flex;
`;

const Product = () => {
  const { id } = useParams();
  const [viewProduct, setViewProduct] = useState(false);
  const [product, setProduct] = useState({});

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
                <UserLocation location={["Home", "Keyboards", product.name]} />
                <ProductContainer>
                  <Display handleSetViewProduct={handleSetViewProduct} items={[{ image: product.image }]} />
                  <DetailsContainer>
                    <Header title={product.name} />
                    <Row>
                      <Details properties={product.properties} />
                      <Summary price={product.price} />
                    </Row>
                  </DetailsContainer>
                </ProductContainer>
              </Wrapper>
              <Sections properties={product.properties} />
            </>
          )}
        </>
      )}
    </Container>
  );
};

export default Product;
