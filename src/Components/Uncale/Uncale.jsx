import Cousin from "../Cousin/Cousin";

const Uncale = ({ asset }) => {
  return (
    <div>
      <h2>Uncale</h2>
      <section className="flex">
        <Cousin name={"Rasan"} asset={asset}></Cousin>
        <Cousin name={"Sohana"}></Cousin>
      </section>
    </div>
  );
};

export default Uncale;
