import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/Home/Home";
import MovieInfo from "./pages/MovieInfo/MovieInfo";
import Search from "./pages/Search/Search";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home tag="popular"    key="popular"/>} />
          <Route path="movie/:id" element={<MovieInfo />}/>
          <Route path="/upcoming" element={<Home tag="upcoming" key="upcooming"/>} />
          <Route path="/search" element={<Search/>}/>
          <Route path="/now_playing" element={<Home tag="now_playing" key="now_playing"/>} />
          <Route path="/toprated" element={<Home tag="top_rated" key="top_rated"/>} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
