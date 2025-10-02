// components/Navigation.jsx
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, FolderOpen, FileText, MessageSquare, Home as HomeIcon } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { path: '/', label: 'Home', icon: HomeIcon },
    { path: '/about', label: 'About', icon: User },
    { path: '/portfolio', label: 'Portfolio', icon: FolderOpen },
    { path: '/resume', label: 'Resume', icon: FileText },
    { path: '/contact', label: 'Contact', icon: MessageSquare }
  ];
  
  return (
    <nav className="nav">
      <div className="nav-container">
        <Link to="/" className="logo">
          Portfolio
        </Link>
        
        <div className="nav-links desktop">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{link.label}</span>
              </Link>
            );
          })}
        </div>
        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {isOpen && (
        <div className="mobile-nav">
          <div className="mobile-nav-links">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;