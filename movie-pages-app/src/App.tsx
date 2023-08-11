import Routes from './root/Routes.tsx';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar.tsx';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes />
      </Router>
    </>
  );
}

export default App;
