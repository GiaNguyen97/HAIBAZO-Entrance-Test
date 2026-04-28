import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { authorService } from '../services/authorService';
import Pagination from '../components/Pagination';
import ConfirmModal from '../components/ConfirmModal';
import Spinner from '../components/Spinner';

const AuthorsPage = () => {
  const [data, setData] = useState({ data: [], total: 0 });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: null, name: '' });
  const navigate = useNavigate();

  const fetchAuthors = async (pageIndex = page) => {
    try {
      setLoading(true);
      const res = await authorService.getAuthors(pageIndex, 10);
      setData(res);
      setPage(res.page);
    } catch (error) {
      toast.error('Failed to load authors');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthors();
  }, []);

  const confirmDelete = async () => {
    try {
      await authorService.deleteAuthor(deleteModal.id);
      toast.success('Author deleted successfully');
      setDeleteModal({ isOpen: false, id: null, name: '' });
      fetchAuthors(0);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Cannot delete author');
      setDeleteModal({ isOpen: false, id: null, name: '' });
    }
  };

  return (
    <div className="card">
      <div className="card-toolbar">
        <h3 className="card-toolbar-title">Authors List</h3>
      </div>
      
      {loading ? <Spinner /> : (
        <>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Name</th>
                  <th>Books</th>
                  <th style={{ width: '150px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.data.length === 0 ? (
                  <tr>
                    <td colSpan="4">
                      <div className="empty-state">
                        <div className="empty-state-icon">📭</div>
                        <p>No authors found. Create one!</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  data.data.map((author, index) => (
                    <tr key={author.id}>
                      <td className="td-number">{page * 10 + index + 1}</td>
                      <td>{author.name}</td>
                      <td><span className="badge badge-blue">{author.bookCount} books</span></td>
                      <td>
                        <div className="td-actions">
                          <button className="btn btn-edit btn-sm" onClick={() => navigate(`/authors/edit/${author.id}`)}>Edit</button>
                          <button className="btn btn-delete btn-sm" onClick={() => setDeleteModal({ isOpen: true, id: author.id, name: author.name })}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {data.total > 0 && (
            <Pagination page={page} size={10} total={data.total} onPageChange={fetchAuthors} />
          )}
        </>
      )}

      {/* Delete Confirm Modal */}
      <ConfirmModal 
        isOpen={deleteModal.isOpen}
        title="Delete Author"
        message={`Are you sure you want to delete <strong>${deleteModal.name}</strong>? This action cannot be undone.`}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteModal({ isOpen: false, id: null, name: '' })}
      />
    </div>
  );
};

export default AuthorsPage;
