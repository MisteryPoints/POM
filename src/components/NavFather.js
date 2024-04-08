import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const NavFather = ({ children, name }) => {
  const [show, setShow] = useState(false);

  const showDropdown = (e) => {
    setShow(!show);
  };
  const hideDropdown = (e) => {
    setShow(false);
  };
  return (
    <NavDropdown
      title={name}
      variant="flat"
      menuVariant="dark"
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      className="px-2"
    >
      {children}
    </NavDropdown>
  );
};

export default NavFather;