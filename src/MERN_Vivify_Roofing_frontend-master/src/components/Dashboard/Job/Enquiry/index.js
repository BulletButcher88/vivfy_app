import React, { Component } from "react";
import CustomerInfo from "./CustomerInfo";
import CustomerComment from "./CustomerComment";
import ProjectInfo from "./ProjectInfo";
import "./enquiry.css";

class Enquiry extends Component {
  handleEditClick = () => {
    this.props.showEditForm();
  };

  render() {
    const { data } = this.props;
    return (
      <div className="job-enquiry">
        <div className="enquiry-top">
          <h1>Enquiry</h1>
          <p className="button" onClick={this.handleEditClick}>
            Edit
          </p>
        </div>
        <CustomerInfo data={data} />
        <CustomerComment data={data} />
        {data.projectType === "Painting" || <ProjectInfo data={data} />}
      </div>
    );
  }
}

export default Enquiry;
