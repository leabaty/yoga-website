import React from "react";

import "./About.scss";

import Posture1 from "../../../assets/images/laure-posture-1.webp";
import Posture2 from "../../../assets/images/laure-posture-2.webp";
import Posture3 from "../../../assets/images/laure-posture-3.webp";
import Posture4 from "../../../assets/images/laure-posture-4.webp";
import Posture5 from "../../../assets/images/laure-posture-5.webp";
import Posture6 from "../../../assets/images/laure-posture-6.webp";
import LaureShannon from "../../../assets/images/laure-pepin-and-sharon-gannon.webp";

import FadeInFromTop from "../../../utils/FadeInFromTop";
import FadeInFromBottom from "../../../utils/FadeInFromBottom";

function About() {
  return (
    <>
      <body className="page">
        <h1 className="title">A propos</h1>
        <hr className="title-rule" />

        <div className="about__img-container">
          <FadeInFromBottom>
            <img
              className="about__img-container__image"
              src={Posture4}
              alt="laure-pepin-yoga-posture-4"
            />
          </FadeInFromBottom>

          <FadeInFromTop>
            <img
              className="about__img-container__image"
              src={Posture5}
              alt="laure-pepin-yoga-posture-5"
            />
          </FadeInFromTop>

          <FadeInFromBottom>
            <img
              className="about__img-container__image"
              src={Posture6}
              alt="laure-pepin-yoga-posture-6"
            />
          </FadeInFromBottom>
        </div>

        <div className="about__img-container--mobile">
          <FadeInFromTop>
            <img
              className="about__img-container__image"
              src={Posture4}
              alt="laure-pepin-yoga-posture-4"
            />
          </FadeInFromTop>
        </div>

        <article className="about__article">
          <p className="text">
            C’est alors que je mène des recherches sur le mouvement et le corps
            pour préparer une performance artistique avec le Théâtre du
            Mouvement et rédiger ma thèse en philosophie que je m'initie au
            yoga.
          </p>

          <p className="text">
            L’attrait est immédiat : une véritable découverte de soi au temps
            présent, une expérience corporelle et spirituelle qui me laisse une
            empreinte profonde.
          </p>

          <p className="text">
            Je décide donc d’entamer une première formation de professeure de
            yoga en Inde avec Samyak Yoga (RYT-200 Yoga Alliance). Ma passion et
            mon enthousiasme pour le yoga, le chant, la musique et la
            spiritualié me dirige tout naturellement vers le Yoga Jivamukti.
          </p>

          <aside className="about__aside">
            <p className="text about__aside__text">
              J'obtiens mon premier diplôme de Jivamukti en Inde auprès de
              Sharon Gannon, Jules febre et Yogeswari, puis un second au centre
              de Yoga Jivamukti de Munich auprès de mon mentor Ian Szydlowski
              Alvarez. Je suis à présent diplômée de 800 heures Jivamukti.
            </p>

            <img
              className="about__aside__img"
              src={LaureShannon}
              alt="laure-pepin-yoga-posture-4"
            />
          </aside>

          <p className="text ">
            J'enseigne également le Yin Yoga (certifiée 50h Yin Yoga), ce qui me
            permets de me reconnecter à une énergie plus douce, plus lente, et
            de partager avec mes élèves des temps de pauses nécessaires dans nos
            vies urbaines dynamiques.
          </p>

          <p className="text">
            Mes cours sont emplis de spiritualité, de poésie, le tout saupoudré
            d’un soupçon d’humour.
          </p>
        </article>

        <div className="about__img-container">
          <FadeInFromBottom>
            <img
              className="about__img-container__image"
              src={Posture1}
              alt="laure-pepin-yoga-posture-1"
            />
          </FadeInFromBottom>
          <FadeInFromBottom>
            <img
              className="about__img-container__image"
              src={Posture2}
              alt="laure-pepin-yoga-posture-2"
            />
          </FadeInFromBottom>

          <FadeInFromBottom>
            <img
              className="about__img-container__image"
              src={Posture3}
              alt="laure-pepin-yoga-posture-3"
            />
          </FadeInFromBottom>


        </div>
        <div className="about__img-container--mobile">
          <FadeInFromBottom>
            <img
              className="about__img-container__image"
              src={Posture6}
              alt="laure-pepin-yoga-posture-6"
            />
          </FadeInFromBottom>
        </div>
      </body>
    </>
  );
}

export default About;
