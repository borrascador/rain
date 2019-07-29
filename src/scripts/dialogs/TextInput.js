import React from 'react';

const styles = {
  input: {
    fontFamily: 'MECC, Courier, sans-serif',
    color: 'black',
    border: '4px solid white',
    padding: '4px',
    backgroundColor: 'white',
    margin: '8px',
  },
};

export const TextInput = ({ onChange, value, placeholder }) => (
  <input
    type="text"
    style={styles.input}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
);
