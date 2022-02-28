import React from "react";

function OnlineClassComponent(course) {
  return (
    <>
      <body className="page">
        <header>
          <h1 className="title">{course.short_desc}</h1>
          <hr className="title-rule" />
        </header>

        <main>
          <section>
            <p className="onlinecontent__info">
              {course.long_desc.map((text) => {
                return <p className="text">{text}</p>;
              })}
            </p>
          </section>

          <section>
            <p className="onlinecontent__info">
              {course.content.map((item) => {
                console.log(course.content);
                return (
                  <div>
                    <iframe
                      width="560"
                      height="315"
                      src={item.url}
                      frameborder="0"
                      allowFullScreen
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>

                    {item.description.map((text) => {
                      console.log(text);
                      return <p className="text">{text}</p>;
                    })}
                  </div>
                );
              })}
            </p>
          </section>
        </main>
      </body>
    </>
  );
}

export default OnlineClassComponent;
