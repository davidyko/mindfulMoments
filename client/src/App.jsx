import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gratitudes: []
    };
  }

  render() {
    return (
      <div>
        <p>Hey there, beautiful</p>
      </div>
    );
  }
}

export default App;
