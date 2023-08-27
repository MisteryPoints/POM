import Link from "next/link";
import React, { useState } from "react";
import { NavDropdown } from "react-bootstrap";

const NavDrop = ({ children, name }) => {
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
      drop="end"
      menuVariant="dark"
      show={show}
      onMouseEnter={showDropdown}
      onMouseLeave={hideDropdown}
      className="hover:!bg-gray-200/10 px-2"
    >
      {children}
    </NavDropdown>
  );
};

export default NavDrop;
