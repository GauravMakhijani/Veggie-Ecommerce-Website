import Navigation from "./Navigation";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Shop from "./shop/Shop";
import Footer from "./Footer";
import Cart from "./cart/Cart";
import Checkout from "./checkout/Checkout";
function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
