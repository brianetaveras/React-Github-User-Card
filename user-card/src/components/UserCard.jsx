import React from "react";
import axios from 'axios'
import FollowerList from './FollowerList'

class UserCard extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            followers: []
        }
    }
  componentDidMount() {
    axios.get('https://api.github.com/users/brianetaveras/followers').then(res=>{
        this.setState({
            followers: res.data
        })
    })
  }
  render() {
    console.log(this.props.data);
    return (
      <div className="user-card">
        <div className="img-wrapper">
          <img src={this.props.data.avatar_url} alt="Profile avatar" />
        </div>
        <div className="info">
          <div className="name">{this.props.data.name}</div>
          <div className="follow">
            <div className="followers">
              {this.props.data.followers}
              <br />
              Followers
            </div>
            <div className="following">
              {this.props.data.following}
              <br />
              Following
            </div>
          </div>
          <div className="bio">{this.props.data.bio}</div>
          <FollowerList followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default UserCard;
