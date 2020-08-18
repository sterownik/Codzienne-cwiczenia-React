class Form extends React.Component {
  //   handleLovedChange = (e) => {
  //     this.setState({
  //       isLoved: event.target.checked,
  //     });
  //   };
  //   handleCityChange = (event) => {
  //     this.setState({
  //       city: event.target.value,
  //     });
  //   };
  //   handleInfoChange = (e) => {
  //     this.setState({
  //       info: e.target.value,
  //     });
  //   };
  //   handleChangeHowMuch(e) {
  //     this.setState({
  //       howMuch: e.target.value,
  //     });
  //   }
  handleChange = (e) => {
    // console.log(e.target.type);

    if (e.target.type === "checkbox") {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  state = {
    city: "Rzeszów",
    info: "Piękne miasto",
    isLoved: true,
    howMuch: "2",
  };
  render() {
    return (
      <>
        <label>
          Podaj miasto:
          <input
            name="city"
            value={this.state.city}
            onChange={this.handleChange}
            type="text"
          />
        </label>
        <br />
        <label>
          Napisz coś o tym mieście
          <textarea
            name="info"
            type="text"
            onChange={this.handleChange}
            value={this.state.info}
          ></textarea>
        </label>
        <br />
        <label>
          Czy lubisz to miasto?
          <input
            name="isLoved"
            onChange={this.handleChange}
            checked={this.state.isLoved}
            type="checkbox"
          />
        </label>
        <br />
        <label>
          Ile razy byliście w tym mieście?
          <select
            name="howMuch"
            onChange={this.handleChange}
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
