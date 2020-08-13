const data = {
  users: [
    {
      id: 1,
      age: 29,
      name: "Arek",
      sex: "male",
    },
    {
      id: 2,
      age: 33,
      name: "Marta",
      sex: "female",
    },
    {
      id: 3,
      age: 18,
      name: "Stasia",
      sex: "female",
    },
    {
      id: 4,
      age: 25,
      name: "Marian",
      sex: "male",
    },
    {
      id: 5,
      age: 21,
      name: "Anna",
      sex: "female",
    },
  ],
};
const Buttons = (props) => {
  return (
    <>
      <button onClick={props.click}>{props.name}</button>
    </>
  );
};

const Item = (props) => {
  const { name, age, sex } = props.user;
  return (
    <div>
      <h1>Użytkownik {name}</h1>
      <p>Informacje o użytkowniku:</p>
      <p>
        Wiek użytkownika <strong>{age}</strong>
      </p>
      <p>Płeć użytkownika {sex}</p>
    </div>
  );
};

class App extends React.Component {
  handleUsersFilter(type) {
    this.setState({
      select: type,
    });
  }

  state = {
    select: "all",
  };
  usersList() {
    let users = this.props.data.users;

    switch (this.state.select) {
      case "female":
        users = users.filter((user) => user.sex === "female");
        break;
      case "male":
        users = users.filter((user) => user.sex === "male");
        break;
      case "all":
        break;
    }
    users = users.map((item) => <Item key={item.id} user={item} />);
    return users;
  }

  render() {
    let users = this.props.data.users;

    return (
      <>
        <Buttons
          click={this.handleUsersFilter.bind(this, "all")}
          name={"wyświetl wszystkich"}
        />
        <Buttons
          click={this.handleUsersFilter.bind(this, "female")}
          name={"wyświetl tylko kobiety"}
        />
        <Buttons
          name={"wyświetl tylko mężczyzn"}
          click={this.handleUsersFilter.bind(this, "male")}
        />
        <ul>{this.usersList()}</ul>
      </>
    );
  }
}

ReactDOM.render(<App data={data} />, document.getElementById("root"));
