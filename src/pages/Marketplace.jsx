import React from "react";
import data from "../components/marketplace/product.json";
import ProductCard from "../components/ProductCard";
import Header from "../components/header/Header";

const Marketplace = () => {
  return (
    <>
      <div className="marketplace">
        <Header />

        <div className="property-grid">
          {data.map(({ id, name, price, description, image }) => (
            <ProductCard
              key={id}
              propertyImage={image}
              propertyName={name}
              propertyDescription={description}
              propertyPrice={price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Marketplace;
