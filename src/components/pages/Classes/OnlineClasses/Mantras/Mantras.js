import React from "react";

import OnlineClassComponent from "../../../../OnlineClass/OnlineClass";

function Mantras(data) {

  return (
    <>
      <OnlineClassComponent {...data.data.onlinecourse.mantras} />;
    </>
  );
}

export default Mantras;
