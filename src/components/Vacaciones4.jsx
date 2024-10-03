import vacaciones4 from '../assets/img/vacaciones4.jpg';
import PropTypes from 'prop-types';

export const Vacaciones4 = ( { className } ) => {
  return (
    <img src={vacaciones4} alt="Vacaciones de San Bernandino" className={className} />
  )
}

Vacaciones4.propTypes = {
  className: PropTypes.string
}