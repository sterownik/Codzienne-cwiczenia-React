const Switch = (props) => {
  return (
    <button onClick={props.click}>{props.title ? "Wyłącz" : "Włącz"}</button>
  );
};

class App extends React.Component {
  state = {
    click: true,
  };
  handleClick = () => {
    this.setState({
      click: !this.state.click,
    });
  };
  render() {
    return (
      <>
        <Switch title={this.state.click} click={this.handleClick} />

        {this.state.click && <Clock />}
      </>
    );
  }
}

class Clock extends React.Component {
  interval = "";
  state = {
    time: this.getTime(),
  };
  getTime() {
    let today = new Date();
    let hours = today.getHours();
    let minutes =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes();
    let second =
      today.getSeconds() < 10 ? "0" + today.getSeconds() : today.getSeconds();
    return {
      hours: hours,
      minutes: minutes,
      second: second,
    };
  }
  updateTime() {
    this.setState({
      time: this.getTime(),
    });
  }
  componentDidMount() {
    const index = setInterval(this.updateTime.bind(this), 1000);
    this.interval = index;
  }
  //   zeby this byl odpowiedni, bo setInterval powoduje ze this jest window

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log("odmontowanie");
  }
  // bez tego jest ostrzeżenie bo jest Interval

  render() {
    const { hours, minutes, second } = this.state.time;
    return (
      <>
        <p>
          {hours} : {minutes} : {second}
        </p>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
