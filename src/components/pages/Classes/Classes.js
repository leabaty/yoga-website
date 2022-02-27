import React from "react";
import { Link } from "react-router-dom";

import "./Classes.scss";

function Classes({ data }) {
  console.log(data.classes);

  return (
    <>
      <body className="page">
        <header>
          <h1 className="title">Cours</h1>
          <hr className="title-rule" />
        </header>

        <main>
          <section>
            <p className="text">
              Laure enseigne le Yoga Jivamukti, le Yoga Vinyasa ainsi que le Yin
              Yoga. ​
            </p>
            <p className="text">
              Le <strong>Jivamukti et le Vinyasa</strong> sont deux pratiques
              dynamiques liant la respiration à la fluidité du mouvement. Ainsi
              les postures découlent les unes des autres comme une chorégraphie,
              certaines positions sont tenues plus longtemps. Le corps et le
              cœur se tonifient tandis que le mental s’apaise. Le Jivamukti est
              un yoga en musique qui rythme le souffle et les postures. Les sons
              vibrent et résonnent dans le corps et l’entraînent au travers
              d’une pratique dynamique liant la respiration à la fluidité du
              mouvement.
            </p>
            <p className="text">
              Le <strong>Jivamukti</strong> approfondit la philosophie du yoga
              en incluant la lecture et l’interprétation de textes fondateurs en
              sanskrit, ainsi que par le chant de mantras et de kirtans. Il vous
              initie à la pratique de la méditation et respecte le principe de
              non-violence et de compassion envers tous les êtres. Il s’agit
              d’une pratique complète qui vous amène à découvrir et à aborder la
              philosophie du yoga.
            </p>
            <p className="text">
              Le <strong>Yin</strong> est une pratique plus lente, de retour à
              soi et d'ancrage. Les postures sont tenues plusieurs minutes ce
              qui permet de toucher le corps plus en profondeur au niveau des
              tissus conjonctifs (cartilage, os, fascias...). Le Yin Yoga permet
              de s’accorder un temps de pause dans nos vies urbaines très yang,
              dynamiques. Grâce au Yin nous nous reconnectons à nous même, ce
              dont nous avons besoin dans notre quotidien qui se déroule à vive
              allure.
            </p>
          </section>

          <hr />

          <section className="classes__cards">
            {Object.values(data.classes).map((classType) => {
              return (
                <Link className="classes__card" to={classType.link_url}>
                  <div >
                    <h1 className="classes__card__title">
                      {classType.name}
                    </h1>
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
    </>
  );
}

export default Classes;
