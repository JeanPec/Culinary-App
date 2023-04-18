import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SearchPage } from "./pages";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route index element={<SearchPage />} />
    </Routes>
  </BrowserRouter>
)};

export default App;
