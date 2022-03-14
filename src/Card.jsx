import React, { useEffect } from "react";

export const Card = ({ name, onClicked }) => {
  useEffect(() => {
    console.log("mounted");
  }, [name]);
  return (
    <div onClick={onClicked}>
      <h1>I have become {name} , destroyer of hunger.</h1>
    </div>
  );
};
