import React, {useState, useEffect} from 'react';
import axios from 'axios'
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});
  
  const onSubmit = (e) => {
    e.preventDefault();
 
    axios.delete('https://notrello-backend.herokuapp.com/api/useraccount/login', 
    {
        username: username,
        password, password
    })
        .then((response) => {
          setUser(user);
          console.log(response.data);
          console.log(document.cookie);
        })
  }

  return (
      <div>
          <form onSubmit={onSubmit}>
            <label htmlFor='username'>Enter Username</label><br/>
            <input
                name='username'
                type='text'
                value={username}
                required
                onChange={e => setUsername(e.target.value)}
            /><br/><br/>
            <input
                name='password'
                type='password'
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
            /><br/><br/>
            <input
                type='submit'
                value='Login'
            />
          </form>
      </div>
  )





}

export default Login