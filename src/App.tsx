import "./App.scss";
import "./css-utils/colors.scss";
import "./css-utils//dimensions.scss";
import "./css-utils/colors.scss";

import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import AppleTv from "./pages/AppleTv";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Main />}
        />
        <Route
          path="/tv"
          element={<AppleTv />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
