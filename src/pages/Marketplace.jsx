import React from "react";
import data from "./../components/product.json";
import ProductCard from "../components/ProductCard";

const Marketplace = () => {
  return (
    <>
      <div className="marketplace">
        <div class="searchbar">
          Search:
          <input type="text" placeholder="Search.." />
        </div>

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
