import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authorService } from '../services/authorService';
import Spinner from '../components/Spinner';

const AuthorFormPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEditMode = Boolean(id);
  const [loading, setLoading] = useState(isEditMode);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  useEffect(() => {
    if (isEditMode) {
      const fetchAuthor = async () => {
        try {
          // Assuming we can fetch single or we find from list. 
          // Since we don't have a getAuthorById API, we fetch the list and find it.
          // In a real app, there should be a GET /api/authors/{id}
          const res = await authorService.getAuthors(0, 1000);
          const author = res.data.find(a => a.id === parseInt(id));
          if (author) {
            reset({ name: author.name });
          } else {
            toast.error('Author not found');
            navigate('/authors');
          }
        } catch (error) {
          toast.error('Failed to load author details');
          navigate('/authors');
        } finally {
          setLoading(false);
        }
      };
      fetchAuthor();
    }
  }, [id, reset, navigate, isEditMode]);

  const onSubmit = async (formData) => {
    try {
      if (isEditMode) {
        await authorService.updateAuthor(id, formData);
        toast.success('Author updated successfully');
      } else {
        await authorService.createAuthor(formData);
        toast.success('Author created successfully');
      }
      navigate('/authors');
    } catch (error) {
      toast.error(error.response?.data?.name || 'An error occurred');
    }
  };

  return (
    <div className="card" style={{ maxWidth: '600px', margin: '0 auto' }}>
      <div className="card-toolbar">
        <h3 className="card-toolbar-title">{isEditMode ? 'Edit Author' : 'Create New Author'}</h3>
      </div>
      
      {loading ? <Spinner /> : (
        <form onSubmit={handleSubmit(onSubmit)} style={{ padding: '24px' }}>
          <div className="form-group">
            <label className="form-label">Name <span>*</span></label>
            <input 
              type="text" 
              className={`form-input ${errors.name ? 'error' : ''}`} 
              placeholder="Enter author's name"
              {...register("name", { required: "Please enter name" })} 
            />
            {errors.name && <div className="form-error">⚠️ {errors.name.message}</div>}
          </div>
          
          <div style={{ display: 'flex', gap: '10px', marginTop: '24px', justifyContent: 'flex-end' }}>
            <button type="button" className="btn btn-ghost" onClick={() => navigate('/authors')}>Cancel</button>
            <button type="submit" className="btn btn-primary">{isEditMode ? 'Save Changes' : 'Create Author'}</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AuthorFormPage;
