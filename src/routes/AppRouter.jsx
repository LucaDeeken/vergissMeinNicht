import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../pages/Dashboard";
import "../App.css";

function AppRouter() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/dashboard/:page" element={<Dashboard />} />
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </main>
    </Router>
  );
}

export default AppRouter;
