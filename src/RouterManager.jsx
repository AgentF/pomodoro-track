import React from 'react';
import { Router } from '@reach/router';

// Components
import { Home } from './pages/Home';

export const RouterManager = () => (
  <Router basepath={process.env.PUBLIC_URL}>
    <Home path="/" default />
  </Router>
);
