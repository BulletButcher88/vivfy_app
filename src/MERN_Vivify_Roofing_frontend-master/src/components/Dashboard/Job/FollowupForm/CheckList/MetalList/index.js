import React, { Component } from "react";
import Checkbox from "../Checkbox";

const OPTIONS = ["checkOne", "checkTwo", "checkThree", "checkFour"];

const LISTS = [
  { name: "checkOne", text: "I've checked the pitch of the roof" },
  { name: "checkTwo", text: "I've checked if there are skylights or large holes" },
  { name: "checkThree", text: "I've checked the sizing of the gutters" },
  { name: "checkFour", text: "I've checked whether it needs carpentry" }
];

class MetalList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkboxes: OPTIONS.reduce(
        (options, option) => ({
          ...options,
          [option]: false
        }),
        {}
      )
    };
  }

  handleCheckboxChange = e => {
    const { name } = e.target;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  };

  createCheckbox = option => (
    <Checkbox
      name={option.name}
      isSelected={this.state.checkboxes[option.name]}
      onCheckboxChange={this.handleCheckboxChange}
      key={option.name}
    >
      {option.text}
    </Checkbox>
  );

  createCheckboxes = () => LISTS.map(this.createCheckbox);

  componentDidUpdate() {
    const checkedArray = Object.keys(this.state.checkboxes).filter(
      checkbox => this.state.checkboxes[checkbox]
    );
    if (checkedArray.length < 4) {
      this.props.handleCheckedStatusWhenFalse();
    }
    if (checkedArray.length === 4) {
      this.props.checkListStatus();
    }
  }

  render() {
    return <div className="checkbox-list">{this.createCheckboxes()}</div>;
  }
}

export default MetalList;
