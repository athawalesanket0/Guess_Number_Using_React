import React from 'react';

const GuessForm = ({ userNo, setUserNo, checkGuess }) => {
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      checkGuess();
    }
  };

  return (
    <div>
      <input
        type="number"
        value={userNo}
        onChange={(e) => setUserNo(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  );
};

export default GuessForm;
