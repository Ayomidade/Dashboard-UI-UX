import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
function __Route() {
  const pages = [{ id: 1, path: "/", element: <Home /> }];

  return (
    <Routes>
      {pages.map(({ path, element, id }) => (
        <Route path={path} element={element} key={id} />
      ))}
    </Routes>
  );
}

export default __Route;
