class App extends React.Component {
  state = {
    status: true,
  };
  handleChange = () => {
    this.setState({
      status: !this.state.status,
    });
  };
  componentDidMount() {
    console.log("aplikacja zamontowana");
  }
  componentDidUpdate() {
    console.log("aplikacja aktuualizowana");
  }
  render() {
    console.log("renderowanie aplikacji");
    return (
      <>
        <button onClick={this.handleChange}>Przycisk</button>
        <Child1 status={this.state.status} />
        {this.state.status && <Child2 />}
        {/* jesli status to prawda to wykonaj child2 */}
      </>
    );
  }
}
class Child1 extends React.Component {
  componentDidMount() {
    console.log("dziecko1 zamontowana");
  }
  componentDidUpdate() {
    console.log("dziecko1 aktuualizowana");
  }
  render() {
    console.log("renderowanie dziecka");

    return <h1>to: {String(this.props.status)}</h1>;
  }
}
class Child2 extends React.Component {
  componentDidMount() {
    console.log("dziecko2 zamontowana");
  }
  componentDidUpdate() {
    console.log("dziecko2 aktuualizowana");
  }
  componentWillUnmount() {
    console.log("child2 odmontowany");
  }
  render() {
    return (
      <>
        <p>Komponent zamotnowany</p>
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
