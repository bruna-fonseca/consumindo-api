import React from 'react';

export default function Card({ casa, nome }) {
  return (
    <div className="card" >
      <h1>{nome}</h1>
      <p>{casa}</p>
    </div>
  );
};
