import React from 'react';
import './App.css';
import { Message } from './components/Message';

export const App = (): React.ReactElement => {
  const messageText = 'Hello, React with TypeScript!';

  return (
    <div className="App">
      <Message text={messageText} />
    </div>
  );
};