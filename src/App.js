import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import ListUser from './ListUser';
import SearchUser from './SearchUser';

function App() {
  const [userName, setUserName] = useState('')
  const [data,setData] = useState(null)

  useEffect(() => {
    async function getUserInfo() {
      try {
        const response = await getUserData(userName)
        setData(response.data)
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
      <SearchUser 
        handleInputUsername = {handleInputUsername}
      />
      <ListUser 
        userData = {data}
      />
    </div>
  );
}

export default App;
