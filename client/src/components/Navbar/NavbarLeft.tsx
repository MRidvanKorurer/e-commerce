import React from "react";
import { Link } from "react-router-dom";

const NavbarLeft: React.FC = () => {
  return (
    <div className=" text-3xl tracking-wider font-bold">
      <Link to={"/"}>E-COMMERCE</Link>
    </div>
  );
};

export default NavbarLeft;
