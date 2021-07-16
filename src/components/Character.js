// Write your Character component here
import React, { useState, useEffect } from "react";

class Character extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    console.log("inside of COM");
  }

  render() {
    return <p>{this.props.name}</p>;
    // Change code above this line
  }
}

export default Character;
