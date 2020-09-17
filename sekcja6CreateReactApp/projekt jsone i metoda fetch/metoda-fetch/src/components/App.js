import React, { Component } from "react";
import Word from "./Word";
import "./App.css";

class App extends Component {
  state = {
    words: [],
    isLoaded: false,
  };
  fetchDate(thisthis) {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => {
        thisthis.setState({
          words: data.words,
          isLoaded: true,
        });
      });
  }
  componentDidMount() {
    setTimeout(() => this.fetchDate(this), 3000);
    // trzeba przekazac dobrego thisa na element w setState

    // wysylamy żadanie i potem to jest json i musimy go sparsowac response to odpowiedz i dajemy go do json wyodrebanimy jsona kiedt wyodrebimy jsona zmieniamy state, date to jest result czyli rezultat
  }

  render() {
    console.log("render");

    const tab = this.state.words.map((word, index) => (
      <>
        <Word number={index} pl={word.pl} en={word.en} key={word.id} />
      </>
    ));
    return (
      <>
        <div className="App">{this.state.isLoaded ? tab : "wczytuje dane"}</div>
      </>
    );
  }
}

export default App;
