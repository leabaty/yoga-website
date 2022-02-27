import React from "react";

import { BsCalendarWeek, BsPinMapFill, BsPinMap } from "react-icons/bs";
import { GiLotus } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

function CollectiveClasses(data) {
  console.log(data.data);

  return (
    <>
      <>
        <body className="page">
          <header>
            <h1 className="title">Cours Collectifs</h1>
            <hr className="title-rule" />
          </header>

          <main>
            <section>
              <div>
                <BsCalendarWeek />
                <IoMdTime />
                <GiLotus />
                <BsPinMap />
              </div>

              <div>
                {Object.entries(data.data.schedule).map((day) => {
                  return (
                    <div>
                      {day.map((dayDetail) => {
                        console.log(dayDetail);
                        return <p>Regarde le console log</p>;
                      })}
                    </div>
                  );
                })}
              </div>
            </section>
          </main>
        </body>
      </>
    </>
  );
}

export default CollectiveClasses;
