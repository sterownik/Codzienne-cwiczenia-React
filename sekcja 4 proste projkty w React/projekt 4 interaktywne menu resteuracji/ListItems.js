const ListItem = (props) => {
  let items = props.items;
  console.log();

  items = items.map((item) => {
    return (
      <>
        <Item key={item.id} name={item.name} active={item.active}></Item>
      </>
    );
  });

  return (
    <>
      <h1>Twoje zamówienie</h1>
      <ul>{items}</ul>
    </>
  );
};
