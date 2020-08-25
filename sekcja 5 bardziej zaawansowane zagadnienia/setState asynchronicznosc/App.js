class Clicker extends React.Component {
  state = {
    number1: 0,
    number2: 0,
  };
  handleClick = () => {
    this.setState((prev) => ({
      number1: prev.number1 + 1,
    }));
  };
  handleClick1 = () => {
    //   bierze aktualne. Nie przekazuemy obiektu a funkcje
    this.setState((prev) => ({
      number2: prev.number2 + 1,
    }));
    this.setState((prev) => ({
      number2: prev.number2 + 1,
    }));
    this.setState((prev) => ({
      number2: prev.number2 + 1,
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Podbij o 1</button>
        <h1>{this.state.number1}</h1>
        <button onClick={this.handleClick1}>Podbij o 3</button>
        <h1>{this.state.number2}</h1>
      </div>
    );
  }
}
ReactDOM.render(<Clicker />, document.getElementById("root"));
