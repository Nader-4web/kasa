import '../style/notfound.css';
import { Link } from 'react-router-dom';
import imgError from '../assets/error.png';
import imgMobilEerror from '../assets/error.png';

function Notfound() {
  return (
    <div className="errorblock">
      <picture>
        <source media="(max-width: 655px)" srcSet={imgMobilEerror} />
        <img className="imgerror" src={imgError} alt="error" />
      </picture>
      <h1 className="oops">Oops, la page que vous demandez n'existe pas.</h1>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Notfound;
