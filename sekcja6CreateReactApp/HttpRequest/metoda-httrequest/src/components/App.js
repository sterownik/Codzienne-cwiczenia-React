import React, { Component } from "react";
import Panel from "./Panel";
import "./App.css";

class App extends Component {
  state = {
    users: [],
  };
  componentDidMount() {
    const xhr = new XMLHttpRequest(); //XMLHttpRequest
    xhr.open("GET", "http://jsonplaceholder.typicode.com/users", true);
    xhr.send();
    let thisthis = this;
    // trzeci argument czy asynchroniczne
    xhr.onload = function () {
      console.log(this.status);

      if (this.readyState === 4 && this.status === 200) {
        var jsonResponse = JSON.parse(this.response);
        // zamienia tekst na obiekt i w druga strone stringify
        // console.log(jsonResponse);
        thisthis.setState({
          users: jsonResponse,
        });
      }
    };
  }
  render() {
    let mapUsers = this.state.users.map((user, index) => (
      <div key={index}>
        <Panel userOne={user.name} adress={user.address.street} />
      </div>
    ));

    return <div className="App">{mapUsers}</div>;
  }
}

export default App;
