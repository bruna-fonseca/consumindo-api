import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Card from '../components/Card';

export default function Personagens() {

  const [personagens, setPersonagens] = useState([]);

  useEffect(() => {
    Axios.get('http://hp-api.herokuapp.com/api/characters/students')
      .then((res) => setPersonagens(res.data))
      .catch((err) => console.log(err))
  }, []);

  return (
    <div>
      {personagens && personagens.map((personagem) => (
        <Card nome={personagem.name} casa={personagem.house} /> 
      ))}
    </div>
  );
};