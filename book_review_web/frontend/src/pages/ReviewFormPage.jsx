import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { reviewService } from '../services/reviewService';
import { bookService } from '../services/bookService';
import Spinner from '../components/Spinner';

const ReviewFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  
  const [loading, setLoading] = useState(isEditMode);
  const [books, setBooks] = useState([]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const booksRes = await bookService.getBooks(0, 100);
        setBooks(booksRes.data);

        if (isEditMode) {
          const res = await reviewService.getReviews(0, 1000);
          const review = res.data.find(r => r.id === parseInt(id));
          if (review) {
            reset({ bookId: review.bookId, review: review.review });
          } else {
            toast.error('Review not found');
            navigate('/reviews');
          }
        }
      } catch (error) {
        toast.error('Failed to load data');
        navigate('/reviews');
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [id, reset, navigate, isEditMode]);

  const onSubmit = async (formData) => {
    try {
      if (isEditMode) {
        await reviewService.updateReview(id, formData);
        toast.success('Review updated successfully');
      } else {
        await reviewService.createReview(formData);
        toast.success('Review created successfully');
      }
      navigate('/reviews');
    } catch (error) {
      toast.error(error.response?.data?.review || error.response?.data?.bookId || 'An error occurred');
    }
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="card-toolbar">
        <h3 className="card-toolbar-title">{isEditMode ? 'Edit Review' : 'Create New Review'}</h3>
      </div>
      
      {loading ? <Spinner /> : (
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '24px' }}>
          <div className="form-group">
            <label className="form-label">Book <span>*</span></label>
            <select 
              className={`form-select ${errors.bookId ? 'error' : ''}`}
              {...register("bookId", { required: "Please select book" })}
            >
              <option value="">Select a book...</option>
              {books.map(b => (
                <option key={b.id} value={b.id}>{b.title}</option>
              ))}
            </select>
            {errors.bookId && <div className="form-error">⚠️ {errors.bookId.message}</div>}
          </div>
          
          <div className="form-group">
            <label className="form-label">Review <span>*</span></label>
            <textarea 
              className={`form-textarea ${errors.review ? 'error' : ''}`} 
              placeholder="Write your review here..."
              {...register("review", { required: "Please enter review" })} 
            />
            {errors.review && <div className="form-error">⚠️ {errors.review.message}</div>}
          </div>
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '24px', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-ghost" onClick={() => navigate('/reviews')}>Cancel</button>
            <button type="submit" className="btn btn-primary">{isEditMode ? 'Save Changes' : 'Create Review'}</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ReviewFormPage;
