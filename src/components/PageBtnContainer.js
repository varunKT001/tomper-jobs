import { useState, useEffect } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useSelector, useDispatch } from 'react-redux';
import { changePage, getAllJobs } from '../redux/allJobs/allJobsSlice';

export default function PageBtnContainer() {
  const dispatch = useDispatch();
  const { numOfPages, page } = useSelector((store) => store.allJobs);
  const [pages, setPages] = useState([]);

  function nextPage() {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    handlePageChange(newPage);
  }

  function prevPage() {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    handlePageChange(newPage);
  }

  function handlePageChange(pageNumber) {
    dispatch(changePage(pageNumber));
  }

  useEffect(() => {
    setPages(
      Array.from({ length: numOfPages }, (_, index) => {
        return index + 1;
      })
    );
  }, [numOfPages]);

  return (
    <Wrapper>
      <button className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='btn-container'>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              className={pageNumber === page ? 'pageBtn active' : 'pageBtn'}
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button className='next-btn' onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
}
