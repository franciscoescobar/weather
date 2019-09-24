import React from 'react';
import styled from 'styled-components';
import Card from '../Card';
const Menu = styled.div`
  display:flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  > * {
    margin: 10px;
  }
  flex-wrap: wrap;
`;
function App() {
  return (
    <Menu>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </Menu>
  );
}

export default App;
