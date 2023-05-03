import '../../style/card.css';
import { Link } from 'react-router-dom';

function Card(props) {
  const id = props.id;

  return (
    <div>
      <Link to={`/Appartment/${id}`}>
        <div className="card">
          <img className="img-appart" src={props.cover} alt="appartement" />
          <p className="title">{props.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default Card;
