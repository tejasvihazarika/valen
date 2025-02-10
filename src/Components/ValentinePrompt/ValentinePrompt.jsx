import React, { useState } from "react";
import "./ValentinePrompt.css";

const ValentinePrompt = ({ setShowValentine }) => {
  const [yesPressed, setYesPressed] = useState(false);
  const [noCount, setNoCount] = useState(0);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Please naaaaaa",
      "With a chocolate?",
      "What about TNT ki coffee?",
      "PLEASE",
      "Ab tu esa krega",
      "🥲🥲",
      "Burger khilaungi",
      "😭😭",
      "please handsomeee🥹🥹",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "Chup chaap yes krde",
      "No :(",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="valentine-container">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Bear Kiss" />
          <h2>YAYYYY!!! I love you handsomee!! ;))</h2>
        </>
      ) : (
        <>
          <img
            className="bear-img"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute Love Bear"
          />
          <h1>Will you be my Valentine?</h1>
          <div className="buttons">
            <button
              
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick}>
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <button className="back-btn" onClick={() => setShowValentine(false)}>Back</button>
    </div>
  );
};

export default ValentinePrompt;