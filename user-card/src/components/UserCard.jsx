import React from "react";

class UserCard extends React.Component {
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
                {this.props.data.followers}<br/>
                  Followers
              </div>
              <div className="following">
                {this.props.data.following}<br/>
                Following
              </div>

          </div>
    <div className="bio">{this.props.data.bio}</div>
        </div>
      </div>
    );
  }
}

export default UserCard;
