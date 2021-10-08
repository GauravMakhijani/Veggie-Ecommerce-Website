import Navigation from "./Navigation";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Shop from "./shop/Shop";
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
      </Switch>
    </div>
  );
}

export default App;
