import React from 'react';
import styled from '@emotion/styled';

import { Tickets } from '~components';

function App() {
  return (
    <StyledApp>
      <Tickets />
    </StyledApp>
  );
}

const StyledApp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export default App;
