import React, { useState } from "react";
import Loading from "../../Loading/Loading";
import ViewProducts from "../products/ViewProducts";

const Adminpage = () => {
  const [isLoading, setIsLoading] = useState([]);
  const handleLoading = (value) => {
    setIsLoading(value);
  };

  return (
    <section style={{ "margin-top": "100px" }}>
      {isLoading && <Loading />}
      <ViewProducts onLoading={handleLoading} />
    </section>
  );
};

export default Adminpage;
