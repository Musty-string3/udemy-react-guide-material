import { useState } from "react";
import Profile from "./components/Profile";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [ val, setVal ] = useState("");
  const inputVal = (e) => {
    return setVal(e.target.value)
  }

  return (
    <>
      <input type="text" onChange={ inputVal }/>
      <ul>
        {persons
          .filter((person) => person.name.indexOf(val) !== -1)
          .map((person) => (
          <li key={person.name}>
            <Profile {...person} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Example;
