import React, { useState } from "react";

function GuessTheNumber() {
  const [numberToGuess, setNumberToGuess] = useState(
    Math.floor(Math.random() * 10) + 1
  );
  const [userGuess, setUserGuess] = useState("");
  const [message, setMessage] = useState("");
  const handleGuess = () => {
    if (userGuess === "") {
      setMessage("Please enter a number!");
      return;
    }

    const intUserGuess = parseInt(userGuess, 10);

    if (intUserGuess < numberToGuess) {
      setMessage(`Too low! The correct number was ${numberToGuess}`);
    } else if (intUserGuess > numberToGuess) {
      setMessage(`Too high! The correct number was ${numberToGuess}`);
    } else {
      setMessage("Correct! You win!");
    }
  };

  const handleReset = () => {
    setUserGuess("");
    setMessage("");
    setNumberToGuess(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div>
      <input
        type="number"
        value={userGuess}
        onChange={(e) => setUserGuess(e.target.value)}
      />
      <button onClick={handleGuess}>Guess</button>
      <button onClick={handleReset}>Reset Game</button>
      <p>{message}</p>
    </div>
  );
}

export default GuessTheNumber;
