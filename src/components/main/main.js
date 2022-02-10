import { useState } from "react";
import Loading from "../../Loading/Loading";
import ViewProducts from "../products/ViewProducts";
import Recommended from "../recommended/Recommended";
import "./main.css";

const Main = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLoading = (value) => {
    setIsLoading(value);
  };

  return (
    <main>
      <h1>
        Welcome to <span>smart shop</span>
      </h1>
      {isLoading && <Loading />}
      <Recommended />
      <ViewProducts onLoading={handleLoading} />
    </main>
  );
};

export default Main;
