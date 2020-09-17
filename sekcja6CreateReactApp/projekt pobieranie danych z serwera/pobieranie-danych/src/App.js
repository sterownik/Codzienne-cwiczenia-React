import React, { Component } from "react";

import "./App.css";

const data = [
  {
    id: 1,
    title: "wiadomość numer 1",
    body: "zawartość wiadomości numer 1...",
  },
  {
    id: 2,
    title: "wiadomość numer 2",
    body: "zawartość wiadomości numer 2...",
  },
  {
    id: 3,
    title: "wiadomość numer 3",
    body: "zawartość wiadomości numer 3...",
  },
];
setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: "wiadomość numer " + index,
    body: "zawartość wiadomości numer " + index + "...",
  });
  // console.log(data);
}, 5000);

const Tab = (props) => {
  return (
    <>
      <h2>{props.nameOne}</h2>
      <p>{props.nameTwo}</p>
    </>
  );
};

class App extends Component {
  state = {
    array: [...data],
    // skopiowanie danych do tablicy, obiekt do tablicy
  };

  getDate = () => {
    if (this.state.array.length !== [...data].length) {
      console.log(
        "aktualizacja " + this.state.array.length + " z " + [...data].length
      );
      this.setState({
        array: [...data],
      });
    } else {
      console.log("dane takie same");
    }
  };
  componentDidMount() {
    this.Id = setInterval(this.getDate, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.Id);
  }

  render() {
    let comments = this.state.array.map((comment) => (
      <Tab key={comment.id} nameOne={comment.title} nameTwo={comment.body} />
    ));

    return <div className="App">{comments.reverse()}</div>;
  }
}

export default App;
