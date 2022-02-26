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

        <Link to="/contact">
          <button className="btn btn--full btn--large btn--handwritten">
            Emmène - moi !
          </button>
        </Link>

        <article className="retreat__directions__container">
          <h2 className="title title--medium">Comment j'y vais ?</h2>

          {/*Faire un map pour créer les éléments*/}

          {/* <section className="retreat__directions__item">
            <h2 className="undertitle">{TransportMode}</h2>
            <ul className="retreat__directions__description">
              <li>{TransportInstructions}</li>
            </ul>
          </section> */}

          {/* <section className="retreat__directions__item">
            <h2 className="undertitle">En train</h2>

            <ul className="retreat__directions__description">
              <li>
                - Depuis Paris: TGV jusqu'à Bordeaux puis TER jusqu'à Mussidan
                soit 3h20 de trajet environ.
              </li>
              <li>
                - Depuis Bordeaux: TER jusqu'a Mussidan. 55 min de trajet.
              </li>
              <li>
                - Depuis Toulouse: INTERCITES ou TGV jusqu'à Bordeaux, puis TER
                jusqu'à Mussidan. 3h30 de trajet environ.
              </li>
              <li>- La maison est située à 10 kms de la gare.</li>
            </ul>
          </section>

          <section className="retreat__directions__item">
            <h2 className="undertitle">En voiture</h2>
            <ul className="retreat__directions__description">
              <li>
                - Depuis Bordeaux: A89 en direction de Lyon puis la D709. 1
                heure de trajet environ.
              </li>
              <li>
                - Depuis Toulouse: A62 puis N21 jusqu'à Bergerac, suivre ensuite
                A89/D709 Mussidan. Trajet de 2h45 environ
              </li>
              <li>
                - Depuis Paris: A10 puis A20 en direction de Limoges/Toulouse
                puis A89 direction Périgueux/Bordeaux/Sarlat et D709 en
                direction de Mussidan
              </li>
            </ul>
          </section>

          <section className="retreat__directions__item">
            <h2 className="undertitle">En avion</h2>
            <p className="retreat__directions__description">
              N.B : Un groupe WhatsApp sera créé entre les participants.es pour
              organiser la logistique des transports, co-voiturage, horaires
              etc.
            </p>
          </section> */}

          <aside className="text">
            N.B : Un groupe WhatsApp sera créé entre les participants.es pour
            organiser la logistique des transports, co-voiturage, horaires etc.
          </aside>
        </article>

        <aside>
          <h2 className="title title--medium">Conditions d'annulation</h2>
          <p className="text">
            Du 0 au 20ème jour avant le début de la prestation, aucun
            remboursement ne sera consenti, sauf en cas de fermeture liée à la
            propagation du COVID-19.
          </p>
        </aside>
      </main>
    </>
  );
}

export default Retreat;
