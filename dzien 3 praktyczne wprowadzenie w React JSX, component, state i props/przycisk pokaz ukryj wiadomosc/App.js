class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  check() {
    // console.log(this.state.active);
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const str = "Wiadomosc";
    return (
      <>
        <button onClick={this.check.bind(this)}>
          {this.state.active ? "ukryj" : "pokaz"}
        </button>
        {this.state.active ? <h1>{str}</h1> : null}
      </>
    );
  }
}
ReactDOM.render(<Messages />, document.getElementById("root"));
