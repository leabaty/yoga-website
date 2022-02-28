import React from "react";

import OnlineClassComponent from "../../../../OnlineClass/OnlineClass";

function Asanas(data) {
  return (
    <>
      <OnlineClassComponent {...data.data.onlinecourse.asanas} />;
    </>
  );
}

export default Asanas;
