/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import HelloWord from "../helloWord/HelloWord";

export default function form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handelChange = () => {
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    setName(name);
    setAge(age);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    return console.log({name,age});
  };

  return (
    <div >
      <HelloWord></HelloWord>
      <form>
        {/* <div className="mb-3">
          <label for="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="age" className="form-label">
            Age
          </label>
          <input type="number" className="form-control" id="age" />
        </div>

        <button
          type="submit"
          value="Submit"
          onClick={handleSubmit}
          class="btn btn-primary"
        >
          Submit
        </button> */}

        <input type="text" id="name" onChange={handelChange} placeholder="name"></input>
        <input type="number" id="age" onChange={handelChange} placeholder="age"></input>
        <button type="submit" value='submit' onClick={handleSubmit}>submit</button>

        
      </form>
    </div>
  );
}
