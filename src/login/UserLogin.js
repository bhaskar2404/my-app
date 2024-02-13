
import React, { useState } from 'react'
import { getLoginToken } from '../services/ApiServices';


const UserLogin = () => {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
            
                try {
                    const response = await  getLoginToken({
                        username: username,
                        password: password
                      })
                      const { token } = response.data;
                      localStorage.setItem('token', token);
                     
                        //setToken(token);
                      console.log(token);
              }catch (error) {
                console.error('Error logging in:', error);
                // Handle login error
              }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="username">Username:</label>
      <input
        type="text"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </div>
    <div>
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
    <button type="submit">Login</button>
  </form>
  )
}

export default UserLogin;
