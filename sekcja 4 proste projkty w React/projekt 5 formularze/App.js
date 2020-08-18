class Form extends React.Component {
  handleLovedChange = (e) => {
    this.setState({
      isLoved: event.target.checked,
    });
  };
  handleCityChange = (event) => {
    this.setState({
      city: event.target.value,
    });
  };
  handleInfoChange = (e) => {
    this.setState({
      info: e.target.value,
    });
  };
  handleChangeHowMuch = (e) => {
    this.setState({
      howMuch: e.target.value,
    });
  };
  state = {
    city: "Rzeszów",
    info: "Piękne miasto",
    isLoved: true,
    howMuch: "0",
  };
  render() {
    return (
      <>
        <label>
          Podaj miasto:
          <input
            value={this.state.city}
            onChange={this.handleCityChange}
            type="text"
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście
          <textarea
            type="text"
            onChange={this.handleInfoChange}
            value={this.state.info}
          ></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            onChange={this.handleLovedChange}
            checked={this.state.isLoved}
            type="checkbox"
          />
        </label>
        <br />
        <label>
          Ile razy byliście w tym mieście?
          <select
            onChange={this.handleChangeHowMuch}
            value={this.state.howMuch}
          >
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="more">wiecej</option>
          </select>
        </label>
      </>
    );
  }
}
ReactDOM.render(<Form />, document.getElementById("root"));
