import React from "react";

const Pagination = ({ previous, next, onPrevious, onNext }) => {
  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul class="pagination justify-content-center">
        {previous ? (
          <li class="page-item">
            <button class="page-link" onClick={handlePrevious}>
              Previous
            </button>
          </li>
        ) : (
          ""
        )}

        {next ? (
          <li class="page-item">
            <button class="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
};

export default Pagination;
