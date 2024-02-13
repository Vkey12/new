import { useState } from "react";
import "./App.css";

const phrases = [
  "NO",
  "ARE YOU SURE?",
  "REALLY SURE?",
  "PLEASE",
  "DON'T DO THIS TO ME",
  "YOU'RE BREAKING MY HEART",
  "HA",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length -1)];
  }

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
         <img 
          src="https://media.tenor.com/yYKgHmYQMBIAAAAM/mocha-bear-mocha-kiss.gif" 
          alt="bear kissing" 
         />
         <div className="text">Yay!!!</div>
        </>  
      ) : (
        <>
          <img 
            src="https://media.tenor.com/ktabD0H4QVsAAAAM/cony-bear-heart.gif" 
            alt="bear with hearts"
          />

          <div>Will you be my valentine?</div>
          <div>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize}}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}


export default App;
