import React, {useState, useEffect, Fragment} from 'react';
import axios from 'axios'
import { useData, useUpdateCurrentUser } from '../../DataContext'
import {Link} from 'react-router-dom'
import Header from '../../components/Header'
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
          if (response.data.username){
              updateCurrentUser(response.data)
              localStorage.setItem('currentUser', JSON.stringify(response.data))
          } else if (response.data.error) {
              alert(response.data.error)
          }

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
		<Header />  
        {currentUser.username ?
          <Fragment>
            <h1>{currentUser.username}</h1>
            <Link to="/boards"><i className="nav-link fas fa-board"></i>Boards</Link>
          </Fragment>
          :
          <Fragment>
          <div className='container-fluid'>

              <form onSubmit={onSubmit}>
					<label htmlFor='username'>Enter Username</label><br/><br/>
					<input
						className="form-control"
						name='username'
						type='text'
						value={username}
						required
						onChange={e => setUsername(e.target.value)}
						/><br/><br/>

					<input
						className="form-control"
						name='password'
						type='password'
						value={password}
						required
						onChange={e => setPassword(e.target.value)}
						/><br/><br/>
					<div className="d-flex justify-content-center">
					<input
						className="btn btn-primary float-right mr-3"
						type='submit'
						value='Login'
						/>
					</div>
             </form>
          </div>
          </Fragment>
          }


      </div>
  )





}

export default Login
