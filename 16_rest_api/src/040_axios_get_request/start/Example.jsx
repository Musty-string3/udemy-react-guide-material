import { useState, useEffect } from "react";
import axios from 'axios'

const Example = () => {
  const [ state, setState ] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get('http://localhost:3003/user');
      setState(res.data);
    }
    getUser();
  }, []);

  return (
    <ul>
      { state.map(response => {
        return <li key={response.id}>{ response.id }{ response.username }</li>
      }) }
    </ul>
  )
};

export default Example;
