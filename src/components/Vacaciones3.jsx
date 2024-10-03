import vacaciones3 from '../assets/img/vacaciones3.jpg';
import PropTypes from 'prop-types';

export const Vacaciones3 = ( { className } ) => {
  return (
    <img src={vacaciones3} alt="Vacaciones de San Bernandino" className={className} />
  )
}

Vacaciones3.propTypes = {
  className: PropTypes.string
}