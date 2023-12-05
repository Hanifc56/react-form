import Brother from "../Brother/Brother";
import Myself from "../Myself/Myself";
import Sister from "../Sister/Sister";

const Dade = ({ asset }) => {
  return (
    <div>
      <h2>Dade</h2>
      <section className="flex">
        <Myself asset={asset}></Myself>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Dade;
