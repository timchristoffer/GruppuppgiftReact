import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login'
import Home from './Pages/Home'
import Settings from './Pages/Settings';
import LoginSignup from "./Components/LoginSignup/LoginSignup";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/signin" element={<Login />} />
          <Route index element={<Home />} />
          <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);