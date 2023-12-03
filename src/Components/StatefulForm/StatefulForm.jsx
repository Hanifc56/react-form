import { useState } from "react";

const StatefulForm = () => {
  const [name, setName] = useState("Rojoni kanto");
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, SetError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      SetError("Passwprd must be 6 character of longer");
    } else {
      SetError("");
      console.log(name, email, password);
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    console.log(e.target.value);
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={name}
          onChange={handleNameChange}
          type="text"
          name="name"
        />
        <br />
        <input onChange={handleEmail} type="email" name="email" id="email" />
        <br />
        <input
          required
          onChange={handlePasswordChange}
          type="password"
          name="password"
          id=""
        />
        <br />
        <input type="submit" value="Submit" />
        {error && <p>{error}</p>}
      </form>
    </div>
  );
};

export default StatefulForm;
