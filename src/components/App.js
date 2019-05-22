import React from 'react';
import Header from './Header'
import '../styles/App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  )
}

export default App;
