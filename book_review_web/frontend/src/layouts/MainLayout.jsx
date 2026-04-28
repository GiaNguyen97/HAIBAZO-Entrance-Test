import { Outlet, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  const location = useLocation();

  if (location.pathname === '/') {
    return <Navigate to="/authors" replace />;
  }

  return (
    <div className="layout">
      <Toaster position="top-right" />
      <Sidebar />
      <main className="main-content">
        <Header />
        <div className="page-body">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
