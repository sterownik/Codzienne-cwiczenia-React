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
    if (this.state.adding === "") {
      alert("nie ma nic w wpisywaniu");
    } else {
      this.setState((prev) => ({
        predictions: [...prev.predictions, this.state.adding],
        // dokladnie kopia tablicy
        adding: "",
      }));
      alert("aktualnie mamy wróżby: " + this.state.predictions);
    }
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
        <input value={this.state.adding} onChange={this.handleChangeAdd} />
        <button onClick={this.handleAddPrediction}>Dodaj wróżbe</button>
        {this.state.view != "" ? <h1>{this.state.view}</h1> : null}
      </>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
