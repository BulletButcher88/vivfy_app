import React, { Component } from "react";
import { capitaliseMultiple } from "../../../utils/capitalise";
import "./JobListRow.css";

class JobListRow extends Component {
  handleClick = e => {
    let element = e.target;
    while (!element.className.match(/jobList-row/)) {
      element = element.parentElement;
    }
    const jobId = element.id;
    this.props.clearEditData();
    this.props.setActiveJob(jobId);
    if (window.innerWidth < 767) {
      this.props.toggleHamburger(false);
    }
  };

  render() {
    const { activeId } = this.props;
    return (
      <div className="jobList-container">
        {this.props.data.map((job, index) => {
          let btnClass = activeId === job._id ? "blueButton" : "whiteButton";
          // console.log(activeId)
          return (
            <div
              className={btnClass + " jobList-row"}
              id={job._id}
              key={index}
              onClick={this.handleClick}
            >
              <div className="jobList-list-left">
                <h4>{capitaliseMultiple(job.name)}</h4>
                <h5>{capitaliseMultiple(job.suburb)}</h5>
                <p>{job.projectType}</p>
              </div>
              <div className="jobList-list-right">
                <p>{new Date(job.createdTime).toLocaleDateString()}</p>
                {
                  (job.assignedTrade && job.assignedTrade.length > 3) &&
                  <div className='assigned-badge'>
                    {job.assignedTrade}
                  </div>
                }
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default JobListRow;
