import React from 'react';
import styled from 'styled-components';

import { NoteComponent } from '../components/Note';

const Container = styled.div`
  --padding: 2rem;
  padding: var(--padding);
  height: calc(100% - var(--padding) * 2);
  width: calc(100% - var(--padding) * 2);
  background-color: #ff6347;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  color: #fff;
`;

export const Home = () => (
  <Container>
    <Title>Pomodoro!</Title>
    <NoteComponent />
  </Container>
);
