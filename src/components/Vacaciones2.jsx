import vacaciones2 from '../assets/img/vacaciones2.jpg';
import PropTypes from 'prop-types';

export const Vacaciones2 = ( { className } ) => {
  return (
    <img src={vacaciones2} alt="Vacaciones de San Bernandino" className={className} />
  )
}

Vacaciones2.propTypes = {
  className: PropTypes.string
}