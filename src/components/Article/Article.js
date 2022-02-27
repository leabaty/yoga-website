import React from "react";

import "./Article.scss";

function Article({ id, imgStart, headLine, text, img_url, img_alt }) {
  return (
    <>
      <article className="article__container" key={id}>
        <div
          className={
            imgStart === "start" ? "article__row-reverse" : "article__row"
          }
        >
          <section className="article__col">
            <div className="article__text-wrapper">
              <h1 className="heading article__heading">{headLine}</h1>

              {text.map((paragraph) => {
                return (
                  <p key={paragraph} className="article__text">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </section>

          <section className="article__col">
            <div className="article__img-wrapper">
              <img src={img_url} alt={img_alt} className="article__img" />
            </div>
          </section>
        </div>
      </article>
    </>
  );
}

export default Article;
