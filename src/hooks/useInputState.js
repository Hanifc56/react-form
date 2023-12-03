import { useState } from "react";

const useInputSate = (deefaultValue = null) => {
  const [value, setValue] = useState(deefaultValue);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };
  // return [value, handleChange];
  return {
    value,
    onChange,
  };
};
export default useInputSate;
