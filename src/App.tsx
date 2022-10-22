import React from 'react';
import { VerticalContainer } from './components';
import { Form, UncontrolledForm } from './modules';
import { List } from './modules/List';

function App() {
  return (
    <VerticalContainer>
      App:
      <Form />
      <UncontrolledForm />
      <List />
    </VerticalContainer>
  );
}

export default App;
