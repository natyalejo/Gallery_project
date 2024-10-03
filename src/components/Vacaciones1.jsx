import vacaciones1 from '../assets/img/vacaciones1.jpg';
import PropTypes from 'prop-types';

export const Vacaciones1 = ( { className } ) => {
  return (
    <img src={vacaciones1} alt="vacaciones de San bernandino" className={className} />
  )
}

Vacaciones1.propTypes = {
  className: PropTypes.string
}