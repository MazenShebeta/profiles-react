//react profile component

import React from "react";
import "./profile.css";

//class based component
class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  render() {
    return (
      //jsx for profile, show and hide
      <div>
        
        {this.state.show ? (
          <div>
            <div className="profile">
              <img src="https://picsum.photos/200" alt="profile" />
              <div>
                <h1> {this.props.fullName}</h1>
                <h2>{this.props.bio}</h2>
                <h2>{this.props.profession}</h2>
              </div>
              <button onClick={() => this.setState({ show: false })}>
              Hide Profile
            </button>
            </div>
          </div>
        ) : (
          <button onClick={() => this.setState({ show: true })}>
            Show Profile
          </button>
        )}
      </div>
    );
  }
}

export default Profile;

//default props
Profile.defaultProps = {
  imgSrc : "https://www.w3schools.com/howto/img_avatar.png",
  fullName: "John Doe",
  bio: 30,
  profession: "Mail",
};