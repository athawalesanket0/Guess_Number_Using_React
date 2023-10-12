import React from 'react';

const Score = ({ nGuess }) => {
  let scoreMessage = '';

  if (nGuess > 0 && nGuess <= 6) {
    scoreMessage = 'Gold Medal 🥇 You are a mind reader! Excellent job!';
  } else if (nGuess > 0 && nGuess <= 8) {
    scoreMessage = 'Silver Medal 🥈 You\'re getting closer to unlocking your psychic powers!';
  } else if (nGuess > 0 && nGuess <= 10) {
    scoreMessage = 'Bronze Medal 🥉 Well done! You\'ve got the potential, keep going!';
  } else if (nGuess > 10) {
    scoreMessage = 'Better luck next time! Keep practicing to improve.';
  }

  return <p>{scoreMessage}</p>;
};

export default Score;
