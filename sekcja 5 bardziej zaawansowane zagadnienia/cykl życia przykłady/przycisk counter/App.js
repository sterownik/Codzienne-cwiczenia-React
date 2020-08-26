class Counter extends React.Component {
  state = {
    result: 1,
    ratio: 2,
  };
  handleCalculate = () => {
    this.setState((state) => ({
      result: state.ratio * state.result,
    }));
  };
  componentDidUpdate(prevState) {
    //   po kliku chcemy sprawdzic

    // bo musi wejść to  musi byc to drugie bo wciaz bedzie mniejsze od 1000 i tak w petli
    if (this.state.result > 1000 && this.state.ratio === 2) {
      this.setState({
        ratio: 0.5,
      });
    } else if (this.state.result < 1 && this.state.ratio === 0.5) {
      this.setState({
        ratio: 2,
      });
    }
  }

  render() {
    return (
      <>
        <h1>Kalkulator</h1>
        <button onClick={this.handleCalculate}>
          {" "}
          pomnóż przez {this.state.ratio}
        </button>
        <h1>Wynik {this.state.result}</h1>
      </>
    );
  }
}
ReactDOM.render(<Counter />, document.getElementById("root"));
