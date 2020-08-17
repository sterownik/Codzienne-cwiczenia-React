class App extends React.Component {
  click() {
    console.log("wojtek");

    setState({
      active: !this.state.active,
    });
  }
  state = {
    items: [
      { id: 1, name: "herbata", active: true },
      { id: 2, name: "ziemniaki", active: false },
      { id: 3, name: "kasza", active: false },
      { id: 4, name: "zupa wodna", active: false },
      { id: 5, name: "wrzątek", active: false },
      { id: 6, name: "chleb", active: true },
    ],
  };
  render() {
    return (
      <>
        <Header items={this.state.items}></Header>
        <ListItem click={this.click.bind(this)} items={this.state.items} />
      </>
    );
  }
}
