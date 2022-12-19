import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <div className="details">
        <div className="top">
          <div className="country">
            <div>
              <FontAwesomeIcon icon={faLocationPin} />
              <span>{props.location}</span>
            </div>
            <a href={props.link}>
              <span>View on Google Maps</span>
            </a>
          </div>
          <h2>{props.country}</h2>
          <span>{props.start_date} - {props.end_date}</span>
        </div>
        <div className="content">
          <span>{props.details}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;