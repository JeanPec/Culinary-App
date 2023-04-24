import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { RecipePage, SearchPage } from "./pages";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/recipe/:id/*" element={<RecipePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/*" element={<Navigate to="/search" replace={true} />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
