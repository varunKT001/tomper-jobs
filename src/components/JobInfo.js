import Wrapper from '../assets/wrappers/JobInfo';

export default function JobInfo({ icon, text }) {
  return (
    <Wrapper>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </Wrapper>
  );
}
