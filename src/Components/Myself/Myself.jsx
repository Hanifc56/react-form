import Spcial from "../Spcial/Spcial";

const Myself = ({ asset }) => {
  return (
    <div>
      <h2>Myself</h2>
      <section className="flex">
        <Spcial asset={asset} name={"spcial"}></Spcial>
      </section>
    </div>
  );
};

export default Myself;
