import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/index";
import Blog from "../src/pages/Blog/index";
import Cart from "./components/Navbar/cart";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default App;
