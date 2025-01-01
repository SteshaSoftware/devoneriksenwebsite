import React from 'react';

function BackerList({ backers, contribution }) {
    return (
    <div style={{ width: '80%', margin: '0 auto', textAlign: 'justify' }}>
        <h3>
          <span style={{ color: '#ff9b02' }}>A special thanks for contributing to {contribution}:</span>{' '}
          <span style={{ color: 'white' }}>{backers.join(', ')}</span>
        </h3>
      </div>
    );
  }
  
  export default BackerList;