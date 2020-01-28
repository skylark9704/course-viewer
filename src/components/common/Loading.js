import React from "react";

function Loading() {
  const style = {
    background: {
      display: "flex",
      justifyContent: "center",
      padding: "64px",
      width: "100% !important",
      backgroundColor: "rgba(0,0,0,0.1)"
    },
    inner: {
      padding: "32px",
      backgroundColor: "white",
      borderRadius: "5px",
      width: "fit-content",
      boxShadow: "0 0 4px 8px rgba(0,0,0,0.1)"
    }
  };

  return (
    <div style={style.background}>
      <div style={style.inner}>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  );
}

export default Loading;
