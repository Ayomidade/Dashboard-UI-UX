import React from "react";
import ProductCard from "./ProductCard";
import Header from "../header/Header";
import { useSelector } from "react-redux";

const Marketplace = () => {
  const { products } = useSelector((store) => store.marketPlaceSlice);
  // console.log(products);
  return (
    <>
      <div className="marketplace">
        <Header />

        <div className="property-grid">
          {products.map(({ id, name, price, description, image }) => (
            <ProductCard
              id={id}
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
