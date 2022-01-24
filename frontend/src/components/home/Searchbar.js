import React from "react";

const Searchbar = () => {
  return (
    <div
      style={{
        width: "120%",
        left: "-10vw",
        zIndex: "2",
        position: "relative",
        top: "-30vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "5vh auto",
        transform: "rotate(5deg)",
        height: "400px",
        backgroundColor: "#c6ecc6",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          transform: "rotate(-5deg)",
          top: "36vh",
        }}
      >
        <input
          type="text"
          placeholder="  find place...?"
          name="searchname"
          style={{
            borderRadius: "4px 0 0 4px",
            border: "1px solid #198754",
            height: "40px",
            width: "50vw",
          }}
        />
        <button
          id="button"
          style={{
            borderRadius: "0 4px 4px 0",
            border: "1px solid #198754",
            height: "40px",
            backgroundColor: "#198754",
            color: "white",
          }}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
