import React from "react";
import { Link } from "react-router-dom";

import { BsCalendarWeek, BsPinMapFill } from "react-icons/bs";
import { GiLotus } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

import "./CollectiveClasses.scss";
import AddCollectiveClass from "../../Admin/UpdateCollectiveClasses/AddCollectiveClass";

function CollectiveClasses({ data, admin }) {
  const days = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];

  return (
    <>
      <body className="page">
        <header>
          <h1 className="title">Cours Collectifs</h1>
          <hr className="title-rule" />
        </header>

        <main>
          <section>
            <div className="collective__schedule">
              <div className="collective__schedule__icons">
                <BsCalendarWeek className="collective__schedule__icons-item" />
                <IoMdTime className="collective__schedule__icons-item" />
                <GiLotus className="collective__schedule__icons-item" />
                <BsPinMapFill className="collective__schedule__icons-item" />
              </div>

              {Object.entries(data.classes.collective.schedule).map(
                ([key, value], index) => {
                  return (
                    <div
                      key={index}
                      className="collective__schedule__daycontainer"
                    >
                      <p className="collective__schedule__weekday title title--small">
                        {days[index]}
                      </p>

                      <div className="collective__schedule__items">
                        {value.map((scheduleItem) => {
                          return (
                            <div
                              key={value.id}
                              className="collective__schedule__item"
                            >
                              <p className="collective__schedule__item-time">
                                {scheduleItem.startTime} -{" "}
                                {scheduleItem.endTime}
                              </p>

                              <p className="collective__schedule__item-class">
                                {scheduleItem.class}
                              </p>

                              <a
                                href={scheduleItem.studio.website}
                                target="_blank"
                                className="collective__schedule__item-studio"
                              >
                                {scheduleItem.studio.name}
                              </a>
                            </div>
                          );
                        })}

                        {admin && (
                          <div className="collective__schedule__item">
                            <AddCollectiveClass weekday={key} />
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          </section>

          <hr />

          <section className="classes__navigation">
            <Link to="/cours-particuliers">
              <button className="btn btn--full btn--small classes__navigation-btn">
                Cours particuliers
              </button>
            </Link>

            <Link to="/cours-en-ligne">
              <button className="btn btn--full btn--small classes__navigation-btn">
                Cours en ligne
              </button>
            </Link>
          </section>
        </main>
      </body>
    </>
  );
}

export default CollectiveClasses;
