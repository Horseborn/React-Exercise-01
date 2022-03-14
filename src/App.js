import { Card } from "./Card";
import React, { useEffect, useState } from "react";
function App() {
  const [name, setName] = useState("oats");

  const onCardClicked = () => {
    console.log("hello");
  };
  useEffect(() => {
    setInterval(() => {
      setName("Tomato" + Math.random() * 100);
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      // This returned function is invoked on cleanup / unmount
      //clean up files, blobs, other things
      // clean up event listeners
    };
  });

  return (
    <div className="App">
      <Card name={name} onClicked={onCardClicked} />
    </div>
  );
}

export default App;
