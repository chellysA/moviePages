import Routes from './root/Routes.tsx';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/navbar';
import './styles/global.css';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/footer/index.tsx';
import { Provider } from 'react-redux';
import store from './store.ts';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Routes />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
