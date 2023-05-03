import Navbar from '../components/Navbar.jsx';
import SlideShow from '../components/SlideShow.jsx';
import InfoAppart from '../components/InfoAppart.jsx';
import Host from '../components/Host.jsx';
import Collapse from '../components/Collapse.jsx';
import Footer from '../components/Footer.jsx';
import '../style/Appartment.css';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

function Appartment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams('id');
  const [flat, setFlat] = useState();

  function fetchAppartment() {
    fetch('../../datas/datas.json')
      .then((res) => res.json())
      .then((appartments) => {
        const appartment = appartments.find((appart) => appart.id === id);
        console.log(appartment);
        if (!appartment) {
          return (window.location.href = '/introuvable');
        }
        setFlat(appartment);
      })

      .catch((error) => console.log(error));
  }

  useEffect(fetchAppartment, []);

  if (flat == null) return <div>Chargement...</div>;
  return (
    <div>
      <Navbar />
      <SlideShow pictures={flat.pictures} />
      <div className="block-info">
        <InfoAppart
          title={flat.title}
          location={flat.location}
          name={flat.host.name}
          host={flat.host}
        />
        <Host
          host={flat.host}
          name={flat.host.name}
          rating={flat.rating}
          picture={flat.host.picture}
        />
      </div>
      <div className="block-desc-equip">
        <Collapse title="Description" description={flat.description} />
        <Collapse title="Equipements" equipments={flat.equipments} />
      </div>
      <Footer />
    </div>
  );
}
export default Appartment;
