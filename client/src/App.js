import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import Error404 from "./containers/error/Error404";
import Home from "./containers/pages/Home";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          {/* Error Display */}
          <Route path="*" element={<Error404 />} />

          {/* Home Display */}
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
