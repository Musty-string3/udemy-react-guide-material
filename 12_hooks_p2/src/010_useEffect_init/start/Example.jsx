import { useEffect } from "react";
import { useState } from "react";

const Example = () => {
  const [ time, setTime ] = useState(0);
  useEffect(() => {
    window.setInterval(()=> {
      console.log("1秒経過しました。");
      setTime(prev => prev + 1);
    }, 1000)
  }, [])
  return (
    <div>
      <h3>
        { time }<span>秒経過</span>
      </h3>
    </div>
  )
};

export default Example;
