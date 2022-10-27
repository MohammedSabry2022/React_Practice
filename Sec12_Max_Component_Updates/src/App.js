import React, { useState } from "react";
import Button from "../src/components/UI/Button/Button";
import "./App.css";

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const toggleParagrapHandler = () => {
    setShowParagraph((preShowParagraph) => !preShowParagraph);
  };
  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new</p>}
      <Button onClick={toggleParagrapHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
