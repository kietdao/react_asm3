import './App.css';
import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import ListUser from './ListUser';
import SearchUser from './SearchUser';

// Functional based

// function App() {
//   const [userName, setUserName] = useState('')
//   const [data,setData] = useState(null)

//   useEffect(() => {
//     async function getUserInfo() {
//       try {
//         const response = await getUserData(userName)
//         setData(response.data)
//       } catch(err) {
//         console.log(err)
//       }
//     }
//     getUserInfo()
//   }, [userName])

//   const handleInputUsername = (e) => {
//     setUserName(e.target.value)
//   }

//   const getUserData = (inputUserName) => {
//     return axios.get(`https://api.github.com/users${inputUserName ? `/${inputUserName}` : ''}`)
//   }

//   return (
//     <div className="App">
//       <SearchUser 
//         handleInputUsername = {handleInputUsername}
//       />
//       <ListUser 
//         userData = {data}
//       />
//     </div>
//   );
// }

// export default App;


// Class based
export default class App extends Component {
  constructor(props) {
    super(props)
    this.setState({
      data: null,
    })
  }

  componentDidMount() {
    this.getUserData(this.state?.userName)
    .then(res => {this.setState({
      data: res.data,
    })})
    .catch(error => console.log(error))
  }

  getUserData = (inputUserName) => {
    return axios.get(`https://api.github.com/users${inputUserName ? `/${inputUserName}` : ''}`)
  }

  handleInputUsername = (e) => {
    this.getUserData(e.target?.value)
    .then(res => {this.setState({
      data: res.data,
    })})
    .catch(error => console.log(error))
  }
  
  render() {
    return (
      <div className='App'>
          <SearchUser    
            handleInputUsername = {this.handleInputUsername}
          />
          <ListUser
            userData = {this.state?.data}
          />
      </div>
    )
  }
}

