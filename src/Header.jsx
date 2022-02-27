import React from "react";

const Header = () => {
  return (
    <>
      <h2
        style={{
          border: "1px solid black",
          backgroundColor: "lightgrey",
          padding: "5px",
          width: "80%",
          paddingLeft: "25px",
          borderRadius: "5px",
        }}
      >
        Sections
      </h2>
      <div
        style={{
          border: "1px solid black",
          backgroundColor: "white",
          padding: "5px",
          width: "80%",
          paddingLeft: "25px",
          marginTop: "-20px",
          borderRadius: "5px",
        }}
      >
        <button>Section 1</button>
        <button style={{ marginLeft: "10px" }}>Section 2</button>
      </div>
    </>
  );
};

export default Header;
