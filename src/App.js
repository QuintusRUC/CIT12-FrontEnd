import "./App.css";
import Navbar from "./Navbar";
import Home from "./routes/HomePage";
import Search from "./routes/SearchPage";
import Login from "./routes/LoginPage";
import Bookmark from "./routes/BookmarkPage";
import Rating from "./routes/RatingPage";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const user = {
    id: 0,
    islogin: false,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar user={user} />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="bookmark" element={<Bookmark />} />
          <Route path="rating" element={<Rating />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
