import React from "react";
import data from "./product.json";
import ProductCard from "./ProductCard";

const Property = ({ name }) => {
  const { title } = useParams();
  let propertyIndex = data.findIndex((props) => props.name === name);
  let currentPost = data[propertyIndex];

  if (!currentPost) {
    return <div>Property not found.</div>;
  }

  return (
    <>
      <ProductCard
        propertyImage={currentPost.image}
        propertyName={currentPost.name}
        propertyDescription={currentPost.description}
        propertyPrice={currentPost.price}
      />
    </>
  );
};

export default Property;
