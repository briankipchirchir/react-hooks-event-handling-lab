import { useState } from "react";
import React  from 'react';

const Keypad = () => {
  // Arrow function for the event handler
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <input
      type="password"
      onChange={handleChange} // Attach the event handler
      placeholder="Enter password"
    />
  );
};

export default Keypad;
