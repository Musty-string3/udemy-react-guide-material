import { useState } from 'react'

const Example = () => {
  let [val, setVal] = useState();
  console.log(val);

  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setVal(e.target.value);
        }} /> = {val}
    </>
  );
};

export default Example;
