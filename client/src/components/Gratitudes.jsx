import React from "react";
import ReactDOM from "react-dom";

class Gratitudes extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gratitude: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      gratitude: e.target.value,
    });
  }

  handleSubmit(e) {
    console.log(this.state.gratitude);
    e.preventDefault();
    fetch("/gratitudes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ gratitudes: this.state.gratitude }),
    });
  }

  render() {
    return (
      <div>
        <h3>What are you grateful for today?</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}></input>
          <button type="submit">Thank you</button>
        </form>
        <h3 class="black">____________________</h3>
      </div>
    );
  }
}

export default Gratitudes;
