import useInputSate from "../../hooks/useInputState";

const HookForm = () => {
  // const [name, handleNameChange] = useInputSate("Rojoni Hooked");
  // When useing Return As a Array

  const emailState = useInputSate("rojoni@sojoni.go");

  const handleSubmit = (e) => {
    console.log("Form data", emailState.value);
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {/* <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        /> */}
        <br />
        <input {...emailState} type="email" name="email" id="email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
