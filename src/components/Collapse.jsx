import { useState } from 'react';
import '../style/collapse.css';
import '../components/Main.jsx';

function Collapse({
  title,
  description,
  equipments,
  fiabilite,
  respect,
  service,
  securite,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const showText = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="collapse">
        <p>{title}</p>
        <i
          className={`fa-solid fa-chevron-down ${isOpen && 'clicked'}`}
          onClick={() => showText(true)}
        ></i>
      </div>
      {isOpen && (
        <div className="description">
          {fiabilite}
          {equipments?.map((el, index) => (
            <ul className="equipments-list" key={`${index}-${el}`}>
              <li>{el}</li>
            </ul>
          ))}
          {respect} {service} {securite}
          {description}
        </div>
      )}
    </div>
  );
}

export default Collapse;
