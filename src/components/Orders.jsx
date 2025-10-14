import React, { useLayoutEffect } from "react";
import { useEffect, useState, useRef } from "react";

const Orders = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // useEffect(() => {
  //   const isSub = function showalert() {
  //     alert("This is the order screen");
  //   };
  //   return isSub;
  // }, [isAuthenticated]);

  let divRef = useRef(null);

  const [showElement, setShowElement] = useState(true);

  const closeDiv = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setShowElement(!setShowElement);
    }
  };

  useLayoutEffect(() => {
    document.body.addEventListener("mouseover", closeDiv);
    return () => document.body.removeEventListener("mouseover", closeDiv);
  }, []);

  return (
    <>
      Orders
      <button onClick={() => setShowElement(!showElement)}> Close div</button>
      {showElement && (
        <div
          style={{
            height: "100",
            border: "1px solid green",
            width: 500,
            zIndex: 10,
          }}
          ref={divRef}
        ></div>
      )}
    </>
  );
};

export default Orders;
