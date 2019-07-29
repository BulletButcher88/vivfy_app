import React from 'react';
import './imageUpload.css'


class ImageUpload extends React.Component {
  state = {image: null}

  handleClick = async (e) => {
    const { handleUpload, id } = this.props;
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('file', file)
    let config = { 
      headers : {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    await handleUpload(id, formData, config)
  }

  
  render() {
    return (
      <>
        <input className="input-btn" type="file" name="image-upload" id="image-upload" onChange={this.handleClick}/>
      </>
    )
  }
}

export default ImageUpload