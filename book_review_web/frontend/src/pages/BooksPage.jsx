import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { bookService } from '../services/bookService';
import Pagination from '../components/Pagination';
import ConfirmModal from '../components/ConfirmModal';
import Spinner from '../components/Spinner';

const BooksPage = () => {
  const [data, setData] = useState({ data: [], total: 0 });
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  
  const [deleteModal, setDeleteModal] = useState({ isOpen: false, id: null, title: '' });
  const navigate = useNavigate();

  const fetchBooks = async (pageIndex = page) => {
    try {
      setLoading(true);
      const res = await bookService.getBooks(pageIndex, 10);
      setData(res);
      setPage(res.page);
    } catch (error) {
      toast.error('Failed to load books');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const confirmDelete = async () => {
    try {
      await bookService.deleteBook(deleteModal.id);
      toast.success('Book deleted successfully');
      setDeleteModal({ isOpen: false, id: null, title: '' });
      fetchBooks(0);
    } catch (error) {
      toast.error('Cannot delete book');
      setDeleteModal({ isOpen: false, id: null, title: '' });
    }
  };

  return (
    <div className="card">
      <div className="card-toolbar">
        <h3 className="card-toolbar-title">Books List</h3>
      </div>
      
      {loading ? <Spinner /> : (
        <>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Author</th>
                  <th style={{ width: '150px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data.data.length === 0 ? (
                  <tr>
                    <td colSpan="4">
                      <div className="empty-state">
                        <div className="empty-state-icon">📭</div>
                        <p>No books found. Create one!</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  data.data.map((book, index) => (
                    <tr key={book.id}>
                      <td className="td-number">{page * 10 + index + 1}</td>
                      <td><strong>{book.title}</strong></td>
                      <td>{book.authorName}</td>
                      <td>
                        <div className="td-actions">
                          <button className="btn btn-edit btn-sm" onClick={() => navigate(`/books/edit/${book.id}`)}>Edit</button>
                          <button className="btn btn-delete btn-sm" onClick={() => setDeleteModal({ isOpen: true, id: book.id, title: book.title })}>Delete</button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {data.total > 0 && (
            <Pagination page={page} size={10} total={data.total} onPageChange={fetchBooks} />
          )}
        </>
      )}

      {/* Delete Confirm Modal */}
      <ConfirmModal 
        isOpen={deleteModal.isOpen}
        title="Delete Book"
        message={`Are you sure you want to delete <strong>${deleteModal.title}</strong>? This action cannot be undone.`}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteModal({ isOpen: false, id: null, title: '' })}
      />
    </div>
  );
};

export default BooksPage;
