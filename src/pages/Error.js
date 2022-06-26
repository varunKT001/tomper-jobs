import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

export default function Error() {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>404</h3>
        <p>The page you are looking for cannot be found</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  );
}
