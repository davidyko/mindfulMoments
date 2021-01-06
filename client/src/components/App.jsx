import React from "react";
import Gratitudes from "./Gratitudes";
import TopThree from "./TopThree";
import Quote from "./Quote";
import Meditate from "./Meditate";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gratitudes: [],
      mindful: [
        "Mindfulness is a way of befriending ourselves and our experience",
        "Wherever you go, there you are",
        "The best way to capture moments is to pay attention",
        "Mindfulness means being awake. It means knowing what you are doing",
        "To think in terms of either pessimism or optimism oversimplifies the truth. The problem is to see reality as it is",
        "The present moment is the only time over which we have dominion",
        "The feeling that any task is a nuisance will soon disappear if it is done in mindfulness",
        "Meditation is not evasion; it is a serene encounter with reality",
        "When we get too caught up in the busyness of the world, we lose connection with one another – and ourselves",
        "Everything that has a beginning has an ending. Make your peace with that and all will be well",
      ],
    };
  }

  componentDidMount() {
    fetch("/gratitudes")
      .then((data) => data.json())
      .then((theThree) => {
        this.setState(
          {
            gratitudes: theThree,
          },
          () => console.log(this.state)
        );
      });
  }

  render() {
    return (
      <div>
        <Meditate />
        <Gratitudes />
        <TopThree grats={this.state.gratitudes} />
        <Quote mindful={this.state.mindful} />
      </div>
    );
  }
}

export default App;
