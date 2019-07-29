import React from "react";
import "./imageDisplay.css";
import PhotoEnlarge from "./PhotoEnlarge";

class ImageDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImage: 0,
      showPopup: false
    };
  }

  toggleImagePopup = e => {
    this.setState({
      activeImage: parseInt(e.target.id),
      showPopup: !this.state.showPopup
    });
  };

  render() {
    const { data } = this.props;
    const links = data.imageUrls;

    if (links === undefined || links.length === 0) {
      return null;
    } else {
      return (
        <div className="photos-wrapper">
          {links.map((url, i) => {
            return (
              <img
                className="photo-frame"
                id={i}
                key={i}
                src={url}
                alt=""
                width="90"
                height="110"
                onClick={this.toggleImagePopup.bind(this)}
              />
            );
          })}
          {this.state.showPopup && (
            <PhotoEnlarge
              data={links[this.state.activeImage]}
              close={this.toggleImagePopup.bind(this)}
            />
          )}
        </div>
      );
    }
  }
}

export default ImageDisplay;
