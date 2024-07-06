import { useDispatch } from "react-redux";
import { counter } from "../core/slice/counterSlice";

function ButtonIncrement() {

    const dispatcher = useDispatch()

    const ocClick = () => {
        dispatcher(counter.actions.increment())
    }
  return <button onClick={ocClick}>increment</button>;
}

export default ButtonIncrement;
