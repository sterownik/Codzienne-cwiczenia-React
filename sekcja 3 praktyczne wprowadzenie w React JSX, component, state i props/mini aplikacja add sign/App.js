const PanelResult = (props) => {
  return <h1>{props.name}</h1>;
  //dokladnie z innego elementu z propsow
};
class Przycisk extends React.Component {
  constructor(props) {
    super(props); //wywoalanie na poczatku super bo nie ma thisa

    this.state = {
      //dolozy sie do obiektu ten state
      text: "",
      btn: "uruchom",
    };
  }
  //   state = {//zamiast konstruktora tu umieszczamy tylko to co bedzie sie zmienialo
  //     text: "a",
  //   };
  //   handleClick = () => {
  //     const letter = "a";
  //     //zmiana stanu jak ma wygladac text po zmianie co sie ma stac
  //     //za kazdym klikiem ustawia nowy state
  //     this.setState({
  //       text: this.state.text + letter,
  //     });
  //   }; funkcja strzalkow

  handleClick() {
    console.log(this);

    const letter = Math.floor(Math.random() * 11);
    // const letter = "a";
    //zmiana stanu jak ma wygladac text po zmianie co sie ma stac
    //za kazdym klikiem ustawia nowy state
    // this.setState({
    //   text: this.state.text + letter,
    // });

    //ta funkcja zwraca nowy obiekt jesli nawias okragly to return
    this.setState(() => ({
      //   text: this.state.text + letter,//dodawanie a do stringa
      text: this.state.text + letter, //losowanko
    })); //odpowiada za odswiezenie render
  }
  render() {
    const btnName = "stworz liczbe";
    return (
      <>
        {/* <h1>{this.state.text}</h1> */}
        {/* musimy dodac bind jesli nie ma funckji strzalkowiej bo this undefined */}
        <div onClick={this.handleClick.bind(this)} className="btn">
          {/* {this.props.btnTitle} jak z propsow*/}
          {/* przez this bo w klasie */}
          {/* {btnName} z render */}
          {this.state.btn}
          {/* ze state */}
        </div>
        <PanelResult name={this.state.text} />
      </>
    );
  }
}

ReactDOM.render(
  <Przycisk btnTitle="dodaj cyfre" />,
  document.getElementById("root")
);
