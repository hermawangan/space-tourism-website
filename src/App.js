import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import Nav from "./Components/Nav";
import Home from "./Components/Home";
import Destination from "./Components/Destination";
import Crew from "./Components/Crew";
import Technology from "./Components/Tehcnology";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Nav />}>
              <Route index element={<Home />} />
              <Route path="/destination" element={<Destination />} />
              <Route path="crew" element={<Crew />} />
              <Route path="technology" element={<Technology />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
