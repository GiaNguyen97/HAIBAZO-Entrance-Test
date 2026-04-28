import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  const getPageTitle = () => {
    switch(location.pathname) {
      case '/authors': return { title: 'Authors', desc: 'Manage your book authors' };
      case '/books': return { title: 'Books', desc: 'Manage your book collection' };
      case '/reviews': return { title: 'Reviews', desc: 'Manage book reviews' };
      default: return { title: 'Dashboard', desc: 'Welcome back' };
    }
  };

  const { title, desc } = getPageTitle();

  return (
    <header className="page-header">
      <div>
        <h2>{title}</h2>
        <p>{desc}</p>
      </div>
      <div>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, #6366f1, #a78bfa)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: 'white' }}>
          AD
        </div>
      </div>
    </header>
  );
};

export default Header;
