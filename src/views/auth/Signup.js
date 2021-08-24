import React, {useState, useEffect} from 'react';
import {useUpdateCurrentUser} from '../../DataContext'
import axios from 'axios'
const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let newUser = {username: ' ', password: ' '}
    const [user, setUser] = useState(newUser);

    const updateCurrentUser = useUpdateCurrentUser()

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post('https://notrello-backend.herokuapp.com/api/useraccount' ,
    {
        username: username,
        password: password
    })
        .then((response) => {
        console.log("the username is:" + username);
          updateCurrentUser(response.data)
          localStorage.setItem('currentUser',JSON.stringify(response.data))
        })
  }

  return (
      <div className='container-fluid'>
          <form onSubmit={onSubmit}>
            <label htmlFor='username'>Enter Username</label><br/><br/>
            <input
                className="form-control"
                name='username'
                type='text'
                placeholder='Username'
                required
                onChange={e => setUsername(e.target.value)}
            /><br/><br/>
            <input
                className="form-control"
                name='password'
                type='password'
                placeholder='Password'
                required
                onChange={e => setPassword(e.target.value)}
            /><br/><br/>
            <div className="d-flex justify-content-center">
            <input
                className="btn btn-primary"
                type='submit'
                value='Create'
                />
            </div>
          </form>
      </div>
  )
}

export default Signup
