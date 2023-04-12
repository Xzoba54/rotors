import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../auth/axios";
import { useState } from "react";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await axios.get(`/product/${id}`);

        console.log(res.data);
        setProduct(res.data);
      } catch (e) {
        console.log(e);
      }
    };

    fetch();
  }, [id]);

  return (
    <div className="product_container">
      {product?._id && (
        <>
          <div className="img">
            <img src={product.image} alt={product.name} />
          </div>
          <div className="details">
            <div className="head">
              <span>{product.name}</span>
              <p>{product.desc}</p>
            </div>
            <div className="body">{/* {product.} */}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
