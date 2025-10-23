import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../marketplace/ProductCard";

const Watchlist = () => {
  const { watchList } = useSelector((store) => store.watchListSlice);

  console.log(watchList);
  // const watchlistProperty = watchList;

  return (
    <>
      <div className="grid">
        {watchList.map(({ id, name, price, description, image }) => (
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
    </>
  );
};

export default Watchlist;
