import React from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Error404 from "./containers/error/Error404";
import Home from "./containers/pages/Home";
import PropertyListPage from "./containers/pages/PropertyListPage";
import Layout from "./hocs/Layout";

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

            {/* Properties Display */}
            <Route exact path="/properties" element={<PropertyListPage />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;