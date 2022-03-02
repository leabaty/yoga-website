import React from "react";
import { Link } from "react-router-dom";

// STYLE SHEET
import "./Retreat.scss";

// SUB-COMPONENTS
import RetreatInfo from "./RetreatInfo";
import Article from "../../Article/Article";
import RetreatAccomodation from "./RetreatAccomodation";
import RetreatPricing from "./RetreatPricing";
import RetreatTransport from "./RetreatTransport";
import RetreatProgram from "./RetreatProgram";

function Retreat(data) {
  // PARALLAX EFFECT
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
            <h1 className="title retreat__title">{data.data.title}</h1>
          </div>
        </div>
      </header>

      <RetreatInfo data={data.data} />

      <main className="page">
        <section>
          {data.data.articles.map((article, index) => {
            return <Article {...article} />;
          })}
        </section>

        <hr />

        <section className="retreat__accomodation retreat__section">
          <h2 className="title title--medium retreat__undertitle">
            Les formules
          </h2>
          <RetreatAccomodation accomodation={data.data.accomodation} />
          <RetreatPricing data={data.data} />
        </section>

        <hr />

        <RetreatTransport transports={data.data.transports} />

        <hr />

        <RetreatProgram program={data.data.program} />

        <hr />

        <section className="retreat__section">
          <h2 className="title title--medium retreat__undertitle">
            Conditions d'annulation
          </h2>
          <p className="text">
            Du 0 au 20ème jour avant le début de la prestation, aucun
            remboursement ne sera consenti, sauf en cas de fermeture liée à la
            propagation du COVID-19.
          </p>
        </section>

        <Link to="/contact">
          <button className="btn btn--full btn--large btn--handwritten">
            Emmène - moi !
          </button>
        </Link>
      </main>
    </>
  );
}

export default Retreat;
