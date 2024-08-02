import React from 'react';

const EyesOnMe = () => {
  // Arrow function for focus event
  const handleFocus = () => {
    console.log('Good!');
  };

  // Arrow function for blur event
  const handleBlur = () => {
    console.log('Hey! Eyes on me!');
  };

  return (
    <button
      onFocus={handleFocus} // Attach the focus event handler
      onBlur={handleBlur}   // Attach the blur event handler
    >
      Eyes on me
    </button>
  );
};

export default EyesOnMe;
