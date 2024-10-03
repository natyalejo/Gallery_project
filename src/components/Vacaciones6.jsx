import vacaciones6 from '../assets/img/vacaciones6.jpg';
import PropTypes from 'prop-types';

export const Vacaciones6 = ( { className } ) => {
  return (
    <img src={vacaciones6} alt="Vacaciones de San Bernandino" className={className} />
  )
}

Vacaciones6.propTypes = {
  className: PropTypes.string
}