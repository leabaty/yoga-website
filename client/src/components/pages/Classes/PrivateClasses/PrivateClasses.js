import React from "react";
import { Link } from "react-router-dom";

import { BsPeopleFill, BsPinMapFill } from "react-icons/bs";
import { AiOutlineEuro } from "react-icons/ai";
import { IoMdTime } from "react-icons/io";
import { HiOutlinePlusSm } from "react-icons/hi";

import "./PrivateClasses.scss";

function PrivateClasses(data) {
  console.log(data.data.classes);
  return (
    <>
      <body className="page">
        <header>
          <h1 className="title">Cours Particuliers</h1>
          <hr className="title-rule" />
        </header>

        <main>
          <section>
            <p className="private__infos__info">
              {data.data.classes.private.long_desc.map((option) => {
                return <p className="text">{option}</p>;
              })}
            </p>
          </section>

          <section className="private__infos">
            <div className="private__infos__container">
              <div className="private__infos__item">
                <BsPinMapFill className="private__infos__item-icon" />
                <p className="private__infos__item-info">
                  {data.data.classes.private.details.location}
                </p>
              </div>

              <div className="private__infos__item">
                <IoMdTime className="private__infos__item-icon" />
                <p className="private__infos__item-info">
                  {data.data.classes.private.details.duration}
                </p>
              </div>

              <div className="private__infos__item">
                <AiOutlineEuro className="private__infos__item-icon" />
                <p className="private__infos__item-info">
                  {data.data.classes.private.details.pricing.map((option) => {
                    return <p>{option}</p>;
                  })}
                </p>
              </div>

              <div className="private__infos__item">
                <div className="private__infos__item-icon">
                  <BsPeopleFill />
                  <HiOutlinePlusSm />
                </div>

                <p className="private__infos__item-info">
                  {data.data.classes.private.details.multiple_students.map(
                    (option) => {
                      return <p>{option}</p>;
                    }
                  )}
                </p>
              </div>
            </div>
          </section>

          <section className="private__cancellation">
            <h2 className="title title--small">Politique d'annulation</h2>
            <p className="text">
              {data.data.classes.private.details.conditions}
            </p>
          </section>

          <Link to="/cours">
            <button className="btn btn--full btn--large btn--handwritten">
              Je réserve mon cours particulier !
            </button>
          </Link>

          <hr />

          <section className="classes__navigation">
            <Link to="/cours-collectifs">
              <button className="btn btn--full btn--small classes__navigation-btn">
                Cours collectifs
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

export default PrivateClasses;
