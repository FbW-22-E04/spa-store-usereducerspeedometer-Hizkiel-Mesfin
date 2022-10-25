import "../App.css";
import React from "react";
import ReactSpeedometer from "react-d3-speedometer";
import { useReducer, useState } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "accelerate":
      return state + 5;
    case "deccelerate":
      return state >= 5 ? state - 5 : 0;

    default:
      return state;
  }
};

export default function Car() {
  const [state, dispatch] = useReducer(reducer, 0);
  const [on, setOn] = useState(false);

  return (
    <div className="car">
      {on === true ? (
        <ReactSpeedometer
          maxValue={300}
          value={state}
          needleColor="red"
          startColor="green"
          segments={10}
          endColor="blue"
          width={300}
          height={200}
          paddingHorizontal={12}
          paddingVertical={12}
        />
      ) : (
        <div className="off">
          <h1>Car is turned off</h1>
        </div>
      )}

      <div className="btns">
        {on === true ? (
          <button onClick={() => dispatch({ type: "accelerate" })}>Gas</button>
        ) : (
          ""
        )}
        {state === 0 ? (
          <button onClick={() => setOn(!on)}>
            {on === true ? "Turn off" : "Turn on"}
          </button>
        ) : (
          ""
        )}
        {on === true ? (
          <button onClick={() => dispatch({ type: "deccelerate" })}>
            Break
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
