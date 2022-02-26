import React from "react";
import { Link } from "react-router-dom";

import "./Retreat.scss";

import Retreat2 from "../../../assets/images/retreat-2.webp";
import Retreat3 from "../../../assets/images/retreat-3.webp";
import Retreat4 from "../../../assets/images/retreat-4.webp";

import Article from "../../Article/Article";
import { art1, art2, art3 } from "../../../data/retreatData";

function Retreat() {
  //Parallax Effect
  const throttle = (fn, wait) => {
    var time = Date.now();

    return function () {
      if (time + wait - Date.now() < 0) {
        fn();
        time = Date.now();
      }
    };
  };

  const bgparallax = () => {
    var scrolled = window.pageYOffset;
    var parallaxItem = document.querySelector(".imgparallax");
    // To adjust the speed, change the coords
    var coords = scrolled * 0.4 + "px";
    parallaxItem.style.transform = "translateY(" + coords + ")";
  };

  const txtparallax = () => {
    var scrolled = window.pageYOffset;
    var parallaxItem = document.querySelector(".txtparallax");
    // To adjust the speed, change the coords
    var coords = scrolled * -0.4 + "px";
    parallaxItem.style.transform = "translateY(" + coords + ")";
  };

  window.addEventListener("scroll", throttle(bgparallax, 14));
  window.addEventListener("scroll", throttle(txtparallax, 14));

  return (
    <>
      <header class="parallax-wrapper">
        <div class="imgparallax">
          <div class="txtparallax">
            <h1 className="title retreat__title">Retraite de Yoga</h1>
          </div>
        </div>
      </header>

      <main className="page">
        <Article {...art1} />
        <Article {...art2} />
        <Article {...art3} />
      </main>

      <Link to="/contact">
        <button className="btn btn--full btn--large btn--handwritten">
          Emmène - moi !
        </button>
      </Link>
    </>
  );
}

export default Retreat;
