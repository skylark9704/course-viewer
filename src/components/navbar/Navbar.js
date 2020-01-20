import React from "react";
import { NavLink } from "react-router-dom";

function Navbar(props) {
  const { items } = props;
  return (
    <div className="nav">
      {items.map((elem, index) => {
        return (
          <div key={index}>
            <NavLink
              exact={elem.exact}
              activeClassName="nav-active"
              to={elem.route}
            >
              {elem.label}
            </NavLink>{" "}
            {index !== items.length - 1 && "|"}
          </div>
        );
      })}
    </div>
  );
}

export default Navbar
