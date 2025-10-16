import React from "react";

function PropertyCard({
  propertyImage,
  propertyName,
  propertyDescription,
  propertyPrice,
}) {
  return (
    <div className="property-card">
      <img src={propertyImage} alt={propertyName} className="property-image" />
      <div className="property-content">
        <h2 className="property-name">{propertyName}</h2>
        <p className="property-description">{propertyDescription}</p>
        <div className="property-footer">
          <span className="property-price">{propertyPrice}</span>
          <button className="property-button">View</button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
