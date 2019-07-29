import React, { Component } from "react";
import JobListRow from "./JobListRow";

class JobList extends Component {
  render() {
    const { data, setActiveJob, show, activeId, clearEditData, toggleHamburger } = this.props;
    if (show) {
      return (
        <JobListRow
          data={data}
          setActiveJob={setActiveJob}
          activeId={activeId}
          clearEditData={clearEditData}
          toggleHamburger={toggleHamburger}
        />
      );
    } else {
      return null;
    }
  }
}

export default JobList;
