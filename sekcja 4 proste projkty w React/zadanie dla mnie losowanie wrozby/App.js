class App extends React.Component {
  state = {
    predictions: ["pierwsza wróżba", "druga wróżba", "trzecia wróżba"],
    view: "",
    adding: "",
  };
  handleRandPrediction = () => {
    let rand = Math.floor(Math.random() * this.state.predictions.length);

    this.setState({
      view: this.state.predictions[rand],
    });
  };
  handleAddPrediction = () => {
    this.setState((prev) => ({
      predictions: [...prev.predictions, this.state.adding],
      adding: "",
    }));
    alert("aktualnie mamy wróżby: " + this.state.predictions);
  };
  handleChangeAdd = (e) => {
    this.setState({
      adding: e.target.value,
    });
  };

  render() {
    // console.log();
    return (
      <>
        <button onClick={this.handleRandPrediction}>Zobacz wróżbę</button>
        <br />
        <input onChange={this.handleChangeAdd} />
        <button onClick={this.handleAddPrediction}>Dodaj wróżbe</button>
        <h1>{this.state.view}</h1>
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
