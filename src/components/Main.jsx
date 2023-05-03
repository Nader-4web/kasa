import '../style/Main.css';
import Card from './Card/index.jsx';
// import { Link } from 'react-router-dom';
import './InfoAppart.jsx';
import { useState } from 'react';
import { useEffect } from 'react';

function Main() {
  const [flats, setFlats] = useState([]);

  function fetchAppartment() {
    fetch('../../datas/datas.json')
      .then((res) => res.json())
      .then((appartments) => {
        setFlats(appartments);
      })

      .catch((error) => console.log(error));
  }

  useEffect(fetchAppartment, []);

  return (
    <div className="main">
      {flats.map((appartment, id) => (
        <div key={id}>
          <Card
            cover={appartment.cover}
            title={appartment.title}
            id={appartment.id}
            tags={appartment.tags}
            pictures={appartment.pictures}
            host={appartment.host}
            rating={appartment.rating}
            location={appartment.location}
            equipments={appartment.equipments}
            description={appartment.description}
          />
        </div>
      ))}
    </div>
  );
}
export default Main;
