import React from "react";
import { changeNumber } from "./actions/index";
import { useSelector, useDispatch } from "react-redux";

const Change = () => {
  const myColors = useSelector((state) => state.setCol);
  const dispatch = useDispatch();
  return (
    <>
      <div className="change-div">
        {myColors.map((val, index) => {
          if (val === "green") {
            return (
              <button
                key={index}
                value="{index+1}"
                style={{
                  border: `1px solid grey`,
                  color: "grey",
                  backgroundColor: "rgb(218, 240, 173)",
                }}
                onClick={() => {}}
              >
                {index + 1}
              </button>
            );
          } else {
            return (
              <button
                key={index}
                value="{index+1}"
                style={{ border: `1px solid ${val}`, color: val }}
                onClick={() => dispatch(changeNumber(index))}
              >
                {index + 1}
              </button>
            );
          }
        })}
      </div>
    </>
  );
};

export default Change;
