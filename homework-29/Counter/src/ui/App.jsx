import { Provider } from "react-redux";
import ButtonDecrement from "../components/ButtonDecrement";
import ButtonIncrement from "../components/ButtonIncrement";
import Counter from "../components/Counter";
import { store } from "../core/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter />
      </div>
      <ButtonIncrement />
      <ButtonDecrement />
    </Provider>
  );
}

export default App;
