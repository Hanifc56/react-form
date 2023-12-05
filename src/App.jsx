import "./App.css";
import Grandpa from "./Components/Grandpa/Grandpa";
// import ReuseableForm from "./Components/ReuseableForm/ReuseableForm";
// import HookForm from "./Components/HookForm/HookForm";
// import RefForm from "./Components/RefForm/RefForm";
// import StatefulForm from "./Components/StatefulForm/StatefulForm";
// import SimpleForm from "./Components/SimpleForm/SimpleForm";

function App() {
  // const handleSingUpSubmit = (data) => {
  //   console.log("sing up data", data);
  // };
  // const handleUpdataProfile = (data) => {
  //   console.log("Update Profile data", data);
  // };
  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>

      {/* <SimleForm></SimpleForm> */}
      {/* <StatefulForm></StatefulForm> */}
      {/* <RefForm></RefForm> */}
      {/* <HookForm></HookForm> */}
      {/* <ReuseableForm formTitle={"Sing Up"} handleSubmit={handleSingUpSubmit}>
        <div>
          <h1>Sing Up</h1>
          <p>Please sing up</p>
        </div>
      </ReuseableForm>
      <ReuseableForm
        formTitle={"Profile Update"}
        handleSubmit={handleUpdataProfile}
        submitBtnTex={"update"}
      >
        <div>
          <h2>Update Profile</h2>
          <p>Please Always Update your profile</p>
        </div>
      </ReuseableForm> */}
    </>
  );
}

export default App;
