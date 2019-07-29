import React, { Component } from "react";


class CustomerComment extends Component {
  render() {
    const { data } = this.props;
    return (
      <p className="job-enquiry-customer-comment margin-top-bottom p-font">
        <span className="comments">Comments:</span> {data.comments}
      </p>
    );
  }
}

export default CustomerComment;
