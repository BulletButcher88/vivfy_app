import React, { Component } from "react";
import "./followupForm.css";
import CheckList from "./CheckList";
import ImageUpload from "./ImageUpload";

class FollowupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followupDate: "",
      salesName: "",
      tradeComments: "",
      quoteAmount: "",
      showPopup: false
    };
  }

  trimDate = (string) => {
    return string.split(' ').slice(1, 5).join(' ');
  }

  handleAddFollowups = e => {
    e.preventDefault();
    const newFollowup = {
      followupDate: this.trimDate(new Date().toString()),
      salesName: this.props.currentUser.name,
      tradeComments: this.state.tradeComments,
      quoteAmount: this.state.quoteAmount
    };
    this.props.addNewFollowup(newFollowup);
    e.target.parentNode.reset();
    this.setState({
      quoteAmount: ""
    });
  };

  handleChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  togglePopup = e => {
    e.preventDefault();
    this.setState({
      showPopup: !this.state.showPopup
    });
  };

  addQuoteAmount = amount => {
    this.setState({ quoteAmount: amount });
  };

  render() {
    return (
      <div className="job-followup-form">
        <form className="job-followup-form-container">
          <div className="followup-info">
            <p className="mob-only">Leave a followup:</p>
            <button className="followup-quote-btn" onClick={this.togglePopup}>
              <p className=''>
              {this.state.quoteAmount
                ? "$" + this.state.quoteAmount
                : "Add Quote"}
              </p>
            </button>
            {this.state.showPopup ? (
              <CheckList
                className="checklist-component"
                closePopup={this.togglePopup}
                newQuoteAmount={this.addQuoteAmount}
              />
            ) : null}
          </div>
          <textarea
            id="tradeComments"
            className="followup-comment"
            placeholder="Write a comment"
            onChange={this.handleChange}
          />
          <div className="followup-upload-image">
            <p>Attach a photo:</p>
            <ImageUpload
              className="image-upload-btn"
              id={this.props.data._id}
              handleUpload={this.props.handleUpload}
            />
          </div>
          <button
            className="followup-add-btn"
            onClick={this.handleAddFollowups}
          >
            Add Follow Up
          </button>
        </form>
      </div>
    );
  }
}

export default FollowupForm;
