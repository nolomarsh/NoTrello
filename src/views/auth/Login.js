import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios'
import { useData, useUpdateCurrentUser } from '../../DataContext'
import {Link} from 'react-router-dom'

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
  




//   const handleLogout = () => {
//     // console.log(currentUser)
//     updateCurrentUser({})
// }

  return (
      <div>
        {currentUser.username ?
          <Fragment>
            <h1>{currentUser.username}</h1>
            <Link to="/boards"><i className="nav-link fas fa-board"></i>Boards</Link>
          </Fragment>
          :
          <Fragment>
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
            </Fragment>
          }
          
          
      </div>
  )





}

export default Login
