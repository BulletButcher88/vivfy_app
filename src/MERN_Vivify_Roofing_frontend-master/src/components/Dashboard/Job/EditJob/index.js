import React, { Component } from "react";
import "./editJob.css";

class EditJob extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleOnChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  // assign below method to the edit lead button
  handleSaveClick = e => {
    e.preventDefault();
    const updatedLead = {
      name: this.state.name,
      suburb: this.state.suburb,
      email: this.state.email,
      phone: this.state.phone,
      projectType: this.state.projectType,
      roofFrameType: this.state.roofFrameType,
      houseLevels: this.state.houseLevels,
      sizeOfHome: this.state.sizeOfHome,
      desiredRoofMaterial: this.state.desiredRoofMaterial,
      roofType: this.state.roofType,
      currentRoofMaterial: this.state.currentRoofMaterial,
      gutterDownpipeReplacement: this.state.gutterDownpipeReplacement
    };

    this.props.saveUpdatedLead(updatedLead);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="job-enquiry job-enquiry-edit">
        {/* save enquiry info button */}
        <div className="enquiry-top">
          <h1>Enquiry</h1>
          <p className="button" onClick={this.handleSaveClick}>
            Save
          </p>
        </div>
        {/* customer info section */}
        <div className="job-enquiry-customer-edit margin-top-bottom">
          <div className="name-suburb-edit">
            <label className="p-font" htmlFor="name">
              <span className="comments">Name: </span>
              <input
                id="name"
                type="text"
                defaultValue={data.name || ""}
                onChange={this.handleOnChange}
                value={this.state.name}
              />
              <div className="validation-prompt">{this.state.nameError}</div>
            </label>
            <label className="p-font" htmlFor="suburb">
              <span className="comments">Suburb: </span>
              <input
                id="suburb"
                type="text"
                defaultValue={data.suburb || ""}
                onChange={this.handleOnChange}
                value={this.state.suburb}
              />
              <div className="validation-prompt">{this.state.suburbError}</div>
            </label>
          </div>
          <div className="email-phone-date-edit">
            <label className="p-font" htmlFor="email">
              <span className="comments">Email: </span>
              <input
                id="email"
                type="email"
                defaultValue={data.email || ""}
                onChange={this.handleOnChange}
              />
              <div style={{ color: "white" }}>{this.state.nameError}</div>
            </label>
            <label className="p-font" htmlFor="phone">
              <span className="comments">Phone: </span>
              <input
                id="phone"
                type="text"
                defaultValue={data.phone || ""}
                onChange={this.handleOnChange}
              />
              <div style={{ color: "white" }}>{this.state.suburbError}</div>
            </label>
          </div>
        </div>

        {/* customer project info section */}
        <div className="job-enquiry-project-info margin-top-bottom">
          <div className="project-info-row">
            <label
              className="project-info-row-left p-font"
              htmlFor="projectType"
            >
              <span className="comments">Project Type: </span>
              <input
                id="projectType"
                type="text"
                defaultValue={data.projectType || ""}
                onChange={this.handleOnChange}
              />
            </label>
            <label
              className="project-info-row-right p-font"
              htmlFor="roofFrameType"
            >
              <span className="comments">Roof Frame Type: </span>
              <input
                id="roofFrameType"
                type="text"
                defaultValue={data.roofFrameType || ""}
                onChange={this.handleOnChange}
              />
            </label>
          </div>
          <div className="project-info-row">
            <label
              className="project-info-row-left p-font"
              htmlFor="houseLevels"
            >
              <span className="comments">House Levels: </span>
              <input
                id="houseLevels"
                type="text"
                defaultValue={data.houseLevels || ""}
                onChange={this.handleOnChange}
              />
            </label>
            <label
              className="project-info-row-right p-font"
              htmlFor="sizeOfHome"
            >
              <span className="comments">Approximate Size of Home: </span>
              <input
                id="sizeOfHome"
                type="text"
                defaultValue={data.sizeOfHome || ""}
                onChange={this.handleOnChange}
              />
            </label>
          </div>
          <div className="project-info-row">
            <label className="project-info-row-left p-font" htmlFor="roofType">
              <span className="comments">Roof Type: </span>
              <input
                id="roofType"
                type="text"
                defaultValue={data.roofType || ""}
                onChange={this.handleOnChange}
              />
            </label>
            <label
              className="project-info-row-right p-font"
              htmlFor="desiredRoofMaterial"
            >
              <span className="comments">Desired Roof Material: </span>
              <input
                id="desiredRoofMaterial"
                type="text"
                defaultValue={data.desiredRoofMaterial || ""}
                onChange={this.handleOnChange}
              />
            </label>
          </div>
          <div className="project-info-row border-bottom">
            <label
              className="project-info-row-left p-font"
              htmlFor="currentRoofMaterial"
            >
              <span className="comments">Current Roof Material: </span>
              <input
                id="currentRoofMaterial"
                type="text"
                defaultValue={data.currentRoofMaterial || ""}
                onChange={this.handleOnChange}
              />
            </label>
            <label
              className="project-info-row-right p-font"
              htmlFor="gutterDownpipeReplacement"
            >
              <span className="comments">Gutter Downpipe Replacement: </span>
              <input
                id="gutterDownpipeReplacement"
                type="text"
                defaultValue={data.gutterDownpipeReplacement || ""}
                onChange={this.handleOnChange}
              />
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default EditJob;
