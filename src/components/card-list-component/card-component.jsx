const Card = ({ monster: { id, name, email } }) => (
  //  const [id, email, name] = mon;
  <div className="card-container">
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}/?set=set2&size=180x180`}
    />
    <h3>{name}</h3>
    <p>{email}</p>
  </div>
);

export default Card;
