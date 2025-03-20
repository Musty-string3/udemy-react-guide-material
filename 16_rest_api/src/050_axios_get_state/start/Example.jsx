import axios from 'axios'
import { useState, useEffect } from 'react';

const Example = () => {
  const [ users, setUsers ] = useState();
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("http://127.0.0.1:3003/user");
      setUsers(res.data);
    }
    getUser();
  }, [])

  return (
    <div>
      { users?.map(user => {
        return (
          <div key={ user.id }>
            <h3>{ user.username }</h3>
            <p>age: { user.age }</p>
            <p>hobby: { user.hobbies.join(", ") }</p>
          </div>
        )
      }) }
    </div>
  )
};

export default Example;
