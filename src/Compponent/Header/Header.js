import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="bg-dark py-2 text-center sticky-top border-bottom  border-success">
      <h1 className="text-white fs-2">
        Need A Developer To Solve Your Problem?
      </h1>
      <p className="text-success fs-3 fw-bolder">Budget 40K USD</p>
    </div>
  );
};

export default Header;
