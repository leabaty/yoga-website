import React from "react";
import { Link } from "react-router-dom";

import "./Home.scss";

function Home() {

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
    var parallaxItem = document.querySelector(".parallax");
    // To adjust the speed, change the coords
    var coords = scrolled * 0.4 + "px";
    parallaxItem.style.transform = "translateY(" + coords + ")";
  };

  const txtparallax = () => {
    var scrolled = window.pageYOffset;
    var parallaxItem = document.querySelector(".home__blockquote");
    // To adjust the speed, change the coords
    var coords = scrolled * -0.4 + "px";
    parallaxItem.style.transform = "translateY(" + coords + ")";
  };

  window.addEventListener("scroll", throttle(bgparallax, 14));
  window.addEventListener("scroll", throttle(txtparallax, 14));


  return (
    <>
      <header class="parallax-wrapper">
        <div class="parallax">
          <div
            class="home__blockquote" /*mettre en z index 1 par rapport à sa div en parallax*/
          >
            <blockquote className="home__quote">
              "Une citation/mantra de ton choix, qui représente ta pratique et
              ta vision du yoga, vitae facilisis velit consectetur vitae. Proin
              bibendum laoreet magna, vel condimentum libero vehicula ac."
              <p className="home__quote__author">- Grande Gourou Pioupiou</p>
            </blockquote>

            <Link to="/cours">
              <button className="btn btn--full btn--large btn--handwritten">
                Voir les cours
              </button>
            </Link>
          </div>
        </div>
      </header>

      <main className="home__page">
        <article>
          <p className="text">
            Apsara Yoga est né d’une association de mes passions : les
            beaux-arts, le théâtre, la danse et le yoga. Toutes ces disciplines
            se retrouvent confondues dans mes différentes pratiques artistiques
            ainsi que dans ma pratique du yoga. Elles s’entremêlent et nous
            interrogent sur notre propre existence. Elles peuvent nous mettre au
            défi et nous aider dans notre vie quotidienne ainsi que dans notre
            compréhension du monde qui nous entoure.
          </p>

          <p className="text">
            Les Apsaras sont ces divinités, ces danseuses hindoues,
            omniprésentes sur les murs des temples d’Angkor au Cambodge. Nymphes
            artistes aux mouvements ondoyants qui représentent la synthèse entre
            les arts et le yoga.
          </p>

          <p className="text">
            Je donne des cours de Yoga Jivamukti, Vinyasa et Yin. Le Yoga
            Jivamukti et le Vinyasa sont des pratiques dynamiques et
            énergisantes associées à la respiration. Fluides, ils rappellent les
            mouvements des danseuses Apsaras. Le Yin, tout en lenteur, nous
            apporte des temps de pauses nécessaires dans nos vies urbaines très
            dynamiques.
          </p>
        </article>
      </main>
    </>
  );
}

export default Home;
