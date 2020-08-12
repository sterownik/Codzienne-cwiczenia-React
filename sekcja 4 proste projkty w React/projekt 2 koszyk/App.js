const Buttons = (props) => {
  const { number, numberMagazine, click, name } = props;
  return (
    <>
      {(number <= 0 && !numberMagazine) || number >= numberMagazine ? (
        <button disabled>{name}</button>
      ) : (
        <button onClick={click}>{name}</button>
      )}
    </>
  );
};

const Panel = (props) => {
  return <h1>{props.quantity}</h1>;
};
const BuyNow = (props) => {
  return <button onClick={props.click}>Kup teraz</button>;
};

class Shop extends React.Component {
  state = {
    number: this.props.number,
    numberMagazine: this.props.numberMagazine,
  };
  handleClick(type) {
    if (type.includes("-")) {
      this.setState({
        number: this.state.number - 1,
      });
    } else if (type.includes("+")) {
      this.setState({
        number: this.state.number + 1,
      });
    }
  }
  handleBuy(number) {
    this.setState({
      numberMagazine: this.state.numberMagazine - this.state.number,
      number: 0,
    });
  }

  render() {
    const { number, numberMagazine } = this.state;
    return (
      <>
        <Buttons
          number={number}
          click={this.handleClick.bind(this, "-")}
          name={"-"}
        />
        <Panel quantity={number} />

        <Buttons
          number={number}
          numberMagazine={numberMagazine}
          click={this.handleClick.bind(this, "+")}
          name={"+"}
        />

        {numberMagazine > 0 && number > 0 ? (
          <BuyNow click={this.handleBuy.bind(this, number)} />
        ) : null}
      </>
    );
  }
}

ReactDOM.render(
  <Shop numberMagazine={20} number={3} />,
  document.getElementById("root")
);
