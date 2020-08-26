class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("wywołana metoda konstruktora");
  }
  state = {
    number: 0,
  };
  componentDidMount() {
    console.log("wywołana metoda componentDidMount zawsze raz po render");
    this.setState({
      number: 1,
    });
  }
  componentDidUpdate() {
    console.log("wywołana metoda componentDidUpdate po aktualizacji");
  }

  render() {
    console.log("wywołana metoda render");
    // nie dajemy tutaj setState bo pętla

    return (
      <>
        <p>Montowanie kompnentu</p>
        <Child />
      </>
    );
  }
}
class Child extends React.Component {
  componentDidMount() {
    console.log("wywołana metoda componentDidMount w komponencie Child");
  }
  render() {
    return (
      <>
        <h1>Dziecko</h1>
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
