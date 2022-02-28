import React from "react";

import { BsCalendarWeek, BsPinMapFill } from "react-icons/bs";
import { GiLotus } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

import "./CollectiveClasses.scss";

function CollectiveClasses(data) {
  console.log(data.data.classes.collective.schedule);

  return (
    <>
      <body className="page">
        <header>
          <h1 className="title">Cours Collectifs</h1>
          <hr className="title-rule" />
        </header>

        <main>
          <section>
            {/* <div>
                {Object.entries(data.data.classes.collective.schedule).map((day) => {
                  return (
                    <div>
                      {day.map((dayDetail) => {
                        console.log(dayDetail);
                        return <p>Regarde le console log</p>;
                      })}
                    </div>
                  );
                })}
              </div> */}

            <div className="collective__schedule">
              <div className="collective__schedule__icons">
                <BsCalendarWeek className="collective__schedule__icons-item" />
                <IoMdTime className="collective__schedule__icons-item" />
                <GiLotus className="collective__schedule__icons-item" />
                <BsPinMapFill className="collective__schedule__icons-item" />
              </div>

              <div className="collective__schedule__daycontainer">
                <p className="collective__schedule__weekday title title--small">
                  Lundi
                </p>
                <div className="collective__schedule__items">
                  {data.data.classes.collective.schedule.monday.map((day) => {
                    return (
                      <div className="collective__schedule__item">
                        <p className="collective__schedule__item-time">
                          {day.startTime} - {day.endTime}
                        </p>

                        <p className="collective__schedule__item-class">
                          {day.class}
                        </p>

                        <a
                          href={day.studio.website}
                          target="_blank"
                          className="collective__schedule__item-studio"
                        >
                          {day.studio.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="collective__schedule__daycontainer">
                <p className="collective__schedule__weekday title title--small">
                  Mardi
                </p>
                <div className="collective__schedule__items">
                  {data.data.classes.collective.schedule.tuesday.map((day) => {
                    return (
                      <div className="collective__schedule__item">
                        <p className="collective__schedule__item-time">
                          {day.startTime} - {day.endTime}
                        </p>

                        <p className="collective__schedule__item-class">
                          {day.class}
                        </p>

                        <a
                          href={day.studio.website}
                          target="_blank"
                          className="collective__schedule__item-studio"
                        >
                          {day.studio.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>


              <div className="collective__schedule__daycontainer">
                <p className="collective__schedule__weekday title title--small">
                  Mercredi
                </p>
                <div className="collective__schedule__items">
                  {data.data.classes.collective.schedule.wednesday.map((day) => {
                    return (
                      <div className="collective__schedule__item">
                        <p className="collective__schedule__item-time">
                          {day.startTime} - {day.endTime}
                        </p>

                        <p className="collective__schedule__item-class">
                          {day.class}
                        </p>

                        <a
                          href={day.studio.website}
                          target="_blank"
                          className="collective__schedule__item-studio"
                        >
                          {day.studio.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="collective__schedule__daycontainer">
                <p className="collective__schedule__weekday title title--small">
                  Jeudi
                </p>
                <div className="collective__schedule__items">
                  {data.data.classes.collective.schedule.thursday.map((day) => {
                    return (
                      <div className="collective__schedule__item">
                        <p className="collective__schedule__item-time">
                          {day.startTime} - {day.endTime}
                        </p>

                        <p className="collective__schedule__item-class">
                          {day.class}
                        </p>

                        <a
                          href={day.studio.website}
                          target="_blank"
                          className="collective__schedule__item-studio"
                        >
                          {day.studio.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="collective__schedule__daycontainer">
                <p className="collective__schedule__weekday title title--small">
                  Vendredi
                </p>
                <div className="collective__schedule__items">
                  {data.data.classes.collective.schedule.friday.map((day) => {
                    return (
                      <div className="collective__schedule__item">
                        <p className="collective__schedule__item-time">
                          {day.startTime} - {day.endTime}
                        </p>

                        <p className="collective__schedule__item-class">
                          {day.class}
                        </p>

                        <a
                          href={day.studio.website}
                          target="_blank"
                          className="collective__schedule__item-studio"
                        >
                          {day.studio.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="collective__schedule__daycontainer">
                <p className="collective__schedule__weekday title title--small">
                  Samedi
                </p>
                <div className="collective__schedule__items">
                  {data.data.classes.collective.schedule.saturday.map((day) => {
                    return (
                      <div className="collective__schedule__item">
                        <p className="collective__schedule__item-time">
                          {day.startTime} - {day.endTime}
                        </p>

                        <p className="collective__schedule__item-class">
                          {day.class}
                        </p>

                        <a
                          href={day.studio.website}
                          target="_blank"
                          className="collective__schedule__item-studio"
                        >
                          {day.studio.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="collective__schedule__daycontainer">
                <p className="collective__schedule__weekday title title--small">
                  Dimanche
                </p>
                <div className="collective__schedule__items">
                  {data.data.classes.collective.schedule.sunday.map((day) => {
                    return (
                      <div className="collective__schedule__item">
                        <p className="collective__schedule__item-time">
                          {day.startTime} - {day.endTime}
                        </p>

                        <p className="collective__schedule__item-class">
                          {day.class}
                        </p>

                        <a
                          href={day.studio.website}
                          target="_blank"
                          className="collective__schedule__item-studio"
                        >
                          {day.studio.name}
                        </a>
                      </div>
                    );
                  })}
                </div>
              </div>


            </div>
          </section>
        </main>
      </body>
    </>
  );
}

export default CollectiveClasses;
