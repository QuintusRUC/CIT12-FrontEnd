import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./routes/HomePage";
import Search from "./routes/NewSearchPage";
import Login from "./routes/LoginPage";
import Bookmark from "./routes/BookmarkPage";
import Rating from "./routes/RatingPage";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const user = {
    id: 1,
    islogin: false,
  };
  const user2 = {
    id: 1,
    islogin: true,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar user={user} />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="bookmark" element={<Bookmark user={user} />} />
          <Route path="rating" element={<Rating user={user} />} />
        </Route>
        <Route path="test/" element={<Navbar user={user2} />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search />} />
          <Route path="login" element={<Login />} />
          <Route path="bookmark" element={<Bookmark user={user2} />} />
          <Route path="rating" element={<Rating user={user2} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
