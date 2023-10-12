import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import Error404 from "./containers/error/Error404";
import Home from "./containers/pages/Home";
import PropertyListPage from "./containers/pages/PropertyListPage";
import About from "./containers/pages/About";
import Layout from "./hocs/Layout";
import Login from "./containers/pages/Login";
import Register from "./containers/pages/Register";
import Activate from "./containers/pages/Activate";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            {/* Error Display */}
            <Route path="*" element={<Error404 />} />

            {/* Home Display */}
            <Route exact path="/" element={<Home />} />

            {/* About Display */}
            <Route exact path="/about" element={<About />} />

            {/* Login Display */}
            <Route exact path="/login" element={<Login />} />

            {/* Register Display */}
            <Route exact path="/register" element={<Register />} />

            {/* Activate Display */}
            <Route exact path="/activate/:uid/:token" element={<Activate />} />

            {/* Properties Display */}
            <Route exact path="/properties" element={<PropertyListPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
