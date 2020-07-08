import React from "react";

class Popup extends React.Component {
  render() {
    return (
      <div className="popup">
        <div className="popup\_inner">
          <h1> 抽獎結果 </h1>
          <p>{this.props.text} </p>{" "}
          <button onClick={this.props.closePopup}> close me </button>{" "}
        </div>{" "}
      </div>
    );
  }
}

export default Popup;
