import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
import { useState } from "react";

const Counter = () => {
  // creating state, useSelector is used to reference the state in counterSlice.js
  const count = useSelector((state) => state.counter.count); 
  // look at store.js where counter is the key of the object
  // refer to counterSlice.js, counter.count because want to access count state in initialState
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);

  const addValue = Number(incrementAmount) || 0;
  // above converts string to number
  // if not a number, will return NaN which is false so whill return 0

  const resetAll = () => {
    setIncrementAmount(0); // reset state to 0
    dispatch(reset()); // reset state in slice to 0
  };

  return (
    <>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
      <input
        type="text"
        value={incrementAmount}
        onChange={(e) => setIncrementAmount(e.target.value)}
      />
      <div>
        <button onClick={() => dispatch(incrementByAmount(addValue))}>
          {/* here the payload is forced to be a number */}
          Add Amount
        </button>
        <button onClick={resetAll}>Reset</button>
      </div>
    </>
  );
};

export default Counter;
