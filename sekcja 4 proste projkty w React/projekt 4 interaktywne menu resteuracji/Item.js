const Item = (props) => {
  return (
    <li
      className={props.active ? "enabled" : "disabled"}
      onClick={() => props.click(props.id)}
    >
      {props.name}
    </li>
  );
};
