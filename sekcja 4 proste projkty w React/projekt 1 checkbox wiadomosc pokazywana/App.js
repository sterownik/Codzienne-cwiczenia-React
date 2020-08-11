const Panel = (props) => {
  return (
    <>
      <h1>{props.valueV2 ? "Mozesz wejsc" : "nie mozesz wejsc"}</h1>
    </>
  );
};

class App extends React.Component {
  state = {
    val: false,
  };
  handleChange(event) {
    console.log(event.target.checked);

    this.setState({
      val: event.target.checked,
    });
  }

  render() {
    return (
      <>
        <h1>Kup bilet na horror</h1>
        <form>
          <input
            onChange={this.handleChange.bind(this)}
            id="inputOne"
            type="checkbox"
            value={this.state.val}
          />
          <label htmlFor="inputOne">Mam co najmniej 16 lat</label>
        </form>
        <Panel valueV2={this.state.val} />
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
