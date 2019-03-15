import React from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { Link } from 'react-router-dom';
import './Pagination.scss';

const Pagination = ({ page = 1, lastPage }) => {
  return (
    <div className="Pagination">
      {page === 1 ? (
        <div className="disabled-btn">
          <MdChevronLeft />
        </div>
      ) : (
        <Link to={`/?page=${page - 1}`} disabled={page === 1}>
          <MdChevronLeft />
        </Link>
      )}
      <div className="page">
        <b>{page}</b> 페이지
      </div>
      {page >= lastPage ? (
        <div className="disabled-btn">
          <MdChevronRight />
        </div>
      ) : (
        <Link to={`/?page=${page + 1}`}>
          <MdChevronRight />
        </Link>
      )}
    </div>
  );
};

export default Pagination;
