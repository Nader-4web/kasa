import Navbar from '../components/Navbar.jsx';
import Banner from '../components/Banner.jsx';
import Collapse from '../components/Collapse.jsx';
import Footer from '../components/Footer.jsx';
import '../style/About.css';
import '../components/Main.jsx';
import banner from '../assets/bannerabout.png';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Banner imageSource={banner} altText="banner" className="about-banner" />
      <div className="container">
        <Collapse
          title={'Fiabilité'}
          fiabilite={
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'
          }
        />
        <Collapse
          title={'Respect'}
          respect={
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
          }
        />
        <Collapse
          title={'Service'}
          service={
            "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
          }
        />
        <Collapse
          title={'Sécurité'}
          securite={
            "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          }
        />
      </div>
      <Footer />
    </div>
  );
}

export default About;
