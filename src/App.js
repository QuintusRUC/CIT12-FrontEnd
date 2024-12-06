import "./App.css";
import Navbar from "./Navbar";
import Home from "./routes/HomePage";
import Search from "./routes/SearchPage";
import Login from "./routes/LoginPage";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
