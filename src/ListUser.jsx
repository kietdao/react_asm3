import React, { Component } from 'react'

export default class ListUser extends Component {
  render() {
    if(Array.isArray(this.props.userData)) {
    return (
        <div className="list-user">
            <h2>User Detail Information</h2>
            {this.props.userData.map(user => {
                return (
                    <div className='user-item' key={user?.node_id}>
                        <div className='user-avatar' >
                            <img src={user?.avatar_url}/>
                        </div>
                        <div className='user-info'>
                            <div className='user-info-item'>
                            <p>Role: {user?.type}</p>
                            <p>Email: {user?.email}</p>
                            </div>
                            <div className='user-info-item'>
                            <p>Company: {user?.company}</p>
                            </div>
                            <div className='user-info-item'>
                            <p>Number of followers: {user?.followers}</p>
                        </div>
                    </div>
                </div>
                )
            })}
        </div>
    )
    } else {
        return (
        <div className="list-user">
            <h2>User Detail Information</h2>
            <div className='user-item' key={this.props.userData?.node_id}>
                <div className='user-avatar' >
                    <img src={this.props.userData?.avatar_url}/>
                </div>
                <div className='user-info'>
                    <div className='user-info-item'>
                        <p>Role: {this.props.userData?.type}</p>
                        <p>Email: {this.props.userData?.email}</p>
                    </div>
                    <div className='user-info-item'>
                        <p>Company: {this.props.userData?.company}</p>
                    </div>
                        <div className='user-info-item'>
                        <p>Number of followers: {this.props.userData?.followers}</p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
  }
}
