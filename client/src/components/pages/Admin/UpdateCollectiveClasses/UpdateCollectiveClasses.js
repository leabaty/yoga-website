import React from "react";
import { Link } from "react-router-dom";

import { BsCalendarWeek, BsPinMapFill, BsLaptop } from "react-icons/bs";
import { GiLotus } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import { FiMapPin } from "react-icons/fi";

import "./UpdateCollectiveClasses.scss";

function UpdateCollectiveClasses(data) {
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

                  <div className="collective__schedule__item">
                    <div className="collective__schedule__item-form --row">
                      <input
                        className="collective__schedule__item-form-input --time"
                        placeholder="Début"
                        type="text"
                        name="startTime"
                        // onChange={handleChange}
                        // value={formData.firstname}
                      />
                      <p className="collective__schedule__item-form-element">
                        -
                      </p>
                      <input
                        className="collective__schedule__item-form-input --time"
                        placeholder="Fin"
                        type="text"
                        name="endTime"
                        // onChange={handleChange}
                        // value={formData.firstname}
                      />
                    </div>

                    <input
                      className="collective__schedule__item-form collective__schedule__item-form-input collective__schedule__item-form-input--class"
                      placeholder="Cours"
                      type="text"
                      name="class"
                      // onChange={handleChange}
                      // value={formData.firstname}
                    />

                    <div className="collective__schedule__item-form --col">
                      <div className="collective__schedule__item-form-element --row">
                        <FiMapPin className="collective__schedule__item-form-icon" />
                        <input
                          className="collective__schedule__item-form-input collective__schedule__item-form-input--studio"
                          placeholder="Studio"
                          type="text"
                          name="studioName"
                          // onChange={handleChange}
                          // value={formData.firstname}
                        />
                      </div>

                      <div className="collective__schedule__item-form-element --row">
                        <BsLaptop className="collective__schedule__item-form-icon" />
                        <input
                          className="collective__schedule__item-form-input collective__schedule__item-form-input--studio"
                          placeholder="Site web du studio"
                          type="text"
                          name="studioWebsite"
                          // onChange={handleChange}
                          // value={formData.firstname}
                        />
                      </div>
                    </div>
                  </div>
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
                  {data.data.classes.collective.schedule.wednesday.map(
                    (day) => {
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
                    }
                  )}
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

          <Link to="admin/cours-collectifs/ok">
            <button className="btn btn--full btn--small classes__navigation-btn">
              Enregistrer les modifications
            </button>
          </Link>
        </main>
      </body>
    </>
  );
}

export default UpdateCollectiveClasses;
