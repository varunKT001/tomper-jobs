import { useEffect } from 'react';
import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import {
  handleChange,
  clearValues,
  createJob,
  editJob,
} from '../../redux/job/jobSlice';

export default function AddJob() {
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);

  function handleSubmit(e) {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      return toast.error('Please Fill Out All Fields');
    }
    if (isEditing) {
      return dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
    }
    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  }
  function handleJobInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  }
  function clear() {
    dispatch(clearValues());
  }

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <form className='form'>
        <h3>{isEditing ? 'edit job' : 'add job'}</h3>
        <div className='form-center'>
          {/* ////////////////// */}
          {/* //// POSITION //// */}
          {/* ////////////////// */}
          <FormRow
            type='text'
            name='position'
            value={position}
            handleChange={handleJobInput}
          />
          {/* ///////////////// */}
          {/* //// COMPANY //// */}
          {/* ///////////////// */}
          <FormRow
            type='text'
            name='company'
            value={company}
            handleChange={handleJobInput}
          />
          {/* ////////////////////// */}
          {/* //// JOB LOCATION //// */}
          {/* ////////////////////// */}
          <FormRow
            type='text'
            labelText='job location'
            name='jobLocation'
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* //////////////////// */}
          {/* //// JOB STATUS //// */}
          {/* //////////////////// */}
          <FormRowSelect
            name='status'
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* //////////////////// */}
          {/* //// JOB TYPE //// */}
          {/* //////////////////// */}
          <FormRowSelect
            name='jobType'
            labelText='job type'
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
              onClick={clear}
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={isLoading}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
}
