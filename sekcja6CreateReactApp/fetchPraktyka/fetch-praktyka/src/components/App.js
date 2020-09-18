import React, { Component } from "react";
import Button from "./Button";
import Panel from "./Panel";
import "./App.css";
import AddPerson from "./AddPerson";

class App extends Component {
  state = {
    data: [],
  };
  handleClickAddPerson = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((result) => {
        let data = this.state.data;
        let finaldata = data.concat(result.results);

        this.setState({
          data: finaldata,
        });
        // console.log();
      })
      .catch(() =>
        console.log(
          "Can’t access " +
            "https://randomuser.me/api/" +
            " response. Blocked by browser?"
        )
      );
  };
  handleClick = () => {
    fetch("https://randomuser.me/api/?results=5")
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          data: result.results,
        });
        // console.log();
      })
      .catch(() =>
        console.log(
          "Can’t access " +
            "https://randomuser.me/api/" +
            " response. Blocked by browser?"
        )
      );
  };

  render() {
    let tab = this.state.data.map((oneData, index) => (
      <Panel
        key={index}
        mail={oneData.email}
        name={oneData.name.last}
        title={oneData.name.title}
        picture={oneData.picture.large}
      />
    ));

    return (
      <div className="App">
        <Button onclick={this.handleClick} />
        <AddPerson onclick={this.handleClickAddPerson} />
        {tab}
      </div>
    );
  }
}

export default App;
