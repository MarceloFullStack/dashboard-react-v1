import styled from 'styled-components';

import React from 'react';
const Container = styled.div`
display:flex;
align-items:center;
justify-content:center;
height: 100vh;
font-size: 1rem;
h1{
  text-align:center;
  background: red;
  color:white;
  flex:1;
  height:50px;
}
`

const Team = () => {
  return (
    <Container >
      <h1>Team</h1>
      <h1>Team</h1>
      <h1>Team</h1>
    </Container>
  );
};

export default Team;
