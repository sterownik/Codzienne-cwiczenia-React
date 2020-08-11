//komponent funkcyjny dużą literą latwiejszy

const Header = () => {
  return <h>Witaj na stronie</h>;
};
//renderowanie do strony tego kompnenntu co stworzylismy
// ReactDOM.render(<App />, document.getElementById("root"));

//komponent klasowy wiecej mozliwosci takich jak state, gdy bedziemy potrzebowalli wiecej funkcji to to jak zmieni sie state to na nowo render

class Blog extends React.Component {
  state = {
    number: 0,
  };
  // podstawowa metoda render
  //state do tego jak cos sie zmienia
  render() {
    return (
      <section>
        <h2>artykul</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste alias
          facere, aut, consequatur porro ipsa repellendus enim numquam explicabo
          vel pariatur! Qui repudiandae ut optio voluptas cum quo hic
          perferendis.
        </p>
      </section>
    );
  }
}
//zwraca nam dwa zagniezone elementy
const App = () => {
  return (
    <div>
      <Header />
      <Blog />
    </div>
  );
};
// ReactDOM.render(<App />, document.getElementById("root"));
const ItemList = (props) => {
  return (
    <li>
      {props.name}, {props.example}
    </li>
  );
};
// odbieranie propsów

//zmiana na komponent klasowy props automatycznie przechodzi przez this w funkcyjnym nie
class ItemList2 extends React.Component {
  render() {
    return (
      <li>
        {this.props.name}, {this.props.example}
      </li>
    );
  }
}

class ShoppingList extends React.Component {
  state = {
    items1: "ogórki",
    items2: "sok",
    items3: "cos do picia",
  };
  // przekazywanie propsów niżej
  render() {
    return (
      <>
        <h1>Lista zakupów</h1>
        <ul>
          <ItemList2 name={this.state.items1} example={2 * 3} />
          <ItemList2 name={this.state.items2} example={2 * 4} />
          <ItemList2 name={this.state.items3} example={2 * 5} />
        </ul>
      </>
    );
  }
}
ReactDOM.render(<ShoppingList />, document.getElementById("root"));
