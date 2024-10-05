import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  decrementAsync,
  increment,
  incrementAsync,
} from "./store/reducer/CounterSlice";

function App() {
  const { value } = useSelector((state) => state.counter);

  const dispatch = useDispatch();

  return (
    <div className="container m-auto min-w-screen min-h-screen bg-zinc-700">
      <h1 className="text-center text-xl font-bold p-5 bg-cyan-400 ">
        {`Counter : ${value}`}
      </h1>
      <div className=" bg-cyan-200 py-5 flex justify-center items-center gap-5">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 border-2 border-black rounded-lg"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 border-2 border-black rounded-lg"
        >
          Decrement
        </button>
        <button
          onClick={() => dispatch(incrementAsync(5))}
          className="px-4 py-2 border-2 border-black rounded-lg"
        >
          Increment by 5
        </button>
        <button
          onClick={() => dispatch(decrementAsync(5))}
          className="px-4 py-2 border-2 border-black rounded-lg"
        >
          Decrement by 5
        </button>
      </div>
    </div>
  );
}

export default App;
