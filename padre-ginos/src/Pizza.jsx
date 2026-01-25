function Pizza(props) {
  const imgSrc = props.image ? props.image : "https://picsum.photos/200";

  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.description}</p>
      <img src={imgSrc} alt={props.name} />
    </div>
  );
}

export default Pizza;
