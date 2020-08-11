const Panel = (props) => {
  return <h1>{props.name}</h1>;
};
class Wpisz extends React.Component {
  state = {
    value: "",
  };
  handleReset() {
    this.setState({
      value: "",
    });
  }
  handleChange(event) {
    this.setState({
      //set state wywoluje sie po renderowaniu jest to asynchroniczne
      value: event.target.value,
    });
  }
  render() {
    return (
      <>
        <input
          value={this.state.value}
          //   do teego aby bylo czyszczone
          placeholder="wpisz..."
          type="text"
          className="input"
          onChange={this.handleChange.bind(this)}
        />
        <button onClick={this.handleReset.bind(this)} className="reset">
          Reset
        </button>
        <Panel name={this.state.value.toUpperCase()} />
      </>
    );
  }
}

ReactDOM.render(<Wpisz />, document.getElementById("root"));
