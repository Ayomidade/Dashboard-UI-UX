import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function PropertyCard({
  propertyImage,
  propertyName,
  propertyDescription,
  propertyPrice,
}) {
  const [isLiked, setIsLiked] = useState(false);

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
            onClick={toggleLike}
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
