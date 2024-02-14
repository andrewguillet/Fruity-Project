import { useDispatch } from "react-redux";
import { increment, decrement, multiply, divide } from "../../features/counter";

export default function CounterButtons() {
  const dispatch = useDispatch();
  console.log(increment());
  return (
    <div className="mb-4">
      <p className="text-slate-50 mb-2">Modify the counter value</p>
      <button
        //   increment est (state, action) dans counter.js
        onClick={() => dispatch(increment())}
        className="bg-slate-100 text-slate-900 text-lg rounded w-10 h-10 mr-2"
      >
        +1
      </button>
      <button
        //   increment est (state, action) dans counter.js
        onClick={() => dispatch(decrement())}
        className="bg-slate-100 text-slate-900 text-lg rounded w-10 h-10 mr-2"
      >
        -1
      </button>
      <button
        //   increment est (state, action) dans counter.js
        onClick={() => dispatch(multiply())}
        className="bg-slate-100 text-slate-900 text-lg rounded w-10 h-10 mr-2"
      >
        x10
      </button>
      <button
        //   increment est (state, action) dans counter.js
        onClick={() => dispatch(divide())}
        className="bg-slate-100 text-slate-900 text-lg rounded w-10 h-10 mr-2"
      >
        /10
      </button>
    </div>
  );
}
