import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavGroup = ({ title, icon, path }) => {
  const location = useLocation();
  const isActiveGroup = location.pathname.startsWith(path);
  const [isOpen, setIsOpen] = useState(isActiveGroup);

  return (
    <div style={{ marginBottom: '4px' }}>
      <div
        className={`nav-item ${isActiveGroup && !isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ justifyContent: 'space-between' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span className="nav-icon">{icon}</span>
          {title}
        </div>
        <span style={{ fontSize: '10px', transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', opacity: 0.5 }}>▼</span>
      </div>

      {isOpen && (
        <div style={{ paddingLeft: '36px', display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '2px' }}>
          <NavLink
            to={path}
            end
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            style={{ padding: '8px 12px', fontSize: '13px' }}
          >
            List {title}
          </NavLink>
          <NavLink
            to={`${path}/create`}
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            style={{ padding: '8px 12px', fontSize: '13px' }}
          >
            Create {title}
          </NavLink>
        </div>
      )}
    </div>
  );
};

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="logo-icon">📚</div>
        <div className="logo-text">
          <h1>HAIBZO</h1>
          <span className="logo-subtitle">BOOK REVIEW</span>
        </div>
      </div>
      <nav className="sidebar-nav">
        <NavGroup title="Authors" icon="👤" path="/authors" />
        <NavGroup title="Books" icon="📖" path="/books" />
        <NavGroup title="Reviews" icon="📝" path="/reviews" />
      </nav>
    </aside>
  );
};

export default Sidebar;
