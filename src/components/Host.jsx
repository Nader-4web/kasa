import '../style/Host.css';
import './Main.jsx';
import './InfoAppart';

function Host(props) {
  const rangeRating = [1, 2, 3, 4, 5];

  return (
    <div className="block-host">
      <div className="name-pic">
        <p className="name">{props.host.name}</p>
        <div>
          <img className="host-pic" src={props.host.picture} alt="host" />
        </div>
      </div>
      <div className="stars">
        {rangeRating.map((star, index) =>
          props.rating >= star ? (
            <div key={`${index}-${star}`} className="star-on">
              ★
            </div>
          ) : (
            <div key={`${index}-${star}`} className="star-off">
              ★
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Host;
