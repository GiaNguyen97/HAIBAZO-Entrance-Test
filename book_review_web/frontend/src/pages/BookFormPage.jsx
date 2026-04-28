import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { bookService } from '../services/bookService';
import { authorService } from '../services/authorService';
import Spinner from '../components/Spinner';

const BookFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  
  const [loading, setLoading] = useState(isEditMode);
  const [authors, setAuthors] = useState([]);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const authorsRes = await authorService.getAuthors(0, 100);
        setAuthors(authorsRes.data);

        if (isEditMode) {
          const res = await bookService.getBooks(0, 1000);
          const book = res.data.find(b => b.id === parseInt(id));
          if (book) {
            reset({ title: book.title, authorId: book.authorId });
          } else {
            toast.error('Book not found');
            navigate('/books');
          }
        }
      } catch (error) {
        toast.error('Failed to load data');
        navigate('/books');
      } finally {
        setLoading(false);
      }
    };
    fetchInitialData();
  }, [id, reset, navigate, isEditMode]);

  const onSubmit = async (formData) => {
    try {
      if (isEditMode) {
        await bookService.updateBook(id, formData);
        toast.success('Book updated successfully');
      } else {
        await bookService.createBook(formData);
        toast.success('Book created successfully');
      }
      navigate('/books');
    } catch (error) {
      toast.error(error.response?.data?.title || error.response?.data?.authorId || 'An error occurred');
    }
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="card-toolbar">
        <h3 className="card-toolbar-title">{isEditMode ? 'Edit Book' : 'Create New Book'}</h3>
      </div>
      
      {loading ? <Spinner /> : (
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '24px' }}>
          <div className="form-group">
            <label className="form-label">Title <span>*</span></label>
            <input 
              type="text" 
              className={`form-input ${errors.title ? 'error' : ''}`} 
              placeholder="Enter book title"
              {...register("title", { required: "Please enter title" })} 
            />
            {errors.title && <div className="form-error">⚠️ {errors.title.message}</div>}
          </div>
          
          <div className="form-group">
            <label className="form-label">Author <span>*</span></label>
            <select 
              className={`form-select ${errors.authorId ? 'error' : ''}`}
              {...register("authorId", { required: "Please select author" })}
            >
              <option value="">Select an author...</option>
              {authors.map(a => (
                <option key={a.id} value={a.id}>{a.name}</option>
              ))}
            </select>
            {errors.authorId && <div className="form-error">⚠️ {errors.authorId.message}</div>}
          </div>
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '24px', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-ghost" onClick={() => navigate('/books')}>Cancel</button>
            <button type="submit" className="btn btn-primary">{isEditMode ? 'Save Changes' : 'Create Book'}</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookFormPage;
