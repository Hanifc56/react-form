const ReuseableForm = ({ handleSubmit, submitBtnTex = "Submit", children }) => {
  const handleLocalSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      Password: e.target.password.value,
    };
    handleSubmit(data);
  };
  return (
    <div>
      {children}
      <form onSubmit={handleLocalSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" id="email" />
        <br />
        <input type="password" name="password" id="" />
        <br />
        <input type="submit" value={submitBtnTex} />
      </form>
    </div>
  );
};

export default ReuseableForm;
