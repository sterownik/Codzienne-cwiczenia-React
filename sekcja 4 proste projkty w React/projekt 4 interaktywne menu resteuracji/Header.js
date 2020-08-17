const Header = (props) => {
  let howMuch = props.items.filter((item) => item.active);

  return (
    <>
      <header>
        Podsumowanie zamówienia <br /> Wielkość zamówienia:{" "}
        <span> {howMuch.length}</span> <br />
        Do zapłaty:{" "}
        <span>
          {" "}
          {howMuch.length
            ? `${howMuch.length * 10} złotych`
            : "nie kupujesz to nie płacisz"}
        </span>
      </header>
    </>
  );
};
