import './App.scss';
import React, { Component, useState, useEffect } from 'react'
import axios from 'axios';
import ListUser from './ListUser';
import SearchUser from './SearchUser';
import { debounce } from 'lodash';

// Functional based

// function App() {
//   const [userName, setUserName] = useState('')
//   const [data,setData] = useState(null)
//   const [message, setMessage] = useState('')

//   useEffect(() => {
//     async function getUserInfo() {
//       try {
//         const response = await getUserData(userName)
//         setData(response.data)
//       } catch(err) {
//         console.log(err)
//       }
//     }

//     const getData = setInterval(() => {
//       getUserInfo()
//       setMessage(``)
//       clearInterval(getData)
//     }, 5000)
    
//     return () => clearInterval(getData)
//   }, [userName])

//   const handleInputUsername = (e) => {
//     setUserName(e.target.value)
//     setMessage(<div className='msg'>Data is on loading...</div>)
//   }

//   const getUserData = (inputUserName) => {
//       return axios.get(`https://api.github.com/users${inputUserName ? `/${inputUserName}` : ''}`)
//   }

//   return (
//     <div className="App">
//       <SearchUser 
//         handleInputUsername = {handleInputUsername}
//       />
//       {message}
//       {data !== null ? 
//       <ListUser 
//       userData = {data}
//       /> : <div className='msg'>Data is on first loading...</div>
//       }
      
//     </div>
//   );
// }

// export default App;


// Class based
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: null,
      userName: '',
      message: ''
    }
  }

  componentDidMount() {
    this.setState({message: <div className="msg">Data is on first loading...</div>})
    setTimeout(() => {
      this.getUserData() 
      .then(res => {this.setState({
        data: res.data,
        message: ''
      })})
      .catch(error => console.log(error))
    }, 5000)
  }

  componentDidUpdate(prevProps, prevStates) {

  }

  getUserData = (inputUserName) => {
      return axios.get(`https://api.github.com/users${inputUserName ? `/${inputUserName}` : ''}`)
  }

  handleInputUsername = (e) => {
    this.setState({message: <div className="msg">Data is loading...</div>})
    const getData = setInterval(() => {
        this.setState({
          userName: e.target.value
        })    
        this.getUserData(this.state?.userName)
        .then(res => {this.setState({
          data: res.data,
          message: ''
        })})
        .catch(error => console.log(error))
        clearInterval(getData)
    }, 5000)
  }

  render() {
    return (
      <div className='App'>
          <SearchUser    
            handleInputUsername = {this.handleInputUsername}
          />
          {this.state.message}
          {this.state.data !== null ? <ListUser
            userData = {this.state?.data}
          /> : ''}
          
      </div>
    )
  }
}

