import { Provider } from "react-redux";
import { store } from "./redux/store";
import Swapi from "./components/Swapi/Swapi";
import "./App.css";

function App() {
  return (
    <>
      <Provider store={store}>
        <Swapi />
      </Provider>
    </>
  );
}

export default App;
