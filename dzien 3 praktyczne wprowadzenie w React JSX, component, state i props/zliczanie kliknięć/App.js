const Panel = (props) => {
  return (
    <>
      <h1>Liczba kliknieć: {props.liczba}</h1>
      {props.wynik > 10 ? <h1>Przekroczono 10</h1> : null}
      <h1>Wynik: {props.wynik}</h1>
    </>
  );
};

const Buttons = (props) => {
  console.log(props);
  // jezeli jestesmy nnie w klasie to po props
  return (
    <>
      <button onClick={() => props.click(props.type, props.number)}>
        {props.title}
      </button>
    </>
  );
};

class Licznik extends React.Component {
  state = {
    liczba: 0,
    wynik: this.props.counter,
    // inicjalizacja z argumentu wprowadzonego
  };
  //   dodaj() {
  //     this.setState({
  //       liczba: this.state.liczba + 1,
  //       wynik: this.state.wynik + 1,
  //     });
  //   }
  //   odejmij() {
  //     this.setState({
  //       liczba: this.state.liczba + 1,
  //       wynik: this.state.wynik - 1,
  //     });
  //   }
  //   resetuj() {
  //     this.setState({
  //       liczba: this.state.liczba + 1,
  //       wynik: 0,
  //     });
  //   }
  handleClick(type, number) {
    console.log("asa");

    if (type === "sub") {
      this.setState((prev) => ({
        liczba: prev.liczba + 1,
        wynik: prev.wynik + number,
      }));
    }
    if (type === "add") {
      this.setState((prev) => ({
        liczba: prev.liczba + 1,
        wynik: prev.wynik + number,
      }));
    }
    if (type === "reset") {
      this.setState((prev) => ({
        liczba: prev.liczba + 1,
        wynik: 0,
      }));
    }
  }

  render() {
    return (
      <>
        {/* <button onClick={this.dodaj.bind(this)}>+1</button>
        <button onClick={this.odejmij.bind(this)}>-1</button>
        <button onClick={this.resetuj.bind(this)}>Reset wyniku</button> */}

        {/* <button onClick={this.handleClick.bind(this, "add", +1)}>+1</button> */}
        {/* jeden sposob przekazywania argumenntow */}
        {/* <button
          onClick={() => {
            this.handleClick("sub", -1);
          }}
        >
          -1
        </button> */}
        {/* drugi sposob przekazywania argumenntow */}
        {/* <button onClick={this.handleClick.bind(this, "reset", -1)}> */}
        {/* z jedna funkcja bardziej optymalne */}
        {/* Reset wyniku
        </button> */}
        <Buttons
          click={this.handleClick.bind(this)}
          type="add"
          title="+1"
          number={+1}
        />
        <Buttons
          click={this.handleClick.bind(this)}
          type="sub"
          title={"-1"}
          number={-1}
        />
        <Buttons
          click={this.handleClick.bind(this)}
          type="reset"
          title={"reset"}
          number={-1}
        />
        {/* ODZIELNE KOMPONENTY */}
        <Panel liczba={this.state.liczba} wynik={this.state.wynik} />
      </>
    );
  }
}

ReactDOM.render(<Licznik counter={10} />, document.getElementById("root"));
