import React from "react";

import "./Article.scss";

function Article({ headLine, paragraph1, paragraph2, img, alt, imgStart }) {
  return (
    <>
      <article className="article__container">

        <div
          className={imgStart === "start" ? "article__row-reverse" : "article__row"}
        >
          <section className="article__col">
            <div className="article__text-wrapper">
              <h1 className="heading article__heading">{headLine}</h1>
              <p className="article__text">{paragraph1}</p>
              <p className="article__text">{paragraph2}</p>
            </div>
          </section>

          <section className="article__col">
            <div className="article__img-wrapper">
              <img src={img} alt={alt} className="article__img" />
            </div>
          </section>
        </div>
        
      </article>
    </>
  );
}

export default Article;
