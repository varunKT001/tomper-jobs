import Logo from './Logo';
import NavLinks from './NavLinks';
import { FaTimes } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/SmallSidebar';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebar } from '../redux/user/userSlice';

export default function SmallSidebar() {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((store) => store.user);

  function toggle() {
    dispatch(toggleSidebar());
  }

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'
        }
      >
        <div className='content'>
          <button className='close-btn' onClick={toggle}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks toggle={toggle} />
        </div>
      </div>
    </Wrapper>
  );
}
