import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RiFacebookBoxLine, RiInstagramLine } from "react-icons/ri";

import "./Navbar.scss";

import logo from "../../assets/images/apsara-logo.svg";

function Navbar() {
  const [openedMobileMenu, setOpenMobileMenu] = useState(false);

  /* Ca permet d'ouvrir et de fermer le menu avec la petite croix/les bars */
  const handleClick = () => setOpenMobileMenu(!openedMobileMenu);

  /* Quand l'utilisateur a cliqué sur un des liens, cela ferme le menu et présente à nouveau la navbar mobile*/
  const closeMobileMenu = () => setOpenMobileMenu(false);

  /*A chaque fois que l'utilisateur redimensionne la fenête, on vérifie si 
 on est en dessous  de 960px. Si c'est le cas, on affiche le bouton mobile*/

  // const toggleMenu = () => {
  //   if (window.innerWidth <= 960) {
  //     setMobileView(false);
  //   } else {
  //     setMobileView(true);
  //   }
  // };

  // window.addEventListener("resize", toggleMenu);
  // useEffect(() => {
  //   toggleMenu();
  // }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          
           <div className="mobilemenu__navbar">
            <div className="mobilemenu__logo">
              <Link to="/" className="navbar__title" onClick={closeMobileMenu}>
                <p className="navbar__title">Apsara</p>
                <img
                  className="navbar__icon"
                  src={logo}
                  alt="logo-apsara-yoga"
                />
                <p className="navbar__title">Yoga</p>
              </Link>
            </div>

            <div className="mobilemenu__button" onClick={handleClick}>
              {openedMobileMenu ? <FaTimes /> : <HiOutlineMenuAlt3 />}
            </div>
          </div>


          <div
            className={
              openedMobileMenu ? "navbar__menu active" : "navbar__menu"
            }
          >
            <div className="navbar__menu__left">
              <li className="nav-item">
                <Link
                  to="/chambres"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  A Propos
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/table"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Retraite
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/acces"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Cours
                </Link>
              </li>
            </div>

            <div className="navbar__menu__center">
              <Link to="/" className="navbar__title" onClick={closeMobileMenu}>
                <p className="navbar__title">Apsara</p>
                <img
                  className="navbar__icon"
                  src={logo}
                  alt="logo-apsara-yoga"
                />
                <p className="navbar__title">Yoga</p>
              </Link>
            </div>

            <div className="navbar__menu__right">
              <li className="nav-item">
                <Link
                  to="/a-propos"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <a
                  href="https://www.instagram.com/apsara.yoga/"
                  target="_blank"
                  className="nav-links --social"
                  onClick={closeMobileMenu}
                >
                  <RiInstagramLine />
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="https://www.facebook.com/Apsara-Yoga-621993021289337/"
                  target="_blank"
                  className="nav-links --social"
                  onClick={closeMobileMenu}
                >
                  <RiFacebookBoxLine />
                </a>
              </li>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
