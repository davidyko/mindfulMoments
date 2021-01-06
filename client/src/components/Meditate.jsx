import React from "react";

class Meditate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      say: "Just breath",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    setTimeout(() => {
      this.setState({
        say: "Whatcha thinkin about?",
      });
    }, 2000);
    setTimeout(() => {
      this.setState({
        say: "Who is the you that observes your thoughts?",
      });
    }, 5000);
    setTimeout(() => {
      this.setState({
        say: "Take a deep breath",
      });
    }, 8000);
  }

  render() {
    return (
      <div>
        <h3>____________________</h3>
        <h2>Time to Meditate!</h2>
        <h3 class="click" onClick={this.handleClick}>
          {this.state.say}
        </h3>
        <h3>____________________</h3>
      </div>
    );
  }
}

export default Meditate;
