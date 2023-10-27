import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const aLinks = links.map((link, index) => (
    <a key={index} href={`#${link}`}>
      {link}
    </a>
  ));

  return <nav>{aLinks}</nav>;
}

export default NavBar;