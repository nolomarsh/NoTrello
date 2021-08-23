import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { useData, useUpdateCurrentUser } from '../../DataContext'

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState({});

  const currentUser = useData().currentUser

  const updateCurrentUser = useUpdateCurrentUser()

  const onSubmit = (e) => {
    e.preventDefault();

    axios.put('https://notrello-backend.herokuapp.com/api/useraccount/login',
    {
        username: username,
        password: password
    })
        .then((response) => {
          // setUser(user);
          updateCurrentUser(response.data)
          console.log(response.data);
        })
        // , (err) => {
        //   console.error(err)
        // })
        // .catch((error) => {
        //   console.error.apply(error);
        // })

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
          <h1>{currentUser.username}</h1>
      </div>
  )





}

export default Login
