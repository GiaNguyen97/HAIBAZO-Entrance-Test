import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { reviewService } from '../services/reviewService';
import Pagination from '../components/Pagination';
import ConfirmModal from '../components/ConfirmModal';
import Spinner from '../components/Spinner';

const ReviewsPage = () => {
  const [data, setData] = useState({ data: [], total: 0 });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: null, title: '' });
  const navigate = useNavigate();

  const fetchReviews = async (pageIndex = page) => {
    try {
      setLoading(true);
      const res = await reviewService.getReviews(pageIndex, 10);
      setData(res);
      setPage(res.page);
    } catch (error) {
      toast.error('Failed to load reviews');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const confirmDelete = async () => {
    try {
      await reviewService.deleteReview(deleteModal.id);
      toast.success('Review deleted successfully');
      setDeleteModal({ isOpen: false, id: null, title: '' });
      fetchReviews(0);
    } catch (error) {
      toast.error('Cannot delete review');
      setDeleteModal({ isOpen: false, id: null, title: '' });
    }
  };

  return (
    <div className="card">
      <div className="card-toolbar">
        <h3 className="card-toolbar-title">Reviews List</h3>
      </div>
      
      {loading ? <Spinner /> : (
        <>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Book</th>
                  <th>Author</th>
                  <th>Review</th>
                  <th style={{ width: '150px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.data.length === 0 ? (
                  <tr>
                    <td colSpan="5">
                      <div className="empty-state">
                        <div className="empty-state-icon">📭</div>
                        <p>No reviews found. Create one!</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  data.data.map((item, index) => (
                    <tr key={item.id}>
                      <td className="td-number">{page * 10 + index + 1}</td>
                      <td><strong>{item.bookTitle}</strong></td>
                      <td>{item.authorName}</td>
                      <td>
                        <div style={{ maxWidth: '300px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          {item.review}
                        </div>
                      </td>
                      <td>
                        <div className="td-actions">
                          <button className="btn btn-edit btn-sm" onClick={() => navigate(`/reviews/edit/${item.id}`)}>Edit</button>
                          <button className="btn btn-delete btn-sm" onClick={() => setDeleteModal({ isOpen: true, id: item.id, title: 'this review' })}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {data.total > 0 && (
            <Pagination page={page} size={10} total={data.total} onPageChange={fetchReviews} />
          )}
        </>
      )}

      {/* Delete Confirm Modal */}
      <ConfirmModal 
        isOpen={deleteModal.isOpen}
        title="Delete Review"
        message={`Are you sure you want to delete ${deleteModal.title}? This action cannot be undone.`}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteModal({ isOpen: false, id: null, title: '' })}
      />
    </div>
  );
};

export default ReviewsPage;
