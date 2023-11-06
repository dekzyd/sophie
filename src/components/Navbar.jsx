/* eslint-disable react/no-unescaped-entities */
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink to="/" className="mr-10">
            <img className="h-8" src="/logo.svg" alt="logo" />
          </NavLink>
          <ul className="menu menu-horizontal lg:flex hidden">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end flex gap-3.5">
          <button className="btn btn-sm outline outline-1">login</button>
          <button className="btn btn-sm btn-neutral">
            Create free account
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
