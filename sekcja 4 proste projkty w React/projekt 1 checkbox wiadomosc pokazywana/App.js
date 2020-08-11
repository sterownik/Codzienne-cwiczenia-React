const Panel = (props) => {
  return (
    <>
      <h1>{props.valueV2 ? "Mozesz wejsc" : "nie mozesz wejsc"}</h1>
    </>
  );
};
const displayMessage = (val, isFormSubmited) => {
  if (isFormSubmited) {
    if (val) {
      return <ValidationMessage valueV2="Możesz obejrzeć film" />;
    } else return <ValidationMessage valueV2="Nie możesz obejrzeć filmu" />;
  } else {
    return null;
  }
};
const ValidationMessage = (props) => {
  const { valueV2 } = props; //destruktoryzacja zeb sie szybciej pisalo
  return <p>{valueV2}</p>;
};
const Positive = () => {
  return <h1>Możesz wejść</h1>;
};
const Negative = () => {
  return <h1> Nie możesz wejść, nie masz 16 lat</h1>;
};
const OrderForm = (props) => {
  const { submit, change, value } = props; //detrukturyzacja
  return (
    <form onSubmit={submit}>
      <input onChange={change} id="inputOne" type="checkbox" value={value} />
      <label htmlFor="inputOne">Mam co najmniej 16 lat</label>
      <br></br>
      <button type="submit">Kup bilet</button>
    </form>
  );
};

class TicketShop extends React.Component {
  state = {
    val: false,
    isFormSubmited: false,
  };
  handleChange(event) {
    console.log(event.target.checked);

    this.setState({
      val: event.target.checked,
      isFormSubmited: false,
    });
  }
  //   displayMessage() {
  //     if (this.state.isFormSubmited) {
  //       if (this.state.val) {
  //         return <ValidationMessage valueV2="Możesz obejrzeć film" />;
  //       } else return <ValidationMessage valueV2="Nie możesz obejrzeć filmu" />;
  //     } else {
  //       return null;
  //     }
  //   }
  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.isFormSubmited) {
      this.setState({
        isFormSubmited: true,
      });
    }
  }

  render() {
    const { val, isFormSubmited } = this.state; //pobieramy val z this.state, destrukturyzacja
    console.log(val);

    return (
      <>
        <h1>Kup bilet na horror</h1>
        {/* <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            onChange={this.handleChange.bind(this)}
            id="inputOne"
            type="checkbox"
            value={val}
          />
          <label htmlFor="inputOne">Mam co najmniej 16 lat</label>
          <br></br>
          <button type="submit">Kup bilet</button>
        </form> */}
        <OrderForm
          change={this.handleChange.bind(this)}
          submit={this.handleSubmit.bind(this)}
          value={val}
        />
        {/* <Panel valueV2={this.state.val} /> */}
        {displayMessage(val, isFormSubmited)}
      </>
    );
  }
}
ReactDOM.render(<TicketShop />, document.getElementById("root"));
