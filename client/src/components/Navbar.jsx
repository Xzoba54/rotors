import React from "react";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <span>ROTORS</span>
      </div>
      <div className="search">
        <div>
          <input type="text" />
          <button>Search</button>
        </div>
      </div>
      <div className="buttons"></div>
    </div>
  );
};

export default Navbar;
