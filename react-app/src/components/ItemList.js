export const ItemList = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={props.keyFn(item)}>{props.contentFn(item)}</li>
      ))}
    </ul>
  );
};

ItemList.defaultProps = {
  keyFn: (i) => i.id,
};
