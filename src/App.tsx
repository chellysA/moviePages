import Routes from "./root/Routes.tsx";
import React, { useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar/index.tsx";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer/index.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts";
import AOS from "aos";
import 'aos/dist/aos.css';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
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
