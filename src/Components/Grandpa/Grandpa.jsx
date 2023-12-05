import { createContext } from "react";
import Anty from "../Anty/Anty";
import Dade from "../Dade/Dade";
import Uncale from "../Uncale/Uncale";
import "./Grandpa.css";

const AssetContext = createContext("gold");

const Grandpa = () => {
  const asset = "diamond";
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <AssetContext.Provider value="gold">
        <section className="flex">
          <Dade asset={asset}></Dade>
          <Uncale asset={asset}></Uncale>
          <Anty></Anty>
        </section>
      </AssetContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * 1. Create a context and export it
 * 2. Add provider for the context with a value
 * 3.
 *
 *
 *
 */
