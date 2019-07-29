import React, { Component } from "react";
import "./customerInfo.css";
import { capitaliseMultiple } from "../../../../utils/capitalise";
import { FaPhone, FaEnvelope } from "react-icons/fa";

class CustomerInfo extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="job-enquiry-customer margin-top-bottom">
        <div className="name-suburb">
          <h3>{capitaliseMultiple(data.name)}</h3>
          <h5>{capitaliseMultiple(data.suburb)}</h5>
        </div>
        <div className="email-phone-date">
          <a href={"mailto:" + data.email}>
            <h5>
              <FaEnvelope size="1em" className="contact-icon" /> {data.email}
            </h5>
          </a>
          <a href={"tel:" + data.phone}>
            <h5>
              <FaPhone size="1em" className="contact-icon" /> {data.phone}
            </h5>
          </a>
          <h5>Received {new Date(data.createdTime).toLocaleDateString()}</h5>
        </div>
      </div>
    );
  }
}

export default CustomerInfo;
