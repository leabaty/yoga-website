import React from "react";
import { Link } from "react-router-dom";

import "./OnlineClasses.scss";

function OnlineClasses(data) {
  console.log(data.data.classes.online.type.onlinerecorded);
  return (
    <>
      <body className="page">
        <header>
          <h1 className="title">Cours en ligne</h1>
          <hr className="title-rule" />
        </header>

        <main>
          <section className="onlineclasses__onlinelive">
            <h1 className="title title--small">
              {" "}
              {data.data.classes.online.type.onlinelive.location}
            </h1>
            <p>
              {data.data.classes.online.type.onlinelive.pricing.map((info) => {
                return (
                  <li
                    className="onlineclasses__onlinelive__instruction"
                    key={info}
                  >
                    {info}
                  </li>
                );
              })}
            </p>

            <Link to="/contact">
              <button className="btn btn--full btn--medium btn--handwritten">
                Ca m'intéresse !
              </button>
            </Link>
          </section>

          <hr />

          <section>
            <h1 className="title title--small"> Les cours en ligne </h1>
            <div className="onlineclasses__cards">
              {data.data.classes.online.type.onlinerecorded.map((classType) => {
                return (
                  <a
                    className="onlineclasses__card"
                    href={classType.studio.url}
                    target="_blank"
                  >
                    <div>
                      <h1 className="onlineclasses__card__title">
                        Sur {classType.studio.name}
                      </h1>
                      <img
                        className="onlineclasses__card__img"
                        src={classType.img_url}
                      />
                      <p className="onlineclasses__card__text">
                        {classType.short_desc}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </section>

          <hr />

          <section className="classes__navigation">
            <Link to="/cours-collectifs">
              <button className="btn btn--full btn--small classes__navigation-btn">
                Cours collectifs
              </button>
            </Link>

            <Link to="/cours-particuliers">
              <button className="btn btn--full btn--small classes__navigation-btn">
                Cours particuliers
              </button>
            </Link>
          </section>
        </main>
      </body>
    </>
  );
}

export default OnlineClasses;
