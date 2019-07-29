import React, { Component } from "react";
import "./newLeadForm.css";

const initialState = {
  name: "",
  suburb: "",
  email: "",
  phone: "",
  comments: "",
  projectType: "",
  roofFrameType: "",
  houseLevels: "",
  sizeOfHome: "",
  desiredRoofMaterial: "",
  roofType: "",
  currentRoofMaterial: "",
  gutterDownpipeReplacement: "",
  nameError: "",
  suburbError: ""
};

class NewLeadForm extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleOnChange = e => {
    const isCheckbox = e.target.type === "checkbox";
    this.setState({ [e.target.id]: e.target.value });

    this.setState({
      [e.target.name]: isCheckbox ? e.target.checked : e.target.value
    });
  };

  validate = () => {
    let nameError = "";
    let suburbError = "";

    if (!this.state.name) {
      nameError = "* name required";
    }
    if (!this.state.suburb) {
      suburbError = "* suburb required";
    }

    if (nameError || suburbError) {
      this.setState({ nameError, suburbError });
      return false;
    }
    return true;
  };

  // assign below method to the edit lead button
  handleSaveNewLeadClick = e => {
    e.preventDefault();
    const newLead = {
      name: this.state.name,
      suburb: this.state.suburb,
      email: this.state.email,
      phone: this.state.phone,
      comments: this.state.comments,
      projectType: this.state.projectType,
      roofFrameType: this.state.roofFrameType,
      houseLevels: this.state.houseLevels,
      sizeOfHome: this.state.sizeOfHome,
      desiredRoofMaterial: this.state.desiredRoofMaterial,
      roofType: this.state.roofType,
      currentRoofMaterial: this.state.currentRoofMaterial,
      gutterDownpipeReplacement: this.state.gutterDownpipeReplacement,
      nameError: this.state.nameError,
      suburbError: this.state.suburbError
    };

    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState(initialState);
      this.props.addNewLead(newLead);
      this.props.closeNewLeadPopup(e);
    }
  };

  render() {
    return (
      <div className="new-lead-popup">
        <div className="new-lead-popupinner">
          <form>
            <div className="checkbox-close-icon">
              <i
                className="far fa-window-close"
                onClick={this.props.closeNewLeadPopup}
              />
            </div>
            {/* customer info section */}
            <div className="job-enquiry job-enquiry-edit">
              <div className="job-enquiry-customer-edit margin-top-bottom">
                <div className="name-suburb-edit">
                  <label className="p-font" htmlFor="name">
                    <span className="comments">Name: </span>
                    <input
                      id="name"
                      type="text"
                      placeholder="required"
                      onChange={this.handleOnChange}
                      value={this.state.name}
                    />
                    <div className="validation-prompt">
                      {this.state.nameError}
                    </div>
                  </label>
                  <label className="p-font" htmlFor="suburb">
                    <span className="comments">Suburb: </span>
                    <input
                      id="suburb"
                      className="input-points"
                      type="text"
                      placeholder="required"
                      onChange={this.handleOnChange}
                      value={this.state.suburb}
                    />
                    <div className="validation-prompt">
                      {this.state.suburbError}
                    </div>
                  </label>
                </div>
                <div className="email-phone-date-edit">
                  <label className="p-font" htmlFor="email">
                    <span className="comments">Email: </span>
                    <input
                      id="email"
                      className="input-points"
                      type="email"
                      onChange={this.handleOnChange}
                    />
                    <div style={{ color: "white" }}>{this.state.nameError}</div>
                  </label>
                  <label className="p-font" htmlFor="phone">
                    <span className="comments">Phone: </span>
                    <input
                      id="phone"
                      type="text"
                      onChange={this.handleOnChange}
                    />
                    <div style={{ color: "white" }}>
                      {this.state.suburbError}
                    </div>
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
                      onChange={this.handleOnChange}
                    />
                  </label>
                </div>
                <div className="project-info-row">
                  <label
                    className="project-info-row-left p-font"
                    htmlFor="roofType"
                  >
                    <span className="comments">Roof Type: </span>
                    <input
                      id="roofType"
                      type="text"
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
                      onChange={this.handleOnChange}
                    />
                  </label>
                  <label
                    className="project-info-row-right p-font"
                    htmlFor="gutterDownpipeReplacement"
                  >
                    <span className="comments">
                      Gutter Downpipe Replacement:{" "}
                    </span>
                    <input
                      id="gutterDownpipeReplacement"
                      type="text"
                      onChange={this.handleOnChange}
                    />
                  </label>
                </div>
              </div>

              {/* customer comments section */}
              <label
                className="job-enquiry-customer-comment margin-top-bottom p-font"
                htmlFor="new-lead-customer-comment"
              >
                <span className="comments">Comments:</span>
                <input
                  id="new-lead-customer-comment"
                  type="text"
                  onChange={this.handleOnChange}
                />
              </label>
            </div>

            {/* save enquiry info button */}
          </form>
          <div className="button"onClick={this.handleSaveNewLeadClick}>
            <p className='button-text'>Save</p>
          </div>
        </div>
      </div>
    );
  }
}

export default NewLeadForm;
