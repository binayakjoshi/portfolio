import React, { useState } from "react";
import Backdrop from "../UI/Backdrop";

import SideDrawer from "../UI/SideDrawer";
import Button from "../UI/Button";
import NavLinks from "./NavLinks";
import "./Navbar.css";

import NavActions from "./NavActions";

const Navbar: React.FC = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  return (
    <React.Fragment>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
      <div className="drawer">
        <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
          <nav className="navigation__drawer_nav">
            <NavLinks />
            <NavActions />
          </nav>
        </SideDrawer>
      </div>

      <nav className="navbar">
        <NavLinks />
        <NavActions />

        <Button onClick={openDrawerHandler} className="navigation__menu-btn">
          <span />
          <span />
          <span />
        </Button>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
