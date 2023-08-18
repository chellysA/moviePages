import Routes from './root/Routes.tsx';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/index.tsx';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes />
        <Footer />
      </Router>
    </>
  );
}

export default App;
