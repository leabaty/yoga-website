import React from "react";
import { Link } from "react-router-dom";

// STYLE SHEET
import "./Retreat.scss";

// REACT ICONS
import {
  BsPeopleFill,
  BsCalendarWeek,
  BsPinMapFill,
  BsCheck2Circle,
} from "react-icons/bs";
import { GiLotus } from "react-icons/gi";
import { MdDoNotDisturbAlt } from "react-icons/md";
import { RiInformationLine } from "react-icons/ri";

// SUB-COMPONENTS
import Article from "../../Article/Article";
import RetreatAccomodation from "./RetreatAccomodation";

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

      <div className="retreat__info">
        <div className="retreat__info__container">
          <div className="retreat__info__item">
            <BsCalendarWeek className="retreat__info__item__icon" />
            <p className="retreat__info__item__characteristics">
              {data.data.startDate} - {data.data.endDate}
            </p>
          </div>

          <div className="retreat__info__item">
            <BsPeopleFill className="retreat__info__item__icon" />
            <p className="retreat__info__item__characteristics">
              {data.data.maxPax}
            </p>
          </div>

          <div className="retreat__info__item">
            <GiLotus className="retreat__info__item__icon" />
            <div className="retreat__info__item__characteristics">
              <a href={data.data.spotWebsite} target="_blank">
                {data.data.spot}
              </a>
              <p>{data.data.inscriptionEmail}</p>
            </div>
          </div>

          <div className="retreat__info__item">
            <BsPinMapFill className="retreat__info__item__icon" />
            <div className="retreat__info__item__characteristics">
              <ol>
                {data.data.address.map((addrLine, index) => {
                  return <li>{addrLine}</li>;
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>

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

          <section className="retreat__section">
            <aside className="retreat__pricing__container">
              <div className="retreat__pricing__item">
                <BsCheck2Circle className="retreat__pricing__item-icon" />

                <h3 className="undertitle">Ce prix inclut:</h3>
                <ol>
                  {data.data.priceIncludes.map((inclusion) => {
                    return (
                      <li
                        key={inclusion}
                        className="retreat__pricing__item-characteristic"
                      >
                        {inclusion}
                      </li>
                    );
                  })}
                  <li className="retreat__pricing__item-characteristic">
                    {" "}
                    Les cours et ateliers ({data.data.classesPrice} €)
                  </li>
                </ol>
              </div>

              <div className="retreat__pricing__item">
                <MdDoNotDisturbAlt className="retreat__pricing__item-icon" />
                <h3 className="undertitle">Ce prix n'inclut pas:</h3>
                <ol>
                  {data.data.priceExcludes.map((exclusion) => {
                    return (
                      <li
                        key={exclusion}
                        className="retreat__pricing__item-characteristic"
                      >
                        {exclusion}
                      </li>
                    );
                  })}
                </ol>
              </div>

              <div className="retreat__pricing__item">
                <RiInformationLine className="retreat__pricing__item-icon" />
                <h3 className="undertitle">Informations de paiement</h3>
                <p className="retreat__pricing__item-characteristic">
                  {data.data.paymentDetails}
                </p>
              </div>
            </aside>
          </section>
        </section>

        <hr />

        <section className="retreat__transport retreat__section">
          <h2 className="title title--medium retreat__undertitle">
            Comment j'y vais ?
          </h2>

          <div className="retreat__transport__container">
            {data.data.transports.map((transport) => {
              return (
                <div className="retreat__transport__card">
                  <h2 className="undertitle retreat__transport__card__title">
                    {transport.transportMode}
                  </h2>
                  <ol>
                    {transport.transportInstructions.map((instruction) => {
                      return (
                        <li
                          key={instruction}
                          className="retreat__transport__card__instruction"
                        >
                          {instruction}
                        </li>
                      );
                    })}
                  </ol>
                </div>
              );
            })}
          </div>

          <div className="retreat__transport__map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22585.710049981695!2d0.39537841786193656!3d44.95964911226986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12aacdab25fa5ae1%3A0xa066519d2f62f80!2sLe%20Tillet%2C%2024400%20Les%20L%C3%A8ches!5e0!3m2!1sfr!2sfr!4v1645961139040!5m2!1sfr!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

          <aside className="text retreat__transport__aside">
            N.B : Un groupe WhatsApp sera créé entre les participants.es pour
            organiser la logistique des transports, co-voiturage, horaires etc.
          </aside>
        </section>

        <hr />

        <section className="retreat__section retreat__program">
          <h2 className="title title--medium retreat__program__title">
            Au Programme
          </h2>
          <div className="retreat__program__container">
            {data.data.program.map((programItem) => {
              return (
                <div className="retreat__program__item">
                  <p className="retreat__program__item-time">
                    {programItem.startTime} - {programItem.endTime}
                  </p>
                  <p className="retreat__program__item-characteristic">
                    {programItem.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

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
