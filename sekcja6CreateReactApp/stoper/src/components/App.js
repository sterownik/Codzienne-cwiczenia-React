import React, { Component } from "react";
import "./App.css";
import Button from "./Button";
import Panel from "./Panel";

class App extends Component {
  state = {
    sek: 0,
    isGoing: false,
  };
  handleStartStop() {
    if (this.state.isGoing) {
      clearInterval(this.index);
    } else {
      this.index = setInterval(() => this.handleGoTimer(), 1000);
    }
    this.setState((prev) => ({
      isGoing: !prev.isGoing,
    }));
  }
  // componentDidUpdate() {
  //   const index = setTimeout(this.handleGoTimer.bind(this), 1000);
  //   if (!this.state.isGoing) {
  //     clearTimeout(index);
  //   }
  // }
  handleGoTimer() {
    console.log("weszlo");

    this.setState((prev) => ({
      sek: prev.sek + 1,
    }));
  }

  render() {
    // console.log(this.state.isGoing);

    return (
      <>
        <Panel sek={this.state.sek} />
        <Button
          isGoing={this.state.isGoing}
          click={this.handleStartStop.bind(this)}
        />
      </>
    );
  }
}

export default App;
