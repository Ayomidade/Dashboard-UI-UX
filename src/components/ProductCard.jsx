import React from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

function PropertyCard({
  propertyImage,
  propertyName,
  propertyDescription,
  propertyPrice,
}) {
  return (
    <>
      <div className="property-card">
        <img
          src={propertyImage}
          alt={propertyName}
          className="property-image"
        />
        <div>
          <span className="property-price">{propertyPrice}</span>
          <FaHeart className="icon" title="Like" />
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
