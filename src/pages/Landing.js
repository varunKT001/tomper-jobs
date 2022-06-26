import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';

export default function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            nostrum voluptates minus nihil sed soluta hic quos atque natus et.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
}
