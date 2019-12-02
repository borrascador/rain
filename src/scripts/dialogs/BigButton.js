import React from 'react';

const styles = {
  button: {
    fontFamily: 'MECC, Courier, sans-serif',
    color: 'white',
    border: '4px solid white',
    width: '350px',
    padding: '4px',
    backgroundColor: 'black',
    margin: '8px',
  },
};

export const BigButton = ({ onClick, children }) => (
  <button onClick={onClick} style={styles.button}>
    <h3>{children}</h3>
  </button>
);
