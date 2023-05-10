import "./App.css";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import { RecipePage, SearchPage } from "./pages";
import { SwitchLinkButton } from "./components";
import { AboutMePage } from "./aboutMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Outlet />
              <SwitchLinkButton />
            </>
          }
        >
          <Route path="recipe/:id/*" element={<RecipePage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="aboutMe/*" element={<AboutMePage />} />
          <Route index element={<Navigate to="/search" replace={true} />} />
        </Route>
        <Route path="/*" element={<Navigate to="/search" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
