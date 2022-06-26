import { useState, useEffect } from 'react';
import { Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { FormRow } from '../components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../redux/user/userSlice';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, user } = useSelector((store) => store.user);
  const [credentials, setCredentials] = useState(initialState);

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setCredentials((prev) => {
      return { ...prev, [name]: value };
    });
  }

  function toggleMember() {
    setCredentials((prev) => {
      return { ...prev, isMember: !prev.isMember };
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    const { name, email, password, isMember } = credentials;
    if (!email || !password || (!isMember && !name)) {
      return toast.error('Provide all fields');
    }
    if (isMember) {
      return dispatch(loginUser({ email, password }));
    }
    dispatch(registerUser({ name, email, password }));
  }

  useEffect(() => {
    if (user) {
      navigate('/');
    }
    // eslint-disable-next-line
  }, [user]);

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>{credentials.isMember ? 'Login' : 'Register'}</h3>
        {/* ////////////// */}
        {/* //// NAME //// */}
        {/* ////////////// */}
        {!credentials.isMember && (
          <FormRow
            type='text'
            name='name'
            value={credentials.name}
            handleChange={handleChange}
          />
        )}
        {/* /////////////// */}
        {/* //// EMAIL //// */}
        {/* /////////////// */}
        <FormRow
          type='email'
          name='email'
          value={credentials.email}
          handleChange={handleChange}
        />
        {/* ////////////////// */}
        {/* //// PASSWORD //// */}
        {/* ////////////////// */}
        <FormRow
          type='password'
          name='password'
          value={credentials.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block' disabled={isLoading}>
          {isLoading ? 'loading...' : 'submit'}
        </button>
        <p>
          {credentials.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {credentials.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
}
