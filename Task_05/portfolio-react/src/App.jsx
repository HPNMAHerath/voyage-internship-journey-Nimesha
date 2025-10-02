// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default App;