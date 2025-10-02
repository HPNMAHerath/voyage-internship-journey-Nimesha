// pages/NotFound.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-content">
        <div className="not-found-emoji">🔍</div>
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-description">
          Sorry, the page you are looking for doesn't exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary">
          <Home size={20} />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;