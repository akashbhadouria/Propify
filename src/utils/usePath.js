import React from "react";
import { useLocation } from "react-router";

const usePath = (path) => {
  const location = useLocation();
  if (path === location.pathname) {
    return true;
  } else return false;
};

export default usePath;
