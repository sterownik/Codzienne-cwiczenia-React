class App extends React.Component {
  handleClicklick = (id) => {
    const items = this.state.items.map((item) => {
      if (id === item.id) {
        item.active = !item.active;
      }
      return item;
    });
    this.setState({
      items: items,
    });
  };
  state = {
    items: [
      { id: 0, name: "herbata", active: true },
      { id: 1, name: "ziemniaki", active: false },
      { id: 2, name: "kasza", active: false },
      { id: 3, name: "zupa wodna", active: false },
      { id: 4, name: "wrzątek", active: false },
      { id: 5, name: "chleb", active: true },
    ],
  };
  render() {
    return (
      <>
        <Header items={this.state.items}></Header>
        <ListItem click={this.handleClicklick} items={this.state.items} />
      </>
    );
  }
}
