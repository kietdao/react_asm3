import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';

function App() {
  const [userName, setUserName] = useState('')
  const [data,setData] = useState(null)

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await getUserData(userName)
        console.log(response)
      } catch(err) {
        console.log(err)
      }
    }
    getUserInfo()
  }, [userName])

  const handleInputUsername = (e) => {
    setUserName(e.target.value)
  }

  const getUserData = (inputUserName) => {
    return axios.get(`https://api.github.com/users${inputUserName ? `/${inputUserName}` : ''}`)
  }

  return (
    <div className="App">
      <div className='search-user'>
        <span>Name: </span>
        <input type='text' placeholder='Input name...' onChange={handleInputUsername}></input>
      </div>

      <div className="list-user">
        <h2>User Detail Information</h2>
        <div className='user-item'>
          <div className='user-avatar'>
            <img src=''/>
          </div>
          <div className='user-info'>
            <div className='user-info-item'>
              <p>Role: </p>
              <p>Email: </p>
            </div>
            <div className='user-info-item'>
              <p>Company: </p>
            </div>
            <div className='user-info-item'>
              <p>Number of followers: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
