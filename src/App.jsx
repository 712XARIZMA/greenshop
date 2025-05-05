import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home/index";
import Blog from "../src/pages/Blog/index";
import Cart from "./components/Navbar/cart";
import AccountDetails from "./components/Home/Main/Register/AccountDetails";
import Products from "../src/components/Home/Main/Register/AccountDetails/Myproducts/index";
import Address from "../src/components/Home/Main/Register/AccountDetails/Address/index";
import Wishlist from "../src/components/Home/Main/Register/AccountDetails/Wishlist/index";
import TrackOrder from "../src/components/Home/Main/Register/AccountDetails/TrackOrder/index";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Bosh sahifa va boshqa umumiy yo‘llar */}
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/cart" element={<Cart />} />

        {/* Account sahifalar uchun marshrutlar */}
        <Route
          path="/account"
          element={<Navigate to="/account/details" replace />}
        />
        <Route path="/account/details" element={<AccountDetails />} />
        <Route path="/account/products" element={<Products />} />
        <Route path="/account/address" element={<Address />} />
        <Route path="/account/wishlist" element={<Wishlist />} />
        <Route path="/account/track-order" element={<TrackOrder />} />
      </Routes>
    </Router>
  );
};

export default App;
