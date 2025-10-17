import React from "react";
import { Link } from "react-router-dom";

function PropertyCard({
  propertyImage,
  propertyName,
  propertyDescription,
  propertyPrice,
}) {
  return (
    <div className="property-card">
      <img src={propertyImage} alt={propertyName} className="property-image" />
      <span className="property-price">{propertyPrice}</span>
      <div className="property-content">
        <h2 className="property-name">{propertyName}</h2>
        <p className="property-description">{propertyDescription.slice(0,100)}</p>
        <Link to={'/property'}>read more</Link>
      </div>
    </div>
  );
}

export default PropertyCard;
