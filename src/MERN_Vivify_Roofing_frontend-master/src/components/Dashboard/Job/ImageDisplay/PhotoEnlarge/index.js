import React from 'react';
import './PhotoEnlarge.css'

class PhotoEnlarge extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="popup">
        <img className="photo-enlarge-frame" src={data} alt=''/>
        <button className="close-btn" onClick={this.props.close}>X</button>
      </div>
    )
  }
}

export default PhotoEnlarge 