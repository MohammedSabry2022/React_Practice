import React, { useState, useCallback } from "react";
import Button from "../src/components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("App Running");

  const toggleParagrapHandler = useCallback(() => {
    setShowParagraph((preShowParagraph) => !preShowParagraph);
  }, []);

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleParagrapHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
