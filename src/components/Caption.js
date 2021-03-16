import React from 'react';

function Caption({ username, caption }) {
  return (
    <div>
      {caption ? (
        <p>
          <strong>{username}:</strong> {caption}
        </p>
      ) : (
        <p>
          <strong>username:</strong> Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Ipsa, odit.
        </p>
      )}
    </div>
  );
}

export default Caption;
