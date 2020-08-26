class Clock extends React.Component {
  state = {
    time: {
      hours: 12,
      minutes: 34,
      second: 46,
    },
  };
  componentDidMount() {
    let self = this;
    setInterval(
      function () {
        let today = new Date();
        let h = today.getHours();
        let m =
          today.getMinutes() < 10
            ? "0" + today.getMinutes()
            : today.getMinutes();
        let s =
          today.getSeconds() < 10
            ? "0" + today.getSeconds()
            : today.getSeconds();
        self.setState({
          time: {
            hours: h,
            minutes: m,
            second: s,
          },
        });
      },

      1000
    );
  }

  render() {
    const { hours, minutes, second } = this.state.time;
    return (
      <>
        <p>
          {hours}:{minutes}:{second}
        </p>
      </>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));
