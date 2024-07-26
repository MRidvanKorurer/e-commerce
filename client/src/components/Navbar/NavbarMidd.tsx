import React, { useState } from "react";
import { Link } from "react-router-dom";


const NavbarMidd: React.FC = () => {
    const [activeLink, setActiveLink] = useState({
        home: true,
        contact: false,
        about: false,
        signUp: false
    });


    const changeActiveLink = (name: string) => {
        if(name === "home") setActiveLink({home: true, contact: false, about: false, signUp: false});
        if(name === "contact") setActiveLink({home: false, contact: true, about: false, signUp: false});
        if(name === "about") setActiveLink({home: false, contact: false, about: true, signUp: false});
        if(name === "signUp") setActiveLink({home: false, contact: false, about: false, signUp: true});
    }

  return (
    <div className=" flex justify-center items-center gap-x-5">
      <div>
        <Link onClick={() => changeActiveLink("home")} to={"/"} className={activeLink.home ? (" border-b-2 border-black  ") : ("")}>Home</Link>
      </div>
      <div>
        <Link onClick={() => changeActiveLink("contact")} to={"/"} className={activeLink.contact ? (" border-b-2 border-black ") : ("")}>Contact</Link>
      </div>
      <div>
        <Link onClick={() => changeActiveLink("about")} to={"/"} className={activeLink.about ? (" border-b-2 border-black ") : ("")}>About</Link>
      </div>
      <div>
        <Link onClick={() => changeActiveLink("signUp")} to={"/"} className={activeLink.signUp ? (" border-b-2 border-black ") : ("")}>Sign Up</Link>
      </div>
    </div>
  );
};

export default NavbarMidd;
