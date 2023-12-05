import Spcial from "../Spcial/Spcial";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h2>Cousin</h2>
      <p>{name}</p>
      <section className="flex">
        {asset && <Spcial asset={asset}></Spcial>}
      </section>
    </div>
  );
};

export default Cousin;
