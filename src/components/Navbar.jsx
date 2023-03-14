import React from "react";

const Navbar = ({brand}) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="https://gonzamartinezdev.github.io/api-personajes-rick-and-morty">
          {brand}
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
