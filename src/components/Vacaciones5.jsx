import vacaciones5 from '../assets/img/vacaciones5.jpg';
import PropTypes from 'prop-types';

export const Vacaciones5 = ( { className } ) => {
  return (
    <img src={vacaciones5} alt="Vacaciones de San Bernandino" className={className} />
  )
}

Vacaciones5.propTypes = {
  className: PropTypes.string
}