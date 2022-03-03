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
            {Object.values(data.data.dashboard).map((item) => {
              return (
                <Link className="classes__card" to={item.link_url}>
                  <div>
                    <h1 className="classes__card__title">{item.name}</h1>
                    <img
                      className="classes__card__img"
                      src={item.img_url}
                    />
                    <p className="classes__card__text">
                      {item.short_desc}
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
