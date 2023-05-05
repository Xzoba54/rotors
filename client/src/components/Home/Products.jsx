import { useState, useEffect } from "react";
import axios from "../../auth/axios";
import { NavLink } from "react-router-dom";

const Products = ({ limit }) => {
  const [products, setProducts] = useState([]);
  const [sections, setSections] = useState([
    {
      name: "Producer",
      isCleaningButton: false,
      filters: [
        { name: "Logitech", isChecked: false },
        { name: "SteelSeries", isChecked: false },
        { name: "Razer", isChecked: false },
      ],
    },
    {
      name: "Connectivity",
      isCleaningButton: false,
      filters: [
        { name: "Wired", isChecked: false },
        { name: "Wireless", isChecked: false },
        { name: "Bluetooth", isChecked: false },
      ],
    },
    {
      name: "Backlight",
      isCleaningButton: false,
      filters: [
        { name: "Yes", isChecked: false },
        { name: "No", isChecked: false },
      ],
    },
  ]);

  useEffect(() => {
    const fetch = async () => {
      try {
        let filterQuery = "";

        sections.forEach((section) => {
          section.filters.forEach((filter) => {
            if (!filter.isChecked) return;

            filterQuery += `${section.name.toLowerCase()}=${filter.name.toLowerCase()}&`;
          });
        });

        const res = await axios.get(`/product/all?${filterQuery}limit=${limit}`);
        setProducts(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetch();
  }, [sections]);

  const handleSwitchFilter = (sectionName, filterName) => {
    const newSections = [...sections];

    newSections.map((section) => section.name === sectionName && section.filters.map((filter) => filter.name === filterName && (filter.isChecked ? (filter.isChecked = false) : (filter.isChecked = true))));

    const isAnythingChecked = newSections.some((section) => section.name === sectionName && section.filters.some((filter) => filter.isChecked));
    newSections.map((section) => section.name === sectionName && (isAnythingChecked ? (section.isCleaningButton = true) : (section.isCleaningButton = false)));

    setSections(newSections);
  };

  const countFilter = (sectionName, name) => {
    const count = products.filter((product) => product[sectionName.toLowerCase()] === name.toLowerCase()).length;

    return `(${count})`;
  };

  const handleSwitchSection = (name) => {
    const newSections = [...sections];

    newSections.forEach((section) => {
      if (section.name !== name) return;

      section.filters.forEach((filter) => {
        filter.isChecked = section.isCleaningButton ? false : true;
      });

      section.isCleaningButton = !section.isCleaningButton;
    });

    setSections(newSections);
  };

  const handleClearSections = () => {
    const newSections = [...sections];

    newSections.map((section) => section.filters.map((filter) => (filter.isChecked = false)));

    setSections(newSections);
  };

  const Section = ({ name, filters, isCleaningButton }) => {
    return (
      <div className="section">
        <div className="head">
          <span>{name}</span>
          <button onClick={() => handleSwitchSection(name)} className="button">
            {isCleaningButton ? "Clear All" : "Select All"}
          </button>
        </div>
        <div className="body">
          {filters.map((filter, index) => {
            return (
              <label key={index}>
                <div className="filter">
                  <input onChange={() => handleSwitchFilter(name, filter.name)} checked={filter.isChecked} className="checkbox" type="checkbox" />
                  <span>
                    {filter.name} {countFilter(name, filter.name)}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="products_container">
      <div className="aside">
        <div className="categories"></div>
        <div className="filters">
          <div className="head">
            <span>Filters</span>
            <button onClick={handleClearSections} className="button">
              Clear All
            </button>
          </div>
          {sections.map((section, index) => {
            return <Section key={index} name={section.name} filters={section.filters} isCleaningButton={section.isCleaningButton} />;
          })}
        </div>
      </div>
      <div className="products">
        {products.map((product, index) => (
          <Product key={index} id={product._id} image={product.image} name={product.name} desc={product.desc} price={product.price} />
        ))}
      </div>
    </div>
  );
};

const Product = ({ id, image, name, desc, price }) => {
  return (
    <div className="product">
      <NavLink to={`/product/${id}`}>
        <div className="head">
          <img src={image} alt={name} />
        </div>
        <div className="body">
          <span className="name">{name}</span>
          <p className="desc">{desc}</p>
        </div>
        <div className="footer">
          <p className="previous_price">${price}.0</p>
          <span className="price">${price}.0</span>
          <p className="delivery">Darmowa dostawa</p>
        </div>
      </NavLink>
    </div>
  );
};

export default Products;
