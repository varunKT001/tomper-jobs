import { useState } from 'react';
import Logo from './Logo';
import Wrapper from '../assets/wrappers/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { clearStore, toggleSidebar } from '../redux/user/userSlice';
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa';

export default function Navbar() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const [showLogout, setShowLogout] = useState(false);

  function sidebarToggle() {
    dispatch(toggleSidebar());
  }
  function dropdownToggle() {
    setShowLogout((prev) => !prev);
  }
  function logout() {
    dispatch(clearStore('Logout Successful...'));
  }

  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={sidebarToggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button type='button' className='btn' onClick={dropdownToggle}>
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button type='button' className='dropdown-btn' onClick={logout}>
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
