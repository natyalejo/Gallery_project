import { Link } from "react-router-dom";
import {Vacaciones1} from './Vacaciones1';
import {Vacaciones2} from './Vacaciones2';
import {Vacaciones3} from './Vacaciones3';
import {Vacaciones4} from './Vacaciones4';
import {Vacaciones5} from './Vacaciones5';
import {Vacaciones6} from './Vacaciones6';

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/vacaciones1' className='links'>
        <figure className='thumbnail-image-size'>
          <Vacaciones1 />
          <figcaption>Vacaciones 1</figcaption>
        </figure>
      </Link>
      <Link to='/vacaciones2' className='links'>
        <figure className='thumbnail-image-size'>
          <Vacaciones2 />
          <figcaption>Vacaciones 2</figcaption>
        </figure>
      </Link>
      <Link to='/vacaciones3' className='links'>
        <figure className='thumbnail-image-size'>
          <Vacaciones3 />
          <figcaption>Vacaciones 3</figcaption>
        </figure>
      </Link>
      <Link to='/vacaciones4' className='links'>
        <figure className='thumbnail-image-size'>
          <Vacaciones4 />
          <figcaption>Coveñas 4</figcaption>
        </figure>
      </Link>
      <Link to='/vacaciones5' className='links'>
        <figure className='thumbnail-image-size'>
          <Vacaciones5 />
          <figcaption>Vacaciones 5</figcaption>
        </figure>
      </Link>
      <Link to='/vacaciones6' className='links'>
        <figure className='thumbnail-image-size'>
          <Vacaciones6 />
          <figcaption>Vacaciones  6</figcaption>
        </figure>
      </Link>
    </div>
  )
}