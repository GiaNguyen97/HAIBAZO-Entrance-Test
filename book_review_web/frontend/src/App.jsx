import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import AuthorsPage from './pages/AuthorsPage';
import AuthorFormPage from './pages/AuthorFormPage';
import BooksPage from './pages/BooksPage';
import BookFormPage from './pages/BookFormPage';
import ReviewsPage from './pages/ReviewsPage';
import ReviewFormPage from './pages/ReviewFormPage';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="authors" element={<AuthorsPage />} />
          <Route path="authors/create" element={<AuthorFormPage />} />
          <Route path="authors/edit/:id" element={<AuthorFormPage />} />
          
          <Route path="books" element={<BooksPage />} />
          <Route path="books/create" element={<BookFormPage />} />
          <Route path="books/edit/:id" element={<BookFormPage />} />
          
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="reviews/create" element={<ReviewFormPage />} />
          <Route path="reviews/edit/:id" element={<ReviewFormPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
