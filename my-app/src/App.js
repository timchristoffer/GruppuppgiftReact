import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Login'
import Home from './Pages/Home'
import Settings from './Pages/Settings';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}>
          <Route index element={<Home />} />
          <Route path="/" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);