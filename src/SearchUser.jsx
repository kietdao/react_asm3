import React, { Component } from 'react'

export class SearchUser extends Component {
  render() {
    return (
        <div className='search-user'>
            <span>Name: </span>
            <input type='text' placeholder='Input name...' onChange={this.props.handleInputUsername}></input>
        </div>
    )
  }
}

export default SearchUser