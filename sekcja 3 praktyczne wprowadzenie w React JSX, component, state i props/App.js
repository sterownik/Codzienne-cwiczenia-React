// console.log(React);
// console.log(ReactDOM);

const element = <div>Pierwszy element React</div>;

const element2 = React.createElement("div", null, "Pierwszy element div"); //to samo co wyzej

const element3 = (
  <div>
    <p>Tekst</p>
  </div>
);

// pusty tag React.Fragment className to jest class
const element5 = (
  <React.Fragment>
    <section className="wojtek"></section>
    <section></section>
  </React.Fragment>
);

const header = <h1 className="title">Witaj na stronie</h1>;
const text = "wojtek";

const classBig = "big"; //przekazanie klasy ze stylow css
const main = (
  <div>
    <h1
      onClick={() => {
        alert("cono2");
      }}
      className="red"
    >
      Pierwszy artykuł
    </h1>
    <p>{text}</p>
  </div>
);
function click() {
  alert("kliknales");
}
const footer = (
  <footer>
    <p className={classBig}>Stopka</p>
  </footer>
);

const app = [header, main, footer]; //umieszamy ta tablice z tymi elemenatmi react
//renderowanie na stronie do roota

ReactDOM.render(app, document.getElementById("root"));
