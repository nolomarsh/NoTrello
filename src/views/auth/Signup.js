import React, {useState, useEffect} from 'react';
import axios from 'axios'
const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    let newUser = {username: ' ', password: ' '}
    const [user, setUser] = useState(newUser);
  
  const onSubmit = (e) => {
    e.preventDefault();
 
    axios.post('https://notrello-backend.herokuapp.com/api/useraccount' , 
    {
        username: username,
        password, password
    })
        .then((response) => {
        console.log("the username is:" + username);
          setUser(response.data);
        })
  }

  return (
      <div>
          <form onSubmit={onSubmit}>
            <label htmlFor='username'>Enter Username</label><br/>
            <input
                name='username'
                type='text'
                placeholder='Username'
                required
                onChange={e => setUsername(e.target.value)}
            /><br/><br/>
            <input
                name='password'
                type='password'
                placeholder='Password'
                required
                onChange={e => setPassword(e.target.value)}
            /><br/><br/>
            <input
                type='submit'
                value='Create'
            />
          </form>
      </div>
  )
}

export default Signup