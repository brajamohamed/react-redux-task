import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Cart from "./Cart/Cart";
import { Provider } from "react-redux";
import store from "./Store/store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Cart />
      </div>
    </Provider>
  );
}

export default App;
