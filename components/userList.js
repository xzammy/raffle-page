import React, { Component } from "react";

class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [
        "person1",
        "person2",
        "person3",
        "person4",
        "person5",
        "person6",
        "person7",
        "person8",
        "person9",
        "person10",
      ],
      luckyWinner: "",
      clicked: false,
    };
  }

  handleClick = () => {
    this.setState({
      clicked: true,
      luckyWinner: this.state.names[
        Math.floor(Math.random() * this.state.names.length)
      ],
    });
  };

  render() {
    // let randomValue = names[Math.floor(Math.random() * names.length)];
    // let name = names[Math.floor(Math.random() * names.length)];
    return (
      <div>
        <button onClick={this.handleClick}>Random User</button>
        <h2>{this.state.clicked && this.state.luckyWinner} </h2>
      </div>
    );
  }
}

export default UserList;
