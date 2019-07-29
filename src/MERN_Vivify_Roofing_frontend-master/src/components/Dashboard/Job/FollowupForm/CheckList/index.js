import React, { Component } from "react";
import MetalList from "./MetalList";
import TileList from "./TileList";
import "./checkList.css";

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteAmount: 0,
      disabled: true,
      radioChecked: true
    };
  }

  handleRoofTypeChange = e => {
    this.setState({
      radioChecked: !this.state.radioChecked
    });
  };

  handleCheckedStatus = () => {
    if (this.state.disabled === true) {
      this.setState({ disabled: false });
    }
  };

  handleCheckedStatusWhenFalse = () => {
    if (this.state.disabled === false) {
      this.setState({
        disabled: true
      });
    }
  };

  handleQuoteAmountChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleButtonClick = e => {
    e.preventDefault();
    const quoteAmount = this.state.quoteAmount;
    this.props.newQuoteAmount(quoteAmount);
    this.props.closePopup(e);
  };

  render() {
    return (
      <div className="popup">
        <div className="popupinner">
          <form>
            <div className="checkbox-close-icon">
              <i
                className="far fa-window-close"
                onClick={this.props.closePopup}
              />
            </div>
            <h1 className="checkbox-title">Checklist</h1>
            <div className="checkbox-jobtype">
              <label>
                <input
                  type="radio"
                  name="jobType"
                  value="metal"
                  checked={this.state.radioChecked}
                  onChange={this.handleRoofTypeChange}
                />
                Metal
              </label>
              <label>
                <input
                  type="radio"
                  name="jobType"
                  value="tile"
                  onChange={this.handleRoofTypeChange}
                />
                Tile
              </label>
            </div>

            <div className="checkbox-list-container">
              {this.state.radioChecked ? (
                <MetalList
                  checkListStatus={this.handleCheckedStatus}
                  handleCheckedStatusWhenFalse={
                    this.handleCheckedStatusWhenFalse
                  }
                />
              ) : (
                <TileList
                  checkListStatus={this.handleCheckedStatus}
                  handleCheckedStatusWhenFalse={
                    this.handleCheckedStatusWhenFalse
                  }
                />
              )}
            </div>

            <div className="quote-wrapper">
              <label className="dollar-sign">$</label>
              <input
                className="quote-input"
                type="text"
                id="quoteAmount"
                onChange={this.handleQuoteAmountChange}
                disabled={this.state.disabled}
                style={{
                  backgroundColor: this.state.disabled ? "#e4e3e3" : "#fff"
                }}
              />
            </div>
            <div className="next-btn-container">
              <button
                className="checklist-next-btn"
                onClick={this.handleButtonClick}
                disabled={this.state.disabled}
                style={{
                  backgroundColor: this.state.disabled ? "#e4e3e3" : "#ff7e7e"
                }}
              >
                NEXT
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default CheckList;
