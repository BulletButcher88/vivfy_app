import React, { Component } from "react";
import "./followups.css";

class FollowupEdit extends Component {
  state = {
    comment: this.props.followup.tradeComments | ""
  };

  handleClick = () => {
    const { save, followup, jobId, showEdit } = this.props;
    const followupId = followup._id;
    const { comment } = this.state;
    save(comment, jobId, followupId);
    showEdit();
  };

  handleChange = event => {
    this.setState({
      comment: event.target.value
    });
    console.log(this.state);
  };

  render() {
    const { followup, index } = this.props;
    return (
      <div key={index} className="job-followups-container">
        <div className="job-followups-info p-font">
          <p className="p-flex-center">
            <span className="comments">{followup.followupDate}</span>
          </p>
          <p className="p-border p-flex-center">
            <span className="comments">{followup.salesName}</span>
          </p>
          <p className="p-flex-center">
            <span className="comments">${followup.quoteAmount}</span>
          </p>
        </div>
        <div className="job-followups-comment p-font">
          <p>
            <div className="comments">Comment: </div>
            <textarea className="edit-comment" onChange={this.handleChange}>
              {followup.tradeComments}
            </textarea>
          </p>
          <p className="float-right">
            <span className="button" onClick={this.handleClick}>
              Save
            </span>
          </p>
        </div>
      </div>
    );
  }
}

class SingleFollowUp extends Component {
  handleClick = () => {
    const id = this.props.followup._id;
    this.props.edit(id);
  };

  render() {
    const { followup, index } = this.props;
    return (
      <div key={index} className="job-followups-container">
        <div className="job-followups-info p-font">
          <p className="p-flex-center">
            <span className="comments">{followup.followupDate}</span>
          </p>
          <p className="p-border p-flex-center">
            <span className="comments">{followup.salesName}</span>
          </p>
          <p className="p-flex-center">
            <span className="comments">${followup.quoteAmount}</span>
          </p>
        </div>
        <div className="job-followups-comment p-font">
          <p>
            <div className="comments">Comment: </div>
            {followup.tradeComments}
            <p className="float-right">
              <span className="button" onClick={this.handleClick}>
                Edit
              </span>
            </p>
          </p>
        </div>
      </div>
    );
  }
}

class Followups extends Component {
  state = {
    edit: false,
    editedFollowup: null
  };

  showEdit = followupId => {
    this.setState({
      edit: !this.state.edit,
      editedFollowup: followupId || "none"
    });
  };

  render() {
    const { edit, editedFollowup } = this.state;
    const { data } = this.props;
    const jobId = data._id;
    if (data.followUps.length === 0) {
      return null;
    } else {
      return (
        <div className="job-followups">
          <h1>Followups</h1>
          {data.followUps.map((followup, index) => {
            if (edit && editedFollowup === followup._id) {
              return (
                <FollowupEdit
                  key={index}
                  save={this.props.handleSaveEditedFollowup}
                  followup={followup}
                  jobId={jobId}
                  showEdit={this.showEdit}
                />
              );
            } else {
              return (
                <SingleFollowUp
                  edit={this.showEdit}
                  followup={followup}
                  key={index}
                />
              );
            }
          })}
        </div>
      );
    }
  }
}

export default Followups;
