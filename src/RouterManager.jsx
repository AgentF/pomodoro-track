import React from 'react';
import { Router } from '@reach/router';
import styled from 'styled-components';

// Components
import { Home } from './pages/Home';

const StyledRouter = styled(Router)`
  height: 100%;
  width: 100%;
`;

export const RouterManager = () => (
  <StyledRouter basepath={process.env.PUBLIC_URL}>
    <Home path="/" default />
  </StyledRouter>
);
