import React from "react";
import { Link } from "react-router-dom";

function Dashboard(data) {
  console.log(data)
  return (
    <div>
      <body className="page">
        <header>
          <h1 className="title">Tableau de bord</h1>
          <hr className="title-rule" />
        </header>

        <main>
          <section className="classes__cards">
            {Object.values(data.data.dashboard).map((classType) => {
              return (
                <Link className="classes__card" to={classType.link_url}>
                  <div>
                    <h1 className="classes__card__title">{classType.name}</h1>
                    <img
                      className="classes__card__img"
                      src={classType.img_url}
                    />
                    <p className="classes__card__text">
                      {classType.short_desc}
                    </p>
                  </div>
                </Link>
              );
            })}
          </section>
        </main>
      </body>
    </div>
  );
}

export default Dashboard;
