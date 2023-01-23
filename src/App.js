import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Col, Row } from 'antd';

import AppRoutes from './routes';
import { Login } from './pages';

// import images from './C:Users/Jagadeesh/Downloads/SMART PAANI.png';

const App = () => {
  return (
    // <Router>
    //   <AppRoutes />
    // </Router>

    <div>
      <Login />{' '}
    </div>
  );
};

export default App;
