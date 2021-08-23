import React, {useState, useEffect} from 'react';
import axios from 'axios'
const Login = () => {
  const [username, setUsername] = useState('');
  const [passsword, setPassword] = useState('');
  const [user, setUser] = useState({
      username: '',
      password: ''
  })
  
  const onSubmit = (e) => {
    e.preventDefault();
 
    axios.put('https://notrello-backend.herokuapp.com/api/useraccount/login')
        .then((response) => {
          setUser(response.data);
          console.log(response.data);
        })
  }

  return (
      <div>
          <form onSumbit={onSubmit}>
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