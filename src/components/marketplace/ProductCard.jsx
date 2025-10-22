import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProduct } from "../../brain/slices/watchlist.slice";
import { removeProperty } from "../../brain/slices/marketplace.slice";

function PropertyCard({
  id,
  propertyImage,
  propertyName,
  propertyDescription,
  propertyPrice,
}) {
  const { products } = useSelector((store) => store.marketPlaceSlice);
  const [isLiked, setIsLiked] = useState(false);
  const dispatch = useDispatch();
  // function that returns the selected property

  const handleSelectProduct = (id) => {
    toggleLike();
    let productIndex = products.findIndex((product) => product.id == id);
    let product = products[productIndex];
    dispatch(addProduct({ product }));
    // dispatch(removeProperty({ id }));
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <>
      <div className="property-card">
        <img
          src={propertyImage}
          alt={propertyName}
          className="property-image"
        />
        <div className="mini-card">
          <span className="property-price">{propertyPrice}</span>
          <FaHeart
            className={isLiked ? "liked" : "like"}
            title="Like"
            onClick={() => handleSelectProduct(id)}
          />
        </div>
        <div className="property-content">
          <h2 className="property-name">{propertyName}</h2>
          <p className="property-description">
            {propertyDescription.slice(0, 100)}
            <Link to={`property/${propertyName}`}>...read more</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default PropertyCard;
