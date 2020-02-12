import React from "react";
import { NavLink } from "react-router-dom";
function Navbar(props) {
  const { items } = props;
  return (
      <div className="nav">
        {items.map((item, index) => {
          return (
            <div key={index}>
              <NavLink
                exact={item.exact}
                activeClassName="nav-active"
                to={item.route}
              >
                {item.label}
              </NavLink>
              {index !== items.length - 1 && "|"}
            </div>
          );
        })}
      </div>
  );
}

export default Navbar;
