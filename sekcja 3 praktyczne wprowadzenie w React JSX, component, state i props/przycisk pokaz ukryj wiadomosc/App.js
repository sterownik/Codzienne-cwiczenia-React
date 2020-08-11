class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }
  check() {
    // debugger;
    // do deubugowania
    // console.log(this.state.active);
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    const str = "Wiadomość";
    return (
      <>
        <button onClick={this.check.bind(this)}>
          {this.state.active ? "Ukryj" : "Pokaż"}
        </button>
        {this.state.active ? <h1>{str}</h1> : null}
        <h1> {this.state.active && str}</h1>
        {/* to samo jesli bedzie true to to co po prawej stronie */}
      </>
    );
  }
}
ReactDOM.render(<Messages />, document.getElementById("root"));
