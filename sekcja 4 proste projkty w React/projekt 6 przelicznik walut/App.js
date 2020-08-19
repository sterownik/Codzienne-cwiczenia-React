const Currencies = (props) => {
  let currencies = props.currencies;
  currencies = currencies.map((item) => {
    return (
      <div key={item.id}>
        <p key={item.id}>
          {item.name}: {((props.value / item.ratio) * props.price).toFixed(2)}
        </p>
      </div>
    );
  });
  return currencies;
};

class ExchangeApp extends React.Component {
  state = {
    value: 0,
    product: "gas",
  };
  // jeslli nie mamy tych do podamy to bierze to
  static defaultProps = {
    currencies: [
      { id: 1, name: "Dolar", ratio: 3.66 },
      { id: 2, name: "Euro", ratio: 4.4 },
      { id: 3, name: "Funt", ratio: 4.86 },
      { id: 4, name: "Złotówki", ratio: 1 },
    ],
    price: {
      electricity: 0.5,
      gas: 4.76,
      oranges: 3.76,
    },
  };

  insertSuffix() {
    if (this.state.product === "gas") {
      return <em>Litrów</em>;
    } else if (this.state.product === "electricity") {
      return <em>kWh</em>;
    } else if (this.state.product === "oranges") {
      return <em>kg</em>;
    }
  }

  handleChangeCurrency = (e) => {
    this.setState({
      product: e.target.value,
    });
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };
  selectPrice(select) {
    console.log(select);
    // wchodzi do odpowiedniej wartosci
    return this.props.price[select];
  }

  render() {
    const { value, product } = this.state;
    return (
      <>
        <label>
          {" "}
          Wybierz produkt
          <select onChange={this.handleChangeCurrency} value={product}>
            <option value="electricity">Prąd</option>
            <option value="gas">Benzyna</option>
            <option value="oranges">Pomarańcze</option>
          </select>
          <br />
        </label>

        <label>
          <input onChange={this.handleChange} type="number" value={value} />

          {this.insertSuffix()}
        </label>
        <Currencies
          price={this.selectPrice(product)}
          value={value}
          currencies={this.props.currencies}
        />
      </>
    );
  }
}

ReactDOM.render(<ExchangeApp />, document.getElementById("root"));
