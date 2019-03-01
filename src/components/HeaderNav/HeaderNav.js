import React from "react";

import { NavLink } from "react-router-dom";

const HeaderNav = props => {
  return (
    <div>
      <nav>
        <div className="logo">
          <NavLink to="/">
            <img src="/assets/mylogo2.png" alt="JM" />
          </NavLink>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/store">Store</NavLink>
            </li>
            <li>
              <NavLink to="/cart">Cart</NavLink>
            </li>

            <li>
              <NavLink to="/new">Add New</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default HeaderNav;
