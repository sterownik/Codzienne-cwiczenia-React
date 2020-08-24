const Person = (props) => {
  const persons = props.ListPersons;
  const PersonsList = persons.map((item) => {
    return (
      <li key={item.id}>
        {item.name} <button onClick={() => props.click(item.id)}>usuń</button>
      </li>
    );
  });
  return <>{PersonsList}</>;
};

class List extends React.Component {
  state = {
    persons: [
      { id: 12, name: "Jan K" },
      { id: 2, name: "Piotr C" },
      { id: 3, name: "Marysia W" },
      { id: 4, name: "John S" },
      { id: 5, name: "Marcin P" },
      { id: 6, name: "Wojtek G" },
      { id: 7, name: "Łukasz K" },
      { id: 8, name: "Jan B" },
      { id: 9, name: "Józef W" },
    ],
  };
  handleDelete = (id) => {
    const List = this.state.persons;
    const ListToSee = List.filter((item) => {
      return item.id != id;
    });
    // metoda splice people.splice(index,1) usuwa od indexu jeden element

    this.setState({
      persons: ListToSee,
    });
  };
  render() {
    return (
      <>
        <ul>
          <Person click={this.handleDelete} ListPersons={this.state.persons} />
        </ul>
      </>
    );
  }
}
ReactDOM.render(<List />, document.getElementById("root"));
