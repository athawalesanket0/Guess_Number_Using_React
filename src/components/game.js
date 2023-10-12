import React, { useState } from 'react';
import GuessForm from './guessForm';
import Message from './message';
import Score from './score';

const Game = () => {
  const [randomNo, setRandomNo] = useState(generateRandomNumber());
  const [userNo, setUserNo] = useState('');
  const [nGuess, setNGuess] = useState(0);
  const [message, setMessage] = useState('');
  const [guessedCorrectly, setGuessedCorrectly] = useState(false);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const checkGuess = () => {
    if (userNo === '') {
      setMessage('Please enter a number.');
    } else {
      if (userNo > randomNo) {
        setMessage('Lower number please');
      } else if (userNo < randomNo) {
        setMessage('Higher number please');
      } else {
        setMessage(`You used ${nGuess + 1} attempts to win the game!`);
        setGuessedCorrectly(true);
      }
      setNGuess(nGuess + 1); // Increment nGuess here when the user provides input
    }
  };

  const restartGame = () => {
    setRandomNo(generateRandomNumber());
    setUserNo('');
    setNGuess(0);
    setMessage('');
    setGuessedCorrectly(false);
  };

  return (
    <div>
      <h1>Guess the Number</h1>
      <div className="input-container">
        <GuessForm userNo={userNo} setUserNo={setUserNo} />
      </div>
      <div className="button-container">
        <button onClick={checkGuess}>Guess</button>
        <button onClick={restartGame}>Restart</button>
      </div>
      {!guessedCorrectly ? (
        <Message message={message} />
      ) : (
        <div className="score-container">
          <Message message={message} />
          <Score nGuess={nGuess} className="score" />
        </div>
      )}
    </div>
  );
};

export default Game;
