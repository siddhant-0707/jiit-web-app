import { useState } from "react";

function Form({ onSubmit }) {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    // console.log(inputs)
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputs);
    // console.log(inputs);
  };
  // console.log(username);
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Enter details:</label>
        <br />
        <br />
        <input
          name="username"
          type="text"
          value={inputs.username || ""}
          onChange={handleChange}
          placeholder="enter username"
        />{" "}
        <br />
        <input
          name="password"
          type="password"
          value={inputs.password || ""}
          onChange={handleChange}
          placeholder="enter password"
        />{" "}
        <br />
        <button type="submit">Submit!</button>
      </form>
    </div>
  );
}

export default Form;
