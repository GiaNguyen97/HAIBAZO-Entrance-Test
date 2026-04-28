const Pagination = ({ page, size, total, onPageChange }) => {
  const totalPages = Math.max(1, Math.ceil(total / size));

  return (
    <div className="pagination">
      <div className="pagination-info">
        Showing <strong>{page * size + 1}</strong> to <strong>{Math.min((page + 1) * size, total)}</strong> of <strong>{total}</strong> results
      </div>
      <div className="pagination-buttons">
        <button
          className="page-btn"
          disabled={page === 0}
          onClick={() => onPageChange(page - 1)}
        >
          Previous
        </button>
        <span className="page-btn active">{page + 1}</span>
        <button
          className="page-btn"
          disabled={page >= totalPages - 1}
          onClick={() => onPageChange(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
